import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const host = req.headers.get("host");

  // اگر از ساب‌دامین api اومد → برو relay
  if (host?.startsWith("api.")) {
    url.pathname = "/api/index";
    return NextResponse.rewrite(url);
  }

  // در غیر این صورت → سایت
  return NextResponse.next();
}
