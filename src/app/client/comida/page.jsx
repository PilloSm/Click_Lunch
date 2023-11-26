import FormComida from "@/components/formComida"
import axios from "axios"

export default async function Comida({request}){
    const data=await request.json()
    const comida= await axios.get('http:localhost:3000/api/apiCliente/menu/'+data.id)
    return <FormComida comidas={comida} />
}