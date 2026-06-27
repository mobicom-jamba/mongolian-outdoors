"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import type { Faq } from "@/payload-types";

const FaqMain = ({ faqs }: { faqs: Faq[] }) => {
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  const [activeIndexLeft, setActiveIndexLeft] = useState<number | null>(0);
  const [activeIndexRight, setActiveIndexRight] = useState<number | null>(null);

  const handleToggleLeft = (index: number) => {
    setActiveIndexLeft((prevIndex) => (prevIndex === index ? null : index));

    setActiveIndexRight(null);
  };

  const handleToggleRight = (index: number) => {
    setActiveIndexRight((prevIndex) => (prevIndex === index ? null : index));

    setActiveIndexLeft(null);
  };

  return (
    <section className="faq-section section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos-duration="800" data-aos="fade-up">
            Frequently Ask Questions
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            Frequently Ask Questions About <br /> Our Travel Agency
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="faq-items">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {leftFaqs.map((item, index) => {
                    const isActive = activeIndexLeft === index;
                    return (
                      <div
                        className="accordion-item mb-3 "
                        data-aos-duration="800"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        key={item.id}
                      >
                        <h5 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              isActive ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => handleToggleLeft(index)}
                          >
                            {item.question}
                          </button>
                        </h5>
                        <AnimateHeight
                          duration={400}
                          height={isActive ? "auto" : 0}
                        >
                          <div
                            className={`accordion-collapse collapse ${
                              isActive ? "show" : ""
                            }`}
                          >
                            <div className="accordion-body">{item.answer}</div>
                          </div>
                        </AnimateHeight>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-items">
              <div className="faq-accordion">
                <div className="accordion" id="accordion2">
                  {rightFaqs.map((item, index) => {
                    const isActive = activeIndexRight === index;
                    return (
                      <div
                        className="accordion-item mb-3 "
                        data-aos-duration="800"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        key={item.id}
                      >
                        <h5 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              isActive ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => handleToggleRight(index)}
                          >
                            {item.question}
                          </button>
                        </h5>
                        <AnimateHeight
                          duration={400}
                          height={isActive ? "auto" : 0}
                        >
                          <div
                            className={`accordion-collapse collapse ${
                              isActive ? "show" : ""
                            }`}
                          >
                            <div className="accordion-body">{item.answer}</div>
                          </div>
                        </AnimateHeight>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
