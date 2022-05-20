import React from "react";
import Footer from "../components/Footer";
import LoginPopup from "../components/LoginPopup";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import HomeCTA from "../components/HomeCTA";
import LandingSlider from "../components/LandingSlider";
import MobileMenu from "../components/MobileMenu";
import MostPopularDeals from "../components/MostPopularDeals";
import TopPlaces from "../components/TopPlaces";
import TrendingHorecas from "../components/TrendingHorecas";

function HomePage(props) {
  return (
    <>
      <MobileMenu />
      <HeaderMobile />
      <Header access_token={props.access_token} user_data={props.user_data} />

      <div id="apus-main-content">
        <div id="main-container" className="container inner">
          <div className="row">
            <div id="main-content" className="main-page col-xs-12">
              <main id="main" className="site-main clearfix" role="main">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id={52}
                  className="elementor elementor-52"
                  data-elementor-settings="[]"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      <LandingSlider />
                      <MostPopularDeals />
                      <TopPlaces />
                      <TrendingHorecas />
                      <HomeCTA />
                    </div>
                  </div>
                </div>
              </main>
              {/* .site-main */}
            </div>
          </div>
        </div>
      </div>
      {/* .site-content */}
      <a href="/" id="back-to-top">
        <i className="fas fa-long-arrow-alt-up" />
      </a>
      <Footer />
      {/* .site */}
      <LoginPopup access_token={props.access_token} />
    </>
  );
}

export default HomePage;
