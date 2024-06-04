"use client";
import profile from "@/../public/img/bn/profile.jpg";
import f1 from "@/../public/img/frelancer/f1.png";
import f2 from "@/../public/img/frelancer/f2.png";
import f3 from "@/../public/img/frelancer/f3.png";
import favicon from "@/../public/img/logo/favicon.png";
import logo from "@/../public/img/logo/logolisht.png";
import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import Select from "react-select";
const Header = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);

  const path = usePathname()

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    });
  }, []);
  const handleCloseSearch = (e: MouseEvent) => {
    e.preventDefault();
    setSearchOpen(false);
  };
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#0D47A1",
      color: "#ffffff",
      minWidth: "130px",
      padding: "5px 10px",
      borderRadius: "50px",
      border: "none",
      boxShadow: "0",
      "&:hover": {
        borderColor: "#DFE0E4",
      },
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "6px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      color: "#fff",
      height: "auto",
    }),
  };
  const isActiveMenu = (submenus: any) => {
    return submenus?.find((item: any) => item?.url === path)
  }
  const currentUser = null

  // const currentUser = {
  //   id: 1,
  //   username: "Anna",
  //   isSeller: true,
  // };
  return (
    <div className="banner__section bg__img2 ralt">
      <div className="header__section__attachment">
        <div className="aihire__headertop">
          <div className="container">
            <div className="haderbar__top header__toptwo d-flex align-items-center  justify-content-between">
              <div className="logo__left d-flex align-items-center">
                <Link href="/" className="top__logo">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
              <div className="header__topsearch d-flex align-items-center">
             
                <Link href="/signin" className="cmn--btn">
                  <span className="text-nowrap">Sign In / Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ralt">
          <header
            className={`header-section menubordert header__section__two menuborderb ${menuFixed && "menu-fixed"
              }`}>
            <div className="container">
              <div className="header-wrapper">
                <div className="logo-menu d-xl-none">
                  <Link href="/" className="small__logo">
                    <Image src={favicon} alt="logo" />
                  </Link>
                </div>
                <ul className={`main-menu ${menuOpen && "active"}`}>
                  {menuData.map(({ id, title, url }) => (
                   <li key={id}>
                      <Link href={url} className={path == url ? 'active' : ''}>{title}</Link>
                    </li>
                  ))}
                </ul>
                <div className="menu__right__components d-flex align-items-center flex-shrink-0">
                  <div className="menu__components d-flex align-items-center">
       
                  <div className="dropdown profie__dropdown">
                  <Link
                    href="#"
                    className="link user__active"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,16"
                    aria-expanded="true">
                    <Image
                      src={profile}
                      alt="image"
                      className="img-fluid rounded-circle objec-fit-cover"
                    />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    data-popper-placement="bottom-end">
                    <div className="p-6">
                      <div className="d-flex align-items-center gap-3 max-width">
                        <div className="jerny__uer ralt">
                          <Image
                            src={profile}
                            alt="image"
                            className="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0"
                          />
                          <i className="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fz-20 fw-600 title inter mb-0">
                          {/* {currentUser?.username} */}
                          </h5>
                          <span className="d-block fw-400 inter pra fz-16">
                            Info95@mail.com
                          </span>
                        </div>
                      </div>
                      <span className="fz-12 pra d-block fw-400 inter mb-16">
                        Account
                      </span>
                      <ul className="list">
                        <li className="mb-16">
                          <Link
                            href="/profile"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-person-check fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Profile{" "}
                            </span>
                          </Link>
                        </li>
                        {/* <li className="mb-16">
                          <Link
                            href="/post-request"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-file-earmark-plus fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Post a Request{" "}
                            </span>
                          </Link>
                        </li> */}
                        <li className="mb-16">
                          <Link
                            href="/notification"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-bell fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Notification{" "}
                            </span>
                          </Link>
                        </li>
                        <li className="mb-16">
                          <Link
                            href="/chat-us"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-chat-text fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Chat{" "}
                            </span>
                          </Link>
                        </li>
                        <li className="mb-24">
                          <Link
                            href="/refer-friend"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-sliders2 fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Refer a Friend{" "}
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <span className="fz-12 pra d-block fw-400 inter mb-16">
                        Billing
                      </span>
                      <ul className="list">
                        <li className="mb-16">
                          <Link
                            href="/setting"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-gear fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Settings{" "}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/payment"
                            className="link d-flex align-items-center gap-2 dropdown-item">
                            <i className="bi bi-credit-card-2-back fz-20"></i>
                            <span className="d-block fz-16 pra fw-500 inter">
                              {" "}
                              Payments{" "}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                 
                 
                  </div>
                  <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`header-bar d-lg-none ${menuOpen && "active"}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div id="searchPopup" className={`search__popup ${searchOpen && "open"}`}>
        <form className="popup-content d-flex align-items-center">
          <input type="text" placeholder="Search Here" />
          <button id="closeButton" onClick={handleCloseSearch}>
            <i className="bi bi-x-lg"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
