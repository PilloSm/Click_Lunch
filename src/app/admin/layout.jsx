"use client";
import { useRouter } from "next/navigation";

const { useSession } = require("next-auth/react");

export default function Layout({ children }) {
  const session = useSession();
  const router = useRouter();
  if (session.data) {
    if (session.data?.user.tipo === 1) {
      return <>{children}</>;
    }
    router.push("/");
  }
}
