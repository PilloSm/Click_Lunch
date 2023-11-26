"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function IngresarComida() {
  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });
  const handleCahnge = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Hola</label>
      <input onChange={handleCahnge} />
      <button>hoads</button>
    </form>
  );
}
