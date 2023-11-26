import DatosIngrediente from "@/components/DatosIngrediente";
import axios from "axios";

export default async function Ingredientes() {
  const data = await axios.get(
    "http://localhost:3000/api/apiCafeteria/verIngredientes"
  );
  const ingredientes = data.data;
  return (
    <div>
      {ingredientes.map((item) => (
        <DatosIngrediente id_ingrediente={item.id_ingrediente} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad} />
      ))}
    </div>
  );
}
