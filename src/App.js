import React from "react";
import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import QualityControl from "./pages/QualityControl";
import Businessunit from "./pages/Businessunit";
import Newline from "./pages/Newline";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Error from "./pages/Error";
import Footer from "./pages/Footer";
import ButtonScrolltoTop from "./components/ButtonScrolltoTop/ButtonScrolltoTop";

function App() {
  return (
    <div>
      <Header />
      <ButtonScrolltoTop />
      <div>
        <Routes>
          <Route excact path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Businessunit" element={<Businessunit />} />
          <Route path="/QualityControl" element={<QualityControl />} />
          <Route path="/Newline" element={<Newline />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
      {/* <Footerbox /> */}
    </div>
  );
}

export default App;
