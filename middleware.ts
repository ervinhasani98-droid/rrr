import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "";

  if (host.startsWith("api.")) {
    return NextResponse.rewrite(
      new URL("/api/index", req.url)
    );
  }

  return NextResponse.next();
}
