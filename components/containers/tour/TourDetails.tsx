"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FaqTwoData from "@/public/data/faq-two-data";
import thumb from "@/public/images/tour/details-1.jpg";
import GoogleMap from "../GoogleMap";
import ClientReview from "./ClientReview";
import discount from "@/public/images/destinations/disocunt.png";
import DatePick from "@/components/layout/banner/DatePick";

const TourDetails = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="tour-details-section section-padding">
      <div className="container">
        <div className="tour-details-wrapper">
          <div className="row g-5">
            <div className="col-xl-8 col-lg-7">
              <div className="tour-details-items">
                <div className="details-thumb">
                  <Image src={thumb} alt="img" />
                </div>
                <div className="details-content">
                  <span className="location-icon">
                    <i className="far fa-map-marker-alt"></i>
                    Хөвсгөл аймаг, Монгол
                  </span>
                  <h2>
                    Хөвсгөл нуурын бүс нутагт адал явдал хийх, байгалийн үзэсгэлэнгээр хөөрөх
                  </h2>
                  <p className="mb-3">
                    Бид Монголын байгалийн үзэсгэлэнт газруудаар сонирхолтой
                    аяллуудыг анхан шатнаас нь мэргэжлийн түвшинд хүртэл
                    зохиож байна. Хөвсгөл нуур нь Монголын хамгийн гүн цэнхэр
                    нуур бөгөөд хүрээлэн буй уулс, ой мод, цэвэр агаараараа
                    жуулчдийн хүсэл зоригийг татдаг. Энд та морь унаж, загас
                    барьж, ойн дунд алхаж байгальтайгаа нэгдэх боломжтой.
                  </p>
                  <p className="mb-3">
                    Аяллын турш орон нутгийн малчин айлд зочилж, уламжлалт
                    монгол хоол амтлах, гэр байрлах туршлагыг мэдрэнэ.
                    Хөвсгөлийн тайгын ойн амьтан ургамлын аймаг маш баялаг
                    бөгөөд бүргэд, илбэх, зээрд зэрэг амьтдыг ажиглах
                    боломжтой.
                  </p>
                  <p>
                    Манай баг Монголын хойд бүсийн газарзүй, цаг уурын
                    онцлогийг сайн мэддэг бөгөөд жуулчдад аюулгүй, таатай
                    аяллын нөхцөлийг бүрдүүлдэг. Бүх аялалд туршлагатай
                    удирдагч хөтөлнө. Морь унах, гэр байрлах, уламжлалт
                    ёс заншлын талаар дэлгэрэнгүй зааварчилгаа өгнө.
                  </p>
                  <div className="destination-list-item">
                    <h4>Манай онцлогууд</h4>
                    <div className="destination-list">
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Орон нутгийн туршлагатай мэргэжилтнүүд
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Уян хатан, хялбар захиалга
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Шууд хөтөлбөрийн шинэчлэлт
                        </li>
                      </ul>
                      <ul className="list">
                        <li>
                          <i className="flaticon-check"></i>
                          Уян хатан цуцлах нөхцөл
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Тусгайлан зохиосон аяллын туршлага
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Онцгой хөнгөлөлттэй аялал
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tour-details-icon">
                    <div className="row g-5 justity-content-end">
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-connection"></i>
                          <h5>Үнэгүй Wi-Fi</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-cyber-security"></i>
                          <h5>Аюулгүй байдлын баталгаа</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-guide"></i>
                          <h5>Мэргэжлийн хөтөч</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-gym"></i>
                          <h5>Биеийн тамирын заал</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-cycling"></i>
                          <h5>Унадаг дугуй</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-hiking"></i>
                          <h5>Явган аялал</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-googles"></i>
                          <h5>Усанд сэлэх & загасчлах</h5>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="icon">
                          <i className="flaticon-solar-system"></i>
                          <h5>Нарны эрчим хүч</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-items">
                    <h4>Аяллын хөтөлбөр</h4>
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion2">
                        {FaqTwoData.slice(0, 4).map((item, index) => {
                          const isActive = activeIndex === index;
                          return (
                            <div className="accordion-item mb-3" key={item.id}>
                              <h5 className="accordion-header">
                                <button
                                  className={`accordion-button ${
                                    isActive ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  onClick={() => handleToggle(index)}
                                >
                                  <span>{item.day} : </span> {item.question}
                                </button>
                              </h5>
                              <div
                                className={`accordion-collapse collapse ${
                                  isActive ? "show" : ""
                                }`}
                              >
                                <div className="accordion-body">
                                  {item.answer}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="map-area">
                    <h3>Газрын зураг дээр харах</h3>
                    <GoogleMap />
                  </div>
                  <ClientReview />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="tour-details-sidebar sticky-style">
                <div className="tour-sidebar-items">
                  <h3>Аялал захиалах</h3>
                  <ul className="form-list">
                    <li>
                      Эхлэх огноо:
                      <div className="form-clt">
                        <div id="datepicker" className="input-group date">
                          <DatePick />
                          <span className="input-group-addon">
                            <i className="far fa-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      Цаг:
                      <div className="form-clt d-flex gap-3">
                        <label className="checkbox-single">
                          <span className="d-flex gap-xl-3 gap-2 align-items-center">
                            <span className="checkbox-area d-center">
                              <input type="checkbox" />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span className="text-color">12:00</span>
                          </span>
                        </label>
                        <label className="checkbox-single">
                          <span className="d-flex gap-xl-3 gap-2 align-items-center">
                            <span className="checkbox-area d-center">
                              <input type="checkbox" />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span className="text-color">10:00</span>
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="tickets-list">
                    <p>Тасалбар</p>
                    <ul>
                      <li>
                        18+ нас: <b>168₮</b>
                        <div className="form-clt">
                          <div className="form">
                            <select className="single-select w-100">
                              <option> 01</option>
                              <option> 02</option>
                              <option> 03</option>
                              <option> 04</option>
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        18- нас: <b>100₮</b>
                        <div className="form-clt">
                          <div className="form">
                            <select className="single-select w-100">
                              <option> 01</option>
                              <option> 02</option>
                              <option> 03</option>
                              <option> 04</option>
                            </select>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="extra-items">
                    <p>Нэмэлт үйлчилгээ:</p>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">
                          Захиалга бүрт нэмэлт үйлчилгээ
                        </span>
                      </span>
                      <span className="text-color">45₮</span>
                    </label>
                    <label className="checkbox-single d-flex justify-content-between align-items-center">
                      <span className="d-flex gap-xl-3 gap-2 align-items-center">
                        <span className="checkbox-area d-center">
                          <input type="checkbox" />
                          <span className="checkmark d-center"></span>
                        </span>
                        <span className="text-color">
                          Хүн бүрт нэмэлт үйлчилгээ
                        </span>
                      </span>
                      <span className="text-color">35₮</span>
                    </label>
                  </div>
                  <ul className="total-list">
                    <li>Нийт:</li>
                    <li>80₮</li>
                  </ul>
                  <Link href="/tour-details" className="theme-btn">
                    <span>Захиалах</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                  <p className="text">Тусламж хэрэгтэй юу?</p>
                </div>
                <div
                  className="offer-card bg-cover"
                  style={{
                    backgroundImage:
                      "url(/images/destinations/offter-card.jpg)",
                  }}
                >
                  <h3>Одоо захиалж, онцгой хөнгөлөлт эдлээрэй!</h3>
                  <Image src={discount} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
