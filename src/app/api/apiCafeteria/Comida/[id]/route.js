import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request,params) {
  console.log(params.id);
  try {
    const res = await conn.query(
      "SELECT * FROM cat_comidas where id_comidas=?",
      params.id
    );
    const comida = res[0][0];
    return NextResponse.json(comida);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
