"use client";

import { useActionState } from "react";
import { submitBooking } from "@/app/(frontend)/_actions/bookings";
import type { FormState } from "@/app/(frontend)/_actions/inquiries";

const initial: FormState = { status: "idle" };

const BookingForm = ({ tourId, price }: { tourId: number; price: number }) => {
  const [state, formAction, pending] = useActionState(submitBooking, initial);

  return (
    <form action={formAction} className="tour-sidebar-items">
      <h3>Tour Booking</h3>
      <input type="hidden" name="tour" value={tourId} />
      <ul className="form-list">
        <li>
          Full name:
          <div className="form-clt">
            <input type="text" name="name" placeholder="Your name" required />
          </div>
        </li>
        <li>
          Email:
          <div className="form-clt">
            <input type="email" name="email" placeholder="Your email" required />
          </div>
        </li>
        <li>
          Phone:
          <div className="form-clt">
            <input type="text" name="phone" placeholder="Phone number" />
          </div>
        </li>
        <li>
          From date:
          <div className="form-clt">
            <input type="date" name="date" />
          </div>
        </li>
        <li>
          Guests:
          <div className="form-clt">
            <input type="number" name="guests" min={1} defaultValue={1} />
          </div>
        </li>
        <li>
          Message:
          <div className="form-clt">
            <textarea name="message" placeholder="Anything else?"></textarea>
          </div>
        </li>
      </ul>
      <ul className="total-list">
        <li>From:</li>
        <li>${price}</li>
      </ul>
      <button type="submit" className="theme-btn" disabled={pending}>
        <span>{pending ? "Sending..." : "Book Now"}</span>{" "}
        <i className="far fa-long-arrow-right"></i>
      </button>
      {state.status !== "idle" && (
        <p
          role="status"
          style={{
            marginTop: 12,
            color: state.status === "success" ? "#1a8f4c" : "#d33",
          }}
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export default BookingForm;
