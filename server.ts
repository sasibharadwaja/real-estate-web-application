import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = 3000;

// Set high limits for base64 image payload upload
app.use(express.json({ limit: "10mb" }));

// API contact endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      city,
      emailAddress,
      interestedIn,
      preferredLocation,
      budget,
      message,
    } = req.body;

    // Validation
    if (!fullName || !phoneNumber || !emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Phone Number, and Email Address are required fields.",
      });
    }

    const recipientEmail = "bmsrao2001@gmail.com";
    const emailSubject = `[PlotStories Lead] ${fullName} - Interested in ${interestedIn}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Silver and Black Premium Header -->
        <div style="background: linear-gradient(135deg, #111111 0%, #2a2a2a 100%); color: #ffffff; padding: 24px; text-align: center; border-bottom: 4px solid #a1a1aa;">
          <h2 style="margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">PlotStories</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 1px;">Premium Real Estate Guidance</p>
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
          <p style="margin: 0;">This email was sent via the <strong>PlotStories</strong> contact form.</p>
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

    let transporter;
    let isTestAccount = false;
    let testUrl = "";

    // SMTP setup
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      isTestAccount = true;
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || `"PlotStories Consultation" <noreply@plotstories.in>`,
      to: recipientEmail,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: emailAddress,
    };

    const info = await transporter.sendMail(mailOptions);

    if (isTestAccount) {
      testUrl = nodemailer.getTestMessageUrl(info) || "";
      console.log(`[SMTP] Test email sent. Preview URL: ${testUrl}`);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for contacting PlotStories. We will get back to you shortly.",
      isTestAccount,
      testUrl,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "There was an error processing your inquiry. Please try again later.",
      error: error.message,
    });
  }
});

// API profile photo upload endpoint
app.post("/api/upload-profile", async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ success: false, message: "No image provided" });
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const rootPath = path.join(process.cwd(), "madhu_profile.jpg");
    fs.writeFileSync(rootPath, buffer);

    const distDir = path.join(process.cwd(), "dist");
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, "madhu_profile.jpg"), buffer);
    }

    console.log("[Server] Madhu's profile photo saved successfully.");
    return res.status(200).json({ success: true, url: "/madhu_profile.jpg" });
  } catch (error: any) {
    console.error("Error uploading profile picture:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Start server
async function startServer() {
  // Directly serve madhu_profile.jpg if it exists
  app.get("/madhu_profile.jpg", (req, res, next) => {
    const filePath = path.join(process.cwd(), "madhu_profile.jpg");
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
