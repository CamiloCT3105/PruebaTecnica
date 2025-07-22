import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/products")
      .then(res => {
        setProducts(res.data);
        setError(null);
      })
      .catch(err => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, []);

  const deleteProduct = async (id) => {
    if (window.confirm("¿Eliminar este producto?")) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (err) {
        alert("Error al eliminar el producto.");
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h2>Productos</h2>
      <Link className="btn btn-success mb-2" to="/products/new">+ Nuevo Producto</Link>

      {loading && <p>Cargando productos...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && products.length === 0 && (
        <div className="alert alert-info">No hay productos registrados.</div>
      )}

      {!loading && !error && products.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Precio</th><th>Categoría</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(prod => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>${prod.price}</td>
                <td>{prod.category_id}</td>
                <td>
                  <Link className="btn btn-sm btn-info me-2" to={`/products/detail/${prod.id}`}>Ver</Link>
                  <Link className="btn btn-sm btn-warning me-2" to={`/products/${prod.id}`}>Editar</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;