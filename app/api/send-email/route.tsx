import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  resend.emails.send({
    from: "test@domain.com",
    to: "theranjith@gmail.com",
    subject: "Test",
    react: <WelcomeTemplate name="Ranjith"></WelcomeTemplate>,
  });

  return NextResponse.json({});
}
