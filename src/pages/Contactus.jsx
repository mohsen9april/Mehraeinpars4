import React from "react";

const Contactus = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="contactusheader">
        <div class="left">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Surkhet, NP12</div>
            <div class="text-two">Birendranagar 06</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+0098 9893 5647</div>
            <div class="text-two">+0096 3434 5678</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">email@gmail.com</div>
            <div class="text-two">info.email@gmail.com</div>
          </div>
        </div>
        <div class="right">
          <div class="contactus_container">
            <form id="contactus" action="" method="post">
              <h3>Contact Form</h3>
              <h4>Contact us for custom quote</h4>
              <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number (optional)"
                  type="tel"
                  tabindex="3"
                  required
                />
              </fieldset>
              <fieldset>
                <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <h2>Map</h2>
    </>
  );
};

export default Contactus;
