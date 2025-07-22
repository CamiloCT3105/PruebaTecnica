import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">🛒 CRUD Productos y Categorías</h1>
        <nav className="mb-4 d-flex gap-2">
          <Link className="btn btn-primary" to="/">Productos</Link>
          <Link className="btn btn-secondary" to="/categories">Categorías</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/:id" element={<CategoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;