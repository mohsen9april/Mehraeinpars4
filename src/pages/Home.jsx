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
      <div class="cards_wrap">
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick">
            <h2 style={{ color: "white" }}>{t("app_title")}</h2>
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color2">
            <h2>
              TEST TITLE - 2<span>第二張測試卡片</span>
            </h2>
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color3">
            <h2>
              TEST TITLE - 3<span>第三張測試卡片</span>
            </h2>
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick color4">
            <h2>
              TEST TITLE - 4<span>第四張測試卡片</span>
            </h2>
          </div>
        </div>
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick last">
            <h2>
              TEST TITLE - Last<span>最後一張測試卡片</span>
            </h2>
          </div>
        </div>
      </div>

      <br />
      <br />

      <h2 style={{ textAlign: "center" }}> {t("mehraeinParsproducts")}</h2>
      {/* <div class="Home_Products_container">
        <div class="box">
          <div class="imgBox">
            <img src="./images/testliner.jpg" alt="/" />
          </div>
          <div class="content">
            <h2>
              {t("testliner")}
              <br />
              <span>Graphic Designer</span>
            </h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBox">
            <img src="./images/liner.jpg" alt="/" />
          </div>
          <div class="content">
            <h2>
              {t("liner")}
              <br />
              <span>Graphic Designer</span>
            </h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBox">
            <img src="./images/fluting.jpg" alt="/" />
          </div>
          <div class="content">
            <h2>
              {t("fluting")}
              <br />
              <span>Graphic Designer</span>
            </h2>
          </div>
        </div>
      </div> */}

      <div
        style={{ background: "linear-gradient(210deg, #fb8e2a, #fdc154)" }}
        className="paper_container"
      >
        <div class="paper">
          <img class="poster" src="./images/testliner.jpg" alt="/" />
          <h2>Featured</h2>
          <h1>Back to Nature</h1>
          <hr />
          <p>
            Down on the West Coast where the sand meets the crashing waves and your dreams come
            true.
          </p>
          <a href="/" class="btn">
            Read More{" "}
          </a>
          <div class="space"></div>
        </div>
        <div class="paper">
          <img class="poster" src="./images/liner.jpg" alt="/" />
          <h2>Featured</h2>
          <h1>Back to Nature</h1>
          <hr />
          <p>
            Down on the West Coast where the sand meets the crashing waves and your dreams come
            true.
          </p>
          <a href="/" class="btn">
            Read More
          </a>
          <div class="space"></div>
        </div>
        <div class="paper">
          <img class="poster" src="./images/fluting.jpg" alt="/" />
          <h2>Featured</h2>
          <h1>Back to Nature</h1>
          <hr />
          <p>
            Down on the West Coast where the sand meets the crashing waves and your dreams come
            true.
          </p>
          <a href="/" class="btn">
            Read More{" "}
          </a>
          <div class="space"></div>
        </div>
      </div>

      <br />

      <div data-aos-duration="1000" data-aos="slide-up" className="home_ourway">
        <h2> {t("ourresponsibility")}</h2>
        <img
          style={{ display: "flex", margin: "auto", width: "80%" }}
          src="./images/ourway.png"
          alt="/"
        />
      </div>

      <section class="slide" id="slide2">
        <h1>Set to full page for best experience.</h1>
      </section>

      <br />

      <div class="site">
        <div class="aboutus_container">
          <div class="img"></div>
          <div class="text-container">
            <span></span>
            <h1>کاغذسازی مهرآیین پارس</h1>
            <p>
              The people who exhibit the most self-control are not actually those who have
              superhuman willpower, they're the ones who are tempted the least.
            </p>
            <a href="/" target="_blank">
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* <!--====== CONTACT PART START ======--> */}
      <section id="contact" class="contact_area bg_cover pt-120 pb-130">
        <div class="container contact_container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title section_title_2 text-center pb-25">
                <h4 class="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
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
                  <button class="main-btn" type="submit">
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

      <section class="slide" id="slide2">
        <h1>کاغذسازی مهرآیین پارس </h1>
      </section>

      <div className="Newline_divider">
        <img src="./images/Logo1.png" />
      </div>

      <div data-aos="zoom-in-down" data-aos-duration="1000">
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
