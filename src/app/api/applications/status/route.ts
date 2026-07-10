import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    enabled: Boolean(process.env.API_BASE_URL?.trim()),
  });
}
