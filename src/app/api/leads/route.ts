import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    //creating a session id for the lead
    const lead = await prisma.lead.upsert({
      where: { email },
      update: {},
      create: { email },
    });
    const sessionId = crypto.randomUUID();
    await prisma.session.create({
      data: {
        leadId: lead.id,
        id: sessionId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 30), // 30 min from now
      }
    })

    // Here you would typically store the lead info in a database
    console.log("New lead captured:", { email, sessionId });
    return NextResponse.json({ sessionId });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to capture lead" },
      { status: 500 }
    );
  }
}
