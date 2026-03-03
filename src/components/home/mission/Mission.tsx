function Mission() {
    const dados = [
        { esq: "100% Digital", descEsq: "Contrate, gerencie e renove seu seguro sem papelada ou burocracia.", dir: "Motoristas do Dia a Dia", descDir: "Proteção essencial para quem usa o carro regularmente." },
        { esq: "Planos Personalizáveis", descEsq: "Monte sua proteção ideal com módulos adicionais sob demanda.", dir: "Motoristas de Aplicativo", descDir: "Cobertura adaptada para Uber, 99 e trabalho com veículo." },
        { esq: "Preços Transparentes", descEsq: "Sem taxas ocultas, sem surpresas na renovação.", dir: "Quem Busca Economia", descDir: "Planos acessíveis sem abrir mão da proteção essencial." },
        { esq: "Atendimento Ágil", descEsq: "Suporte rápido e humanizado quando você realmente precisar.", dir: "Quem Quer Proteção Total", descDir: "Cobertura completa para máxima tranquilidade." },
        { esq: "Cobertura Inteligente", descEsq: "Proteção pensada para diferentes perfis e necessidades reais.", dir: "Proprietários de Carros Antigos", descDir: "Soluções específicas para veículos com mais de 10 anos." },
        { esq: "Ativação Rápida", descEsq: "Cobertura validada digitalmente em poucos minutos.", dir: "Quem Viaja com Frequência", descDir: "Cobertura estendida para viagens nacionais e Mercosul." }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-16">
                    <div className="flex w-full max-w-5xl justify-between border-b border-slate-100 pb-12">
                        <div className="text-right flex-1 pr-12">
                            <h2 className="text-5xl font-[900] text-[#1a2333] uppercase tracking-tighter leading-none">Nossos diferenciais</h2>
                            <p className="text-slate-400 text-sm font-bold uppercase mt-2 tracking-widest">Porque escolher a Vittare?</p>
                        </div>
                        <div className="text-left flex-1 pl-12">
                            <h2 className="text-5xl font-[900] text-[#1a2333] uppercase tracking-tighter leading-none">Para quem é a Vittare?</h2>
                            <p className="text-slate-400 text-sm font-bold uppercase mt-2 tracking-widest">Proteção para diferentes perfis</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {dados.map((item, index) => (
                        <div key={index} className="flex items-center justify-between gap-x-8">
                            <div className="text-right flex-1">
                                <h4 className="font-black text-[#1a2333] text-xl leading-tight">{item.esq}</h4>
                                <p className="text-[14px] text-slate-500 max-w-[340px] ml-auto leading-tight mt-1">{item.descEsq}</p>
                            </div>
                            
                            <div className="flex-none bg-red-50 p-2 rounded-sm">
                                <img src="/red-icon-favicon.png" alt="icon" className="w-5 h-5" />
                            </div>

                            <div className="text-left flex-1">
                                <h4 className="font-black text-[#1a2333] text-xl leading-tight">{item.dir}</h4>
                                <p className="text-[14px] text-slate-500 max-w-[340px] leading-tight mt-1">{item.descDir}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Mission;