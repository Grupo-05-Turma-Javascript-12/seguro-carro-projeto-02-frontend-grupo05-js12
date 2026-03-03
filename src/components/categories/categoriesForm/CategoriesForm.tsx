import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Category from "../../../models/Category";
import { findItem, registerItem, updateItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";
import { ClipLoader } from "react-spinners";

function CategoriesForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<Category>({} as Category);

  async function buscarPorId(id: string) {
    try {
      await findItem(`/categorias/${id}`, setCategory);
    } catch {
      ToastAlerta("Erro ao buscar o produto.", "error");
    }
  }

  function previousPage() {
    navigate('/categorias')
  }

  async function updateState(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  }

  async function generateNewItem(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true)
    if (id !== undefined) {
      try {
        await updateItem(`/categorias`, category, setCategory);
        ToastAlerta("A categoria foi atualizada com sucesso!", "success");
      } catch (error) {
        ToastAlerta("Erro ao atualizar a categoria", "error");
      }
    } else {
      try {
        await registerItem(`/categorias`, category, setCategory);
        ToastAlerta("A categoria foi cadastrada com sucesso!", "success");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar a categoria", "error");
        console.log(error);
      }
    }
    setIsLoading(false);
    previousPage();
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);


  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white">
      <div className="w-full mx-auto rounded-2xl p-8 md:p-12">
        <h1 className="text-xl font-semibold border rounded-lg px-4 py-2 w-[49%] mb-8 bg-white">
          {id ? "EDITAR CATEGORIA" : "NOVA CATEGORIA"}
        </h1>

        <form onSubmit={generateNewItem} className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm mb-2">Nome</label>
              <input
                placeholder="Digite o nome da categoria"
                type="text"
                name="nome"
                value={category.nome}
                onChange={updateState}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Descrição</label>
              <textarea
                placeholder="digite a descrição da categoria"
                name="descricao"
                value={category.descricao}
                onChange={updateState}
                rows={5}
                className="w-full border border-slate-400 rounded-lg p-3 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-xl text-slate-600">
              Preencha o formulário para adicionar uma nova categoria.
              <br />A categoria deve ter nome e descrição.
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
                onClick={previousPage}
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

export default CategoriesForm;
