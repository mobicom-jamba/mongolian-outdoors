import Link from "next/link";
import Image from "next/image";
import { getPayloadClient } from "@/lib/payload";
import { mediaProps } from "@/lib/media";

const TeamMain = async () => {
  const payload = await getPayloadClient();
  const { docs: team } = await payload.find({
    collection: "team",
    limit: 12,
    depth: 1,
    sort: "createdAt",
  });

  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {team.map((item, index) => {
            const img = mediaProps(item.image, "card");
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={`${((index % 4) + 1) * 200}`}
                key={item.id}
              >
                <div className="team-box-items mt-0 van-tilt">
                  <div className="thumb">
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt || item.name}
                        width={img.width}
                        height={img.height}
                      />
                    )}
                  </div>
                  <div className="content">
                    <p>{item.designation}</p>
                    <h3>
                      <Link href={`/team-details/${item.slug}`}>{item.name}</Link>
                    </h3>
                    <div className="social-icon">
                      <Link href={item.facebook || "#"}>
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href={item.instagram || "#"}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href={item.twitter || "#"}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </div>
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

export default TeamMain;
