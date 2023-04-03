import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslation } from "react-i18next";

const Contactus = () => {
  const { t } = useTranslation();

  const position = [35.48213, 51.335336];

  return (
    <>
      <div class="contactusheader">
        <div style={{ textAlign: "center" }} class="left">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="text-two">{t("address")}</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="text-one">{t("phone1")}</div>
            <div class="text-one">{t("phone2")}</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div
              style={{ textTransform: "uppercase", color: "#e0ac1c", fontWeight: "bold" }}
              class="text-two"
            >
              contact@mehraeinpars.com
            </div>
          </div>
        </div>
        {/* <hr style={{ height: "2px", color: " black" }} /> */}
        <div class="right">
          <div class="contactus_container">
            <form id="contactus" action="" method="post">
              <h2>{t("contactus")}</h2>
              {/* <h4>Contact us for custom quote</h4> */}
              <fieldset>
                <input
                  placeholder={t("placeholder1")}
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input placeholder={t("placeholder2")} type="email" tabindex="2" required />
              </fieldset>
              <fieldset>
                <input placeholder={t("placeholder3")} type="tel" tabindex="3" required />
              </fieldset>
              <fieldset>
                <input placeholder={t("placeholder4")} type="url" tabindex="4" required />
              </fieldset>
              <fieldset>
                <textarea placeholder={t("placeholder5")} tabindex="5" required></textarea>
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
      <div className="map_container">
        {/* <Map center={[35.48213, 51.335336]} zoom={17}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            Zoom={30}
            subdomains={["mt1", "mt2", "mt3"]}
          />
          <Marker position={position}>
            <Popup>Mehr Aein Pars</Popup>
          </Marker>
        </Map> */}

        {/* <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}

        <MapContainer
          // center={{ lat: 51.505, lng: -0.09 }}
          zoom={14}
          style={{ height: "50vh", width: "100%" }}
          // scrollWheelZoom={false}
          center={position}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            // subdomains={["mt1", "mt2", "mt3"]}
          />
          <Marker position={position}>
            <Popup>MEHRAEINPARS PAPER MILL COMPANY</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Contactus;
