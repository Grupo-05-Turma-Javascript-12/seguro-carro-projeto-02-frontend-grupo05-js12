import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Product from "../../../models/Product";
import { deleteItem, findItem } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";

function ProductDelete() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);

  const [produto, setProduto] = useState<Product>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    esta_ativo: true,
    categoria: null,
  });

  async function buscarPorId(id: string) {
    try {
      await findItem(`/produtos/${id}`, setProduto);
    } catch {
      ToastAlerta("Erro ao buscar o produto.", "error");
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deleteItem(`/produtos/${id}`);
      ToastAlerta("Produto deletado com sucesso!", "success");
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao deletar o produto.", "error");
    }

    setIsLoading(false);
  }

  function retornar() {
    navigate("/produtos");
  }

  return (
    <div className="min-h-100 flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-gray-100 border border-slate-400 rounded-3xl p-10 shadow-sm max-w-md mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold mb-6">{produto.nome}</h2>

          <p className="text-sm text-gray-600 mb-4">
            Categoria: {produto.categoria?.nome || "Sem categoria"}
          </p>

          <p className="text-gray-500 mb-8">{produto.descricao}</p>

          <p className="text-2xl font-bold">
            {produto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-12">
            DESEJA REALMENTE
            <br />
            DELETAR O PRODUTO?
          </h3>

          <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
            <button
              onClick={deletarProduto}
              className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition flex justify-center"
            >
              {isLoading ? (
                <ClipLoader color="#fff" size={22} />
              ) : (
                "Sim, quero deletar"
              )}
            </button>

            <button
              onClick={retornar}
              className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition"
            >
              Não, quero voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDelete;
