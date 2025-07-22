import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => setError("Error al cargar categorías."))
      .finally(() => setLoading(false));
  }, []);

  const deleteCategory = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta categoría?")) {
      api.delete(`/categories/${id}`)
        .then(() => {
          setCategories(categories.filter(cat => cat.id !== id));
        })
        .catch(() => alert("Error al eliminar la categoría."));
    }
  };

  return (
    <div>
      <h2>Categorías</h2>
      <Link className="btn btn-success mb-2" to="/categories/new">+ Nueva Categoría</Link>

      {loading ? (
        <p>Cargando categorías...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : categories.length === 0 ? (
        <p>No hay categorías registradas.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th><th>Nombre</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <Link to={`/categories/${cat.id}`} className="btn btn-sm btn-warning me-2">Editar</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteCategory(cat.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CategoryList;