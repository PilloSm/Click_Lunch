"use client";
import Link from "next/link";
import Image from "next/image";
import TablaHistorial from "../../../components/TablaHistorial";
import SaldoInfo from "../../../components/SaldoInfo";
import BtnOpciones from "../../../components/BtnOpciones";
import BtnOpcionesAdmin from "../../../components/BtnOpcionesAdmin";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function AgregarSaldoAdmin() {
  const [datos, setDatos] = useState({
    saldoMas: 0,
    id: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Muestra una alerta de confirmación con SweetAlert
    const confirmacion = await Swal.fire({
      title: "¿Son correctos los datos?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    // Si el usuario confirma, realiza la solicitud
    if (confirmacion.isConfirmed) {
      try {
        const res = await axios.put(
          "http://localhost:3000/api/apiCafeteria/agregarSaldo",
          datos
        );

        // Verifica el estado de la respuesta
        if (res.data.status === 200) {
          // Llama a la función sweetAlert si la respuesta es exitosa
          sweetAlert();

          // Muestra un SweetAlert adicional para indicar que todo salió bien
          await Swal.fire({
            title: "¡Éxito!",
            text: "La solicitud se ha completado exitosamente.",
            icon: "success",
          });
        } else {
          console.error("Error en la respuesta:", res.data);
          // Puedes manejar el error de alguna manera aquí
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        // Puedes manejar el error de alguna manera aquí
      }
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1024px] relative">
        <BtnOpcionesAdmin />
        <div className="absolute w-[452px] top-[459px] left-[125px] font-nunito font-normal text-black text-[64px] text-center leading-normal tracking-normal">
          Agregar Saldo
        </div>

        <div className="absolute top-[615px] left-[270px] font-nunito font-normal text-black text-[30px] text-center leading-normal tracking-normal whitespace-nowrap">
          $
        </div>
        <form onSubmit={handleSubmit}>
          <input name="id" onChange={handleChange} />
          <div className="absolute w-[206px] h-[49px] top-[612px] left-[298px] rounded-[10px]">
            <select
              className="w-[100px] h-[49px] text-[28px] cursor-pointer py-2 px-3 h-[42px] outline-none border-0 rounded-none bg-[#f0f0f0] text-black text-base font-nunito border-2 border-[rgba(0,0,0,0.2)] focus:border-[#47cdb8] rounded-[12px] relative transition-all duration-200 ease-in"
              name="saldoMas"
              onChange={handleChange}
            >
              <option selected>20</option>
              <option>50</option>
              <option>100</option>
              <option>200</option>
            </select>
          </div>
          <button className="absolute w-[660px] h-[95px] top-[780px] left-[20px] bg-[#25a18ee6] rounded-full border-none cursor-pointer">
            <div className="absolute w-[523px] h-[20px] top-[37px] left-[87px] font-poppins-bold text-[white] text-[32px] text-center leading-[20px]">
              Agregar
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgregarSaldoAdmin;
