import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const data = await request.json();

    const idCuenta = parseInt(data.id, 10);
    const saldoMas = parseFloat(data.saldoMas);

    if (isNaN(idCuenta) || isNaN(saldoMas)) {
      return NextResponse.json(
        { error: "Los datos proporcionados no son válidos." },
        { status: 400 }
      );
    }

    const saldo = await conn.query(
      "SELECT saldo from cat_usuarios where id_cuenta=?",
      idCuenta
    );

    const saldoNuevo = saldo[0][0].saldo + saldoMas;

    const res = await conn.query(
      "UPDATE cat_usuarios SET saldo = ? WHERE id_cuenta = ?",
      [saldoNuevo, idCuenta]
    );
    if (res[0].affectedRows > 0) {
      const res = await conn.query("insert into m_pedidos set ?", {
        id_cuenta: idCuenta,
        total: saldoMas,
        estado: 6,
      });
      return NextResponse.json(res[0]);
    } else {
      return NextResponse.json(
        { message: "Ha ocurrido un error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: "Ha habido un error en el servidor" },
      { status: 500 }
    );
  }
}
