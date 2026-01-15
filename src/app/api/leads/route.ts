import { NextResponse } from "next/server";
import crypto from "crypto";

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
    const sessionId = crypto.randomUUID();

    // Here you would typically store the lead info in a database
    console.log("New lead captured:", { email, sessionId });
    return NextResponse.json({ sessionId });
  } catch (error) {
    throw new Error("Failed to process lead");
  }
}
