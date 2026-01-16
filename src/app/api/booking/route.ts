import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST!,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  await transporter.sendMail({
    from: process.env.STUDIO_EMAIL,
    to: process.env.STUDIO_EMAIL,
    subject: "New Booking Inquiry",
    text: JSON.stringify(body, null, 2),
  });

  return NextResponse.json({ success: true });
}
