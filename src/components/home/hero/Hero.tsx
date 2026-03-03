import React from 'react'

function Hero() {
  return (
    <section id="hero">
      <div className="wrelative w-full bg-[url('/lp-1.png')] bg-cover bg-center">
        <div className="p-16">
          <div>
            <h2 className="md:text-left lg:text-6xl md:text-4xl text-3xl text-slate-50 font-semibold text-center lg:text-left text-shadow-sm">
              Proteção inteligente para quem <br /> vive em movimento
            </h2>
            <p className="lg:text-2xl md:text-xl text-lg text-center lg:text-left md:text-left font-semibold lg:mt-6 mt-3 text-shadow-sm">
              Seguro automotivo digital, transparente e feito sob medida para
              você
            </p>
          </div>
          <div className="text-center lg:text-left md:text-left text-slate-50 lg:mt-160 md:mt-110 mt-90">
            <p className="lg:text-xl md:text-lg text-md font-bold text-shadow-sm mb-3">
              Na Vittare, você escolhe o nível de proteção ideal e personaliza
              sua cobertura em poucos minutos.<br></br> Sem burocracia, Sem surpresas.
            </p>
            <div className="flex justify-center lg:justify-start md:justify-start items-center gap-4 flex-wrap">
              <button className="shadow hover:opacity-80 cursor-pointer rounded-md h-10 w-55 text-sm font-bold text-white bg-red-600">
                Simular Seguro
              </button>
              <button className="shadow h-10 w-55 rounded-md  text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 cursor-pointer">
                Conhecer Planos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero