import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(12),
  budget: z.string().min(1),
  contactMethod: z.string().min(1),
});

/**
 * Receives contact enquiries.
 *
 * Currently logs the enquiry server-side. To deliver it elsewhere, add one of:
 *   - an email API call (Resend / Postmark)
 *   - a POST to an n8n webhook (process.env['ENQUIRY_WEBHOOK_URL'])
 *   - a CRM create (GoHighLevel / HubSpot)
 *   - an insert into a Lovable Cloud table
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const webhookUrl = process.env["ENQUIRY_WEBHOOK_URL"];
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
      });
    } else {
      console.info("[enquiry]", { ...data, receivedAt: new Date().toISOString() });
    }
    return { ok: true as const };
  });
