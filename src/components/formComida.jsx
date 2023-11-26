"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FormComida({ comidas }) {
  const router = useRouter();
  const [comida, setComida] = useState({
    cantidad: 1,
    id_comida: comidas,
  });

  const [platillo, setPlatillo] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
  });
  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session?.data) {
          const response = await axios.get(
            `http://localhost:3000/api/apiCliente/menu/${comidas}`
          );
          console.log(response);
          const data = response.data;
          setPlatillo((prevComida) => ({
            ...prevComida,
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            imagen: data.imagen,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [comidas.id_comida, session?.data]);

  const handleChange = (e) => {
    setComida({
      ...comida,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (session?.data) {
      const carrito = session.data.user.carrito;
      const precioT = carrito.total + platillo.precio * comida.cantidad;
      const carritoF = {
        total: precioT,
        comidas: [...carrito.comidas, comida],
      };
      session.data.user.carrito = carritoF;
      router.push("/client/carrito");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{platillo.nombre}</label>
      <p>{platillo.descripcion}</p>
      <input name="cantidad" onChange={handleChange} />
      <input
        disabled
        name="precio"
        value={platillo.precio}
        onChange={handleChange}
      />
      <img src={platillo.imagen} alt={platillo.nombre}></img>
      <button type="submit">Agregar al carrito</button>
    </form>
  );
}
