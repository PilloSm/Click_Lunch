import FormComida from "@/components/formComida";
import axios from "axios";

export default async function Comida(request) {
  const { searchParams } = request;
  const comidaId = searchParams.comida;
 
  return <FormComida comidas={comidaId} />;
}