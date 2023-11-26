import React from "react";
import Link from "next/link";
import axios from "axios";
const Card = ({ id_cliente }) => {
  const alimentoEncontrado = async () => {
    const res = await axios.post(`/api/apiCafeteria/Comida/${id_cliente}`);
    const comida=res.data
  };

  return (
    <div className="relative mx-2 w-[303px] h-[402px] top-[30px] cursor-pointer">
      <Link href="/client/">
        <div className="relative h-full">
          <div className="w-[303px] h-[350px] top-[52px] bg-[#f4f5f6] rounded-[40px] shadow-md relative left-0"></div>
          <img
            className="w-[227px] h-[227px] left-[38px] absolute top-0 object-cover"
            src="img/menu/ellipse-1.png"
            alt="Hamburguesa con papas"
          />
          <div className="absolute w-[204px] top-[249px] left-[40px] font-nunito font-normal text-black text-[28px] text-center leading-normal tracking-normal">
            {nombre}
          </div>
          <div className="absolute w-[204px] bottom-[40px] left-[40px] font-nunito font-normal text-black text-[28px] text-center leading-normal tracking-normal">
            ${precio}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
