import React from 'react'

const CantidadOrdenes = () => {
  return (
    <div className="absolute w-[274px] h-[84px] top-[652px] left-[583px] rounded-[10px]">
        <input name="ordenes"
        type="number"
        min="1"
        placeholder="1"
        className="text-center text-[42px] absolute w-[274px] h-[84px] top-0 left-0 bg-white rounded-[10px] border-4 border-black"/>
    </div>
  )
}

export default CantidadOrdenes