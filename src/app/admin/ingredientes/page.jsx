"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Ingredientes() {
  const [datos, setDatos] = useState({
    nombre: "",
    cantidad: "",
    unidad: "",
  });
  const rouoter = useRouter();
  const handleCahnge = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http:localhost:3000/api/apiCafeteria/crearIngredientes",
      datos
    );
    if (res.data) {
      rouoter.push("/pedidos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input onChange={handleCahnge} />
      <button></button>
    </form>
  );
}
