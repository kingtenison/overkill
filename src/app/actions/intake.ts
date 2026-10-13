"use server";

import { Resend } from "resend";

export interface IntakeFormData {
  goal: string;
  problemDescription: string;
  audience: string;
  stage: string;
  timeline: string;
  successMetric: string;
  name: string;
  email: string;
  organization?: string;
  phone?: string;
}

export interface IntakeResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitProjectIntake(
  data: IntakeFormData
): Promise<IntakeResponse> {
  try {
    // 1. Basic validation
    if (!data.name?.trim() || !data.email?.trim()) {
      return {
        success: false,
        error: "Name and email are required fields.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        error: "Please provide a valid email address.",
      };
    }

    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "kingtenison@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // 2. Format HTML email briefing
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050824; color: #ffffff; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background: #080d2b; border: 1px solid rgba(183, 219, 255, 0.2); border-radius: 20px; overflow: hidden; }
    .header { background: radial-gradient(circle at 100% 0%, #000099 0%, #03061d 100%); padding: 32px 28px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
    .brand { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; }
    .badge { display: inline-block; background: #ff6600; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 12px; margin-top: 8px; }
    .content { padding: 28px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
    .field { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #b7dbff; font-weight: 700; margin-bottom: 4px; }
    .val { font-size: 14px; color: #ffffff; font-weight: 600; word-break: break-word; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1.2px; color: #ff6600; font-weight: 800; margin: 24px 0 8px 0; }
    .box { background: rgba(255, 255, 255, 0.03); border-left: 3px solid #ff6600; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
    .footer { padding: 20px 28px; background: #03061d; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; }
    .reply-btn { display: inline-block; background: #ff6600; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand">=[ØVĒRKILL]= STUDIOS</div>
      <div class="badge">New Project Diagnostic Intake</div>
      <p style="margin: 8px 0 0 0; color: #b7dbff; font-size: 13px;">Received via website guided intake flow</p>
    </div>

    <div class="content">
      <div class="section-title">Client Information</div>
      <div class="grid">
        <div class="field">
          <div class="label">Client Name</div>
          <div class="val">${data.name}</div>
        </div>
        <div class="field">
          <div class="label">Email Address</div>
          <div class="val"><a href="mailto:${data.email}" style="color: #b7dbff;">${data.email}</a></div>
        </div>
        <div class="field">
          <div class="label">Company / Org</div>
          <div class="val">${data.organization || "Not specified"}</div>
        </div>
        <div class="field">
          <div class="label">Phone / WhatsApp</div>
          <div class="val">${data.phone || "Not specified"}</div>
        </div>
      </div>

      <div class="section-title">Project Parameters</div>
      <div class="grid">
        <div class="field">
          <div class="label">Selected Goal</div>
          <div class="val" style="color: #ffaa66;">${data.goal || "Not specified"}</div>
        </div>
        <div class="field">
          <div class="label">Timeline Horizon</div>
          <div class="val">${data.timeline || "Not specified"}</div>
        </div>
        <div class="field">
          <div class="label">Current Stage</div>
          <div class="val">${data.stage || "Not specified"}</div>
        </div>
        <div class="field">
          <div class="label">Target Audience</div>
          <div class="val">${data.audience || "Not specified"}</div>
        </div>
      </div>

      <div class="section-title">Problem Statement & Bottlenecks</div>
      <div class="box">${data.problemDescription || "No detailed description provided."}</div>

      ${
        data.successMetric
          ? `
      <div class="section-title" style="margin-top: 18px;">Target Success Metric</div>
      <div class="box" style="border-left-color: #000099;">${data.successMetric}</div>
      `
          : ""
      }
    </div>

    <div class="footer">
      <a href="mailto:${data.email}?subject=${encodeURIComponent(`Re: Your Project Intake with =[ØVĒRKILL]= Studios`)}" class="reply-btn">
        Reply Directly to ${data.name}
      </a>
      <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 16px;">
        =[ØVĒRKILL]= Studios • 24h Response SLA Guarantee
      </p>
    </div>
  </div>
</body>
</html>
    `;

    // 3. Dispatch strategy
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "OVERKILL Studios <onboarding@resend.dev>";

      const sendResult = await resend.emails.send({
        from: fromEmail,
        to: recipient,
        replyTo: data.email,
        subject: `[ØVĒRKILL Intake] ${data.name} — ${data.goal}`,
        html: htmlContent,
      });

      if (sendResult.error) {
        console.error("Resend delivery error:", sendResult.error);
        return {
          success: false,
          error: sendResult.error.message || "Failed to send email via Resend.",
        };
      }

      return {
        success: true,
        message: "Intake successfully received and emailed.",
      };
    }

    // 4. Free Web3Forms fallback if access key is set
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `[ØVĒRKILL Intake] ${data.name} — ${data.goal}`,
          from_name: `${data.name} via ØVĒRKILL`,
          replyto: data.email,
          ...data,
        }),
      });

      const resData = await resp.json();
      if (!resData.success) {
        return {
          success: false,
          error: resData.message || "Failed to submit via Web3Forms.",
        };
      }

      return {
        success: true,
        message: "Intake successfully dispatched via Web3Forms.",
      };
    }

    // 5. If no API key configured yet (e.g. initial dev test), log cleanly and confirm
    console.log("==========================================");
    console.log("📥 NEW INTAKE SUBMISSION (DEV LOG / NO API KEY SET)");
    console.log("To receive emails, set RESEND_API_KEY in .env.local");
    console.log(JSON.stringify(data, null, 2));
    console.log("==========================================");

    return {
      success: true,
      message: "Intake recorded successfully (Local Development mode).",
    };
  } catch (err: unknown) {
    console.error("Intake submission error:", err);
    const message = err instanceof Error ? err.message : "An unexpected error occurred.";
    return {
      success: false,
      error: message,
    };
  }
}
