import { NextResponse } from "next/server";

export const runtime = "nodejs";
import { prisma } from "@/src/lib/prisma";
import crypto from "crypto";
export async function POST(req: Request) {
  try {
    const { formData } = await req.json();

    const { email, name, teamSize, focusArea, urgency, winDefinition } =
      formData;

    // Basic validation
    if (
      !email ||
      !name ||
      !teamSize ||
      !focusArea ||
      !urgency ||
      !winDefinition
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    //store qualified lead in DB
    console.log("Received qualified lead data:", formData);

    //1. Find or create lead entry if not exists
    let lead = await prisma.lead.findUnique({
      where: { email },
    });

    if (!lead) {
      lead = await prisma.lead.create({
        data: {
          email,
          name,
        },
      });
    } else if (name && lead.name !== name) {
      //if lead exists but name is different
      lead = await prisma.lead.update({
        where: { id: lead.id },
        data: { name },
      });
    }
    //2. Create session for the lead
    const sessionId = crypto.randomUUID();

    const session = await prisma.session.create({
      data: {
        leadId: lead.id,
        id: sessionId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 30), // 30 min from now
      },
    });

    //3. Create qualification entry
    await prisma.qualification.create({
      data: {
        sessionId: session.id,
        teamSize,
        focusArea,
        urgency,
        winDefinition: winDefinition || "Not specified",
      },
    });

    //4. Send data to Zapier webhook
    const zapierWebhookURL = process.env.ZAPIER_WEBHOOK_URL;

    if (!zapierWebhookURL) {
      throw new Error("ZAPIER_WEBHOOK_URL environment variable missing");
    }

    const responseMessage = fetch(zapierWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "qualified_lead",
        email,
        name,
        teamSize,
        focusArea,
        urgency,
        winDefinition,
        sessionId,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!responseMessage) {
      throw new Error("Failed to send data to Zapier");
    }

    return NextResponse.json(
      {
        success: true,
        sessionId: session.id,
        message: "Qualified lead data received successfully and sent to Zapier",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Qualified Lead API Error: ", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
