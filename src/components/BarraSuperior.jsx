import React from "react";
import BtnOpciones from "./BtnOpciones";

const BarraSuperior = () => {

  const lista=()=>{
    const res= axios.get('/api/apiCliente/mennu')
    const datos= res.data
  }

  return (
    <div>
      <BtnOpciones />

      <div className="absolute w-[1040px] h-[64px] top-[71px] left-[209px]">
        <div className="relative h-[64px]">
          <div className="w-[1040px] h-[61px] top-0 bg-[#e6e7e9] rounded-[11px] absolute left-0"></div>

          <form action="">
            <div className="absolute w-[212px] h-[52px] top-[12px] left-[25px]">
              <div className="relative w-[210px] h-[52px]">
                <input
                  type="text"
                  name="busqueda"
                  className="w-[920px] h-[50px] top-[-10%] absolute left-[59px] text-[25px] bg-[rgb(230,231,233)] border-none outline-none"
                  placeholder="Buscar"
                />
                <img
                  className="absolute w-[37px] h-[37px] top-0 left-0"
                  src="img/menu/icono_busc.png"
                  alt="Buscar"
                />
              </div>
            </div>
          </form>
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

export default BarraSuperior;
