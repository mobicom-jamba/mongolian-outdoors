import Link from "next/link";
import Image from "next/image";
import CommentData from "@/public/data/comment-data";
import CommentForm from "./blog/CommentForm";
import one from "@/public/images/news/post-4.jpg";
import two from "@/public/images/news/post-5.jpg";
import PopularFeed from "./blog/PopularFeed";
import BlogCategories from "./blog/BlogCategories";
import PopularTags from "./blog/PopularTags";
import PostSearchForm from "./blog/PostSearchForm";

const BlogDetailsSection = () => {
  return (
    <section className="blog-wrapper news-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-7">
              <div className="blog-post-details border-wrap mt-0">
                <div className="single-blog-post post-details mt-0">
                  <div className="post-content pt-0">
                    <h2>Adventuring Through Mongolia's Great Steppe</h2>
                    <div className="post-meta mt-3">
                      <span>
                        <i className="fal fa-user"></i>Bat-Erdene
                      </span>
                      <span>
                        <i className="fal fa-comments"></i>15 Comments
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>4th February 2025
                      </span>
                    </div>
                    <p>
                      Mongolia's vast steppe is part of the world's largest grassland,
                      where nature, culture, and tradition offer travelers a truly
                      unique experience. Horseback riding across the open plains,
                      sleeping in a ger under the stars, and tasting traditional
                      Mongolian cuisine create unforgettable memories.
                    </p>
                    <p>
                      We organize a variety of special events including Naadam
                      horse racing, eagle hunting ceremonies, horseback expeditions,
                      Gobi desert adventures, and fishing tournaments.
                    </p>
                    <Image
                      src={one}
                      alt="blog__img"
                      className="single-post-image"
                    />
                    <h2 className="title-anim">
                      Why You Should Travel to Mongolia: Nature, Culture & Adventure
                    </h2>
                    <p>
                      Mongolia sits at the heart of Asia, featuring four distinct
                      natural zones: desert, steppe, forest, and mountains. This
                      geographic diversity gives travelers the chance to enjoy a
                      wide range of adventures — from hiking the Gobi sand dunes
                      to kayaking on Khuvsgul Lake and climbing the snow-capped
                      Altai Mountains.
                    </p>
                    <blockquote>
                      Your time is limited, so don't waste it living someone else's
                      life. Listen to your heart's voice and walk with courage.
                    </blockquote>
                    <p>
                      Mongolia's tourism industry is growing every year, with
                      international travelers increasingly drawn to its natural
                      beauty, cultural heritage, and nomadic traditions. This
                      growth is also boosting domestic tourism activities.
                    </p>
                    <ul className="checked-list mb-4">
                      <li>Horseback riding — gallop across the open steppe</li>
                      <li>Stay in a traditional ger — sleep under the stars</li>
                      <li>Taste Mongolian cuisine — khorkhog, buuz, khuushuur</li>
                      <li>Eagle hunting — face-to-face with majestic birds</li>
                      <li>Join Naadam Festival — wrestling, racing, archery</li>
                    </ul>
                    <h4>Our Tour Highlights</h4>
                    <p>
                      Our team partners with experienced tour operators across
                      every region of Mongolia. Your safety and enjoyment are our
                      top priorities. We handle every step — from pre-trip
                      preparation to 24/7 on-tour support and post-tour feedback.
                      Our goal is to help you fully experience Mongolia's nature
                      and culture.
                    </p>
                    <Image className="alignleft" src={two} alt="blog__img" />
                    <p>
                      Traveling through Mongolia's Gobi region offers extraordinary
                      experiences — hiking sand dunes, climbing rocky mountains,
                      and exploring ancient dinosaur fossil sites. The Gobi's
                      dramatic day-to-night climate shifts are a signature of its
                      unique character.
                    </p>
                    <p>
                      Khuvsgul Lake is one of Mongolia's most beautiful destinations,
                      famously known as the "Blue Pearl of Asia." Surrounded by
                      taiga forest, crystal-clear waters, and mountains, it offers
                      travelers both serenity and adventure.
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Related Tags</h4>
                    <div className="tagcloud">
                      <Link href="/news-details">Travel</Link>
                      <Link href="/news-details">Mongolia</Link>
                      <Link href="/news-details">Nature</Link>
                      <Link href="/news-details">Culture</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <h4>Social Share</h4>
                    <div className="social-share">
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
                    </div>
                  </div>
                </div>
                <div className="comments-section-wrap pt-40">
                  <div className="comments-heading">
                    <h3>03 Comments</h3>
                  </div>
                  <ul className="comments-item-list">
                    {CommentData.map((item) => {
                      return (
                        <li className="single-comment-item" key={item.id}>
                          <div className="author-img">
                            <Image
                              src={item.authorImage}
                              alt={item.authorName}
                            />
                          </div>
                          <div className="author-info-comment">
                            <div className="info">
                              <h5>{item.authorName}</h5>
                              <span>{item.date}</span>
                              <Link href="/" className="theme-btn minimal-btn">
                                <i className="fal fa-reply"></i>Reply
                              </Link>
                            </div>
                            <div className="comment-text">
                              <p>{item.comment}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="comment-form-wrap d-block pt-5">
                  <h3>Post Comment</h3>
                  <CommentForm />
                </div>
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
                    <h3>Popular Feeds</h3>
                  </div>
                  <PopularFeed />
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <BlogCategories />
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

export default BlogDetailsSection;
