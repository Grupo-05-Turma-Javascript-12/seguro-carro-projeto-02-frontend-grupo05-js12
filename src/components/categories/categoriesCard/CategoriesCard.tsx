import { Link } from "react-router-dom";
import type Category from "../../../models/Category";

interface CardCategoriaProps {
  categoria: Category;
}

function CategoriesCard({categoria} : CardCategoriaProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-300 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{categoria.nome}</h3>

      <p className="mt-2 text-sm text-slate-500">{categoria.descricao}</p>

      <div className="mt-6 flex flex-col gap-2">
        <Link to={`/categorias/editar/${categoria.id}`}>
          <button
            type="button"

            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            Editar
          </button>
        </Link>

        <Link to={`/categorias/deletar/${categoria.id}`}>
          <button
            type="button"
            className="w-full rounded-md border border-red-400 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesCard;