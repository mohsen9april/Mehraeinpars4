import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookie from "js-cookie";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const language = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "فارسی",
    country_code: "ir",
    dir: "rtl",
  },
];

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

const Header = () => {
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else if (prevScrollpos < 0) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className="header" id="navbar" style={{ transition: "all 0.5s" }}>
        <nav ref={navRef}>
          <NavLink
            to="/"
            //   style={({ isActive }) =>
            //     isActive
            //       ? {
            //           color: "#fff",
            //           background: "#CC9D69",
            //         }
            //       : { color: "#000000", background: "#ffffff" }
            //   }
          >
            {t("home")}
          </NavLink>
          <NavLink to="/Products">{t("products")}</NavLink>
          <NavLink to="/Businessunit">{t("commercial")}</NavLink>
          <NavLink to="/QualityControl">{t("qc")}</NavLink>
          <NavLink to="/Newline">{t("newline")}</NavLink>
          <NavLink to="/Contactus">{t("contactus")}</NavLink>
          <NavLink to="/Aboutus">{t("aboutus")}</NavLink>

          <div>
            <ul class="navwrapper">
              <li class="navicon facebook">
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </li>
              <li class="navicon twitter">
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </li>
              <li class="navicon instagram">
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </li>
              <li class="navicon youtube">
                <span>
                  <i class="fab fa-youtube"></i>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t("language")}</span>
              </li>
              {language.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code}`}
                      style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                    ></span>
                    &nbsp;
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Header;
