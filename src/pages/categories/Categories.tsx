import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import CategoriesCard from "../../components/categories/categoriesCard/CategoriesCard";
import { findItem } from "../../services/Service";
import type Category from "../../models/Category";
import { ToastAlerta } from "../../utils/ToastAlert";
import { SyncLoader } from "react-spinners";

function Categories() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await findItem("/categorias", setCategorias);
    } catch (error: any) {
      ToastAlerta("Erro ao buscar categorias:", "error");
    } finally {
      setIsLoading(false);
    }
  }

  function reload() {
    navigate("/categorias")
  }


  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#0F172A" size={32} />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && (
            <div className="flex justify-center mb-10">
              <Link
                to="/categorias/cadastrar"
                className="bg-green-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Adicionar nova categoria
              </Link>
            </div>
          )}

          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {categorias.map((categoria) => (
              <CategoriesCard key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );

}


export default Categories;

