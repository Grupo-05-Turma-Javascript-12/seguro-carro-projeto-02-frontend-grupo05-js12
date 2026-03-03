import PlanCard from "../plancard/PlanCard";
import { planos } from "../../../constants/infocardplanos";

function Plans() {
  return (
<section className="bg-slate-50 py-14">
  <div className="bg-slate-50 py-14">
    <h1 className="text-center text-3xl font-bold text-slate-900">Nossos Planos</h1>
    <p className="text-center text-slate-600">Escolha o nível de proteção ideal para você</p>
    <div className="mt-15 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-40">
      {planos.map((plano) => (
        <PlanCard
          key={plano.name}
          name={plano.name}
          description={plano.description}
          price={plano.price}
          includes={plano.includes}
          badge={plano.badge}
          highlight={plano.highlight}
          buttonText={plano.buttonText}
        />
      ))}
    </div>
  </div>
</section>
  )
}

export default Plans