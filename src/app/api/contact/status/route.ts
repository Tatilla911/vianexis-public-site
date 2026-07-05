import { NextResponse } from "next/server";

export async function GET() {
  const enabled =
    process.env.CONTACT_INTAKE_ENABLED === "true" &&
    Boolean(process.env.API_BASE_URL?.trim());

  return NextResponse.json({ enabled });
}
