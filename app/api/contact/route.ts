import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, classification, message } = await request.json();

    if (!name || !email || !classification || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpUser || !smtpPass || !contactToEmail) {
      return NextResponse.json({ error: "SMTP is not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Andart Contact" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `[Andart] New contact: ${classification} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nClassification: ${classification}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Classification:</strong> ${classification}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact-api] sendMail failed", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
