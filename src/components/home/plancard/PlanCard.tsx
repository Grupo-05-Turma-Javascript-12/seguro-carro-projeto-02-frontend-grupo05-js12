type PlanCardProps = {
  name: string;
  description: string;
  price: string;
  includes: string[];
  badge?: string;
  highlight?: boolean;
  buttonText?: string;
};

export default function PlanCard({
  name,
  description,
  price,
  includes,
  badge,
  highlight = false,
  buttonText = "Mais detalhes",
}: PlanCardProps) {
  return (
    <article
      className={[
        "w-full max-w-sm rounded-3xl border p-8 shadow-sm min-h-[520px] flex flex-col justify-between",
        highlight ? "border-slate-300 bg-white" : "border-slate-300 bg-white",
      ].join(" ")}
    >
      {/* topo */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>

        {badge ? (
          <span className="rounded-full border border-red-300 px-3 py-1 text-xs font-semibold text-red-500">
            {badge}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-slate-500">{description}</p>

      {/* preço */}
      <div className="mt-6">
        <p className="text-xs text-slate-500">A partir de</p>
        <p className="mt-1 text-2xl font-extrabold text-slate-900">
          {price}
          <span className="text-sm font-semibold text-slate-700"></span>
        </p>
      </div>

      {/* botão */}
      <button
        type="button"
        className={[
          "mt-4 w-full rounded-md px-4 py-2 text-sm font-semibold text-white",
          highlight ? "bg-red-600 hover:opacity-80 cursor-pointer" : "bg-slate-900 hover:bg-slate-800 cursor-pointer",
        ].join(" ")}
      >
        {buttonText}
      </button>

      <hr className="my-6 border-slate-200" />

      {/* inclui */}
      <h4 className="text-base font-bold text-slate-900">Inclui:</h4>

      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
    </article>
  );
}