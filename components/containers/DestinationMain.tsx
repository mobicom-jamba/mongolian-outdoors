import Link from "next/link";
import Image from "next/image";
import { getPayloadClient } from "@/lib/payload";
import { mediaProps } from "@/lib/media";

const DestinationMain = async () => {
  const payload = await getPayloadClient();
  const { docs: destinations } = await payload.find({
    collection: "destinations",
    limit: 24,
    depth: 1,
    sort: "createdAt",
  });

  return (
    <div className="trending-destinations section-padding">
      <div className="container">
        <div className="row g-4">
          {destinations.map((item, index) => {
            const img = mediaProps(item.image, undefined, { width: 64, height: 64 });
            return (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay={`${((index % 3) + 1) * 200}`}
                key={item.id}
              >
                <div className="trending-destinations-card-items mt-0 van-tilt">
                  <div className="destinations-img">
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt || item.type}
                        width={img.width}
                        height={img.height}
                      />
                    )}
                    <ul className="destinations-content">
                      <li className="title">
                        <Link href="/tour-list">{item.type}</Link>
                      </li>
                    </ul>
                    <div className="icon">
                      <Link href="/tour-list">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DestinationMain;
