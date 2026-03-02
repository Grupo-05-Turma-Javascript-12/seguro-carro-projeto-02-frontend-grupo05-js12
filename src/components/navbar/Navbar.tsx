import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

        <div className="flex items-center gap-2">
          <img src="/logo-navbar-black.png" alt="Vittare" className="h-8" />
        </div>

        <nav className="flex-1 flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            Categorias
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/sobrenos"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            Sobre Nós
          </NavLink>

          <NavLink
            to="/axiom"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            Axiom
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
