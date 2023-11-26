import { conn } from "@/libs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const data = await req.json();
    const email = data.email;
    console.log(email)
    const res = await conn.query(
      "SELECT * FROM cat_usuarios where email=?",
      email
    );
    console.log(res[0]);
    if (res[0].length > 0) {
      return NextResponse.json(
        { message: "Usuarios ya registrado" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const credentials = {
      nombre: data.nombre,
      email: email,
      password: hashedPassword,
      saldo: 0,
      tipo: false,
    };
    const result = await conn.query(
      "INSERT INTO cat_usuarios SET ?",
      credentials
    );
    console.log(result);
    if (result[0].affectedRows > 0) {
      const usuarioR = await conn.query(
        "SELECT id_cuenta, nombre, email, saldo, tipo FROM cat_usuarios where email=?",
        credentials.email
      );
      return NextResponse.json(usuarioR[0]);
    }
    return NextResponse.json({ error: "Ha ocurrido un error inesperado" });
  } catch (error) {
    return NextResponse.json(
      { error: "ups ha ocurrido un error" },
      { status: 500 }
    );
  }
}
