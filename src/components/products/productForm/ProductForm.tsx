import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Product from "../../../models/Product";
import { findItem, updateItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);

  const [produto, setProduto] = useState<Product>({} as Product);

  async function buscarPorId(id: string) {
    try {
      await findItem(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar o produto.", "erro");
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: name === "preco" ? Number(value) : value,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (id !== undefined) {
      try {
        await updateItem(`/produtos/${id}`, produto, setProduto);
        ToastAlerta("O Produto foi atualizado com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar o produto.", "erro");
      }
    } else {
      try {
        await updateItem(`/produtos`, produto, setProduto);
        ToastAlerta("O Produto foi cadastrado com sucesso!", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar o produto.", "erro");
      }
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
      <div className="w-full mx-auto rounded-2xl p-8 md:p-12">
        <h1 className="text-xl font-semibold border rounded-lg px-4 py-2 w-[49%] mb-8 bg-white">
          {id ? "EDITAR PRODUTO" : "NOVO PRODUTO"}
        </h1>

        <form
          onSubmit={gerarNovoProduto}
          className="grid md:grid-cols-2 gap-10"
        >
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome do produto"
                value={produto.nome}
                onChange={atualizarEstado}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Preço</label>
              <input
                type="number"
                name="preco"
                placeholder="Digite o preço do produto"
                value={produto.preco}
                onChange={atualizarEstado}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Categoria</label>
              <select
                name="categoria"
                onChange={atualizarEstado}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              >
                <option>Escolha uma categoria</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Descrição</label>
              <textarea
                name="descricao"
                placeholder="Digite a descrição do produto"
                value={produto.descricao}
                onChange={atualizarEstado}
                rows={5}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-xl text-slate-600 w-105">
              Preencha o formulário para adicionar um novo produto.
              <br />O produto deve ter nome, preço, descrição e você deve
              escolher uma categoria para ele.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition flex justify-center"
              >
                {isLoading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : id ? (
                  "Atualizar"
                ) : (
                  "Adicionar"
                )}
              </button>

              <button
                type="button"
                onClick={retornar}
                className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
