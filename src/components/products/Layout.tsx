import { Outlet, useLocation } from "react-router-dom";

const ProductsLayout: React.FC = () => {
  const location = useLocation();

  const getTitle = (): string => {
    if (location.pathname.includes("cadastrar")) {
      return "Cadastrar Produto";
    }
    if (location.pathname.includes("editar")) {
      return "Editar Produto";
    }
    if (location.pathname.includes("deletar")) {
      return "Deletar Produto";
    }
    return "Produtos";
  };

  return (
    <div>
      <div className="relative w-full h-130">
        <img
          src="/produto-main.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-10">
          <h1 className="text-white text-4xl font-semibold">{getTitle()}</h1>
        </div>
      </div>

      <div className="bg-white p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
