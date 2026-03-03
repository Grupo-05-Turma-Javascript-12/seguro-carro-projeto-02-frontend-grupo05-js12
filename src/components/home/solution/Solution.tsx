function Solution() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Topo */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">

         {/* Texto vermelho */}
       <div className="text-red-600 text-lg font-semibold mb- md:mb-0 text-left">
         <p>Sem letras miúdas</p>
         <p>Sem cobranças inesperadas</p>
         </div>

         {/* Título + Subtítulo */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

  <div className="md:col-span-2 text-left">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Uma nova experiência de <br />
      seguro automotivo
    </h2>

    <p className="text-gray-500 mt-4 text-lg underline underline-offset-4">
      Criamos um modelo simples, digital e transparente
    </p>
  </div>

</div>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-4 gap-12 items-start">

          {/* Imagem */}
          <div>
            <img
              src="/categoria-main.png"
              alt="Carro protegido"
              className="w-full object-cover"
            />
          </div>

          {/* Blocos */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-10">

            <div className="space-y-3">
              <span className="text-gray-400 text-sm font-semibold">01.</span>
              <h3 className="text-base font-semibold text-gray-900">
                Proteção no seu ritmo
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Planos organizados por nível, claros e sem cobranças desnecessárias.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-gray-400 text-sm font-semibold">02.</span>
              <h3 className="text-base font-semibold text-gray-900">
                Personalização real
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ative apenas as coberturas que fazem sentido para você.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-gray-400 text-sm font-semibold">03.</span>
              <h3 className="text-base font-semibold text-gray-900">
                Transparência total
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simulação, contratação e gestão digital, simples e sem burocracia.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Solution;