import TablaHistorial from "../../components/TablaHistorial";
import SaldoInfo from "../../components/SaldoInfo";
import BtnOpcionesAdmin from "../../components/BtnOpcionesAdmin";
import axios from "axios";
import CardCocina from "@/components/CardCocina";
import BarraSuperior from "@/components/BarraSuperior";
import BtnOpciones from "@/components/BtnOpciones";
async function Menu() {
  const res = await axios.get("http://localhost:3000/api/apiCliente/menu");
  const comidas = res.data;
  return (
    <form>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="w-[1440px] h-[1640px] flex flex-wrap justify-around bg-white relative">
    <BtnOpciones/>
          <div className="absolute top-[162px] left-[672px] font-nunito font-normal text-black text-[60px] text-center leading-normal tracking-normal">
            Pedidos
          </div>

          <div className="top-[220px] left-[70px] relative w-full h-[1200px] flex flex-wrap overflow-scroll overflow-x-hidden overflow-y-scroll justify-start">
            {comidas.map((item)=>(<CardCocina comidas={item} />
))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Menu;
