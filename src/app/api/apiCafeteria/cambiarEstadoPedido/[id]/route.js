import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function PUT(request, params) {
  try {
    const { estado } = await request.json();
    await conn.query("UPDATE m_pedidos SET ? where id_pedido=? SET ?", [
      estado + 1,
      params.id,
    ]);
    const res = await conn.query("SELECT * FROM m_pedidos");
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
