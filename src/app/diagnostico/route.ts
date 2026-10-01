import { NextResponse } from "next/server";

// URL antiga: redireciona permanentemente para a página canônica do diagnóstico
export function GET(request: Request) {
  return NextResponse.redirect(new URL("/diagnostico-gratuito", request.url), 308);
}
