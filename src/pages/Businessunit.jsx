import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Businessunit = () => {
  const { t } = useTranslation();

  // For AOS
  useEffect(() => {
    AOS.init({
      // delay: 200,
      // throttleDelay: 99,
    });
  }, []);

  return (
    <div className="commercialdepartment_container">
      {/* <h2>Commercial-Department</h2> */}
      <div className="cd_Header">
        <img src="./images/Sale-Banner.jpg" alt="/" />
        <div class="centered">
          <h2 style={{ color: "white" }}>{t("businessunitmehr")}</h2>
        </div>
      </div>
      <br />
      <div className="sale_section">
        <h2>{t("businessunit")}</h2>
        <br />
        <p>{t("businessunittext")}</p>
      </div>

      <br />
      <br />

      <section>
        <div className="sale_container">
          <div data-aos-duration="1000" data-aos="fade-up" className="sale_left">
            <img src="./images/sale2.jpg" alt="An imageshowcasingproductsonsale." />
          </div>
          <div data-aos-duration="1000" data-aos="fade-left" className="sale_right">
            <h2>مهمترین فعالیت‌های تیم فروش ما</h2>
            <ul data-aos-duration="1800" data-aos="fade-left">
              <li>معرفی کامل و همه جانبه مشخصات دقیق محصولات</li>
              <li>شناخت نیازهای بازار و بررسی درخواست‌های سفارشی‌سازی مشتریان</li>
              <li>انجام فعالیت‌های صادراتی و بازرگانی </li>
              <li>ارائه هماهنگی‌های لازم با واحد بازاریابی</li>
              <li>بهینه‌سازی ارتباط با مشتری</li>
              <li>ارتباط مستقیم با واحد صادرات و پیگیری فرآیندهای آن</li>
            </ul>
          </div>
        </div>
      </section>
      <br />

      <section>
        {/* Sale container section */}
        <div className="sale_container">
          {/* Sale left section */}
          <div data-aos-duration="1000" data-aos="fade-left" className="sale_left">
            <img src="./images/sale1.jpg" alt="/" />
          </div>

          {/* Sale right section */}
          <div data-aos-duration="1000" data-aos="fade-right" className="sale_right">
            <h2>واحد‌های زیر مجموعه‌ واحد فروش شرکت</h2>
            <ul>
              <li>واحد بازاریابی</li>
              <li>واحد صادرات</li>
              <li>واحد ارتباط با مشتری</li>
            </ul>
          </div>
        </div>
      </section>

      <br />
    </div>
  );
};

export default Businessunit;
