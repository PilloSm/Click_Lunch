"use client";

import { useSession } from "next-auth/react";

export async function agregar(request) {
  const data = await request.json();
  const session = useSession();
  while (!session) {
    if (session) {
      console.log("holass");
    }
  }
}
