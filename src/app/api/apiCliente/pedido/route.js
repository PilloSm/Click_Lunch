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
    const querys = await conn.query("INSERT into m_pedidos SET ?", pedido);

    if (querys[0].affectedRows > 0) {
      for (const detalle of data.detalle) {
        const ingredientesNecesarios = await conn.query(
          "SELECT id_ingrediente, cantidad FROM detalle_ingrediente WHERE id_comida = ?",
          detalle.id_comida
        );

        for (const ingredienteNecesario of ingredientesNecesarios) {
          const cantidadNecesaria =
            ingredienteNecesario.cantidad * detalle.cantidad;

          // Registrar salida en extras_ingredientes
          await conn.query(
            "INSERT INTO extras_ingredientes (id_ingredientes, cantidad, tipo, fecha) VALUES (?, ?, 0, NOW())",
            [ingredienteNecesario.id_ingrediente, cantidadNecesaria]
          );

          // Actualizar cantidad en cat_ingredientes
          await conn.query(
            "UPDATE cat_ingredientes SET cantidad = cantidad - ? WHERE id_ingrediente = ?",
            [cantidadNecesaria, ingredienteNecesario.id_ingrediente]
          );
        }

        const insertado = {
          id_pedido: querys[0].insertId,
          id_comida: detalle.id_comida,
          cantidad: detalle.cantidad,
          precio: detalle.precio,
        };
        await conn.query("INSERT into det_pedido SET ?", insertado);
      }
      const quitarSaldo = await conn.query(
        "UPDATE cat_usuarios SET saldo = ? WHERE id_cuenta = ?",
        [data.saldo, data.id_cuenta]
      );

      return NextResponse.json({ message: "Se ha realizado el pedido" });
    }

    return NextResponse.json({ message: "Ha ocurrido un error al subir" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ups ha habido un error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const id = data.id;
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
    console.log(res);
    return NextResponse.json(res[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "ups ha habido un error" },
      { status: 500 }
    );
  }
}
