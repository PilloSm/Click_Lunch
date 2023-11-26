"use client";

import BtnOpciones from "@/components/BtnOpciones";
import DatosCuenta from "@/components/DatosCuenta";
import { signOut, useSession } from "next-auth/react";

export default function Informacion() {
  const mostrarAlerta = () => {
    swal({
      title: "Eliminar cuenta",
      text: "¿Estás seguro que quieres eliminar la cuenta?",
      denyButtonText: "No",
      confirmButtonText: "Yes",
      icon: "warning",
    });
  };
  const session = useSession();
  console.log(session);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1024px] relative">
        <div className="absolute w-[251px] top-[57px] left-[594px] font-nunito font-normal text-black text-[64px] leading-normal tracking-normal">
          Mi perfil
        </div>
        <BtnOpciones />
        {session?.data ? (
          <div>
            <DatosCuenta
              id_cuenta={session.data.user.id_cuenta}
              usuarios={session.data.user.nombre}
              correo={session.data.user.email}
              saldo={session.data.user.saldo}
            />
            <button
              onClick={() => {
                signOut();
              }}
              className="absolute w-[450px] h-[77px] top-[600px] left-[495px] bg-[#25a18ee6] rounded-full border-none cursor-pointer"
            >
              <div className="absolute w-[338px] h-[20px] top-[28px] left-[56px] font-poppins font-bold text-white text-[24px] text-center leading-[20px]">
                Cerrar sesión
              </div>
            </button>
          </div>
        ) : (
          <div>No hay cuenta</div>
        )}
      </div>
    </div>
  );
}
