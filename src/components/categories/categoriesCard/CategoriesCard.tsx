type CategoriesCardProps = {
  nome: string;
  descricao: string;
  onEditar?: () => void;
  onDeletar?: () => void;
};

export default function CategoriesCard({
  nome,
  descricao,
  onEditar,
  onDeletar,
}: CategoriesCardProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-300 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{nome}</h3>

      <p className="mt-2 text-sm text-slate-500">{descricao}</p>

      <div className="mt-6 flex flex-col gap-2">
        <button
          type="button"
          onClick={onEditar}
          className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={onDeletar}
          className="w-full rounded-md border border-red-400 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}