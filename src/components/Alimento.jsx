import React from 'react'

const Alimento = (nombre = "alimento", descripcion = "descripcion", precio = 0) => {
  return (
    <>
     <div className="absolute w-[589px] h-[373px] top-[139px] left-[790px] bg-white"><img className="absolute w-[546px] h-[323px] top-[27px] left-[24px] object-cover;" src="img/compra/image-9.png" alt="Food" /></div>
        <div className="absolute w-[325px] top-[64px] left-[298px] font-nunito font-semibold text-black text-[64px] rounded-[40px] leading-normal tracking-normal whitespace-nowrap">Enchiladas</div>
        <textarea className="absolute w-[595px] h-[277px] top-[201px] left-[115px] resize-none bg-[white] text-[34px]" disabled>Especialidad mexicana que se prepara con tortillas de maíz untadas con salsa de chile y enrolladas o dobladas.
        (Orden de 3)

      </textarea>
        <div className="absolute w-[325px] top-[537px] left-[119px] font-nunito font-nunito font-bold text-black text-[64px] leading-normal tracking-normal">$30</div>
    </>
  )
}

export default Alimento