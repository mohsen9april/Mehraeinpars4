import React from "react";

const Newline = () => {
  return (
    <>
      <div>
        <section class="module parallax parallax-1">
          <div class="NewLine_container">
            <h1>Section 1</h1>
          </div>
        </section>

        <section class="module parallax parallax-2">
          <div class="NewLine_container">
            <h1>Section 2</h1>
          </div>
        </section>

        <section class="slide" id="slide2">
          <h1>Set to full page for best experience.</h1>
        </section>

        <section class="module parallax parallax-3">
          <div class="NewLine_container">
            <h1>Section 3</h1>
          </div>
        </section>
        <section class="module parallax parallax-4">
          <div class="NewLine_container">
            <h1>Section 4</h1>
          </div>
        </section>
      </div>
      <br />
      <section class="slide" id="slide2">
        <h1>Set to full page for best experience.</h1>
      </section>
      <div>
        <div class="other-section"></div>
        <div class="cd"></div>
        <div class="other-section"></div>
      </div>
    </>
  );
};

export default Newline;
