import React from "react";

const Footerbox = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src="img/logo.png" alt="/" />
          <h3>
            About<span> GC Design</span>
          </h3>

          <p class="footer-links">
            <a href="/">Home</a>|<a href="/">Blog</a>|<a href="/">About</a>|<a href="/">Contact</a>
          </p>

          <p class="footer-company-name">© 2020 GC Design</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
              Vancouver, WA, USA - 98661
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>(360) 314-0000</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@eduonix.com">gabrielcrockett@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            We offer training and skill building courses across Technology, Design, Management,
            Science and Humanities.
          </p>
          <div class="footer-icons">
            <a href="/">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footerbox;
