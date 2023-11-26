import React from "react";

const TablaHistorial = ({ fecha, total, producto }) => {
  return (
    <tr>
      <td>{fecha}</td>
      <td>${total}</td>
      <td>{producto}</td>
    </tr>
  );
};

export default TablaHistorial;
