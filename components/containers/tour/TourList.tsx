"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import type { Tour } from "@/payload-types";
import { mediaProps } from "@/lib/media";
import Pagination from "../blog/Pagination";
import location from "@/public/images/hero/location.png";
import DatePick from "@/components/layout/banner/DatePick";
import ActivitySelect from "@/components/layout/select/ActivitySelect";
import GuestSelect from "@/components/layout/select/GuestSelect";

const TourList = ({ tours }: { tours: Tour[] }) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".amz-wrap",
      children: ".img-popup",
      mouseMovePan: true,
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <section className="amazing-tour-section section-padding">
        <div className="container">
          <div className="amazing-tour-wrapper amz-wrap">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4">
                <div className="tour-sidebar-area sticky-style">
                  <div className="tour-destination-sidebar">
                    <div className="booking-list-area">
                      <div className="booking-list">
                        <div className="icon">
                          <Image src={location} alt="img" />
                        </div>
                        <div className="content">
                          <h5>All Activity</h5>
                          <div className="form-clt">
                            <div className="form">
                              <ActivitySelect />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="booking-list">
                        <div className="icon">
                          <Image src={location} alt="img" />
                        </div>
                        <div className="content">
                          <h5>Departure Date</h5>
                          <div className="form-clt">
                            <div id="datepicker" className="input-group date">
                              <DatePick />
                              <span className="input-group-addon">
                                <i className="far fa-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="booking-list style-2">
                        <div className="icon">
                          <Image src={location} alt="img" />
                        </div>
                        <div className="content">
                          <h5>Guest</h5>
                          <div className="form-clt">
                            <div className="form">
                              <GuestSelect />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search-widget">
                        <form action="#">
                          <button type="submit" className="theme-btn">
                            <span>Search</span>
                            <i className="fal fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="row g-4">
                  {tours.map((item, index) => {
                    const img = mediaProps(item.image, "card");
                    return (
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 "
                        data-aos-duration="800"
                        data-aos="fade-up"
                        data-aos-delay={`${((index % 3) + 1) * 200}`}
                        key={item.id}
                      >
                        <div className="amazing-tour-items mt-0 van-tilt">
                          <div className="thumb">
                            <div className="post-box">
                              <h4>${item.price}</h4>
                              <span>/ person</span>
                            </div>
                            {img && (
                              <Image
                                src={img.src}
                                alt={img.alt || item.spot}
                                width={img.width}
                                height={img.height}
                              />
                            )}
                            <div className="list-items">
                              <h6>{item.featured ? "Featured" : item.country}</h6>
                              {img && (
                                <ul className="popup-icon">
                                  <li>
                                    <a
                                      href={img.src}
                                      className="img-popup"
                                      data-pswp-width={img.width}
                                      data-pswp-height={img.height}
                                      data-pswp-src={img.src}
                                    >
                                      <i className="far fa-camera"></i>
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                          <div className="content">
                            <h4>
                              <Link href={`/tour-details/${item.slug}`}>
                                {item.spot}
                              </Link>
                            </h4>
                            <span className="location-icon">
                              <i className="far fa-map-marker-alt"></i>
                              {item.country}
                            </span>
                            <Link
                              href={`/tour-details/${item.slug}`}
                              className="theme-btn"
                            >
                              <span>Book Now</span>{" "}
                              <i className="far fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="page-nav-wrap mt-5 text-center "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourList;
