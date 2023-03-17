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
      <div className="products_container">
        <div className="home_title">
          <h3 style={{ textAlign: "center" }}>محصولات کاغذسازی مهرآیین پارس</h3>
        </div>

        <section class="main-card">
          <div class="card-content">
            <div class="content-left">
              <img class="full-img" src="./images/testliner.jpg" alt="/" />
            </div>
            <div class="content-right">
              <h2 style={{ textAlign: "center" }}>کاغذ تست لاینر</h2>
              <div data-aos-duration="1000" data-aos="fade-right">
                <p>
                  کاغذ تست‌لاینر بصورت کامل از الیاف بازیافتی تولید می‌شود ولی در فرایند تولید آن از
                  افزودنی‌هایی مثل نشاسته (بصورت آهار در یک طرف یا هر دو طرفِ کاغذ) و افزودنی‌های
                  دیگری جهت پرکنندگی و همینطور رنگ نیز استفاده می‌گردد.
                </p>
                <p>
                  کاغذ تست‌لاینری که به عنوان لایه رویی ورق کارتن مورد استفاده قرار می‌گیرد دارای
                  مشخصات فنی ویژه‌ای است. جذب آب لایه رویی کاغذ کمتر از لایه زیری آن است. کم بودن
                  جذب آب لایه رویی به دلیل محافظت کارتن از جذب رطوبت محیط و بالا رفتن میزان
                  چاپ‌پذیری آن است و جذب آب لایه زیرین به دلیل چسبندگی بهتر روی کاغذ فلوتینگ است.
                  همچنین کاغذ تست‌لاینر دارای مقاومت‌های سطحی مناسبی جهت چاپ‌پذیری با کیفیت بالا
                  است. با توجه به کیفیت این کاغذ، قابلیت استفاده در هر دو وضعیت لایه بیرونی و لایه
                  داخلی کارتن را دارد.
                </p>
                <p>
                  شرکت کاغذسازی مهرآیین پارس کاغذ تست‌لاینر را در گرماژ 100 تا 130 گرم و عرض 1.00 تا
                  2.4 متر تولید می‌نماید.
                </p>
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
              <h2 style={{ textAlign: "center" }}>کاغذ لاینر</h2>
              <div data-aos-duration="1000" data-aos="fade-left">
                <p>
                  اگر کاغذی تولید کنیم که صد درصد آن از کاغذهای بازیافتی (آخال) تولیدشده باشد به آن
                  کاغذ لاینر گفته می‌شود. کاغذ لاینر در بازار به نام‌های کاغذ قهوه‌ای، کاغذ ایرانی
                  یا کاغذ شبه‌کرافت نیز شناخته می‌شود. این کاغذ در لایه‌ی رو یا داخل (بنا به کاربرد
                  ورق کارتن ساخته شده در آینده) استفاده می‌شود.
                </p>
                <p>
                  در ساخت ورق کارتن، معمولا از 3 نوع کاغذ استفاده می‌شود. کاغذ تست‌لاینر برای لایه
                  بیرونی، کاغذ فلوتینگ برای لایه میانی و کاغذ لاینر برای لایه داخلی.
                </p>
                <p>
                  کاغذ لاینر با عرض 160 تا 240 سانتی‌متر با وزن 130 تا 200 گرم بر متر مربع در تولید
                  انواع ورق کارتن سه لایه و ورق کارتن پنج لایه مورد استفاده قرار می‌گیرد. شرکت
                  کاغذسازی مهرآیین پارس با بکارگیری نیروهای متخصص و مجرب و داشتن امکانات آزمایشگاهی
                  مدرن سعی در ارائه محصولاتی با کیفیت بالا و مطلوب به مصرف‌کنندگان را دارد.
                </p>
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
              <h2 style={{ textAlign: "center" }}>کاغذ فلوتینگ</h2>
              <div data-aos-duration="1000" data-aos="fade-right">
                <p>
                  کاغذ فلوتینگ یا کاغذ کنگره ای، به کاغذهایی ضخیم و موج دار گفته می شود که به عنوان
                  لایه میانی در کارتن سازی مورد استفاده قرار میگیرد.وزن لایه میانی هر متر مربع از
                  کاغذ فلوتینگ بین 80 تا 200 گرم است که بر اساس استانداردهای بین المللی، حداقل وزن
                  استاندارد آن 80 گرم بر متر مربع تعیین شده است.
                </p>
                <p>
                  وجود نشاسته در این کاغذ باعث می‌شود تا پس از آن که به ورق کارتن تبدیل شد و بیشتر
                  رطوبت خود را از دست داد، با داشتن رطوبتی در حدود 7 درصد به کاغذی بسیار خشک و محکم
                  تبدیل شود. ورق کارتن معمولا در دو نوع سه لایه و پنج لایه تولید می‌شود. در تولید
                  ورق سه لایه یک ورق کاغذ فلوتینگ در میان دو لایه کاغذ قرار می‌گیرد. اما در تولید
                  ورق کارتن پنج لایه یک ورق کاغذ بازیافتی در میان دو ورق فلوتینگ قرار می‌گیرد و دو
                  لایه کاغذ مرغوب‌تر در دو سوی آنها روکش می‌شود. معمولا برای روکش بیرونی از کاغذهای
                  با کیفیت‌تر استفاده می‌شود تا شرایط چاپ مستقیم روی ورق کارتن فراهم گردد.
                </p>
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
