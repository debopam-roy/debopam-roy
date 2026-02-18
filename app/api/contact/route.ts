import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_GMAIL_USER!,
    pass: process.env.NEXT_GMAIL_APP_PASSWORD!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, reason, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 1. Store in Supabase
    const { error } = await supabase.from("contact_messages").insert([
      {
        name,
        email,
        reason: reason || null,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message, error.code, error.details);
      return NextResponse.json(
        { error: "Failed to save message.", details: error.message },
        { status: 500 }
      );
    }

    // 2. Send email notification
    const reasonLabel = reason
      ? reason.charAt(0).toUpperCase() + reason.slice(1).replace("-", " ")
      : "Not specified";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.NEXT_GMAIL_USER}>`,
      to: "debo.roy79@gmail.com",
      replyTo: email,
      subject: `${name} sent you a new message — ${reasonLabel}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 1px;">
                DEBOPAM ROY
              </h1>
              <p style="margin: 6px 0 0; font-size: 12px; color: #999999; letter-spacing: 2px; text-transform: uppercase;">
                Portfolio Notification
              </p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #000000; padding: 12px 20px; text-align: center;">
                    <p style="margin: 0; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: 1px; text-transform: uppercase;">
                      New Contact Form Submission
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 32px 40px;">

              <!-- Greeting -->
              <p style="margin: 0 0 24px; font-size: 15px; line-height: 1.6; color: #333333;">
                Hey Debopam, someone just reached out through your portfolio. Here are the details:
              </p>

              <!-- Info Cards -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border: 2px solid #000000; border-bottom: none;">
                    <p style="margin: 0 0 2px; font-size: 10px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1.5px;">Name</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #000000;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border: 2px solid #000000; border-bottom: none;">
                    <p style="margin: 0 0 2px; font-size: 10px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1.5px;">Email</p>
                    <p style="margin: 0; font-size: 15px; color: #000000;">
                      <a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border: 2px solid #000000; border-bottom: none;">
                    <p style="margin: 0 0 2px; font-size: 10px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1.5px;">Reason</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #000000;">${reasonLabel}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border: 2px solid #000000;">
                    <p style="margin: 0 0 2px; font-size: 10px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1.5px;">Received At</p>
                    <p style="margin: 0; font-size: 15px; color: #000000;">${timestamp}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin: 0 0 8px; font-size: 10px; font-weight: 700; color: #999999; text-transform: uppercase; letter-spacing: 1.5px;">Message</p>
              <div style="padding: 20px; background-color: #fafafa; border: 2px solid #000000; margin-bottom: 28px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #333333; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background-color: #000000; padding: 14px 32px; text-align: center;">
                    <a href="mailto:${email}" style="font-size: 13px; font-weight: 700; color: #ffffff; text-decoration: none; letter-spacing: 0.5px;">
                      Reply to ${name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #000000; padding: 24px 40px; text-align: center;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #888888;">
                &copy; ${new Date().getFullYear()} Debopam Roy &middot; All rights reserved
              </p>
              <p style="margin: 0; font-size: 11px; color: #666666;">
                This is an automated notification from your portfolio contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
