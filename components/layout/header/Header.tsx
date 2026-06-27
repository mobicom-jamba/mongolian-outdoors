"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import Topbar from "./Topbar";
import SearchBar from "./SearchBar";
import OffCanvasMenu from "./OffCanvasMenu";
import logo from "@/public/images/logo/black-logo.svg";
import call from "@/public/images/call.png";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOffCanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <style>{`
        /* Overlay the whole header on top of the page hero/banner */
        .header-section.header-inner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 50;
        }
        /* Transparent over the hero at the top of the page */
        #header-sticky.hero-nav-top {
          background: transparent !important;
          box-shadow: none !important;
        }
        /* Blurred dark bar once scrolled */
        #header-sticky.hero-nav-blur {
          background: rgba(13, 13, 16, 0.72) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28) !important;
        }
        /* Nav text stays white in both states (over hero / dark bar) */
        #header-sticky.hero-nav-top a,
        #header-sticky.hero-nav-top span,
        #header-sticky.hero-nav-top i,
        #header-sticky.hero-nav-blur a,
        #header-sticky.hero-nav-blur span,
        #header-sticky.hero-nav-blur i {
          color: #fff !important;
        }
        /* Header CTA — rounded orange pill with a white circular arrow */
        #header-sticky .theme-btn {
          background-color: #FF6B1F !important;
          border: none !important;
          border-radius: 999px !important;
          padding: 0.5rem 0.5rem 0.5rem 1.6rem !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.8rem;
          font-weight: 700;
          box-shadow: 0 10px 24px rgba(255, 107, 31, 0.35);
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
        }
        #header-sticky .theme-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(255, 107, 31, 0.45);
          filter: brightness(1.04);
          color: #fff !important;
        }
        #header-sticky .theme-btn span {
          color: #fff !important;
          margin: 0 !important;
        }
        #header-sticky .theme-btn i {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 2.25rem !important;
          height: 2.25rem !important;
          border-radius: 999px !important;
          background: #fff !important;
          color: #FF6B1F !important;
          font-size: 0.8rem !important;
          transition: transform .25s ease;
        }
        #header-sticky .theme-btn:hover i { transform: translateX(3px); }

        /* Phone contact icon — refined ring + soft shadow + hover lift */
        #header-sticky .contact-items .icon {
          border: 2px solid rgba(255, 255, 255, 0.35) !important;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        #header-sticky .contact-items:hover .icon {
          transform: translateY(-2px) scale(1.06);
          box-shadow: 0 12px 26px rgba(255, 107, 31, 0.4);
        }

        /* Hamburger bars stay light on the transparent / dark header */
        #header-sticky .header-bar span { background-color: #fff !important; }

        /* Mobile/tablet: keep only the logo + hamburger; the rest lives in the
           off-canvas menu. Prevents the CTA/search overlapping page content. */
        @media (max-width: 1199px) {
          #header-sticky .contact-items,
          #header-sticky .header-search,
          #header-sticky .theme-btn {
            display: none !important;
          }
          #header-sticky .header-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
      <header className="header-section header-inner">
        <Topbar />
        <div
          id="header-sticky"
          className={
            "header-1 header-4 " +
            (scrolled ? " sticky hero-nav-blur" : " hero-nav-top")
          }
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="Mongolian Outdoors" height={60} width={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-xl-flex">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          {NavbarData.map((item: any, index) => {
                            if (item.megabar) {
                              return (
                                <li
                                  className="has-dropdown menu-thumb"
                                  key={index}
                                >
                                  <Link href={item.path}>
                                    {item.title}{" "}
                                    <i className="fas fa-chevron-down"></i>
                                  </Link>
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
                                                      alt="img"
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
                            } else if (item.submenuMobile) {
                              return (
                                <li
                                  className="has-dropdown active d-xl-none"
                                  key={index}
                                >
                                  <Link
                                    href={item.path}
                                    className="border-none"
                                  >
                                    {item.title}
                                  </Link>
                                  <ul className="submenu">
                                    {item.submenuMobile.map(
                                      (sub: any, i: number) => (
                                        <li key={i}>
                                          <Link href={sub.path}>
                                            {sub.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </li>
                              );
                            } else if (item.submenu) {
                              return (
                                <li key={index}>
                                  <Link href={item.path}>
                                    {item.title}
                                    <i className="fas fa-chevron-down"></i>
                                  </Link>
                                  <ul className="submenu">
                                    {item.submenu.map((sub: any, i: number) => (
                                      <li key={i}>
                                        <Link href={sub.path}>{sub.title}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              );
                            } else {
                              return (
                                <li key={index}>
                                  <Link href={item.path}>{item.title}</Link>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <Image src={call} alt="img" />
                    </div>
                    <div className="content">
                      <span>Contact</span>
                      <h6>
                        <Link href="tel:+8809533309">+976 8081-3636</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="header-search">
                    <button
                      className="d-flex align-items-center search-toggle"
                      onClick={toggleSearchBar}
                    >
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                  <Link href="/tour-list" className="theme-btn">
                    <span>Book Now</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <div className="header-bar" onClick={handleOffCanvas}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchBar isOpen={isSearchOpen} closeSearchBar={toggleSearchBar} />
      <OffCanvasMenu
        isOffcanvasOpen={isOffcanvasOpen}
        handleOffCanvas={handleOffCanvas}
      />
    </>
  );
};

export default Header;
