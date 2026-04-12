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
                  <h3>Бат-Эрдэнэ Дулам</h3>
                  <span>Аялал жуулчлалын удирдагч</span>
                </div>
                <p className="mt-3">
                  Монголын тал нутагт 10 гаруй жилийн туршлагатай аялал жуулчлалын
                  мэргэжилтэн. Говь, хээрийн бүс нутгуудаар аялал зохиож, гадаадын
                  жуулчдад Монголын байгаль, соёл, уламжлатыг таниулан мэдээлдэг.
                  Морь унах, бүргэд барих зэрэг уламжлалт адал явдлыг зохион байгуулдаг.
                </p>
                <div className="progress-area mt-4">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Аялалын багц</h6>
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
                        <h6 className="title">Аялал</h6>
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
                  <span>Цахим холбоос:</span>
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
              <h3>Мэргэжлийн туршлага</h3>
            </div>
            <h5 className="pt-5">
              Аялал жуулчлалын удирдагч <span>2014 - 2017</span>
            </h5>
            <p className="mt-3">
              Монголын хойд бүсийн Хөвсгөл, Хэнтий аймгуудаар аялал зохиож,
              жуулчдад байгалийн үзэсгэлэнт газруудаар хөтчилж байсан. Морин
              аялал, загасчлалын туршлагатай. Гэр байрлах, уламжлалт хоол
              хийх зааварчилгаа өгдөг.
            </p>
            <h5 className="pt-5">
              Ахлах аялал зохион байгуулагч <span>2018 - 2024 </span>
            </h5>
            <p className="mt-3">
              Говийн бүсийн Говь-Алтай, Баянхонгор, Өмнөговь аймгуудаар
              олон улсын жуулчдад аялал зохиож байна. Говийн баян бүрд, хадан
              уулс, эртний динозаврын олдворын газруудаар хөтчилдөг. Олон улсын
              аялал жуулчлалын мэргэжлийн гэрчилгээтэй.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
