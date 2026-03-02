import {
  EnvelopeIcon,
  InstagramLogoIcon,
  MapPinLineIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          <div>
            <img
              src="/logo-footer-white.png"
              alt="Vittare"
              className="h-10 mx-auto sm:mx-0 mb-4"
            />
            <p className="text-sm opacity-90">
              Transformando o seguro automotivo em uma experiência simples,
              acessível e confiável.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Páginas</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link to="/#hero" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#produtos" className="hover:underline">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/#categorias" className="hover:underline">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/sobrenos" className="hover:underline">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <EnvelopeIcon size={20} />
                contato@vittare.com
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <PhoneIcon size={20} />
                (81) 99999-9999
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <MapPinLineIcon size={20} />
                Recife, PE
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Desenvolvido por :</h3>
            <div className="bg-white/5 rounded-xl p-4 w-fit mx-auto sm:mx-0 mb-4">
              <img src="/axiom-footer.png" className="w-38" alt="Axiom" />
            </div>
          </div>

        </div>

        <div className="border-t border-white/30 mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm opacity-90 text-center sm:text-left">
          <p>© 2026 Vittare. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
        </div>
      </footer>
  );
}

export default Footer;