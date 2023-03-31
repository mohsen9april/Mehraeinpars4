import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  // For AOS
  useEffect(() => {
    AOS.init({
      // delay: 200,
      // throttleDelay: 99,
    });
  }, []);
  return (
    <>
      {/* <!--start Recipes--> */}
      <div class="recipes">
        <img src="./images/productsbanner.jpg" alt="/" />
      </div>
      {/* <!--End Recipes--> */}

      <div className="products_container">
        <div className="home_title">
          <h3 style={{ textAlign: "center" }}> {t("mehraeinParsproducts")}</h3>
        </div>

        <section class="main-card">
          <div class="card-content">
            <div class="content-left">
              <img class="full-img" src="./images/testliner.jpg" alt="/" />
            </div>
            <div class="content-right">
              <h2 style={{ textAlign: "center" }}>{t("testliner")} </h2>
              <div data-aos-duration="1000" data-aos="fade-right">
                <p>{t("productstestlinertextone")}</p>
                <p>{t("productstestlinertexttwo")}</p>
              </div>
              <div class="mini-imgs">
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images_53hi.jpeg"
                  alt="/"
                  onclick="changeImg(1)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-3_ivw.jpeg"
                  alt="/"
                  onclick="changeImg(2)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-2_is9a.jpeg"
                  alt="/"
                  onclick="changeImg(3)"
                />
              </div>
            </div>
          </div>
        </section>
        <br />

        <section class="main-card">
          <div class="card-content">
            <div class="content-left">
              <img class="full-img" src="./images/liner.jpg" alt="/" />
            </div>
            <div class="content-right">
              <h2 style={{ textAlign: "center" }}> {t("liner")}</h2>
              <div data-aos-duration="1000" data-aos="fade-left">
                <p>{t("productslinertextone")}</p>
                <p>{t("productslinertexttwo")}</p>
              </div>
              <div class="mini-imgs">
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-2_mds9.jpeg"
                  alt="/"
                  onclick="changeImg(1)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-1_j7po.jpeg"
                  alt="/"
                  onclick="changeImg(2)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images_b98z.jpeg"
                  alt="/"
                  onclick="changeImg(3)"
                />
              </div>
            </div>
          </div>
        </section>
        <br />

        <section class="main-card">
          <div class="card-content">
            <div class="content-left">
              <img class="full-img" src="./images/fluting.jpg" alt="/" />
            </div>
            <div class="content-right">
              <h2 style={{ textAlign: "center" }}> {t("fluting")}</h2>
              <div data-aos-duration="1000" data-aos="fade-right">
                <p>{t("productsflutingtextone")}</p>
                <p>{t("productsflutingtexttwo")}</p>
              </div>
              <div class="mini-imgs">
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images_2fp4.jpeg"
                  alt="/"
                  onclick="changeImg(1)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-1_rgjw.jpeg"
                  alt="/"
                  onclick="changeImg(2)"
                />
                <img
                  class="mini-img"
                  src="https://s2.uupload.ir/files/images-2_m7mq.jpeg"
                  alt="/"
                  onclick="changeImg(3)"
                />
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    </>
  );
};

export default Products;
