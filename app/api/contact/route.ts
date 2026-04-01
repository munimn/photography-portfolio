import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, sessionType, message } = body;

    if (!name || !email || !sessionType || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const sessionLabels: Record<string, string> = {
      wedding: "Wedding Photography",
      portrait: "Portrait Session",
      engagement: "Engagement Session",
      other: "Other",
    };

    await resend.emails.send({
      from: "FujiXMunsnaps <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New inquiry: ${sessionLabels[sessionType] ?? sessionType} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body style="margin:0;padding:0;background:#FAF7F2;font-family:'Helvetica Neue',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%;">

                    <!-- Header -->
                    <tr>
                      <td style="background:#2C1810;padding:36px 40px;">
                        <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#FAF7F2;letter-spacing:1px;">
                          FujiX<span style="color:#D4A08A;">Mun</span>snaps
                        </p>
                        <p style="margin:6px 0 0;font-size:11px;color:#C9A98E;letter-spacing:3px;text-transform:uppercase;">
                          New Session Inquiry
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">

                        <p style="margin:0 0 24px;font-size:15px;color:#5C3A2A;line-height:1.6;">
                          You have a new inquiry from <strong>${name}</strong>.
                        </p>

                        <!-- Details table -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                          ${[
                            ["Session Type", sessionLabels[sessionType] ?? sessionType],
                            ["Name", name],
                            ["Email", email],
                            ["Phone", phone || "—"],
                            ["Event / Session Date", eventDate || "—"],
                          ]
                            .map(
                              ([label, value]) => `
                            <tr>
                              <td style="padding:12px 0;border-bottom:1px solid #E8DDD0;font-size:11px;color:#8B7355;letter-spacing:2px;text-transform:uppercase;width:40%;vertical-align:top;">${label}</td>
                              <td style="padding:12px 0;border-bottom:1px solid #E8DDD0;font-size:14px;color:#2C1810;vertical-align:top;">${value}</td>
                            </tr>`
                            )
                            .join("")}
                        </table>

                        <!-- Message -->
                        <p style="margin:32px 0 8px;font-size:11px;color:#8B7355;letter-spacing:2px;text-transform:uppercase;">Message</p>
                        <div style="background:#FAF7F2;border-left:3px solid #B8704D;padding:20px 24px;">
                          <p style="margin:0;font-size:14px;color:#2C1810;line-height:1.8;">${message.replace(/\n/g, "<br/>")}</p>
                        </div>

                        <!-- Reply CTA -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px;">
                          <tr>
                            <td>
                              <a href="mailto:${email}" style="display:inline-block;background:#B8704D;color:#FAF7F2;text-decoration:none;padding:14px 32px;font-size:11px;letter-spacing:2px;text-transform:uppercase;">
                                Reply to ${name}
                              </a>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#F0E8DC;padding:24px 40px;border-top:1px solid #E8DDD0;">
                        <p style="margin:0;font-size:11px;color:#8B7355;letter-spacing:1px;">
                          This message was sent via the contact form on your website.
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
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
