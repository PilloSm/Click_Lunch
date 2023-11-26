"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function FormComida({ comidas }) {
  const [comida, setComida] = useState({
    cantidad: 1,
    id_comida: comidas.id_comida,
  });
  const session = useSession();
  const handleChange = (e) => {
    setComida({
      ...comida,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (session.data) {
      const carrito = session.data.user.carrito;
      const carritoN = comida;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{comidas.nombre}</label>
      <p>{comidas.descripcion}</p>
      <input name="cantidad" onChange={handleChange} />
      <input disabled name="precio" value={2} onChange={handleChange} />
      <button></button>
    </form>
  );
}
