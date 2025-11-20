import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    //destructing email
    const { email } = await req.json();

    //validation
    if (email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    //Example email

    await resend.emails.send({
      from: "AI Agency<onboarding@resend.dev",
      to: "mayhoodwilliam@gmail.com",
      subject: "New email signup",
      html: `<p><strong>${email}</strong> joined your list. </p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email API Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
