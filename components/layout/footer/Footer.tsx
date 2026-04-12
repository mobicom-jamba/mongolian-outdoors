"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo/black-logo.svg";
import call from "@/public/images/call.png";
import mail from "@/public/images/mail.png";
import NavbarData from "@/public/data/navbar-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isIndex2Page = pathname === "/index-2";
  const backgroundImage = isIndex2Page
    ? "/images/footer/bg-image-2.jpg"
    : "/images/footer/bg-image.jpg";

  return (
    <footer
      className="footer-section section-bg bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container py-5">
        {/* Newsletter */}
        <div className="footer-newsletter-items text-center mb-5">
          <h2 className="mb-3">Welcome to the Mongolia</h2>
          <div className="d-inline-flex align-items-center bg-white rounded overflow-hidden">
            <input
              type="email"
              className="form-control border-0 px-3 py-2"
              placeholder="Your email address"
            />
            <button className="btn btn-primary px-4">
              Subscribe <i className="far fa-paper-plane ms-2"></i>
            </button>
          </div>
        </div>

        {/* Main Widgets */}
        <div className="row gx-5 gy-4 text-center">
          {/* Column 1 */}
          <div className="col-lg-4">
            <div className="footer-widget p-4 d-flex flex-column align-items-center gap-4">
              <Link href="/">
                <Image src={logo} alt="Mongolian Outdoors" height={60} width={240} style={{ height: 'auto', width: 'auto', maxHeight: 60 }} />
              </Link>

              <div className="d-flex flex-column align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <Image src={call} alt="call" width={24} height={24} />
                  <div>
                    <small className="text-uppercase">Call Us</small>
                    <h6 className="mb-0">
                      <Link href="tel:+97680813636">+976 8081-3636</Link>
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Image src={mail} alt="mail" width={24} height={24} />
                  <div>
                    <small className="text-uppercase">Email Us</small>
                    <h6 className="mb-0">
                      <Link href="mailto:info@example.com">
                        info@example.com
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3 fs-5">
                <Link href="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4">
            <div className="footer-widget p-4 d-flex flex-column align-items-center gap-4">
              <h3 className="widget-title text-uppercase letter-spacing">
                Pages
              </h3>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {NavbarData.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path} className="text-decoration-none">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4">
            <div className="footer-widget p-4 d-flex flex-column align-items-center gap-4">
              <h3 className="widget-title text-uppercase letter-spacing">
                Quick Contact
              </h3>
              <div className="d-flex flex-column align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <Image src={call} alt="call" width={24} height={24} />
                  <div>
                    <small className="text-uppercase">Холбогдох</small>
                    <h6 className="mb-0">
                      <Link href="tel:+97680813636">+976 8081-3636</Link>
                    </h6>
                  </div>
                </div>
              </div>
              <Link href="/tour-details" className="">
                Дэлгэрэнгүй <i className="far fa-long-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-dark text-center py-3">
        <p className="mb-0">
          &copy; {currentYear} Mongolian Outdoors LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
