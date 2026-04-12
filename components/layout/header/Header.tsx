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
      <header className="header-section header-inner">
        <Topbar />
        <div
          id="header-sticky"
          className={"header-1 header-4 " + (scrolled ? " sticky" : " ")}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="Mongolian Outdoors" height={40} width={160} style={{ height: 'auto', width: 'auto', maxHeight: 40 }} />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-xl-flex">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          {NavbarData.map((item: any, index) => {
                            console.log(item);

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
                      <span>Холбогдох</span>
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
                  <Link href="/tour-details" className="theme-btn">
                    <span>Дэлгэрэнгүй</span>{" "}
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
