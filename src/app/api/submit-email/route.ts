import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SCHEDULING_URL = process.env.SCHEDULING_URL;
const SURVEY_URL = process.env.SURVEY_URL;
const FROM_EMAIL = process.env.FROM_EMAIL;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;

export async function POST(req: Request) {
  try {
    if (!FROM_EMAIL) {
      throw new Error("FROM_EMAIL environment variable missing");
    }
    //destructing email
    const { email } = await req.json();

    //validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    console.log("Incoming email", email);

    //Send follow-up email to lead
    const userEmailResults = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thanks — book your AI Automation demo",
      html: `
          <p>Thanks for your interest in an AI automation demo — excited to learn about your bussiness</p>
          <p>Quickly tell us about your business: <a href="${SURVEY_URL}">Short survey</a></p>
          <p>Grab a time for your demo <a href="${SCHEDULING_URL}">Schedule a demo</a></p>
          <p>—SIGNALSTACK</p>
        `,
    });

    console.log("User email results:", userEmailResults);
    //Notification to my inbox

    if (NOTIFICATION_EMAIL) {
      const notifyResult = await resend.emails.send({
        from: NOTIFICATION_EMAIL,
        to: FROM_EMAIL,
        subject: "New AI demo booked",
        html: `
                 <p>New lead: <strong>${email}</strong></p>
              `,
      });
      console.log("Notification email results:", notifyResult);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email API Error: ", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
