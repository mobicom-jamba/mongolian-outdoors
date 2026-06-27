"use client";

import { useActionState } from "react";
import { submitInquiry, type FormState } from "@/app/(frontend)/_actions/inquiries";

const initial: FormState = { status: "idle" };

const InquiryForm = () => {
  const [state, formAction, pending] = useActionState(submitInquiry, initial);

  return (
    <form action={formAction} className="contact-form-items">
      <div className="row g-4">
        <div
          className="col-lg-6"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="form-clt">
            <input type="email" name="email" placeholder="Enter email" required />
          </div>
        </div>
        <div
          className="col-lg-6"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="form-clt">
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
        </div>
        <div
          className="col-lg-12"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="form-clt">
            <input type="text" name="name" placeholder="Enter name" required />
          </div>
        </div>
        <div
          className="col-lg-12"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="form-clt">
            <textarea name="message" placeholder="Enter message..." required></textarea>
          </div>
        </div>
        <div
          className="col-lg-12"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button type="submit" className="theme-btn" disabled={pending}>
            <span>{pending ? "Sending..." : "Send Message"}</span>{" "}
            <i className="far fa-long-arrow-right"></i>
          </button>
        </div>
        {state.status !== "idle" && (
          <div className="col-lg-12">
            <p
              role="status"
              className={state.status === "success" ? "form-success" : "form-error"}
              style={{ color: state.status === "success" ? "#1a8f4c" : "#d33", marginTop: 8 }}
            >
              {state.message}
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default InquiryForm;
