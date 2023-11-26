import nextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { conn } from "@/libs/db";
const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProviders({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "mail", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const usuarioBuscar = {
          email: credentials.email,
          password: credentials.password,
        };
        console.log(usuarioBuscar.email);
        const res = await conn.query(
          "SELECT * FROM cat_usuarios WHERE email=?",
          usuarioBuscar.email
        );
        const usu = res[0][0];
        if (!usu) throw new Error("Usuario no encontrado");
        const match = await bcrypt.compare(
          usuarioBuscar.password,
          usu.password
        );
        if (!match) throw new Error("Invalid credentials");
        return usu;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      const res = await conn.query(
        "SELECT id_cuenta, nombre, email, saldo, tipo from cat_usuarios where email=?",
        token.user.email
      );
      const usuario = { ...res[0][0], carrito: { total: 0, comidas: [] } };
      session.user = usuario;
      return session;
    },
    async signIn({ profile, credentials }) {
      if (!profile) return (profile = credentials);
      const credencial = {
        nombre: profile.name,
        email: profile.email,
        password: "Google",
        saldo: 0,
        tipo: false,
      };
      const result = await conn.query(
        "SELECT * FROM cat_usuarios WHERE email=?",
        credencial.email
      );
      if (!result[0][0]) {
        await conn.query("INSERT into cat_usuarios SET ?", credencial);
      }
      return credencial;
    },
  },
    pages: {
      signIn: "/",
    },
});
export { handler as GET, handler as POST };
