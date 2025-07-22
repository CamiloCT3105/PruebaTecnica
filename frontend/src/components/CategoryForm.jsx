import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function CategoryForm() {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get(`/categories/${id}`).then((res) => {
        setName(res.data.name);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("El nombre es obligatorio");

    if (id) {
      await api.put(`/categories/${id}`, { name });
    } else {
      await api.post(`/categories`, { name });
    }
    navigate("/categories");
  };

  return (
    <div>
      <h2>{id ? "Editar" : "Nueva"} Categoría</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CategoryForm;