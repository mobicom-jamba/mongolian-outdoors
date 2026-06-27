import Link from "next/link";
import Image from "next/image";
import { getPayloadClient } from "@/lib/payload";
import { mediaProps } from "@/lib/media";

const TourMain = async () => {
  const payload = await getPayloadClient();
  const { docs: tours } = await payload.find({
    collection: "tours",
    limit: 12,
    depth: 1,
    sort: "-createdAt",
  });

  return (
    <section className="tour-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {tours.map((item, index) => {
            const img = mediaProps(item.image, "card");
            return (
              <div
                className="col-xl-3 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={`${((index % 4) + 1) * 200}`}
                key={item.id}
              >
                <div className="tour-box-items van-tilt">
                  <div className="thumb">
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt || item.spot}
                        width={img.width}
                        height={img.height}
                      />
                    )}
                  </div>
                  <div className="content">
                    <span>{item.country}</span>
                    <h4>
                      <Link href={`/tour-details/${item.slug}`}>{item.spot}</Link>
                    </h4>
                    <h6>
                      From <span>${item.price}</span>{" "}
                      {item.discount ? <del>${item.discount}</del> : null}
                    </h6>
                    <ul className="list">
                      <li>
                        <i className="far fa-calendar"></i>
                        {item.day} Days / {item.night} Night
                      </li>
                      <li>
                        <i className="far fa-flag"></i>
                        {item.totalCountry} Countries
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

export default TourMain;
