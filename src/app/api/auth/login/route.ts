import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, res: Response) {
  const body = await request.json();

  // if (!body.email || !body.password) {
  //   return NextResponse.json("Email and password are required", {
  //     status: 400,
  //   });
  // }

  const token = sign(
    {
      email: body.email,
      //password: body.password,
      role: "admin",
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    "secret"
  );

  const cookie = cookies();
  cookie.set("token", token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60,
  });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Set-Cookie", cookie.toString());

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return NextResponse.json({ success: true, response });
}
