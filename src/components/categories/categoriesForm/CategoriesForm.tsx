import React, { type ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type Category from '../../../models/Category'; 

function CategoriesForm() {
  const navigate = useNavigate();

  
  const [category, setCategory] = useState<Category>({
    id: 0,
    nome: '',
    descricao: '',
    produto: [] 
  });

  
  function handleUpdateState(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      {}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        <img 
          src="/categoria-main.png" 
          alt="Banner Vittare" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tighter">
          Adicionar Categoria
        </h1>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-14">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <h2 className="text-[#1F1455] text-xs font-bold uppercase tracking-[0.3em] border-b border-gray-100 pb-2">
                Nova Categoria
              </h2>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-tighter">Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Ex: Seguros de Carros Elétricos"
                  className="w-full border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#56e8bc] transition-all"
                  value={category.nome}
                  onChange={handleUpdateState}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-tighter">Descrição</label>
                <textarea
                  name="descricao"
                  placeholder="Descreva a finalidade desta categoria..."
                  rows={4}
                  className="w-full border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#56e8bc] transition-all resize-none"
                  value={category.descricao}
                  onChange={handleUpdateState}
                />
              </div>
            </div>

            <div className="flex flex-col justify-between pt-10 md:pt-4">
              <p className="text-gray-400 italic text-sm leading-relaxed border-l-4 border-[#56e8bc] pl-6">
                Preencha o formulário para adicionar uma nova categoria. Ela será usada para organizar os produtos no sistema da Vittare.
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
                  onClick={() => navigate('/categorias')}
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
  )
}

export default CategoriesForm;