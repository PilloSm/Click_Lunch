import React, { useState } from "react";

const DatosIngrediente = ({ nombre, id_ingrediente, cantidad, precio }) => {
  const [ingrediente, setIngrediente] = useState({
    nombre,
    id: id_ingrediente,
    cantidad: cantidad,
    precio,
  });
  const handleChange = (e) => {
    setIngrediente({
      ...ingrediente,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {};
  return (
    <>
      <div className="absolute w-[219px] top-[211px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Nombre
      </div>
      <div className="absolute w-[219px] top-[471px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Cantidad
      </div>
      <div className="absolute w-[219px] top-[611px] left-[523px] font-poppins font-normal text-[#09090999] text-[16px] leading-[24px] tracking-[0.15px]">
        Precio
      </div>

      <div className="absolute w-[450px] h-[48px] top-[242px] left-[495px] bg-white border border-[#797979]">
        <input
          name="usuario"
          placeholder="Nombre"
          className="absolute w-[438px] h-[35px] top-[5px] left-[5px] font-nunito font-normal text-black bg-[white] text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>

      <div className="absolute w-[450px] h-[48px] top-[373px] left-[495px] bg-white border border-[#797979]">
        <input
          type="text"
          placeholder="Tipo de ingrediente"
          name="correo"
          className="absolute w-[438px] h-[35px] top-[4px] left-[5px] font-nunito font-normal bg-[white] text-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>

      <div className="absolute w-[450px] h-[48px] top-[504px] left-[495px] bg-white border border-[#797979]">
        <input
          type="number"
          placeholder="1"
          name="contrasena"
          min={1}
          className="absolute w-[438px] h-[35px] top-[4px] left-[5px] font-nunito font-normal bg-[white] text-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>

      <div className="absolute w-[450px] h-[48px] top-[644px] left-[495px] bg-white border border-[#797979]">
        <input
          type="number"
          placeholder="$"
          min={1}
          name="contrasena"
          className="absolute w-[438px] h-[35px] top-[4px] left-[5px] font-nunito font-normal bg-[white] text-black text-[24px] leading-normal tracking-normal border-none outline-none"
        />
      </div>
    </>
  );
};

export default DatosIngrediente;
