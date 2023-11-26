import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
  try {
    console.log(params)
    const id = params.id;
    console.log(id)
    const cantidad = await conn.query(`SELECT
    c.id_comidas,
    c.nombre,
    c.descripcion,
    c.precio,
    c.imagen,
    MIN(COALESCE(ci.cantidad / di.cantidad, 0)) AS cantidad_preparable
FROM
    cat_comidas c
JOIN
    det_ingrediente di ON c.id_comidas = di.id_comida
LEFT JOIN
    cat_ingredientes ci ON di.id_ingrediente = ci.id_ingrediente
WHERE
    c.id_comidas = ${id}
GROUP BY
    c.id_comidas, c.nombre, c.descripcion, c.precio;
`);
    if (!cantidad[0])
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 500 }
      );
    return NextResponse.json(cantidad[0]);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
