import { NextResponse } from "next/server";
import { conn } from "@/libs/db";
export async function GET(params) {
  try {
    const res = await conn.query(
      "SELECT from cat_comidas where id_comidas=?",
      params.id
    );
    if (!res[0])
      return NextResponse.json(
        { message: "No se ha encontrado el alimento" },
        { status: 500 }
      );
    return NextResponse.json(res[0]);
  } catch (error) {
    return NextResponse({ error: error }, { status: 500 });
  }
}
