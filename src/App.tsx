import './App.css'
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import CategoriesDelete from './components/categories/categoriesDelete/CategoriesDelete';
import CategoriesForm from './components/categories/categoriesForm/CategoriesForm';
import Products from './pages/products/Products';
import ProductForm from './components/products/productForm/ProductForm';
import ProductDelete from './components/products/productDelete/ProductDelete';
import Axiom from './pages/axiom/Axiom';


function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/cadastrarCategoria" element={<CategoriesForm />} />
            <Route path="/editararCategoria/:id" element={<CategoriesForm />} />
            <Route path="/deletarCategorias/:id" element={<CategoriesDelete />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/cadastrarProduto" element={<ProductForm />} />
            <Route path="/editarProduto/:id" element={<ProductForm />} />
            <Route path="/deletarProduto/:id" element={<ProductDelete />} />
            <Route path='/axiom' element={<Axiom />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
