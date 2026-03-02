import './App.css'
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import "./App.css";
import CategoriesDelete from "./components/categories/categoriesDelete/CategoriesDelete";
import CategoriesForm from "./components/categories/categoriesForm/CategoriesForm";
import Navbar from "./components/navbar/Navbar";
import ProductsLayout from "./components/products/Layout";
import ProductDelete from "./components/products/productDelete/ProductDelete";
import ProductForm from "./components/products/productForm/ProductForm";
import Axiom from "./pages/axiom/Axiom";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/cadastrarCategoria" element={<CategoriesForm />} />
            <Route path="/editararCategoria/:id" element={<CategoriesForm />} />
            <Route
              path="/deletarCategorias/:id"
              element={<CategoriesDelete />}
            />
            <Route path="/produtos" element={<ProductsLayout />}>
              <Route index element={<Products />} />
              <Route path="cadastrar" element={<ProductForm />} />
              <Route path="editar/:id" element={<ProductForm />} />
              <Route path="deletar/:id" element={<ProductDelete />} />
            </Route>
            <Route path="/axiom" element={<Axiom />} />
          </Routes>
        </div>
        {/*         <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
