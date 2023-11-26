import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const res = await conn.query("INSERT into cat_ingredientes SET ?", data);
    if (res.error)
      return NextResponse.json({ error: res.error }, { status: 400 });
    return NextResponse.json(
      { message: "Se ha subido correctamente el ingrediente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await conn.query("SELECT * FROM cat_ingrdientes");
    if (res.error)
      return NextResponse.json(
        { error: "Ups ha ocurrido un error" },
        { status: 500 }
      );
    return NextResponse.json(res[0][0]);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const res = await conn.query(
      "UPDATE cat_ingredientes set cantidad ? where id_ingrediente",
      [data.cantidad, data.id_ingrediente]
    );
    if (res.error)
      return NextResponse.json(
        { message: "Ha ocurrido un error" },
        { status: 500 }
      );
    const result = await conn.query("Insert into extras_ingredientes set ?", {
      id_ingrediente: data.id_ingrediente,
      cantidad: data.cantidad,
      tipo: 1,
    });
    if (result.error)
      return NextResponse.json({ message: result.error }, { status: 500 });
    return NextResponse.json({ message: "Todo correcto" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
