import React from 'react'

function Hero() {
  return (
    <section id="hero">
      <div className="w-full min-h-screen bg-[url('/lp-1.png')] bg-cover bg-center text-left">
        <div className="p-8 border">
          <div>
            <h2 className="lg:text-6xl md:text-4xl text-3xl text-slate-50 font-semibold">
              Proteção inteligente para quem vive em movimento
            </h2>
            <p>
              Seguro automotivo digital, transparente e feito sob medida para
              você
            </p>
          </div>
          <div>
            <p>
              Na Vittare, você escolhe o nível de proteção ideal e personaliza
              sua cobertura em poucos minutos. Sem burocracia. Sem surpresas
            </p>
            <button>Simular Seguro</button>
            <button>Conhecer Planos</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero