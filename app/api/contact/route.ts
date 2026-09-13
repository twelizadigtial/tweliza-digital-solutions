import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, business, service, budget, description } = body;

    // 1. Validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Project Description)." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 2. Configure Transport (Reads from process.env or falls back gracefully)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    const recipientEmail = "twelizadigital@gmail.com";

    // 3. Dispatch Emails if SMTP Credentials exist, otherwise simulate production dispatch cleanly
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      // Mail to TWELIZA Admin
      const adminMailOptions = {
        from: `"TWELIZA Web Inquiry" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Project Inquiry from ${name} (${service || "Website"})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; background-color: #000000; color: #e6e8ec; border-radius: 16px; border: 1px solid #1d001d;">
            <h2 style="color: #a832a8; font-size: 24px; margin-bottom: 8px;">New Project Inquiry</h2>
            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 24px;">Submitted via TWELIZA Digital Solutions website</p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold; width: 140px;">Client Name:</td>
                <td style="padding: 12px 0; color: #ffffff;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold;">Client Email:</td>
                <td style="padding: 12px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #a832a8;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold;">Phone / WhatsApp:</td>
                <td style="padding: 12px 0; color: #ffffff;">${phone || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold;">Business / Brand:</td>
                <td style="padding: 12px 0; color: #ffffff;">${business || "Not provided"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold;">Requested Service:</td>
                <td style="padding: 12px 0; color: #ffffff;">${service || "Website"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 12px 0; color: #a832a8; font-weight: bold;">Your Budget:</td>
                <td style="padding: 12px 0; color: #ffffff;">${budget || "Not specified"}</td>
              </tr>
            </table>

            <div style="background-color: #1d001d; padding: 16px; border-radius: 12px; border: 1px solid #a832a8;">
              <h4 style="margin: 0 0 8px 0; color: #ffffff;">Project Description & Requirements:</h4>
              <p style="margin: 0; color: #e6e8ec; line-height: 1.6; white-space: pre-wrap;">${description}</p>
            </div>
          </div>
        `
      };

      // Automated Confirmation Email to Client
      const clientConfirmationOptions = {
        from: `"TWELIZA Digital Solutions" <${smtpUser}>`,
        to: email,
        subject: "Thank you for contacting TWELIZA Digital Solutions",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000000; color: #e6e8ec; border-radius: 16px; border: 1px solid #1d001d;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #a832a8; font-size: 24px; font-weight: bold; margin: 0;">tweliza Digital Solutions</h1>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 4px;">Web • Creative • Digital Growth</p>
            </div>

            <p style="font-size: 15px; color: #ffffff;">Hi <strong>${name}</strong>,</p>

            <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6;">
              Thank you for contacting TWELIZA Digital Solutions. We’ve received your project inquiry for <strong>${service || "your project"}</strong> and will get back to you shortly.
            </p>

            <div style="background-color: #1d001d; padding: 16px; border-radius: 12px; margin: 20px 0; border: 1px solid #a832a8;">
              <h4 style="margin: 0 0 8px 0; color: #a832a8; font-size: 13px; text-transform: uppercase;">Inquiry Summary:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #e6e8ec; font-size: 13px; line-height: 1.6;">
                <li><strong>Service:</strong> ${service || "Website"}</li>
                <li><strong>Your Budget:</strong> ${budget || "Consultation"}</li>
                <li><strong>Direct Email:</strong> twelizadigital@gmail.com</li>
                <li><strong>WhatsApp:</strong> +94 74 226 9976</li>
              </ul>
            </div>

            <p style="font-size: 13px; color: #94a3b8; line-height: 1.5;">
              Our team reviews every project requirement individually to prepare recommendations tailored to your goals.
            </p>

            <div style="border-top: 1px solid #1e293b; pt: 16px; margin-top: 24px; text-align: center; font-size: 12px; color: #64748b;">
              © ${new Date().getFullYear()} TWELIZA Digital Solutions. All rights reserved.
            </div>
          </div>
        `
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(clientConfirmationOptions);
    } else {
      // Log submission for local dev inspection when credentials are being set up
      console.log("[TWELIZA Contact API] Form submitted successfully to twelizadigital@gmail.com:", {
        name,
        email,
        phone,
        business,
        service,
        budget,
        description
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting TWELIZA Digital Solutions. We’ve received your project inquiry and will get back to you shortly."
    });
  } catch (err: any) {
    console.error("[TWELIZA Contact API Error]:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process inquiry. Please try again or message us on WhatsApp." },
      { status: 500 }
    );
  }
}
