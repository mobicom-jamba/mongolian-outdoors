"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FaqTwoData from "@/public/data/faq-two-data";
import thumb from "@/public/images/tour/details-1.jpg";
import GoogleMap from "../GoogleMap";
import ClientReview from "./ClientReview";
import discount from "@/public/images/destinations/disocunt.png";
import DatePick from "@/components/layout/banner/DatePick";

const TourDetails = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="tour-details-section section-padding">
      <div className="container">
        <div className="tour-details-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-7">
              <div className="tour-details-items">
                <div className="details-thumb">
                  <Image src={thumb} alt="img" />
                </div>
                <div className="details-content">
                  <span className="location-icon">
                    <i className="far fa-map-marker-alt"></i>
                    Khuvsgul Province, Mongolia
                  </span>
                  <h2>
                    Adventure & Nature in the Khuvsgul Lake Region
                  </h2>
                  <p className="mb-3">
                    We offer carefully curated tours across Mongolia's most
                    stunning natural destinations. Khuvsgul Lake is Mongolia's
                    deepest blue lake, surrounded by mountains, forests, and
                    pristine air that captivates every traveler. Here you can ride
                    horses, fish, and hike through the forest to connect with nature.
                  </p>
                  <p className="mb-3">
                    During the tour, visit local nomadic families, taste
                    traditional Mongolian cuisine, and experience staying in a ger.
                    The taiga forest around Khuvsgul is rich in wildlife — you can
                    spot eagles, owls, and red deer in their natural habitat.
                  </p>
                  <p>
                    Our team is deeply familiar with the geography and climate of
                    Mongolia's northern region, ensuring safe and comfortable travel
                    conditions. Every tour is led by an experienced guide who
                    provides detailed guidance on horseback riding, ger camping,
                    and traditional customs.
                  </p>
                  <div className="destination-list-item">
                    <h4>Our Highlights</h4>
                    <div className="destination-list">
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Trusted, Local Travel Experts
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Flexible, Hassle-Free Bookings
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Real-Time Itinerary Updates
                        </li>
                      </ul>
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Flexible Cancellation Policies
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Customized Travel Experiences
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Exclusive Travel Deals
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tour-details-icon">
                    <div className="row g-5 justity-content-end">
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-connection"></i>
                          <h5>Free Wi-Fi</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-cyber-security"></i>
                          <h5>Security Guarantee</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-guide"></i>
                          <h5>Professional Guide</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-gym"></i>
                          <h5>Gym Center</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-cycling"></i>
                          <h5>Cycling</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-hiking"></i>
                          <h5>Hiking</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-googles"></i>
                          <h5>Swimming & Fishing</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-solar-system"></i>
                          <h5>Solar Energy</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-items">
                    <h4>Tour Plan</h4>
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion2">
                        {FaqTwoData.slice(0, 4).map((item, index) => {
                          const isActive = activeIndex === index;
                          return (
                            <div className="accordion-item mb-3" key={item.id}>
                              <h5 className="accordion-header">
                                <button
                                  className={`accordion-button ${
                                    isActive ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  onClick={() => handleToggle(index)}
                                >
                                  <span>{item.day} : </span> {item.question}
                                </button>
                              </h5>
                              <div
                                className={`accordion-collapse collapse ${
                                  isActive ? "show" : ""
                                }`}
                              >
                                <div className="accordion-body">
                                  {item.answer}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
                <div className="tour-sidebar-items">
                  <h3>Tour Booking</h3>
                  <ul className="form-list">
                    <li>
                      From Date:
                      <div className="form-clt">
                        <div id="datepicker" className="input-group date">
                          <DatePick />
                          <span className="input-group-addon">
                            <i className="far fa-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      Time:
                      <div className="form-clt d-flex gap-3">
                        <label className="checkbox-single">
                          <span className="d-flex gap-xl-3 gap-2 align-items-center">
                            <span className="checkbox-area d-center">
                              <input type="checkbox" />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span className="text-color">12:00</span>
                          </span>
                        </label>
                        <label className="checkbox-single">
                          <span className="d-flex gap-xl-3 gap-2 align-items-center">
                            <span className="checkbox-area d-center">
                              <input type="checkbox" />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span className="text-color">10:00</span>
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="tickets-list">
                    <p>Tickets</p>
                    <ul>
                      <li>
                        18+ Years: <b>$168</b>
                        <div className="form-clt">
                          <div className="form">
                            <select className="single-select w-100">
                              <option> 01</option>
                              <option> 02</option>
                              <option> 03</option>
                              <option> 04</option>
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        18- Years: <b>$100</b>
                        <div className="form-clt">
                          <div className="form">
                            <select className="single-select w-100">
                              <option> 01</option>
                              <option> 02</option>
                              <option> 03</option>
                              <option> 04</option>
                            </select>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="extra-items">
                    <p>Add Extra:</p>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">
                          Add service per booking
                        </span>
                      </span>
                      <span className="text-color">$45</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">
                          Add service per person
                        </span>
                      </span>
                      <span className="text-color">$35</span>
                    </label>
                  </div>
                  <ul className="total-list">
                    <li>Total:</li>
                    <li>$80</li>
                  </ul>
                  <Link href="/tour-details" className="theme-btn">
                    <span>Book Now</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                  <p className="text">Need any help?</p>
                </div>
                <div
                  className="offer-card bg-cover"
                  style={{
                    backgroundImage:
                      "url(/images/destinations/offter-card.jpg)",
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
