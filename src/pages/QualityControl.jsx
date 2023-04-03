import React from "react";
import { useTranslation } from "react-i18next";

const QualityControl = () => {
  const { t } = useTranslation();

  return (
    <div className="qualitycontrol_container">
      <div className="header_qc">
        <div className="topheader_qc">
          {/* <img src="./images/QC2.png" alt="/" /> */}
          <img src="https://s2.uupload.ir/files/qc2_4zqj.png" alt="/" />
          <div class="qc_centered">
            <h2 style={{ color: "black", textTransform: "uppercase" }}>{t("qc")}</h2>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="description_qc">
        <p> {t("qctext1")}</p>
        <br />
        <p> {t("qctext2")}</p>
        <br />
        <p> {t("qctext3")}</p>
        <br />
        <p> {t("qctext4")}</p>
        <br />
        <p> {t("qctext5")}</p>
        <br />
        <p> {t("qctext6")}</p>
        <br />
      </div>

      <h3 style={{ color: "black", textTransform: "uppercase", textAlign: "center" }}>
        {" "}
        {t("qceq")}
      </h3>

      <div class="qc_assets_container">
        <div class="qc_assets_card">
          <img
            src="https://www.ecoinstrument.com.my/wp-content/uploads/2020/04/ring-criush-testing-machine-300x300.jpg"
            alt="/"
          />
          <h3 style={{ color: "black" }}>Crush Tester</h3>
          <p>Card description</p>
        </div>

        <div class="qc_assets_card">
          <img src="https://www.ubiquesystems.com/img/cobb-tester.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Cobb Tester</h3>
          <p>Card description</p>
        </div>

        <div class="qc_assets_card">
          <img src="https://www.ubiquesystems.com/img/Bursting-Strength-Tester.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Bursting Strength Tester (BST)</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img src="https://www.ubiquesystems.com/img/caliper.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Caliper Thickness Gauge</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img src="https://www.ubiquesystems.com/img/moisture-tester.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Moisture Tester</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img src="https://www.ubiquesystems.com/img/tearresistancetester.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Tear Resistance Tester</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img src="https://cdn.productimages.abb.com/9IBA222934_400x400.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Strip Punch</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img src="https://cdn.productimages.abb.com/9IBA222935_400x400.jpg" alt="/" />
          <h3 style={{ color: "black" }}>Circular Cutter</h3>
          <p>Card description</p>
        </div>
        {/* <div class="qc_assets_card">
          <img
            src="https://images.unsplash.com/photo-1533762385849-5aa14c83dbaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=040eec84d37ae33312c1bda4d0dfb0f6&auto=format&fit=crop&w=800&q=60"
            alt="/"
          />
          <h3>Card title</h3>
          <p>Card description</p>
        </div>
        <div class="qc_assets_card">
          <img
            src="https://images.unsplash.com/photo-1533754434873-c60f30acf0ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7fd34022d3c026a5cdebba00b4fa89a4&auto=format&fit=crop&w=800&q=60"
            alt="/"
          />
          <h3>Card title</h3>
          <p>Card description</p>
        </div> */}
      </div>

      <br />
    </div>
  );
};

export default QualityControl;
