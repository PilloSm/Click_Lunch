"use client";
import { useState } from "react";
import axios from "axios";

export default function FormularioRegistro() {
  const [credentials, setCredentials] = useState({
    nombre: "",
    correo: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.password2) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/apiiCliente/registrar",
          credentials
        );
        const result= await signIn('credentials',credentials)
        if(result.error) console.log(result.error)
        if(result.ok) return router.push('/menu')
      } catch (error) {}
    }
    alert("Contraseñas no hacen match <3");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registrase</h1>
      <input onChange={handleChange} />
      <button>Registrar</button>
    </form>
  );
}
