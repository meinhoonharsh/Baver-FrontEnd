import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import HeaderMobile from "../components/HeaderMobile";

function Error404(props) {
  return (
    <>
      <MobileMenu />
      <HeaderMobile />
      <Header isLoggedin={props.isLoggedin} />

      <Footer />
    </>
  );
}

export default Error404;
