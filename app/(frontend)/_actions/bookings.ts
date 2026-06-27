"use server";

import { getPayloadClient } from "@/lib/payload";
import type { FormState } from "./inquiries";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * Public tour booking submission → `bookings` collection.
 * The hidden `tour` field carries the current tour's id.
 */
export async function submitBooking(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const dateRaw = String(formData.get("date") ?? "").trim();
  const guestsRaw = String(formData.get("guests") ?? "").trim();
  const tourRaw = String(formData.get("tour") ?? "").trim();

  if (!name || !email) {
    return { status: "error", message: "Please provide your name and email." };
  }
  if (!isEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const tourId = tourRaw ? Number(tourRaw) : undefined;
  const guests = guestsRaw ? Number(guestsRaw) : undefined;

  try {
    const payload = await getPayloadClient();
    await payload.create({
      collection: "bookings",
      data: {
        name,
        email,
        phone: phone || undefined,
        message: message || undefined,
        date: dateRaw ? new Date(dateRaw).toISOString() : undefined,
        guests: Number.isFinite(guests) ? guests : undefined,
        tour: Number.isFinite(tourId) ? tourId : undefined,
        status: "new",
      },
    });
    return { status: "success", message: "Booking request received! We'll confirm shortly." };
  } catch (err) {
    console.error("submitBooking failed", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
