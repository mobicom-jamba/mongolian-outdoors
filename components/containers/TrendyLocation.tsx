"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TrendyLocationData from "@/public/data/trendy-location-data";

const TrendyLocation = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const [itemWidth, setItemWidth] = useState<string>("");

  useEffect(() => {
    const getSlide = TrendyLocationData.length;
    const slideCal = 100 / getSlide + "%";
    setItemWidth(slideCal);
  }, []);

  const handleMouseEnter = (id: number) => {
    setActiveItem(id);
  };

  return (
    <section className="destination-section-3 fix section-padding pt-0">
      <div className="container">
        <div className="section-title-area lg-center">
          <div className="section-title">
            <span data-aos-duration="800" data-aos="fade-up">
              Trending Destinations
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Trendy Travel Locations
            </h2>
          </div>
          <Link
            href="/destination"
            className="theme-btn "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Read More</span>{" "}
            <i className="far fa-long-arrow-right"></i>
          </Link>
        </div>
        <div
          className="destination-wrapper-4"
          data-aos-duration="800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {TrendyLocationData.slice(0, 5).map((item) => {
            return (
              <div
                className={`destination-image-items-4 ${
                  activeItem === item.id ? "active" : ""
                } ${item.id % 2 !== 0 ? "style-margin" : ""}`}
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                style={{ width: itemWidth }}
              >
                <Image src={item.image} alt={item.spot} />
                <Link href={`${item.destination}`} className="icon">
                  <i className="far fa-arrow-right"></i>
                </Link>
                <div className="content">
                  <h4>
                    <Link href={`${item.destination}`}>{item.spot}</Link>
                  </h4>
                  <span>
                    <b>{item.country}</b> Destination
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendyLocation;
