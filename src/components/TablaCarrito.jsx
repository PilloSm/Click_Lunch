import React from 'react'

const TablaCarrito = ({alimento,cantidad, subtotal}) => {
  return (
    <tr>
        <td>{alimento}</td>
        <td>{cantidad}</td>
        <td>${subtotal}</td>
        <td><button className="cursor-pointer"><img src="img/carrito/borrar-1.png" alt="Eliminar" /></button></td>
    </tr>
  )
}

export default TablaCarrito
