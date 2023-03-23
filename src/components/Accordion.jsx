import React, { useEffect } from "react";
import "./Accordion.scss";

const Accordion = () => {
  useEffect(() => {
    // Start

    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        //Close other tabs
        for (var j = 0; j < acc.length; j++) {
          acc[j].nextElementSibling.style.maxHeight = null;
          acc[j].classList.remove("accordionactive");
        }

        this.classList.toggle("accordionactive");

        /*Toggle between hiding and showing*/
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    // End
  }, []);

  return (
    <>
      <body>
        <button class="accordion">Section 1</button>
        <div class="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor perferendis quos,
            veniam voluptate consequatur nisi magni eos, delectus modi iste nihil ducimus natus
            totam iusto impedit, dolores sapiente suscipit accusantium? Obcaecati dignissimos,
            consectetur placeat rerum at quas quaerat libero eligendi et tempore quibusdam nihil sit
            doloribus nisi facilis, deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Qui nesciunt temporibus unde nostrum error excepturi distinctio iste minus, fuga,
            voluptatibus blanditiis quis tempora, id mollitia. Aperiam porro cupiditate error
            placeat est accusantium ad veniam, mollitia provident repellendus et quos nemo!
          </p>
        </div>

        <button class="accordion">Section 2</button>
        <div class="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor perferendis quos,
            veniam voluptate consequatur nisi magni eos, delectus modi iste nihil ducimus natus
            totam iusto impedit, dolores sapiente suscipit accusantium? Obcaecati dignissimos,
            consectetur placeat rerum at quas quaerat libero eligendi et tempore quibusdam nihil sit
            doloribus nisi facilis, deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Qui nesciunt temporibus unde nostrum error excepturi distinctio iste minus, fuga,
            voluptatibus blanditiis quis tempora, id mollitia. Aperiam porro cupiditate error
            placeat est accusantium ad veniam, mollitia provident repellendus et quos nemo!
          </p>
        </div>
        <button class="accordion">Section 3</button>
        <div class="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor perferendis quos,
            veniam voluptate consequatur nisi magni eos, delectus modi iste nihil ducimus natus
            totam iusto impedit, dolores sapiente suscipit accusantium? Obcaecati dignissimos,
            consectetur placeat rerum at quas quaerat libero eligendi et tempore quibusdam nihil sit
            doloribus nisi facilis, deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Qui nesciunt temporibus unde nostrum error excepturi distinctio iste minus, fuga,
            voluptatibus blanditiis quis tempora, id mollitia. Aperiam porro cupiditate error
            placeat est accusantium ad veniam, mollitia provident repellendus et quos nemo!
          </p>
        </div>
        <script type="text/javascript" src="main.js"></script>
      </body>
    </>
  );
};

export default Accordion;
