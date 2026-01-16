import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, date, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PhotoStudio" <${process.env.EMAIL_USER}>`,
      to: process.env.STUDIO_EMAIL,
      subject: `New Booking Inquiry — ${subject}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Date:</strong> ${date || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "-"}</p>
      `,
    });

    
    await transporter.sendMail({
      from: `"PhotoStudio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Inquiry Received — PhotoStudio",
      html: `
        <p>Thank you for reaching out.</p>
        <p>We’ve received your inquiry and will get back to you shortly.</p>
        <br />
        <p>— PhotoStudio</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
