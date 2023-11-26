"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function FormPedido({ comida }) {
  const { data: session } = useSession();
  const [cantidad, setCantidad] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (session) {
      const carrito = session.user.carrito;

      const subtotalAlimento = comida.precio * cantidad;

      const carritoActualizado = {
        total: carrito.total + subtotalAlimento,
        comidas: [
          ...carrito.comidas,
          {
            nombre: comida.nombre,
            cantidad,
            subtotal: subtotalAlimento,
          },
        ],
      };
      session.user.carrito = carritoActualizado;
    }
  };

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value, 10) || 0); // Asegurarse de que la cantidad sea un número entero
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{comida.nombre}</label>
      <p>{comida.descripcion}</p>
      <input type="number" value={cantidad} onChange={handleChange} max={comida.cantidad_preparable} />
      <button type="submit">Agregar al carrito</button>
    </form>
  );
}
