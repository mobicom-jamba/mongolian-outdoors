import Link from "next/link";
import Image from "next/image";
import { getPayloadClient } from "@/lib/payload";
import { mediaProps } from "@/lib/media";
import discount from "@/public/images/cta/discount.png";
import bag from "@/public/images/cta/bag.png";
import shape from "@/public/images/cta/olane-shape.png";

const TopDestination = async () => {
  const payload = await getPayloadClient();
  const { docs: destinations } = await payload.find({
    collection: "destinations",
    limit: 8,
    depth: 1,
    sort: "createdAt",
  });

  return (
    <section className="top-destination-section-4 section-padding pb-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos-duration="800" data-aos="fade-up">
              Our Top Destination
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Inspiration for Future Travel
            </h2>
            <p
              className="mt-3 mt-mb-0 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Our attraction passes save you more than buying individual tickets
              for <br /> your tour package system our attraction passes.
            </p>
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
          {destinations.map((item, index) => {
            const img = mediaProps(item.image, undefined, { width: 64, height: 64 });
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={`${((index % 4) + 1) * 200}`}
                key={item.id}
              >
                <div className="destination-feature-box van-tilt">
                  <div className="icon">
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt || item.type}
                        width={img.width}
                        height={img.height}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h6>{item.type}</h6>
                    <span>
                      <b>{item.quantity}</b> Tours - From <b>${item.price}</b>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="cta-wrapper-4 section-padding bg-cover"
          style={{
            backgroundImage: "url(/images/cta/cta-bg-3.jpg)",
          }}
        >
          <div className="section-title text-center mb-0">
            <span data-aos-duration="800" data-aos="fade-up">
              Special Offer
            </span>
            <h2
              className="text-white "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Grab Up To 39% Off On <br /> Your Favorite Destination
            </h2>
          </div>
          <Link
            href="/tour-list"
            className="theme-btn "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Book Now</span> <i className="far fa-long-arrow-right"></i>
          </Link>
          <div className="discount-shape float-bob-y">
            <Image src={discount} alt="img" />
          </div>
          <div className="bag-shape float-bob-x">
            <Image src={bag} alt="img" />
          </div>
          <div className="plane-shape">
            <Image src={shape} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestination;
