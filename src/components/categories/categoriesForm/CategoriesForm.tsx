import React, { useState } from 'react';

function CategoriesForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <div className="flex flex-col w-full bg-white font-sans">
      {/* Banner Principal - Usando categoria-main.png da public */}
      <div className="relative w-full h-[380px] flex items-center justify-center overflow-hidden">
        <img 
          src="/categoria-main.png" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tighter">
          Adicionar Categoria
        </h1>
      </div>

      {/* Container do Formulário conforme seu design */}
      <div className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="bg-white border border-gray-100 shadow-2xl p-10 md:p-14">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Lado Esquerdo - Inputs */}
            <div className="space-y-8">
              <h2 className="text-[#1F1455] text-xs font-bold uppercase tracking-[0.3em] border-b border-gray-100 pb-2">
                Nova Categoria
              </h2>
              
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase">Nome da Categoria</label>
                <input
                  type="text"
                  placeholder="Ex: Veículos de Luxo"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#56e8bc] transition-all"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase">Descrição</label>
                <textarea
                  placeholder="Descreva a categoria..."
                  rows={3}
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#56e8bc] transition-all resize-none"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </div>

            {/* Lado Direito - Botões */}
            <div className="flex flex-col justify-between pt-10 md:pt-4">
              <p className="text-gray-400 italic text-sm leading-relaxed border-l-4 border-[#56e8bc] pl-6">
                Preencha o formulário para adicionar uma nova categoria. A categoria deve ter nome e descrição.
              </p>

              <div className="flex flex-col gap-4 mt-12">
                <button
                  type="submit"
                  className="w-full bg-[#56e8bc] hover:bg-[#3ddba9] text-[#1F1455] font-black py-4 uppercase tracking-widest shadow-lg transition-all"
                >
                  Adicionar
                </button>
                <button
                  type="button"
                  className="w-full bg-[#FF4D4D] hover:bg-[#e63939] text-white font-black py-4 uppercase tracking-widest transition-all"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoriesForm;