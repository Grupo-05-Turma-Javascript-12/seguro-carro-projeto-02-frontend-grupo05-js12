import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ProductCard from "../../components/products/productCard/ProductCard";
import type Product from "../../models/Product";
import { findItem } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlert";

function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [produtos, setProdutos] = useState<Product[]>([]);
  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  async function buscarProdutos() {
    try {
      setIsLoading(true);

      await findItem("/produtos", setProdutos);
    } catch (error: any) {
      console.error("Erro ao buscar produtos:", error);
      ToastAlerta(
        "Ocorreu um erro ao buscar os produtos. Por favor, tente novamente.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  }
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
                to="/produtos/cadastrar"
                className="bg-green-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Adicionar novo produto
              </Link>
            </div>
          )}

          {!isLoading && produtos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Produto foi encontrado!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
