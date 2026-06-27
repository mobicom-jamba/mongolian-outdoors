import Link from "next/link";
import Image from "next/image";
import type { Team } from "@/payload-types";
import { mediaProps } from "@/lib/media";

const TeamDetails = ({ member }: { member: Team }) => {
  const img = mediaProps(member.image, "card");

  return (
    <section className="team-details-section fix section-padding">
      <div className="container">
        <div className="team-details-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="team-details-image">
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt || member.name}
                    width={img.width}
                    height={img.height}
                  />
                )}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-details-content">
                <div className="details-info">
                  <h3>{member.name}</h3>
                  <span>{member.designation}</span>
                </div>
                {member.bio && <p className="mt-3">{member.bio}</p>}
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
                  <Link href={member.facebook || "#"}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href={member.twitter || "#"}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href={member.instagram || "#"}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href={member.dribble || "#"}>
                    <i className="fas fa-basketball-ball"></i>
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
