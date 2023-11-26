import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await conn.query(`
    SELECT *
    FROM cat_comidas c
    WHERE NOT EXISTS (
        SELECT di.id_ingrediente
        FROM det_ingrediente di
        LEFT JOIN cat_ingredientes ci ON di.id_ingrediente = ci.id_ingrediente
        WHERE di.id_comida = c.id_comidas AND (ci.cantidad IS NULL OR ci.cantidad < di.cantidad)
    )`);
    const comidas = res[0];
    console.log(comidas)
    return NextResponse.json(comidas);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}