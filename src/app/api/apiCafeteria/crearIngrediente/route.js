import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json()
        const res = await conn.query('INSERT into cat_ingredientes SET ?', data)
        if (res.error) return NextResponse.json({ error: res.error }, { status: 400 })
        return NextResponse.json({ message: 'Se ha subido correctamente el ingrediente' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}