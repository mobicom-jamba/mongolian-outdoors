"use server";

import { getPayloadClient } from "@/lib/payload";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * Public contact / FAQ inquiry submission → `inquiries` collection.
 * Used with useActionState from ContactForm and FaqContactForm.
 */
export async function submitInquiry(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }
  if (!isEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const payload = await getPayloadClient();
    await payload.create({
      collection: "inquiries",
      data: {
        name,
        email,
        phone: phone || undefined,
        subject: subject || undefined,
        message,
      },
    });
    return { status: "success", message: "Thanks! We'll get back to you soon." };
  } catch (err) {
    console.error("submitInquiry failed", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
