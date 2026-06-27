import Link from "next/link";
import Image from "next/image";
import call from "@/public/images/call.png";
import percent from "@/public/images/hero/new/percent.png";
import one from "@/public/images/about/04.jpg";
import two from "@/public/images/about/05.jpg";
import three from "@/public/images/about/06.jpg";

const AboutTwo = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrappper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-2">
                <div className="percent-shape">
                  <Image src={percent} alt="img" />
                </div>
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="about-img-2 "
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <Image src={one} alt="img" />
                    </div>
                    <div
                      className="about-img-2 style-2 "
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <Image src={two} alt="img" />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="about-img-3">
                      <Image src={three} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span data-aos-duration="800" data-aos="fade-up">
                    About Mongolian Outdoors
                  </span>
                  <h2
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Our Journey Memorable <br />
                    Adventures Worldwide
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  We offer carefully curated destinations and tours that capture
                  the true essence of location, ensuring you experience.
                </p>
                <div className="about-area">
                  <div
                    className="about-items "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="flaticon-support"></i>
                    </div>
                    <div className="content">
                      <h4>24/7 Support for Hassle-Free Trips</h4>
                      <p>
                        Our attraction pass save you more than buying individual
                        tickets for your tour package system.
                      </p>
                    </div>
                  </div>
                  <div
                    className="about-items "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon">
                      <i className="flaticon-exclusive"></i>
                    </div>
                    <div className="content">
                      <h4>Exclusive Deals on Top Destinations</h4>
                      <p>
                        Our attraction pass save you more than buying individual{" "}
                        <br /> tickets for your tour package system.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="author-items "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link href="/about" className="theme-btn">
                    <span>More About Mongolian Outdoors</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                  <div className="author-contact">
                    <div className="icon">
                      <Image src={call} alt="img" />
                    </div>
                    <div className="content">
                      <span>Contact</span>
                      <h6>
                        <Link href="tel:+8809533309">+976 8081-3636</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
