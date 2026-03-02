import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesCard from "../../components/categories/categoriesCard/CategoriesCard";
import { findItem } from "../../services/Service";
import type Category from "../../models/Category";


interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

export default function Categories() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    setIsLoading(true);

    try {
      await findItem("/categorias", setCategorias);
      console.log("Categorias carregadas:", categorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  function handleCriarCategoria() {
    navigate("/cadastrarCategoria");
  }

  function handleEditar(id: number) {
    navigate(`/editarCategoria/${id}`);
  }

  function handleDeletar(id: number) {
    navigate(`/deletarCategoria/${id}`);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      
      <section className="relative h-105 w-full overflow-hidden">
        <img
          src="/categoria-main.png"
          alt="Banner categorias"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-end pb-12">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Categorias
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        
        <div className="flex justify-center py-12">
          <button
            type="button"
            onClick={handleCriarCategoria}
            className="rounded-md bg-green-500 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Adicionar nova categoria
          </button>
        </div>

        {isLoading && (
          <div className="text-center py-6">
            <p>Carregando categorias...</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((cat) => (
            <CategoriesCard
              key={cat.id}
              nome={cat.nome}
              descricao={cat.descricao}
              onEditar={() => handleEditar(cat.id)}
              onDeletar={() => handleDeletar(cat.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function buscar(arg0: string, setCategorias: Dispatch<SetStateAction<Categoria[]>>, arg2: {}) {
  throw new Error("Function not implemented.");
}
