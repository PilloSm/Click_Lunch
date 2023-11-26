"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Registrar() {
  const router = useRouter();
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos.password, datos.password2);
    if (datos.password === datos.password2) {
      console.log(datos);
      const res = await axios.post(
        "http://localhost:3000/api/apiCliente/registrar",
        {
          ...datos,
          redirect: false,
        }
      );
      console.log(res);
      if (res.status === 200) {
        const res = await signIn("credentials", {
          nombre: datos.nombre,
          email: datos.email,
          password: datos.password,
          redirect: false,
        });
        if (res.error) console.log(res.error);
        if (res.status===200) router.push("http://localhost:3000/client/informacion");
      }
    } else {
      alert("Contraseñas no hacen match <3");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1440px] h-[1024px] relative">
          <div className="absolute w-[331px] top-[38px] left-[553px] font-abel font-normal text-black text-[78px] text-center leading-normal;">
            Registrar
          </div>
          <div className="absolute w-[698px] h-[113px] top-[190px] left-[370px] bg-[#f2f3f2]">
            <img
              className="absolute w-[47px] h-[51px] top-[26px] left-[42px]"
              src="/img/reg/user-user.png"
              alt="User Icon"
            />
            <input
              className="w-[500px] h-[50px] top-[30%] absolute left-[116px] text-[25px] bg-[#f2f3f2] border-none outline-none"
              type="text"
              name="nombre"
              placeholder="Usuario"
              onChange={handleChange}
            />
          </div>

          <div className="absolute w-[698px] h-[113px] top-[335px] left-[370px] bg-[#F2F3F2] bg-cover">
            <img
              className="absolute w-[48px] h-[38px] top-[40px] left-[41px]"
              src="/img/reg/vector.png"
              alt="Email Icon"
            />
            <input
              className="w-[500px] h-[50px] top-[30%] absolute left-[116px] text-[25px] bg-[#f2f3f2] border-none outline-none"
              type="email"
              name="email"
              placeholder="Correo"
              onChange={handleChange}
            />
          </div>
          <div className="absolute w-[698px] h-[113px] top-[480px] left-[371px] bg-[#F2F3F2] bg-cover">
            <img
              className="absolute w-[62px] h-[61px] top-[23px] left-[35px]"
              src="/img/reg/password-1-1.png"
              alt="Password Icon"
            />
            <input
              className="w-[500px] h-[50px] top-[30%] absolute left-[116px] text-[25px] bg-[#f2f3f2] border-none outline-none"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>
          <div className="absolute w-[698px] h-[113px] top-[625px] left-[371px] bg-[#f2f3f2] bg-cover">
            <img
              className="absolute w-[62px] h-[61px] top-[23px] left-[35px]"
              src={"/img/reg/password-1.png"}
              alt="Confirm Password Icon"
            />
            <input
              className="w-[500px] h-[50px] top-[30%] absolute left-[116px] text-[25px] bg-[#f2f3f2] border-none outline-none"
              type="password"
              name="password2"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
            />
          </div>
          <button className="absolute w-[697px] h-[95px] top-[785px] left-[371px] bg-[#25a18ee6] rounded-full border-none cursor-pointer">
            <div className="absolute w-[523px] h-[20px] top-[37px] left-[87px] font-poppins-bold text-[white] text-[32px] text-center leading-[20px]">
              Registrarse
            </div>
          </button>
          <Link href="/inicio">
            <p className="absolute w-404 top-[903px] left-[540px] font-normal text-blue-500 text-2xl text-center underline">
              ¿Ya tienes cuenta? Inicia sesión
            </p>
          </Link>
        </div>
      </div>
    </form>
  );
}
///su puta madre fjadsjfasj
