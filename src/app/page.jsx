"use client"
import FormInicio from "@/components/formInicio";
import { signOut } from "next-auth/react";

export default function Home() {
  return <><FormInicio />
  <button className="flex bg-blue-200 h-10 w-7" onClick={()=>{signOut()}}>Cerrar Session</button>
  </>;
}
