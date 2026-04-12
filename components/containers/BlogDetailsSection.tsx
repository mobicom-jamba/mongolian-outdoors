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
                    <h2>Монголын тал нутагт адал явдал хийх нь</h2>
                    <div className="post-meta mt-3">
                      <span>
                        <i className="fal fa-user"></i>Бат-Эрдэнэ
                      </span>
                      <span>
                        <i className="fal fa-comments"></i>15 Сэтгэгдэл
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>2025 оны 2-р сарын 4
                      </span>
                    </div>
                    <p>
                      Монголын тал нутаг нь дэлхийн хамгийн өргөн уудам
                      бэлчээрт хамрагддаг бөгөөд эндхийн байгаль, соёл, уламжлал
                      нь жуулчдад онцгой туршлагаар хангадаг. Морь унаж тал нутгаар
                      давхих, гэрт байрлаж одод тэнгэртэй унтах, уламжлалт монгол
                      хоол амтлах зэрэг нь мартагдашгүй дурсгал бүтээдэг.
                    </p>
                    <p>
                      Бид олон төрлийн онцгой арга хэмжээг зохион байгуулж
                      байна. Наадам хурд, бүргэд барих ёслол, морин аялал, говийн
                      экспедиц, загасчлалын тэмцээн зэрэг адал явдалт үйл
                      ажиллагаанууд багтана.
                    </p>
                    <Image
                      src={one}
                      alt="blog__img"
                      className="single-post-image"
                    />
                    <h2 className="title-anim">
                      Монголд аялж байх хамгийн шалтгаан: Байгаль, соёл, адал явдал
                    </h2>
                    <p>
                      Монгол орон нь Азийн зүрхэнд орших бөгөөд говь, хээр,
                      ой хөндий, уулс гэсэн дөрвөн байгалийн бүстэй. Энэхүү
                      газарзүйн олон хувилбар нь жуулчдад янз бүрийн адал
                      явдал хийх боломжийг олгодог. Говийн элсэн мандалд явган
                      аялал хийхээс эхлээд Хөвсгөл нуурын цэнхэр мандалд
                      завьдаж, Алтайн мөнх цасны уулсанд авирах хүртэл.
                    </p>
                    <blockquote>
                      Цаг хугацаа хязгаарлагдмал тул өөр хүний амьдралаар амьдрах
                      хугацаа бүү үр. Өөрийнхөө зүрх сэтгэлийн дуу хоолойг
                      сонсож, зоригтой алхаж бай.
                    </blockquote>
                    <p>
                      Монголын аялал жуулчлалын салбар жил бүр хөгжих хандлагатай
                      байгаа бөгөөд олон улсын жуулчид Монголын байгалийн үзэсгэлэн,
                      соёлын өв, уламжлалт нүүдлийн соёл зэрэгт илүү их
                      анхаарал хандуулж байна. Энэхүү хөгжил нь дотоодын аялал
                      жуулчлалын үйл ажиллагааг ч урагшлуулж байна.
                    </p>
                    <ul className="checked-list mb-4">
                      <li>Морь унах туршлага — тал нутагт чөлөөтэй давхих</li>
                      <li>Уламжлалт гэрт байрлах — одод тэнгэртэй унтах</li>
                      <li>Монгол хоол амтлах — хорхог, бууз, цуйван</li>
                      <li>Бүргэд барих — хүчирхэг шувуутай нүүр тулсан</li>
                      <li>Наадамд оролцох — бөх, хурд, нум сум</li>
                    </ul>
                    <h4>Манай аяллын онцлогууд</h4>
                    <p>
                      Манай баг Монголын бүх бүс нутагт туршлагатай аялал
                      зохиогчидтой хамтран ажилладаг. Таны аюулгүй байдал,
                      таатай туршлага бол манай хамгийн чухал зорилго. Аяллын
                      өмнө бэлтгэл хангах, аяллын турш 24 цагийн тусламж,
                      аяллын дараа санал хүсэлт авах зэрэг бүх үе шатыг
                      хариуцдаг. Бидний зорилго нь танд Монголын байгаль,
                      соёлыг бүрэн дүүрэн мэдрэх боломжийг олоход оршино.
                    </p>
                    <Image className="alignleft" src={two} alt="blog__img" />
                    <p>
                      Монголын говийн бүс нутагт аялж байхдаа элсэн мандалд
                      явган аялал хийх, хадан уулсанд авирах, эртний динозаврын
                      олдворын газруудаар аялах зэрэг онцгой туршлагыг мэдрэх
                      боломжтой. Говийн өдөр шөнөгүйлэн өөрчлөгддөг цаг уур
                      нь өөрийн гэсэн баялаг билэг тэмдэг юм.
                    </p>
                    <p>
                      Хөвсгөл нуур бол Монголын хамгийн үзэсгэлэнт газруудын
                      нэг бөгөөд "Азийн цэнхэр перл" хэмээн алдаршсан. Энд
                      тайгын ой, цэнхэр мандал, уулс хүрээлэн буй байгаль
                      нь жуулчдад амар амгалан, адал явдал хоёуланг нь хангадаг.
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Холбоотой тагууд</h4>
                    <div className="tagcloud">
                      <Link href="/news-details">Аялал</Link>
                      <Link href="/news-details">Монгол</Link>
                      <Link href="/news-details">Байгаль</Link>
                      <Link href="/news-details">Соёл</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <h4>Хуваалцах</h4>
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
                    <h3>03 Сэтгэгдэл</h3>
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
                                <i className="fal fa-reply"></i>Хариулах
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
                  <h3>Сэтгэгдэл үлдээх</h3>
                  <CommentForm />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-5">
              <div className="main-sidebar sticky-style">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Хайх</h3>
                  </div>
                  <div className="search_widget">
                    <PostSearchForm />
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Эрэлттэй нийтлэлүүд</h3>
                  </div>
                  <PopularFeed />
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Ангиллууд</h3>
                  </div>
                  <BlogCategories />
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Мэдээг алдалгүй</h3>
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
                    <h3>Түгээмэл тагууд</h3>
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
