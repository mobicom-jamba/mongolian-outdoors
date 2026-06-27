import Link from "next/link";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { News } from "@/payload-types";
import { mediaProps } from "@/lib/media";
import CommentData from "@/public/data/comment-data";
import CommentForm from "./blog/CommentForm";
import PopularFeed from "./blog/PopularFeed";
import BlogCategories from "./blog/BlogCategories";
import PopularTags from "./blog/PopularTags";
import PostSearchForm from "./blog/PostSearchForm";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogDetailsSection = ({ post }: { post: News }) => {
  const cover = mediaProps(post.image, "feature");

  return (
    <section className="blog-wrapper news-wrapper section-padding">
      <div className="container">
        <div className="news-area">
          <div className="row">
            <div className="col-12 col-xl-8 col-lg-7">
              <div className="blog-post-details border-wrap mt-0">
                <div className="single-blog-post post-details mt-0">
                  <div className="post-content pt-0">
                    <h2>{post.title}</h2>
                    <div className="post-meta mt-3">
                      <span>
                        <i className="fal fa-user"></i>Admin
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>
                        {formatDate(post.date)}
                      </span>
                    </div>
                    {post.description && <p>{post.description}</p>}
                    {cover && (
                      <Image
                        src={cover.src}
                        alt={cover.alt || post.title}
                        width={cover.width}
                        height={cover.height}
                        className="single-post-image"
                      />
                    )}
                    {post.body && (
                      <div className="mt-4">
                        <RichText data={post.body} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Related Tags</h4>
                    <div className="tagcloud">
                      <Link href="/news">Travel</Link>
                      <Link href="/news">Mongolia</Link>
                      <Link href="/news">Nature</Link>
                      <Link href="/news">Culture</Link>
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
