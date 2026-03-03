function Problem() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Seguro não precisa ser complicado
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Durante anos, contratar seguro significou enfrentar processos
            lentos, contratos confusos e atendimentos demorados.
          </p>
        </div>

        {/* Imagens */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-1">
          <img
            src="/lp-comp1.png"
            alt="Imagem 1"
            className="w-full h-[340px] object-contain rounded-2xl"
          />

          <img
            src="/lp-comp2.png"
            alt="Imagem 2"
            className="w-full h-[340px] object-contain rounded-2xl"
          />

          <img
            src="/lp-comp3.png"
            alt="Imagem 3"
            className="w-full h-[340px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Problem;