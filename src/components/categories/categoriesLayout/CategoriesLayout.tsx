import { Outlet, useLocation } from 'react-router-dom'

function CategoriesLayout() {
    const location = useLocation();

    const getTitle = (): string => {
        if (location.pathname.includes("cadastrar")) {
            return "Cadastrar Categoria"
        }
        if (location.pathname.includes("editar")) {
          return "Editar Categoria";
        }
        if (location.pathname.includes("deletar")) {
          return "Deletar Categoria";
        }
        return "Categorias"
    }

  return (
    <div>
      <div>
        <div className="relative w-full h-130">
          <img
            src="/categoria-main.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-10">
            <h1 className="text-white text-4xl font-semibold">{getTitle()}</h1>
          </div>
        </div>

        <div className="bg-white min-h-screen p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );

}

export default CategoriesLayout;