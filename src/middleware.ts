import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

const ADMIN_ROUTES = [
  "/admin/dashboard",
  "/admin/orders",
  "/admin/products",
  "/admin/users",
  "/admin/users/[id]",
  "/",
];
const USER_ROUTES = ["/dashboard", "/orders", "/products"];
const AUTH_ROUTES = ["/login", "/register"];

export async function middleware(request: NextRequest): Promise<any> {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");
  
  //todo por si se quiere usar con JWT y cookies para validar 
  // if (ADMIN_ROUTES.includes(pathname)) {
  //   if (token === undefined) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   try {
  //     const { payload } = await jose.jwtVerify(
  //       token.value,
  //       new TextEncoder().encode(process.env.JWT_SECRET)
  //     );

  //     console.log(payload);
  //     if(payload.role === "user") {
  //       return NextResponse.next();
  //     }
  //     return NextResponse.next();
  //   } catch (error) {
  //     console.log(error);
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   // if (AUTH_ROUTES.includes(pathname)) {
  //   //   return NextResponse.redirect(new URL("/login", request.url));
  //   // }
  // }
  //return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
