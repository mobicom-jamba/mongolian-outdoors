// components/layout/OffCanvasMenu.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import NavbarData from "@/public/data/navbar-data";
import logo from "@/public/images/logo/black-logo.svg";

interface OffCanvasMenuProps {
  isOffcanvasOpen: boolean;
  handleOffCanvas: (isOpen: boolean) => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({
  isOffcanvasOpen,
  handleOffCanvas,
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="fix-area d-block d-xl-none">
        <div
          className={`offcanvas__info${isOffcanvasOpen ? " info-open" : ""}`}
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" priority height={60} width={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => handleOffCanvas(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <h3 className="offcanvas-title">Mongolian Outdoors</h3>
              <p>
                Discover the beauty of Mongolia's
                <br />
                breathtaking natural landscapes,
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="offcanvas-menu__list">
                  <ul className="navbar__menu">
                    {NavbarData.map((item: any, index: number) => {
                      // Mega-menu entries
                      if (item.megabar) {
                        return (
                          <li className="has-dropdown menu-thumb" key={index}>
                            <a onClick={() => handleDropdownToggle(index)}>
                              {item.title} <i className="fal fa-plus" />
                            </a>
                            <ul className="submenu has-homemenu">
                              <li>
                                <div className="homemenu-items">
                                  <div className="row">
                                    {item.megabar.map(
                                      (mega: any, i: number) => (
                                        <div
                                          className="col-lg-4 homemenu"
                                          key={i}
                                        >
                                          <div className="homemenu-thumb mb-15">
                                            <Link href={mega.path}>
                                              <Image
                                                src={mega.image}
                                                alt={mega.title}
                                              />
                                            </Link>
                                          </div>
                                          <div className="homemenu-content text-center">
                                            <h4 className="homemenu-title">
                                              <Link href={mega.path}>
                                                {mega.title}
                                              </Link>
                                            </h4>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        );
                      }
                      // Mobile-only submenu
                      if (item.submenuMobile) {
                        return (
                          <li
                            className="has-dropdown active d-xl-none"
                            key={index}
                          >
                            <a
                              className="border-none"
                              onClick={() => handleDropdownToggle(index)}
                            >
                              {item.title} <i className="fal fa-plus" />
                            </a>
                            <AnimateHeight
                              duration={400}
                              height={openDropdown === index ? "auto" : 0}
                            >
                              <ul className="submenu">
                                {item.submenuMobile.map(
                                  (sub: any, i: number) => (
                                    <li key={i}>
                                      <Link href={sub.path}>{sub.title}</Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </AnimateHeight>
                          </li>
                        );
                      }
                      // Desktop submenu
                      if (item.submenu) {
                        return (
                          <li key={index}>
                            <a onClick={() => handleDropdownToggle(index)}>
                              {item.title} <i className="fal fa-plus" />
                            </a>
                            <AnimateHeight
                              duration={400}
                              height={openDropdown === index ? "auto" : 0}
                            >
                              <ul className="submenu">
                                {item.submenu.map((sub: any, i: number) => (
                                  <li key={i}>
                                    <Link href={sub.path}>{sub.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </AnimateHeight>
                          </li>
                        );
                      }
                      // Simple link
                      return (
                        <li key={index}>
                          <Link href={item.path}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* Additional content omitted for brevity */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay d-block d-xl-none${
          isOffcanvasOpen ? " overlay-open" : ""
        }`}
        onClick={() => handleOffCanvas(false)}
      />
    </>
  );
};

export default OffCanvasMenu;
