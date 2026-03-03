import { Link } from "react-router-dom";
import type Product from "../../../models/Product";
import type ProductDiscount from "../../../models/ProductDiscount";

interface CardProdutoProps {
  produto: Product;
  desconto?: number;
}


function ProductCard({ produto, desconto }: CardProdutoProps,) {
  return (
    <>
      <div
        className="
        bg-white
        border border-slate-400
        rounded-3xl
        p-8
        flex flex-col
        justify-between
        min-h-105
        shadow-sm
      "
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{produto.nome}</h2>

          <p className="text-slate-600 mt-1">
            Nível: {produto.categoria?.nome ?? "Nível do produto"}
          </p>

          <p className="text-slate-600 mt-6">{produto.descricao}</p>

          <p className="relative top-6 text-red-500 line-through">
            {desconto
              ? `${(+produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
              : ""}
          </p>

          <p className="text-4xl font-bold mt-6 text-slate-900">
            {desconto
              ? desconto < 1
                ? "Cortesia do plano"
                : `${desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
              : +produto.preco < 1
                ? "Cortesia do plano"
                : `${(+produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}
            {!(+produto.preco < 1) ? <span className="text-xl">/ano</span> : ""}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <Link
            to={`/produtos/editar/${produto.id}`}
            className="
            bg-slate-900
            text-white
            text-center
            py-3
            rounded-lg
            font-semibold
            hover:bg-slate-800
            transition
          "
          >
            Editar
          </Link>

          <Link
            to={`/produtos/deletar/${produto.id}`}
            className="
            border border-red-500
            text-red-600
            text-center
            py-3
            rounded-lg
            font-semibold
            hover:bg-red-50
            transition
          "
          >
            Deletar
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
