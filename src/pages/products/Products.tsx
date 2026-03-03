import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ProductCard from "../../components/products/productCard/ProductCard";
import type Product from "../../models/Product";
import { findItem } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlert";
import type ProductDiscount from "../../models/ProductDiscount";

function Products() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [comDesconto, setComDesconto] = useState<ProductDiscount[]>([])
  const [year, setYear] = useState<number>(0)

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  useEffect(() => {
    if (year > 1970 && year < 2026) buscarProdutosComDesconto();
  }, [year]);

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

  async function buscarProdutosComDesconto() {
    try {
      setIsLoading(true);
      await findItem(`/produtos/descontos/${year}`, setComDesconto);
    } catch (error: any) {
      ToastAlerta(
        "Ocorreu um erro ao buscar os descontos. Por favor, tente novamente.",
        "error",
      );
      navigate('/produtos')
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
            {comDesconto.length === produtos.length
              ? produtos.map((produto, index) => (
                  <ProductCard
                    key={produto.id}
                    produto={produto}
                    desconto={comDesconto[index].precoComDesconto}
                  />
                ))
              : produtos.map((produto) => (
                  <ProductCard key={produto.id} produto={produto} />
                ))}
          </div>
        </div>
      </div>
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold text-slate-900">
          Quer saber se seu carro tem desconto?
        </h2>
        <p className="text-slate-500 font-medium">
          Digite aqui o ano do seu carro, para garantir descontos nos planos da
          Vittare
        </p>
        <form
          className="my-8 flex items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            setYear(+e.currentTarget.desconto.value);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <input
            type="number"
            name="desconto"
            placeholder="Digite o ano do seu carro"
            min="1970"
            max="2026"
            className="w-125 border border-slate-400 rounded-tl
              rounded-bl p-3 bg-gray-100 appearance-none"
          />
          <button
            type="submit"
            className="
              bg-slate-900
              text-white
              text-center
              py-3.5
              px-10
              lg:px-25
              rounded-tr
              rounded-br
              font-semibold
              hover:bg-slate-800
              transition
            "
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Products;
