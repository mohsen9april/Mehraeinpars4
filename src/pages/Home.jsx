import React from "react";

const Home = () => {
  return (
    <div>
      <div class="cards_wrap">
        <div class="cards_wrap__card">
          <div class="cards_wrap__card-stick">
            <h2>
              OVERLAPPING CARDS CSS ONLY
              <span>
                Inspired by Locomotive work
                <br />
                <a href="https://k72.ca/">K72</a>
              </span>
            </h2>
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
      <div class="footer">
        This is Footer&nbsp;
        <span>
          {" "}
          Made by{" "}
          <a target="_blank" href="/">
            ES Design - Eason
          </a>
        </span>
      </div>
    </div>
  );
};

export default Home;
