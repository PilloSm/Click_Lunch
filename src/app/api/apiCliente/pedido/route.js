import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const pedido = {
      id_cuenta: data.id_cuenta,
      total: data.total,
      estado: 1,
    };
    const querys = await conn.query("INSERT into m_pedidos set ?", pedido);
    if (querys[0].affectedRows > 0) {
      data.detalle.forEach(async (detalle) => {
        const insertado = {
          id_pedido: querys[0].insertId,
          id_comida: detalle.id_comida,
          cantidad: detalle.cantidad,
          precio: detalle.precio,
        };
        const result = await conn.query(
          "INSERT into det_pedido SET ?",
          insertado
        );
      });
      const quitarS = await conn.query(
        "Update cat_usuarios set saldo=? where id_cuenta =?",
        [data.saldo, data.id_cuenta]
      );
      return NextResponse.json({ message: "Se ha realizado el pedido" });
    }
    return NextResponse.json({ message: "Ha ocurrido un error al subir" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Ups ha habido un error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const id = data.id
    const res = await conn.query(`SELECT
  m.id_pedido,
  m.estado,
  d.cantidad,
  c.nombre AS nombre_alimento
FROM
  m_pedidos m
JOIN
  det_pedido d ON m.id_pedido = d.id_pedido
JOIN
  cat_comidas c ON d.id_comida = c.id_comidas
WHERE
  m.id_cuenta=${id} and m.estado!=6
`);
console.log(res)
    return NextResponse.json(res[0]);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "ups ha habido un error" },
      { status: 500 }
    );
  }
}
