"use client";
import { useState } from "react";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Tour } from "@/payload-types";
import { mediaProps } from "@/lib/media";
import GoogleMap from "../GoogleMap";
import ClientReview from "./ClientReview";
import BookingForm from "@/components/containers/forms/BookingForm";
import discount from "@/public/images/destinations/disocunt.png";

const TourDetails = ({ tour }: { tour: Tour }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const thumb = mediaProps(tour.image, "feature");
  const highlights = (tour.highlights ?? []).filter((h) => h.text);
  const included = (tour.included ?? []).filter((i) => i.text);
  const excluded = (tour.excluded ?? []).filter((e) => e.text);
  const itinerary = tour.itinerary ?? [];

  return (
    <section className="tour-details-section section-padding">
      <div className="container">
        <div className="tour-details-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-7">
              <div className="tour-details-items">
                <div className="details-thumb">
                  {thumb && (
                    <Image
                      src={thumb.src}
                      alt={thumb.alt || tour.spot}
                      width={thumb.width}
                      height={thumb.height}
                    />
                  )}
                </div>
                <div className="details-content">
                  <span className="location-icon">
                    <i className="far fa-map-marker-alt"></i>
                    {tour.country}
                  </span>
                  <h2>{tour.spot}</h2>
                  <h6 className="mb-3">
                    From <span>${tour.price}</span>{" "}
                    {tour.discount ? <del>${tour.discount}</del> : null} ·{" "}
                    {tour.day} Days / {tour.night} Night
                  </h6>

                  {tour.description ? (
                    <div className="mb-3">
                      <RichText data={tour.description} />
                    </div>
                  ) : tour.shortDescription ? (
                    <p className="mb-3">{tour.shortDescription}</p>
                  ) : null}

                  {(highlights.length > 0 ||
                    included.length > 0 ||
                    excluded.length > 0) && (
                    <div className="destination-list-item">
                      {highlights.length > 0 && <h4>Our Highlights</h4>}
                      <div className="destination-list">
                        {highlights.length > 0 && (
                          <ul className="list">
                            {highlights.map((h, i) => (
                              <li key={i}>
                                <i className="flaticon-check"></i>
                                {h.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {(included.length > 0 || excluded.length > 0) && (
                        <div className="destination-list mt-3">
                          {included.length > 0 && (
                            <ul className="list">
                              {included.map((i, idx) => (
                                <li key={idx}>
                                  <i className="flaticon-check"></i>
                                  {i.text}
                                </li>
                              ))}
                            </ul>
                          )}
                          {excluded.length > 0 && (
                            <ul className="list">
                              {excluded.map((e, idx) => (
                                <li key={idx}>
                                  <i className="fas fa-times"></i>
                                  {e.text}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {itinerary.length > 0 && (
                    <div className="faq-items">
                      <h4>Tour Plan</h4>
                      <div className="faq-accordion">
                        <div className="accordion" id="accordion2">
                          {itinerary.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                              <div className="accordion-item mb-3" key={item.id ?? index}>
                                <h5 className="accordion-header">
                                  <button
                                    className={`accordion-button ${
                                      isActive ? "" : "collapsed"
                                    }`}
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                  >
                                    {item.title}
                                  </button>
                                </h5>
                                <div
                                  className={`accordion-collapse collapse ${
                                    isActive ? "show" : ""
                                  }`}
                                >
                                  <div className="accordion-body">
                                    {item.details}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="map-area">
                    <h3>View on Map</h3>
                    <GoogleMap />
                  </div>
                  <ClientReview />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="tour-details-sidebar sticky-style">
                <BookingForm tourId={tour.id} price={tour.price} />
                <div
                  className="offer-card bg-cover"
                  style={{
                    backgroundImage: "url(/images/destinations/offter-card.jpg)",
                  }}
                >
                  <h3>Book Now and Enjoy Amazing Savings!</h3>
                  <Image src={discount} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
