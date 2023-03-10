import React, { Fragment } from "react";

const Aboutus = () => {
  return (
    <>
      <div>
        <br />

        <div class="site">
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
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Next Card  */}
      <div className="paper_container">
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
      </div>
    </>
  );
};

export default Aboutus;
