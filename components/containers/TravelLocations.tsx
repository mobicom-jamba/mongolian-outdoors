import Link from "next/link";
import Image from "next/image";
import LocationData from "@/public/data/location-data";

const TravelLocations = () => {
  return (
    <section className="trending-destinations section-padding fix">
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
            className="theme-btn theme-btn-2 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Read More</span>{" "}
            <i className="far fa-long-arrow-right"></i>
          </Link>
        </div>
        <div className="row">
          {LocationData.slice(0, 6).map((item) => {
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={item.id}
              >
                <div className="trending-destinations-card-items van-tilt">
                  <div className="destinations-img">
                    <Image src={item.image} alt={item.location} />
                    <div className="icon">
                      <Link href="/destination">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                    <ul className="destinations-content">
                      <li className="title">
                        <Link href="/destination">
                          {item.location}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelLocations;
