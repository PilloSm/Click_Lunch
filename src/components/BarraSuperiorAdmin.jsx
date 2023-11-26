import React from "react";
import BtnOpcionesAdmin from "./BtnOpcionesAdmin";

export const BarraSuperiorAdmin = () => {
  return (
    <div>
      <BtnOpcionesAdmin />
      <div className="absolute w-[1040px] h-[64px] top-[71px] left-[209px]">
        <div className="relative h-[64px]">
          <div className="w-[1040px] h-[61px] top-0 bg-[#e6e7e9] rounded-[11px] absolute left-0"></div>
        </div>
      </div>
      <div className="absolute w-[1040px] h-[64px] top-[71px] left-[1289px]">
        <button className="relative w-[62px] h-[61px] bg-[#47cdb8] rounded-[31px/30.5px] cursor-pointer border-none">
          <img
            className="absolute w-[38px] h-[39px] top-[9px] left-[12px] object-cover"
            src="img/menu/image-12.png"
            alt="Buscar"
          />
        </button>
      </div>
    </div>
  );
};

export default BarraSuperiorAdmin;
