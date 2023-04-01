import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Newline = () => {
  const { t } = useTranslation();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Fragment>
        <section style={{ height: "9rem" }} class="slide" id="slide2">
          <h1>{t("newlinehead1")}</h1>
        </section>
        <br />
        <div>
          <section class="module parallax parallax-1">
            <div class="NewLine_container">{/* <h1>اردیبهشت ماه ۱۴۰۱</h1> */}</div>
          </section>

          <section class="module parallax parallax-2">
            <div class="NewLine_container">{/* <h1>اردیبهشت ماه ۱۴۰۱</h1> */}</div>
          </section>
          <section class="module parallax parallax-3">
            <div class="NewLine_container">{/* <h1>اردیبهشت ماه ۱۴۰۱</h1> */}</div>
          </section>
          <section class="module parallax parallax-4">
            <div class="NewLine_container">{/* <h1>اردیبهشت ماه ۱۴۰۱</h1> */}</div>
          </section>
        </div>
      </Fragment>
      <br />
      <Fragment>
        <section class="slide" id="slide2">
          <h1>{t("newlinehead2")}</h1>
        </section>
        <div>
          <br />
          <section class="module parallax parallax-5">
            <div class="NewLine_container">{/* <h1>خرداد ماه ۱۴۰۱</h1> */}</div>
          </section>

          <section class="module parallax parallax-6">
            <div class="NewLine_container">{/* <h1>Section 2</h1> */}</div>
          </section>
          <section class="module parallax parallax-7">
            <div class="NewLine_container">{/* <h1>Section 3</h1> */}</div>
          </section>
          <section class="module parallax parallax-8">
            <div class="NewLine_container">{/* <h1>Section 4</h1> */}</div>
          </section>
        </div>
      </Fragment>
      <br />

      <Fragment>
        <section class="slide" id="slide2">
          <h1>{t("newlinehead3")}</h1>
        </section>
        <div>
          <br />
          <section class="module parallax parallax-9">
            <div class="NewLine_container">{/* <h1>Section 1</h1> */}</div>
          </section>

          <section class="module parallax parallax-10">
            <div class="NewLine_container">{/* <h1>Section 2</h1> */}</div>
          </section>
          <section class="module parallax parallax-11">
            <div class="NewLine_container">{/* <h1>Section 3</h1> */}</div>
          </section>
          <section class="module parallax parallax-12">
            <div class="NewLine_container">{/* <h1>Section 4</h1> */}</div>
          </section>
        </div>
      </Fragment>
      <br />

      <section class="slide" id="slide2">
        <h1 style={{ textTransform: "uppercase" }}>{t("app_title")}</h1>
      </section>

      <div className="Newline_divider">
        <img src="./images/Logo1.png" alt="" />
      </div>

      <div>
        <div class="other-section"></div>
        <div class="cd"></div>
        <div class="other-section"></div>
      </div>
    </>
  );
};

export default Newline;
