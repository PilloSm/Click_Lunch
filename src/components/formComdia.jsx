"use client";
import axios from "axios";
import { useState } from "react";
export default function FormularioComida() {
    const [file, setFile]= useState()
    const onChange=(e)=>{}
    const onSubmit=(e)=>{}
  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input type="text" name="nombre" required />
        <label htmlFor="precio">Precio</label>
        <input type="number" required />
        <label htmlFor="Ingredientes">Ingredientes</label>
        <label htmlFor="Tipo">Tipo</label>
        <input type="range" required/>
      <input type="file" required />
    </form>
  );
}
