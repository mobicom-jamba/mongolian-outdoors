"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Tour } from "@/payload-types";
import { mediaProps } from "@/lib/media";

const TourDiscover = ({ tours }: { tours: Tour[] }) => {
  return (
    <section
      className="tour-descover-section section-padding fix bg-cover"
      style={{
        backgroundImage: "url(/images/tour/bg2.jpg)",
      }}
    >
      <div className="container">
        <div className="tour-discover-wrapper">
          <div className="row g-4">
            <div className="col-xl-5">
              <div className="tour-content lg-center">
                <div className="section-title">
                  <span data-aos-duration="800" data-aos="fade-up">
                    Weekly Featured Events
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Special public events <br />
                    happening this summer
                  </h2>
                  <p
                    className="mt-3 mt-mb-0"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Join exciting events happening near you! <br />
                    These curated gatherings offer memorable experiences, <br />
                    community engagement, and something new to enjoy.
                  </p>
                </div>
                <div className="tour-button mt-3">
                  <Link
                    href="/tour"
                    className="theme-btn"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <span>Learn More</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="swiper tour-slider">
                <Swiper
                  spaceBetween={30}
                  speed={2000}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".dot",
                    clickable: true,
                  }}
                  breakpoints={{
                    1399: { slidesPerView: 3 },
                    1199: { slidesPerView: 3 },
                    991: { slidesPerView: 2 },
                    767: { slidesPerView: 2 },
                    575: { slidesPerView: 1 },
                    400: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  }}
                  className="swiper-wrapper"
                >
                  {tours.map((item) => {
                    const img = mediaProps(item.image, "card");
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="swiper-slide">
                          <div className="tour-card-item">
                            <div className="tour-image">
                              {img && (
                                <Image
                                  src={img.src}
                                  alt={img.alt || item.spot}
                                  width={img.width}
                                  height={img.height}
                                />
                              )}
                            </div>
                            <div className="tour-content">
                              <h6>
                                Entry From <span>${item.price}</span>{" "}
                                {item.discount ? `$${item.discount}` : ""}
                              </h6>
                              <h4>
                                <Link href={`/tour-details/${item.slug}`}>
                                  {item.spot}
                                </Link>
                              </h4>
                              <ul>
                                <li>
                                  <i className="far fa-map-marker-alt"></i>
                                  {item.country}
                                </li>
                              </ul>
                              <div className="list">
                                <ul>
                                  <li>
                                    <i className="far fa-calendar"></i>
                                    {item.day} Days / {item.night} Nights
                                  </li>
                                </ul>
                                <div className="star">
                                  <Link href="/">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                  <Link href="/">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                  <Link href="/">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                  <Link href="/">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                  <Link href="/">
                                    <i className="far fa-star"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="swiper-dot4 mt-5">
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDiscover;
