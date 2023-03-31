import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
// import Accordion from "../components/Accordion";

const Aboutus = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div>
          <section class="main-section">
            <div class="cardleft">
              <img src="./images/logo2.png" alt="/" />
            </div>
            <div class="cardright">
              <h2> {t("aboutus")}</h2>
              <p class="text-blk subHeading">{t("aboutustext")}</p>
            </div>
          </section>
        </div>

        {/* <div class="site">
          <div class="aboutus_container">
            <div class="img"></div>
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
      </div>

      {/* Next Card  */}
      {/* <div className="paper_container">
        <div class="paper">
          <img
            class="poster"
            src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg"
            alt="/"
          />
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
          <img
            class="poster"
            src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg"
            alt="/"
          />
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
          <img
            class="poster"
            src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg"
            alt="/"
          />
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
      </div> */}
    </>
  );
};

export default Aboutus;
