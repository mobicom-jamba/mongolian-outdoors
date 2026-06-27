import Link from "next/link";
import PopularTags from "./PopularTags";
import PostSearchForm from "./PostSearchForm";
import Pagination from "./Pagination";
import { getPayloadClient } from "@/lib/payload";
import { mediaProps } from "@/lib/media";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogMain = async () => {
  const payload = await getPayloadClient();
  const { docs: news } = await payload.find({
    collection: "news",
    where: { published: { equals: true } },
    limit: 10,
    depth: 1,
    sort: "-date",
  });

  return (
    <section className="blog-wrapper news-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-7">
              <div className="blog-posts">
                {news.map((item) => {
                  const img = mediaProps(item.image, "feature");
                  return (
                    <div className="single-blog-post" key={item.id}>
                      <div
                        className="post-featured-thumb bg-cover"
                        style={
                          img ? { backgroundImage: `url(${img.src})` } : undefined
                        }
                      ></div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-user"></i>
                            By Admin
                          </span>
                          <span>
                            <i className="fal fa-calendar-alt"></i>
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <h2>
                          <Link href={`/news-details/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h2>
                        <p>{item.description}</p>
                        <Link
                          href={`/news-details/${item.slug}`}
                          className="theme-btn mt-4 line-height"
                        >
                          <span>Read More</span>{" "}
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="page-nav-wrap mt-5 text-center">
                <Pagination />
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-5">
              <div className="main-sidebar sticky-style">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Search</h3>
                  </div>
                  <div className="search_widget">
                    <PostSearchForm />
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Never Miss News</h3>
                  </div>
                  <div className="social-link">
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <PopularTags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
