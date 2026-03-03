import { Link } from 'react-router-dom';

function Cta() {
    return (
        <>
            <div className="relative w-full h-[580px] overflow-hidden">
                <img 
                    src="/lp-3.png" 
                    alt="Vittare Seguros" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="container relative mx-auto h-full flex flex-col justify-center px-12">
                    <img 
                        src="/logo-navbar-black.png" 
                        alt="Vittare Logo" 
                        className="absolute top-12 right-12 w-32" 
                    />

                    <h2 className="text-5xl font-bold max-w-2xl leading-[1.1] mb-32 text-slate-900">
                        Acreditamos que proteção deve acompanhar o ritmo da vida moderna
                    </h2>
                    
                    <div className="flex flex-col gap-1 text-slate-900">
                        <p className="text-xl font-medium">A Vittare é mais do que um seguro</p>
                        <p className="text-2xl font-bold uppercase tracking-[0.05em]">É tranquilidade inteligente</p>
                        
                        <div className="mt-8">
                            <Link 
                                to="/contato" 
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-[10px] uppercase tracking-widest transition-all"
                            >
                                Fale com um dos nossos especialistas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-20">
                <div className="container mx-auto px-12 flex items-end">
                    <div className="flex-1 border-l border-slate-200 pl-8">
                        <span className="block text-4xl font-bold text-red-600 mb-2 tracking-tighter">
                            12.5k+
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase leading-tight block tracking-tight">
                            Simulações<br/>realizadas
                        </span>
                    </div>

                    <div className="flex-1 border-l border-slate-200 pl-8">
                        <span className="block text-4xl font-bold text-red-600 mb-2 tracking-tighter">
                            4.2k+
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase leading-tight block tracking-tight">
                            Cotações<br/>concluídas
                        </span>
                    </div>

                    <div className="flex-1 border-l border-slate-200 pl-8">
                        <span className="block text-4xl font-bold text-red-600 mb-2 tracking-tighter">
                            1.5k+
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase leading-tight block tracking-tight">
                            Apólices<br/>vendidas
                        </span>
                    </div>

                    <div className="flex-1 border-l border-slate-200 pl-8">
                        <span className="block text-4xl font-bold text-red-600 mb-2 tracking-tighter">
                            18%
                        </span>
                        <span className="text-[10px] font-bold text-slate-900 uppercase leading-tight block tracking-tight">
                            Crescimento<br/>mensal
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cta;