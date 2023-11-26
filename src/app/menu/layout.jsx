"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
    const router = useRouter()
  const { data: session } = useSession();
  if (session) {
    if (session.user.tipo === 0) {
      return <>{children};</>;
    }
    router.push('/admin/pedidos')
  }
}
