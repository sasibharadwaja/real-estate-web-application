import type { IncomingMessage, ServerResponse } from "http";
import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const {
      fullName,
      phoneNumber,
      city,
      emailAddress,
      interestedIn = "Plot & Flat",
      preferredLocation = "Nellore",
      budget,
      message,
    } = req.body || {};

    // Validate required fields
    if (!fullName || !phoneNumber || !emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Phone Number, and Email Address are required fields.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Resend Error] RESEND_API_KEY environment variable is not configured.");
      return res.status(500).json({
        success: false,
        message: "Email delivery service is not configured (missing RESEND_API_KEY). Please contact support.",
      });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.BUSINESS_EMAIL || "bmsrao2001@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "PlotStories Consultation <onboarding@resend.dev>";
    const emailSubject = `[PlotStories Lead] ${fullName} - Interested in ${interestedIn}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Silver and Black Header -->
        <div style="background: linear-gradient(135deg, #111111 0%, #2a2a2a 100%); color: #ffffff; padding: 24px; text-align: center; border-bottom: 4px solid #a1a1aa;">
          <h2 style="margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">PlotStories</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1px;">Premium Real Estate Consultation Request</p>
        </div>
        
        <!-- Content Body -->
        <div style="padding: 24px; color: #334155;">
          <p style="margin-top: 0; font-size: 16px; line-height: 1.5;">You have received a new consultation request from the PlotStories website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 180px;">Full Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${phoneNumber}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a;">${emailAddress}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">City:</td>
              <td style="padding: 10px 0; color: #0f172a;">${city || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Interested In:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">
                <span style="background-color: #e2e8f0; color: #1e293b; padding: 4px 8px; border-radius: 4px; font-size: 13px;">${interestedIn}</span>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Preferred Location:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${preferredLocation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Estimated Budget:</td>
              <td style="padding: 10px 0; color: #0f172a;">${budget || "Not specified"}</td>
            </tr>
          </table>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #64748b; padding: 16px; border-radius: 4px; margin-top: 20px;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #475569; font-size: 14px;">Client Message:</p>
            <p style="margin: 0; line-height: 1.6; color: #1e293b; white-space: pre-line;">${message || "No message provided."}</p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0;">This email was sent via the <strong>PlotStories</strong> consultation form.</p>
          <p style="margin: 4px 0 0 0;">Recipient: ${recipientEmail} • Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const emailText = `
PlotStories Lead Notification
==================================

New consultation request details:

Full Name: ${fullName}
Phone Number: ${phoneNumber}
Email Address: ${emailAddress}
City: ${city || "Not provided"}
Interested In: ${interestedIn}
Preferred Location: ${preferredLocation}
Estimated Budget: ${budget || "Not specified"}

Client Message:
${message || "No message provided."}

----------------------------------
Recipient: ${recipientEmail}
Sent at: ${new Date().toLocaleString()}
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: emailAddress,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    if (error) {
      console.error("[Resend Delivery Error]:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to deliver email through Resend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for contacting PlotStories. We will get back to you shortly.",
      id: data?.id,
    });
  } catch (error: any) {
    console.error("Error in /api/contact handler:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "There was an error processing your inquiry. Please try again later.",
    });
  }
}
