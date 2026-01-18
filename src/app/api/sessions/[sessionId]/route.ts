import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
      include: { lead: true },
    });

    if (!session || session.expiresAt < new Date()) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    return NextResponse.json({ email: session.lead.email });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process sessions GET request" },
      { status: 500 }
    );
  }
}
