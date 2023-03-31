import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

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

const Home = () => {
  // For AOS
  useEffect(() => {
    AOS.init({});
  }, []);

  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div>
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>

      <div class="cards_wrap">
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick">
            <h2 style={{ color: "white" }}>{t("app_title")}</h2>
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color2">
            {/* <h2 style={{ color: "white" }}>{t("app_title")}</h2> */}
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color3">
            {/* <h2 style={{ color: "white" }}>{t("app_title")}</h2> */}
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color4">
            {/* <h2 style={{ color: "white" }}>{t("app_title")}</h2> */}
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick last">
            {/* <h2 style={{ color: "black" }}>{t("app_title")}</h2> */}
          </div>
        </div>
      </div>

      <br />
      <br />

      <h2 style={{ textAlign: "center" }} data-aos-duration="1800" data-aos="fade-down">
        {" "}
        {t("mehraeinParsproducts")}
      </h2>

      {/* Next Card Home */}
      <div style={{ background: "#cc9d69" }} className="paper_container_Home">
        <div class="paper_Home" data-aos-duration="1300" data-aos="fade-up">
          <img class="poster_Home" src="./images/testliner.jpg" alt="/" />
          {/* <h2>Featured</h2> */}
          <h1>{t("testliner")} </h1>
          <hr />
          <p>{t("testlinertext")}</p>
          <a href="/products" class="btn">
            Read More
          </a>
          <div class="space"></div>
        </div>
        <div class="paper_Home" data-aos-duration="1600" data-aos="fade-up">
          <img class="poster_Home" src="./images/liner.jpg" alt="/" />
          {/* <h2>Featured</h2> */}
          <h1> {t("liner")}</h1>
          <hr />
          <p>{t("linertext")}</p>
          <a href="/products" class="btn">
            Read More
          </a>
          <div class="space"></div>
        </div>
        <div class="paper_Home" data-aos-duration="2300" data-aos="fade-up">
          <img class="poster_Home" src="./images/fluting.jpg" alt="/" />
          {/* <h2>Featured</h2> */}
          <h1> {t("fluting")}</h1>
          <hr />
          <p>{t("flutingtext")}</p>
          <a href="/products" class="btn">
            Read More
          </a>
          <div class="space"></div>
        </div>
      </div>

      <br />

      <div data-aos-duration="1800" data-aos="slide-up" className="home_ourway">
        <h2 style={{ textAlign: "center" }}> {t("ourresponsibility")}</h2>
        <img
          style={{ display: "flex", margin: "auto", width: "80%" }}
          src="./images/ourway.png"
          alt="/"
        />
      </div>

      <br />

      <section class="slide" id="slide2">
        <h1 data-aos-duration="1800" data-aos="zoom-in-up">
          MEHRAEINPARS PAPER MILL COMPANY
        </h1>
      </section>

      <br />

      {/* <div class="site">
        <div class="aboutus_container">
          <div class="img_Home"></div>
          <div class="text-container">
            <span></span>
            <h1 style={{ fontSize: "2.2rem", textAlign: "center" }}>کاغذسازی مهرآیین پارس</h1>
            <br />
            <p>{t("description")}</p>
            <br />
            <a href="/aboutus" target="_blank" class="btn">
              Learn more
            </a>
          </div>
        </div>
      </div> */}

      {/* <div class="site">
        <div class="aboutus_container">
          <div class="img"></div>
          <br />
          <div class="text-container">
            <span></span>
            <h1>Prime your environment</h1>
            <p>
              The people who exhibit the most self-control are not actually those who have
              superhuman willpower, they're the ones who are tempted the least.
            </p>
            <a href="/" target="_blank">
              Learn more
            </a>
          </div>
        </div>
      </div> */}

      {/* <!--====== CONTACT PART START ======--> */}
      <section id="contact" class="contact_area bg_cover pt-120 pb-130">
        <div class="container contact_container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title section_title_2 text-center pb-25">
                <h4
                  style={{ color: "white" }}
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  {t("contactus")}
                </h4>
                {/* <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt labor dolore.
                </p> */}
              </div>
            </div>
          </div>
          <form
            id="contact-form"
            action="assets/contact.php"
            method="post"
            class="wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <div class="row">
              <div class="col-lg-6">
                <div class="single_form">
                  <input type="text" placeholder="Name" name="name" id="name" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input type="email" placeholder="Email" name="email" id="email" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="number"
                    id="number"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="single_form">
                  <input type="text" placeholder="Subject" name="subject" id="subject" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="single_form">
                  <textarea placeholder="Message" name="message" id="message" required></textarea>
                </div>
              </div>

              <p class="form-message"></p>

              <div class="col-lg-12">
                <div class="single_form text-center">
                  <button class="main-btn_submit" type="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <!--====== CONTACT PART ENDS ======--> */}

      <br />

      <div>
        <div class="other-section"></div>
        <div style={{ height: "60vh" }} class="cd"></div>
        <div class="other-section"></div>
      </div>

      <section class="slide" id="slide2">
        <h1 data-aos-duration="2200" data-aos="slide-up" style={{ textTransform: "Uppercase" }}>
          {t("app_title")}
        </h1>
      </section>

      <div className="Newline_divider">
        <img data-aos-duration="2000" data-aos="zoom-out-right" src="./images/logo2.png" alt="/" />
      </div>

      <div data-aos="zoom-in-down" data-aos-duration="1800">
        <img
          style={{ display: "flex", margin: "auto", width: "80%" }}
          src="./images/home1.png"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Home;
