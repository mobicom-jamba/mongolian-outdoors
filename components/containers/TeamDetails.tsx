import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/images/team/details.jpg";

const TeamDetails = () => {
  return (
    <section className="team-details-section fix section-padding">
      <div className="container">
        <div className="team-details-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="team-details-image">
                <Image src={thumb} alt="team-img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-details-content">
                <div className="details-info">
                  <h3>Bat-Erdene Dulam</h3>
                  <span>Tour Guide</span>
                </div>
                <p className="mt-3">
                  A travel professional with over 10 years of experience in
                  Mongolia's steppe. Organizes tours across the Gobi and grassland
                  regions, introducing foreign visitors to Mongolia's nature,
                  culture, and traditions. Specializes in horseback riding and
                  eagle hunting adventures.
                </p>
                <div className="progress-area mt-4">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Tour Package</h6>
                        <span className="point">90%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Travel</h6>
                        <span className="point">95%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-icon">
                  <span>Social Media:</span>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="team-single-history pt-5">
            <div className="title">
              <h3>Professional Experience</h3>
            </div>
            <h5 className="pt-5">
              Tour Guide <span>2014 - 2017</span>
            </h5>
            <p className="mt-3">
              Organized tours in Mongolia's northern regions of Khuvsgul and
              Khentii, guiding visitors through stunning natural landscapes.
              Experienced in horseback riding and fishing tours. Provides
              guidance on ger camping and traditional cooking.
            </p>
            <h5 className="pt-5">
              Senior Tour Organizer <span>2018 - 2024 </span>
            </h5>
            <p className="mt-3">
              Organizes tours for international visitors across the Gobi region
              including Gobi-Altai, Bayankhongor, and Omnogovi provinces.
              Guides through Gobi oases, rocky mountains, and ancient dinosaur
              fossil sites. Holds an international tourism professional
              certificate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
