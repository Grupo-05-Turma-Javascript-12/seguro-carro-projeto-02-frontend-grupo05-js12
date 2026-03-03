import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Category from "../../../models/Category";
import { findItem, registerItem, updateItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);

  const [produto, setProduto] = useState<any>({
    id: 0,
    nome: "",
    preco: "",
    descricao: "",
    esta_ativo: true,
    categoria: { id: 0 },
  });

  const [categorias, setCategorias] = useState<Category[]>([]);

  async function buscarPorId(id: string) {
    try {
      await findItem(`/produtos/${id}`, setProduto);
    } catch {
      ToastAlerta("Erro ao buscar o produto.", "error");
    }
  }

  async function buscarCategorias() {
    try {
      await findItem(`/categorias`, setCategorias);
    } catch {
      ToastAlerta("Erro ao buscar categorias.", "error");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: value,
    });
  }

  function selecionarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id === Number(e.target.value)
    );

    if (categoriaSelecionada) {
      setProduto({
        ...produto,
        categoria: categoriaSelecionada,
      });
    }
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const produtoParaEnviar = {
      ...produto,
      preco: Number(produto.preco),
    };

    try {
      if (id) {
        await updateItem(`/produtos`, produtoParaEnviar, setProduto);
        ToastAlerta("Produto atualizado com sucesso!", "success");
      } else {
        await registerItem(`/produtos`, produtoParaEnviar, setProduto);
        ToastAlerta("Produto cadastrado com sucesso!", "success");
      }
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao salvar o produto.", "error");
      console.log(error);
    }

    setIsLoading(false);
  }

  function retornar() {
    navigate("/produtos");
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
                placeholder="Digite o preço"
                value={produto.preco}
                onChange={atualizarEstado}
                min="0"
                step="0.01"
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100 appearance-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Categoria</label>
              <select
                value={produto.categoria?.id || ""}
                onChange={selecionarCategoria}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              >
                <option value="">Escolha uma categoria</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.descricao}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Descrição</label>
              <textarea
                name="descricao"
                value={produto.descricao}
                onChange={atualizarEstado}
                rows={5}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-xl text-slate-600">
              Preencha o formulário para adicionar um novo produto.
              <br />O produto deve ter nome, preço, descrição e uma categoria.
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
