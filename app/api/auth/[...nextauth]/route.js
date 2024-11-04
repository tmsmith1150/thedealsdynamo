import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";
//api/auth/signin

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };