"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "../../../components/Navbar";
import TablaCarrito from "../../../components/TablaCarrito";
import BtnOpciones from "../../../components/BtnOpciones";
import { useSession } from "next-auth/react";

function Carrito() {
  const sesion = useSession();
  var carrito
  if (sesion.user) {
    carrito = session.user.carrito;
  }
  console.log(sesion.data?.user.carrito.total);
  return (
    <div className="bg-white flex flex-row justify-center w-full;">
      <div className="bg-white w-[1440px] h-[1024px] relative">
        <BtnOpciones />

        <div className="absolute w-[431px] top-[50px] left-[504px] font-nunito font-normal text-black text-[64px] text-center leading-normal tracking-normal">
          Carrito
        </div>
        {carrito?.lenght ?(<table className="absolute text-center top-[160px] w-1/2 mt-5 border-collapse left-1/2 transform -translate-x-1/2">
          <thead>
            <tr>
              <th className="border border-gray-300 justify-center bg-[#25a18ee6] text-[white] text-center py-2 px-3">
                Producto
              </th>
              <th className="border border-gray-300 justify-center bg-[#25a18ee6] text-[white] text-center py-2 px-3">
                Precio
              </th>
              <th className="border border-gray-300 justify-center bg-[#25a18ee6] text-[white] text-center py-2 px-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {carrito.pedido.map((item) => (
              <TablaCarrito alimento={item.alimento} precio={item.precio} />
            ))}
          </tbody>
        </table>):(<div>No hay nada en el carrito</div>)}        
        <div className="absolute top-[655px] left-[370px] font-nunito font-normal text-black text-[30px] text-center leading-normal tracking-normal whitespace-nowrap">
{sesion.data?.user.carrito.total}
        </div>
        <div className="babsolute w-[893px] h-[88px] top-[743px] left-[562px]">
          <button className="absolute w-[698px] h-[95px] top-[759px] left-[371px] bg-[#25a18ee6] rounded-full border-none cursor-pointer">
            <div className="absolute w-[523px] h-[20px] top-[37px] left-[87px] font-poppins-bold text-[white] text-[32px] text-center leading-[20px]">
              Pedir
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
