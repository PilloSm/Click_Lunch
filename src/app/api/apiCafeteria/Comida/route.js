import { conn } from "@/libs/db";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const imagen = data.imagen;
    const bytes = await imagen.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public", data.nombre);
    const res = await cloudinary.uploader.upload(filePath, {
      public_id: data.nombre,
    });

    const comida = {
      nombre: data.nombre,
      tipo: data.tipo,
      descripcion: data.descripcion,
      precio: data.precio,
      imagen: res.secure_url,
    };

    const result = await conn.query("INSERT into cat_comidas SET ?", comida);
    if (result[0].affectedRows > 0) {
      data.ingredientes.forEach(async (ingrediente) => {
        const vIngrediente = {
          id_comida: result[0].insertId,
          id_ingrediente: ingrediente.id_ingrediente,
          cantidad: ingrediente.cantidad,
        };
        await conn.query("INSERT into detalle_ingrediente SET ?", vIngrediente);
      });
      const res = await conn.query("SELECT * FROM cat_comidas");
      return NextResponse.json(res[0]);
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
