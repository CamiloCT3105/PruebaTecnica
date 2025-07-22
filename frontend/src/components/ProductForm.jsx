import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category_id: ""
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("/categories").then((res) => setCategories(res.data));

    if (id) {
      api.get(`/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, description, price, category_id } = product;

    if (!name || !description || !price || !category_id) return alert("Todos los campos son obligatorios");

    if (id) {
      await api.put(`/products/${id}`, product);
    } else {
      await api.post("/products", product);
    }

    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Editar" : "Nuevo"} Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea className="form-control" name="description" value={product.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Precio</label>
          <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Categoría</label>
          <select className="form-control" name="category_id" value={product.category_id} onChange={handleChange}>
            <option value="">Seleccione una categoría</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProductForm;