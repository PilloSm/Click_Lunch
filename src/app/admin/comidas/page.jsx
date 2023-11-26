"use client";
import { conn } from "@/libs/db";
import { data } from "autoprefixer";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function IngresarComida() {
  const [ingredientes, setIngredientes] = useState([]);
  const [nuevoIngrediente, setNuevoIngrediente] = useState({
    id_ingrediente: "",
    cantidad: "",
  });

  const handleNuevoIngrediente = (e) => {
    setNuevoIngrediente({
      ...nuevoIngrediente,
      [e.target.name]: e.target.value,
    });
  };

  const agregarIngrediente = () => {
    if (nuevoIngrediente.id_ingrediente && nuevoIngrediente.cantidad) {
      setIngredientes([...ingredientes, nuevoIngrediente]);
      setNuevoIngrediente({
        id_ingrediente: "",
        cantidad: "",
      });
    }
  };

  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });
  const [file, setFile] = useState();

  const handleCahnge = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('nombre', datos.nombre);
    formData.append('descripcion', datos.descripcion);
    formData.append('precio', datos.precio);
    formData.append('imagen', file);

    ingredientes.forEach((ingrediente, index) => {
      formData.append(`ingredientes[${index}][id_ingrediente]`, ingrediente.id_ingrediente);
      formData.append(`ingredientes[${index}][cantidad]`, ingrediente.cantidad);
    });

    try {
      const res = await axios.post('http://localhost:3000/api/apiCafeteria/comidas', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      console.log("Respuesta del servidor:", res.data);

      router.push("/admin/pedidos");
    } catch (error) {
      console.error("Error al enviar la comida:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Hola</label>
      <input onChange={handleCahnge} />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div>
        <select
          name="id_ingrediente"
          value={nuevoIngrediente.id_ingrediente}
          onChange={handleNuevoIngrediente}
        >
        </select>
        <input
          type="number"
          name="cantidad"
          value={nuevoIngrediente.cantidad}
          onChange={handleNuevoIngrediente}
          placeholder="Cantidad"
        />
        <button type="button" onClick={agregarIngrediente}>
          Agregar Ingrediente
        </button>
      </div>
      <button type="submit">Agregar Comida</button>
    </form>
  );
}
