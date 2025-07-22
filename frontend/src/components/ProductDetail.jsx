import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>ID Categoría:</strong> {product.category_id}</p>
      <Link className="btn btn-secondary" to="/">Volver</Link>
    </div>
  );
}

export default ProductDetail;