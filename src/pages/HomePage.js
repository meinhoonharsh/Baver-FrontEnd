import React from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import LandingSlider from "../components/LandingSlider";
import MobileMenu from "../components/MobileMenu";
import MostPopularDeals from "../components/MostPopularDeals";

export default function HomePage() {
  return (
    <>
      <MobileMenu />
      <HeaderMobile />
      <Header />
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
                      
                      <section
                        className="elementor-element elementor-element-18d1396 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="18d1396"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-54a4f64 elementor-column elementor-col-100 elementor-top-column"
                              data-id="54a4f64"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-e4e5f11 elementor-widget elementor-widget-spacer"
                                    data-id="e4e5f11"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-b6a0bc4 elementor-widget elementor-widget-heading"
                                    data-id="b6a0bc4"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Top Places{" "}
                                        <span className="text-theme">
                                          Listing
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-6eb8be3 elementor-widget elementor-widget-spacer"
                                    data-id="6eb8be3"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-d88c402 elementor-widget elementor-widget-text-editor"
                                    data-id="d88c402"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-text-editor elementor-clearfix">
                                        <p>
                                          At vero eos et accusamus et iusto odio
                                          dignissimos ducimus qui blanditiis.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-c885b62 elementor-section-stretched elementor-section-height-min-height elementor-section-items-stretch elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section elementor-top-section"
                        data-id="c885b62"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-9d99425 elementor-column elementor-col-50 elementor-top-column"
                              data-id="9d99425"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-bd745df elementor-widget elementor-widget-apus_listings_city_banner"
                                    data-id="bd745df"
                                    data-element_type="widget"
                                    data-widget_type="apus_listings_city_banner.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="city-banner ">
                                        <a
                                          className
                                          href="https://www.demoapus-wp1.com/findus/region/new-york/"
                                        >
                                          <div className="city-banner-inner">
                                            <div
                                              className="city-image"
                                              style={{
                                                backgroundImage:
                                                  "url(g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/place-1.jpg)"
                                              }}
                                            ></div>
                                            <div className="inner-content">
                                              <h4 className="title">
                                                New York{" "}
                                              </h4>
                                              <span className="more_text">
                                                Get All Listing{" "}
                                              </span>
                                              <span className="number">
                                                9 Listings
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-71e9a9e elementor-column elementor-col-50 elementor-top-column"
                              data-id="71e9a9e"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-bb6cae6 elementor-widget elementor-widget-apus_listings_city_banner"
                                    data-id="bb6cae6"
                                    data-element_type="widget"
                                    data-widget_type="apus_listings_city_banner.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="city-banner ">
                                        <a
                                          className
                                          href="https://www.demoapus-wp1.com/findus/region/los-angeles/"
                                        >
                                          <div className="city-banner-inner">
                                            <div
                                              className="city-image"
                                              style={{
                                                backgroundImage:
                                                  "url(g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/place-22.jpg)"
                                              }}
                                            ></div>
                                            <div className="inner-content">
                                              <h4 className="title">
                                                Los Angeles{" "}
                                              </h4>
                                              <span className="more_text">
                                                Get All Listing{" "}
                                              </span>
                                              <span className="number">
                                                2 Listings
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-ae0319d elementor-section-stretched elementor-section-height-min-height elementor-section-items-stretch elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section elementor-top-section"
                        data-id="ae0319d"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-5e526e0 elementor-column elementor-col-50 elementor-top-column"
                              data-id="5e526e0"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-062117f elementor-widget elementor-widget-apus_listings_city_banner"
                                    data-id="062117f"
                                    data-element_type="widget"
                                    data-widget_type="apus_listings_city_banner.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="city-banner ">
                                        <a
                                          className
                                          href="https://www.demoapus-wp1.com/findus/region/new-zealand/"
                                        >
                                          <div className="city-banner-inner">
                                            <div
                                              className="city-image"
                                              style={{
                                                backgroundImage:
                                                  "url(g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/place-3.jpg)"
                                              }}
                                            ></div>
                                            <div className="inner-content">
                                              <h4 className="title">
                                                New Zealand{" "}
                                              </h4>
                                              <span className="more_text">
                                                Get All Listing{" "}
                                              </span>
                                              <span className="number">
                                                1 Listing
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-a33dfbf elementor-column elementor-col-50 elementor-top-column"
                              data-id="a33dfbf"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-b6509d1 elementor-widget elementor-widget-apus_listings_city_banner"
                                    data-id="b6509d1"
                                    data-element_type="widget"
                                    data-widget_type="apus_listings_city_banner.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="city-banner ">
                                        <a
                                          className
                                          href="https://www.demoapus-wp1.com/findus/region/london/"
                                        >
                                          <div className="city-banner-inner">
                                            <div
                                              className="city-image"
                                              style={{
                                                backgroundImage:
                                                  "url(g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/place-4.jpg)"
                                              }}
                                            ></div>
                                            <div className="inner-content">
                                              <h4 className="title">London </h4>
                                              <span className="more_text">
                                                Get All Listing{" "}
                                              </span>
                                              <span className="number">
                                                1 Listing
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-7d29cfb elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="7d29cfb"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-bcb5c13 elementor-column elementor-col-100 elementor-top-column"
                              data-id="bcb5c13"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-background-overlay" />
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-cd0a4a5 elementor-widget elementor-widget-spacer"
                                    data-id="cd0a4a5"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-56ab959 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="56ab959"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-4a89460 elementor-column elementor-col-100 elementor-top-column"
                              data-id="4a89460"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-a97600b elementor-widget elementor-widget-spacer"
                                    data-id="a97600b"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-5e22100 elementor-widget elementor-widget-heading"
                                    data-id="5e22100"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Top &amp; Popular{" "}
                                        <span className="text-theme">
                                          Listings
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-9d6c0ad elementor-widget elementor-widget-spacer"
                                    data-id="9d6c0ad"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-000377b elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                                    data-id="000377b"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-text-editor elementor-clearfix">
                                        <p>
                                          At vero eos et accusamus et iusto odio
                                          dignissimos ducimus qui blanditiis
                                          praesentium voluptatum deleniti atque
                                          corrupti quos dolores et quas
                                          molestias excepturi
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-fc21c0f elementor-widget elementor-widget-spacer"
                                    data-id="fc21c0f"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-282bee0 elementor-widget elementor-widget-apus_listings"
                                    data-id="282bee0"
                                    data-element_type="widget"
                                    data-widget_type="apus_listings.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="widget-listing style-grid   ">
                                        <div className="widget-content ">
                                          <div className="row">
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4  md-clearfix  sm-clearfix xs-clearfix">
                                              <div
                                                className="job-grid-style post-524 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-food-restaurants job_listing_category-shopping job_listing_type-freelance job_listing_amenity-accepts-credit-cards job_listing_amenity-alarm-system job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wireless-internet job_listing_region-new-york job_listing_region-usa job-type-freelance"
                                                data-latitude="40.760552"
                                                data-longitude="-73.926861"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-4-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-4-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/healthy-food/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/healthy-food/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-4-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        60
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        85
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        3.8
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={524}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-150x150.jpg"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-150x150.jpg 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-300x300.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-768x768.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-400x400.jpg 400w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-600x600.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-110x110.jpg 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3-100x100.jpg 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-3.jpg 770w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/healthy-food/">
                                                          Healthy Food
                                                        </a>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        Villa,food for you
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+88-123-456-789"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +88-123-456-789
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +88-123-4***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/food-restaurants/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#fd5c05"
                                                            }}
                                                          >
                                                            <i className="fas fa-wine-glass" />
                                                          </span>
                                                          Food &amp; Restaurants
                                                        </a>
                                                        <div className="more-categories">
                                                          <span className="count-cat">
                                                            +1
                                                          </span>
                                                          <div className="more-categories-inner">
                                                            <a href="https://www.demoapus-wp1.com/findus/listing-category/shopping/">
                                                              <span
                                                                className="icon-cate"
                                                                style={{
                                                                  background:
                                                                    "#f73d51"
                                                                }}
                                                              >
                                                                <i className="fas fa-briefcase" />
                                                              </span>
                                                              <span className="name-category">
                                                                Shopping
                                                              </span>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="listing-time closed">
                                                        Closed
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4 ">
                                              <div
                                                className="job-grid-style post-523 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-education job_listing_category-intertainment job_listing_category-sport job_listing_type-internship job_listing_amenity-accepts-credit-cards job_listing_amenity-alarm-system job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wheelchair-accesible job_listing_region-new-york job_listing_region-usa job-type-internship"
                                                data-latitude="40.758883"
                                                data-longitude="-73.937499"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-5-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-5-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/dance-composer/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/dance-composer/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-5-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        100
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        120
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        4.4
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={523}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-150x150.jpg"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-150x150.jpg 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-300x300.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-768x768.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-400x400.jpg 400w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-600x600.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-110x110.jpg 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-100x100.jpg 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2.jpg 770w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/dance-composer/">
                                                          Dance Composer
                                                        </a>
                                                        <span
                                                          className="listing-claimed-icon"
                                                          data-toggle="tooltip"
                                                          title="Claimed"
                                                        >
                                                          <i className="ti-check" />
                                                        </span>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        Outdoor, luxury for you
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+89-456-888-666"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +89-456-888-666
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +89-456-8***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/education/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#18bad9"
                                                            }}
                                                          >
                                                            <i className="fas fa-graduation-cap" />
                                                          </span>
                                                          Education
                                                        </a>
                                                        <div className="more-categories">
                                                          <span className="count-cat">
                                                            +2
                                                          </span>
                                                          <div className="more-categories-inner">
                                                            <a href="https://www.demoapus-wp1.com/findus/listing-category/intertainment/">
                                                              <span
                                                                className="icon-cate"
                                                                style={{
                                                                  background:
                                                                    "#ff465a"
                                                                }}
                                                              >
                                                                <i className="fas fa-glass-martini" />
                                                              </span>
                                                              <span className="name-category">
                                                                Intertainment
                                                              </span>
                                                            </a>
                                                            <a href="https://www.demoapus-wp1.com/findus/listing-category/sport/">
                                                              <span
                                                                className="icon-cate"
                                                                style={{
                                                                  background:
                                                                    "#37b475"
                                                                }}
                                                              >
                                                                <i className="fas fa-futbol" />
                                                              </span>
                                                              <span className="name-category">
                                                                Sport
                                                              </span>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="listing-time opening">
                                                        Open{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4  sm-clearfix xs-clearfix">
                                              <div
                                                className="job-grid-style post-522 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-sport job_listing_type-full-time job_listing_amenity-accepts-credit-cards job_listing_amenity-alarm-system job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wheelchair-accesible job_listing_region-new-york job_listing_region-usa job-type-full-time"
                                                data-latitude="40.766410"
                                                data-longitude="-73.938238"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-13-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-13-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/services-auto/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/services-auto/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-13-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        20
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        50
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        4.6
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={522}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-298x300.png 298w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-110x110.png 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1.png 301w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-100x100.png 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-300x300.png 300w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/services-auto/">
                                                          Services Auto
                                                        </a>
                                                        <span
                                                          className="listing-claimed-icon"
                                                          data-toggle="tooltip"
                                                          title="Claimed"
                                                        >
                                                          <i className="ti-check" />
                                                        </span>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        Active for you, my
                                                        friend
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+89-123-456-789"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +89-123-456-789
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +89-123-4***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/sport/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#37b475"
                                                            }}
                                                          >
                                                            <i className="fas fa-futbol" />
                                                          </span>
                                                          Sport
                                                        </a>
                                                      </div>
                                                      <div className="listing-time closed">
                                                        Closed
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4  md-clearfix ">
                                              <div
                                                className="job-grid-style post-521 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-intertainment job_listing_category-sport job_listing_type-part-time job_listing_amenity-accepts-credit-cards job_listing_amenity-bike-parking job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wheelchair-accesible job_listing_amenity-wireless-internet job_listing_region-new-york job_listing_region-usa job-type-part-time job_position_featured"
                                                data-latitude="40.763260"
                                                data-longitude="-73.957052"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-11-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-11-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/summer-music/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/summer-music/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-11-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        110
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        115
                                                      </span>
                                                    </span>
                                                    <div className="listing-featured-label">
                                                      Featured{" "}
                                                    </div>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        4.6
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={521}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-150x150.jpg"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-150x150.jpg 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-300x300.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-400x400.jpg 400w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-110x110.jpg 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4-100x100.jpg 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-4.jpg 600w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/summer-music/">
                                                          Summer Music
                                                        </a>
                                                        <span
                                                          className="listing-claimed-icon"
                                                          data-toggle="tooltip"
                                                          title="Claimed"
                                                        >
                                                          <i className="ti-check" />
                                                        </span>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        Outdoor, luxury for you
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+75-123-456-789"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +75-123-456-789
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +75-123-4***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/intertainment/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#ff465a"
                                                            }}
                                                          >
                                                            <i className="fas fa-glass-martini" />
                                                          </span>
                                                          Intertainment
                                                        </a>
                                                        <div className="more-categories">
                                                          <span className="count-cat">
                                                            +1
                                                          </span>
                                                          <div className="more-categories-inner">
                                                            <a href="https://www.demoapus-wp1.com/findus/listing-category/sport/">
                                                              <span
                                                                className="icon-cate"
                                                                style={{
                                                                  background:
                                                                    "#37b475"
                                                                }}
                                                              >
                                                                <i className="fas fa-futbol" />
                                                              </span>
                                                              <span className="name-category">
                                                                Sport
                                                              </span>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="listing-time opening">
                                                        Open{" "}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4  sm-clearfix xs-clearfix">
                                              <div
                                                className="job-grid-style post-520 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-food-restaurants job_listing_type-part-time job_listing_amenity-accepts-credit-cards job_listing_amenity-alarm-system job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wheelchair-accesible job_listing_region-new-york job_listing_region-usa job-type-part-time job_position_featured"
                                                data-latitude="40.754979"
                                                data-longitude="-73.967173"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-3-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-3-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/hotel-govendor/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/hotel-govendor/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-3-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        75
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        85
                                                      </span>
                                                    </span>
                                                    <div className="listing-featured-label">
                                                      Featured{" "}
                                                    </div>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        4.2
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={520}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-298x300.png 298w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-110x110.png 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1.png 301w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-100x100.png 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-300x300.png 300w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/hotel-govendor/">
                                                          Hotel Govendor
                                                        </a>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        House, luxury food for
                                                        you
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+88-123-888-999"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +88-123-888-999
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +88-123-8***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/food-restaurants/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#fd5c05"
                                                            }}
                                                          >
                                                            <i className="fas fa-wine-glass" />
                                                          </span>
                                                          Food &amp; Restaurants
                                                        </a>
                                                      </div>
                                                      <div className="listing-time closed">
                                                        Closed
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="full-smallest col-xs-12 col-sm-6 col-md-4 ">
                                              <div
                                                className="job-grid-style post-519 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-education job_listing_category-sport job_listing_type-full-time job_listing_amenity-accepts-credit-cards job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wheelchair-accesible job_listing_amenity-wireless-internet job_listing_region-new-york job_listing_region-usa job-type-full-time"
                                                data-latitude="40.752630"
                                                data-longitude="-73.940804"
                                                data-img="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-12-540x300.jpg"
                                                data-thumb="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-12-150x150.jpg"
                                                data-permalink="https://www.demoapus-wp1.com/findus/listing/yoga-meditaion/"
                                              >
                                                <div className="listing-image">
                                                  <a
                                                    className="listing-image-inner"
                                                    href="https://www.demoapus-wp1.com/findus/listing/yoga-meditaion/"
                                                  >
                                                    <div className="image-wrapper">
                                                      <img
                                                        width={540}
                                                        height={300}
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 540 300'%2F%3E"
                                                        className="attachment-findus-card-image size-findus-card-image unveil-image"
                                                        alt
                                                        data-src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/l-12-540x300.jpg"
                                                      />
                                                    </div>
                                                  </a>
                                                  <div className="flags-top-wrapper">
                                                    <span className="price-range">
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        100
                                                      </span>
                                                      -{" "}
                                                      <span className="currency-symbol">
                                                        $
                                                      </span>
                                                      <span className="price">
                                                        120
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="flags-bottom-wrapper">
                                                    <div className="listing-review">
                                                      <span className="review-avg">
                                                        3.7
                                                      </span>
                                                    </div>
                                                    <div className="top-imformation">
                                                      <div className="listing-btn-wrapper listing-bookmark">
                                                        <a
                                                          href="#apus-bookmark-add"
                                                          className="apus-bookmark-not-login"
                                                          data-id={519}
                                                        >
                                                          <i className="ti-heart" />
                                                          <span className="bookmark-text">
                                                            Save
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bottom-grid">
                                                  <div className="listing-content">
                                                    <div className="listing-logo">
                                                      <div className="inner">
                                                        <div className="image-wrapper">
                                                          <img
                                                            width={150}
                                                            height={150}
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 150 150'%2F%3E"
                                                            className="attachment-thumbnail size-thumbnail unveil-image"
                                                            alt
                                                            data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-150x150.jpg"
                                                            data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-150x150.jpg 150w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-300x300.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-768x768.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-400x400.jpg 400w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-600x600.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-110x110.jpg 110w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2-100x100.jpg 100w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-2.jpg 770w"
                                                            data-sizes="(max-width: 150px) 100vw, 150px"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="listing-content-inner clearfix">
                                                      <h3 className="listing-title">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing/yoga-meditaion/">
                                                          Yoga &amp; Meditaion
                                                        </a>
                                                      </h3>
                                                      <div className="listing-tagline">
                                                        Active for you, my
                                                        friend
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-contact">
                                                    <div className="grid-contact-inner flex-middle">
                                                      <div className="listing-location listing-address">
                                                        <i className="flaticon-placeholder" />
                                                        <a href="https://www.demoapus-wp1.com/findus/region/new-york/">
                                                          New York
                                                        </a>
                                                        ,
                                                        <a href="https://www.demoapus-wp1.com/findus/region/usa/">
                                                          USA
                                                        </a>
                                                      </div>
                                                      <div className="phone-wrapper listing-phone phone-hide">
                                                        <a
                                                          className="phone"
                                                          href="tel:+80-123-888-999"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +80-123-888-999
                                                        </a>
                                                        <span
                                                          className="phone-show"
                                                          onclick="this.parentNode.classList.add('show');"
                                                        >
                                                          <i className="flaticon-call" />
                                                          +80-123-8***
                                                          <span className="bg-theme">
                                                            show
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="listing-content-bottom">
                                                    <div className="grid-metas-inner flex-middle">
                                                      <div className="listing-category">
                                                        <a href="https://www.demoapus-wp1.com/findus/listing-category/education/">
                                                          <span
                                                            className="icon-cate"
                                                            style={{
                                                              background:
                                                                "#18bad9"
                                                            }}
                                                          >
                                                            <i className="fas fa-graduation-cap" />
                                                          </span>
                                                          Education
                                                        </a>
                                                        <div className="more-categories">
                                                          <span className="count-cat">
                                                            +1
                                                          </span>
                                                          <div className="more-categories-inner">
                                                            <a href="https://www.demoapus-wp1.com/findus/listing-category/sport/">
                                                              <span
                                                                className="icon-cate"
                                                                style={{
                                                                  background:
                                                                    "#37b475"
                                                                }}
                                                              >
                                                                <i className="fas fa-futbol" />
                                                              </span>
                                                              <span className="name-category">
                                                                Sport
                                                              </span>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="listing-time closed">
                                                        Closed
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-ac4083b elementor-widget elementor-widget-spacer"
                                    data-id="ac4083b"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-fa26c25 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="fa26c25"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                      >
                        <div className="elementor-background-overlay" />
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-2c1087a elementor-column elementor-col-50 elementor-top-column"
                              data-id="2c1087a"
                              data-element_type="column"
                              data-settings='{"background_background":"classic"}'
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-dce4cea elementor-widget elementor-widget-heading"
                                    data-id="dce4cea"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        One of most popular place to submit your
                                        list
                                      </h2>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-d4f69a5 elementor-widget elementor-widget-spacer"
                                    data-id="d4f69a5"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-8908108 elementor-widget elementor-widget-text-editor"
                                    data-id={8908108}
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-text-editor elementor-clearfix">
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua. Ut enim ad minim
                                          veniam
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-9e08d60 elementor-widget elementor-widget-spacer"
                                    data-id="9e08d60"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-d269ee1 elementor-widget elementor-widget-button"
                                    data-id="d269ee1"
                                    data-element_type="widget"
                                    data-widget_type="button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a
                                          href="#"
                                          className="elementor-button-link elementor-button elementor-size-sm"
                                          role="button"
                                        >
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">
                                              Get Started Today
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-fa732f9 elementor-hidden-tablet elementor-hidden-phone elementor-column elementor-col-50 elementor-top-column"
                              data-id="fa732f9"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap">
                                <div className="elementor-widget-wrap"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-131e165 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="131e165"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-04cdcbf elementor-column elementor-col-100 elementor-top-column"
                              data-id="04cdcbf"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-bf3fd47 elementor-widget elementor-widget-spacer"
                                    data-id="bf3fd47"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-ba3c5fa elementor-widget elementor-widget-heading"
                                    data-id="ba3c5fa"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        See Latest{" "}
                                        <span className="text-theme">
                                          Articles
                                        </span>
                                      </h2>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-5147039 elementor-widget elementor-widget-spacer"
                                    data-id={5147039}
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-28bd0d8 elementor-widget elementor-widget-text-editor"
                                    data-id="28bd0d8"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-text-editor elementor-clearfix">
                                        <p>
                                          At vero eos et accusamus et iusto odio
                                          dignissimos ducimus qui blanditiis.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-element elementor-element-d4ed8b8 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                        data-id="d4ed8b8"
                        data-element_type="section"
                        data-settings='{"stretch_section":"section-stretched"}'
                      >
                        <div className="elementor-container elementor-column-gap-extended">
                          <div className="elementor-row">
                            <div
                              className="elementor-element elementor-element-bcb1d64 elementor-column elementor-col-100 elementor-top-column"
                              data-id="bcb1d64"
                              data-element_type="column"
                            >
                              <div className="elementor-column-wrap  elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                  <div
                                    className="elementor-element elementor-element-b9b04e9 elementor-widget elementor-widget-apus_posts"
                                    data-id="b9b04e9"
                                    data-element_type="widget"
                                    data-widget_type="apus_posts.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="widget-blogs carousel ">
                                        <div className="widget-content">
                                          <div
                                            className="slick-carousel hidden-dots"
                                            data-items={3}
                                            data-medium={2}
                                            data-smallmedium={2}
                                            data-extrasmall={1}
                                            data-pagination="true"
                                            data-nav="false"
                                          >
                                            <div className="item">
                                              <article className="post post-layout post-grid-v1 post-26 type-post status-publish format-standard has-post-thumbnail hentry category-travel-tour tag-groups tag-parking tag-room">
                                                <div className="top-image">
                                                  <figure className="entry-thumb">
                                                    <a
                                                      className="post-thumbnail"
                                                      href="https://www.demoapus-wp1.com/findus/excited-news-about-fashion/"
                                                      aria-hidden="true"
                                                    >
                                                      <div className="image-wrapper">
                                                        <img
                                                          width={660}
                                                          height={413}
                                                          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 660 413'%2F%3E"
                                                          className="attachment-large size-large unveil-image"
                                                          alt
                                                          data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8-1024x640.jpg"
                                                          data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8-1024x640.jpg 1024w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8-300x188.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8-768x480.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8-600x375.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-8.jpg 1200w"
                                                          data-sizes="(max-width: 660px) 100vw, 660px"
                                                        />
                                                      </div>
                                                    </a>
                                                  </figure>
                                                </div>
                                                <div className="inner-bottom">
                                                  <div className="top-info">
                                                    <div className="avatar-wrapper ">
                                                      <img
                                                        src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png"
                                                        width={70}
                                                        height={70}
                                                        alt
                                                        className="avatar avatar-70 wp-user-avatar wp-user-avatar-70 photo avatar-default"
                                                      />
                                                    </div>
                                                    <div className="name-author">
                                                      <span className="subfix">
                                                        By
                                                      </span>
                                                      <a href="https://www.demoapus-wp1.com/findus/excited-news-about-fashion/">
                                                        admin
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="top-info-post-gird flex-middle justify-content-center">
                                                    <div className="date">
                                                      <i className="far fa-calendar-check" />
                                                      January 7, 2020
                                                    </div>
                                                    <div className="category">
                                                      <i className="far fa-folder-open" />
                                                      <a
                                                        href="https://www.demoapus-wp1.com/findus/category/travel-tour/"
                                                        className="categories-name"
                                                      >
                                                        Travel &amp; Tour
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <h4 className="entry-title">
                                                    <a href="https://www.demoapus-wp1.com/findus/excited-news-about-fashion/">
                                                      Excited News About
                                                      Fashion.
                                                    </a>
                                                  </h4>
                                                  <div className="description hidden-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod{" "}
                                                  </div>
                                                  <a
                                                    className="btn-readmore hidden-xs"
                                                    href="https://www.demoapus-wp1.com/findus/excited-news-about-fashion/"
                                                  >
                                                    Read more
                                                    <i className="fas fa-angle-right" />
                                                  </a>
                                                </div>
                                              </article>
                                            </div>
                                            <div className="item">
                                              <article className="post post-layout post-grid-v1 post-23 type-post status-publish format-standard has-post-thumbnail hentry category-intertainment tag-restaurant tag-spa tag-travel">
                                                <div className="top-image">
                                                  <figure className="entry-thumb">
                                                    <a
                                                      className="post-thumbnail"
                                                      href="https://www.demoapus-wp1.com/findus/great-business-tips-in-2020/"
                                                      aria-hidden="true"
                                                    >
                                                      <div className="image-wrapper">
                                                        <img
                                                          width={660}
                                                          height={413}
                                                          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 660 413'%2F%3E"
                                                          className="attachment-large size-large unveil-image"
                                                          alt
                                                          data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7-1024x640.jpg"
                                                          data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7-1024x640.jpg 1024w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7-300x188.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7-768x480.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7-600x375.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-7.jpg 1200w"
                                                          data-sizes="(max-width: 660px) 100vw, 660px"
                                                        />
                                                      </div>
                                                    </a>
                                                  </figure>
                                                </div>
                                                <div className="inner-bottom">
                                                  <div className="top-info">
                                                    <div className="avatar-wrapper ">
                                                      <img
                                                        src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png"
                                                        width={70}
                                                        height={70}
                                                        alt
                                                        className="avatar avatar-70 wp-user-avatar wp-user-avatar-70 photo avatar-default"
                                                      />
                                                    </div>
                                                    <div className="name-author">
                                                      <span className="subfix">
                                                        By
                                                      </span>
                                                      <a href="https://www.demoapus-wp1.com/findus/great-business-tips-in-2020/">
                                                        admin
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="top-info-post-gird flex-middle justify-content-center">
                                                    <div className="date">
                                                      <i className="far fa-calendar-check" />
                                                      January 7, 2020
                                                    </div>
                                                    <div className="category">
                                                      <i className="far fa-folder-open" />
                                                      <a
                                                        href="https://www.demoapus-wp1.com/findus/category/intertainment/"
                                                        className="categories-name"
                                                      >
                                                        Intertainment
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <h4 className="entry-title">
                                                    <a href="https://www.demoapus-wp1.com/findus/great-business-tips-in-2020/">
                                                      Great Business Tips in
                                                      2020
                                                    </a>
                                                  </h4>
                                                  <div className="description hidden-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod{" "}
                                                  </div>
                                                  <a
                                                    className="btn-readmore hidden-xs"
                                                    href="https://www.demoapus-wp1.com/findus/great-business-tips-in-2020/"
                                                  >
                                                    Read more
                                                    <i className="fas fa-angle-right" />
                                                  </a>
                                                </div>
                                              </article>
                                            </div>
                                            <div className="item">
                                              <article className="post post-layout post-grid-v1 post-21 type-post status-publish format-standard has-post-thumbnail hentry category-business tag-food-drink tag-room tag-travel">
                                                <div className="top-image">
                                                  <figure className="entry-thumb">
                                                    <a
                                                      className="post-thumbnail"
                                                      href="https://www.demoapus-wp1.com/findus/8-amazing-tricks-about-business/"
                                                      aria-hidden="true"
                                                    >
                                                      <div className="image-wrapper">
                                                        <img
                                                          width={660}
                                                          height={413}
                                                          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 660 413'%2F%3E"
                                                          className="attachment-large size-large unveil-image"
                                                          alt
                                                          data-src="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6-1024x640.jpg"
                                                          data-srcset="https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6-1024x640.jpg 1024w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6-300x188.jpg 300w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6-768x480.jpg 768w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6-600x375.jpg 600w, https://g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/blog-6.jpg 1200w"
                                                          data-sizes="(max-width: 660px) 100vw, 660px"
                                                        />
                                                      </div>
                                                    </a>
                                                  </figure>
                                                </div>
                                                <div className="inner-bottom">
                                                  <div className="top-info">
                                                    <div className="avatar-wrapper ">
                                                      <img
                                                        src="g5p6r6b9.stackpathcdn.com/findus/wp-content/uploads/2020/01/user-1-150x150.png"
                                                        width={70}
                                                        height={70}
                                                        alt
                                                        className="avatar avatar-70 wp-user-avatar wp-user-avatar-70 photo avatar-default"
                                                      />
                                                    </div>
                                                    <div className="name-author">
                                                      <span className="subfix">
                                                        By
                                                      </span>
                                                      <a href="https://www.demoapus-wp1.com/findus/8-amazing-tricks-about-business/">
                                                        admin
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="top-info-post-gird flex-middle justify-content-center">
                                                    <div className="date">
                                                      <i className="far fa-calendar-check" />
                                                      January 7, 2020
                                                    </div>
                                                    <div className="category">
                                                      <i className="far fa-folder-open" />
                                                      <a
                                                        href="https://www.demoapus-wp1.com/findus/category/business/"
                                                        className="categories-name"
                                                      >
                                                        Business
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <h4 className="entry-title">
                                                    <a href="https://www.demoapus-wp1.com/findus/8-amazing-tricks-about-business/">
                                                      8 Amazing Tricks About
                                                      Business
                                                    </a>
                                                  </h4>
                                                  <div className="description hidden-xs">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod{" "}
                                                  </div>
                                                  <a
                                                    className="btn-readmore hidden-xs"
                                                    href="https://www.demoapus-wp1.com/findus/8-amazing-tricks-about-business/"
                                                  >
                                                    Read more
                                                    <i className="fas fa-angle-right" />
                                                  </a>
                                                </div>
                                              </article>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-c7f681e elementor-widget elementor-widget-spacer"
                                    data-id="c7f681e"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </main>
              {/* .site-main */}
            </div>
            {/* .content-area */}
          </div>
        </div>
      </div>
      {/* .site-content */}
      <footer id="apus-footer" className="apus-footer" role="contentinfo">
        <div
          id="apus-footer-inner"
          className="apus-footer footer-builder-wrapper  footer-1"
        >
          <div className="apus-footer-inner">
            <div
              data-elementor-type="wp-post"
              data-elementor-id={89}
              className="elementor elementor-89"
              data-elementor-settings="[]"
            >
              <div className="elementor-inner">
                <div className="elementor-section-wrap">
                  <section
                    className="elementor-element elementor-element-23f89f1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                    data-id="23f89f1"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div className="elementor-row">
                        <div
                          className="elementor-element elementor-element-b8c9ebd elementor-column elementor-col-25 elementor-top-column"
                          data-id="b8c9ebd"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-b58ba7c elementor-widget elementor-widget-heading"
                                data-id="b58ba7c"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    About Us
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-12b92c7 elementor-widget elementor-widget-text-editor"
                                data-id="12b92c7"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <div>
                                      We are Themez Hub A team of clean,
                                      creative &amp; professionals delivering
                                      world-class HTML Templates to build a
                                      better &amp; smart web.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-ba02fcf elementor-widget elementor-widget-button"
                                data-id="ba02fcf"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a
                                      href="#"
                                      className="elementor-button-link elementor-button elementor-size-md"
                                      role="button"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-icon elementor-align-icon-left">
                                          <i
                                            aria-hidden="true"
                                            className="fab fa-android"
                                          />{" "}
                                        </span>
                                        <span className="elementor-button-text">
                                          Google Store
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0538d3c elementor-column elementor-col-25 elementor-top-column"
                          data-id="0538d3c"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-e2c2720 elementor-widget elementor-widget-apus_nav_menu"
                                data-id="e2c2720"
                                data-element_type="widget"
                                data-widget_type="apus_nav_menu.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="widget-nav-menu widget  ">
                                    <h2 className="widget-title">
                                      Usefull Links
                                    </h2>
                                    <div className="widget-content">
                                      <div className="menu-usefull-links-container">
                                        <ul
                                          id="menu-usefull-links"
                                          className="menu"
                                        >
                                          <li
                                            id="menu-item-83"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-83 aligned-left"
                                          >
                                            <a href="#">Support</a>
                                          </li>
                                          <li
                                            id="menu-item-86"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-86 aligned-left"
                                          >
                                            <a href="#">Contact Us</a>
                                          </li>
                                          <li
                                            id="menu-item-84"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-84 aligned-left"
                                          >
                                            <a href="#">How It Works</a>
                                          </li>
                                          <li
                                            id="menu-item-87"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-87 aligned-left"
                                          >
                                            <a href="#">
                                              Privacy &amp; Security
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-88"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88 aligned-left"
                                          >
                                            <a href="#">Terms of Service</a>
                                          </li>
                                          <li
                                            id="menu-item-148"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-148 aligned-left"
                                          >
                                            <a href="#">Communications</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-5ae3745 elementor-column elementor-col-25 elementor-top-column"
                          data-id="5ae3745"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-b8c3de2 elementor-widget elementor-widget-heading"
                                data-id="b8c3de2"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Get In Touch
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-df7677c elementor-icon-list--layout-traditional elementor-widget elementor-widget-apus_icon_list"
                                data-id="df7677c"
                                data-element_type="widget"
                                data-widget_type="apus_icon_list.default"
                              >
                                <div className="elementor-widget-container">
                                  <ul className="elementor-icon-list-items">
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <i className="ti-location-pin" />
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        7744 North, New York
                                      </span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <i className="ti-email" />
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        support@example.com
                                      </span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <i className="ti-mobile" />
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        +91 123 456 789
                                      </span>
                                    </li>
                                    <li className="elementor-icon-list-item">
                                      <span className="elementor-icon-list-icon">
                                        <i className="ti-world" />
                                      </span>
                                      <span className="elementor-icon-list-text">
                                        www.apusthemes.com
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-1474f52 elementor-shape-rounded elementor-widget elementor-widget-social-icons"
                                data-id="1474f52"
                                data-element_type="widget"
                                data-widget_type="social-icons.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-social-icons-wrapper">
                                    <a
                                      className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-5816483"
                                      href="#"
                                      target="_blank"
                                    >
                                      <span className="elementor-screen-only">
                                        Facebook-f
                                      </span>
                                      <i className="fab fa-facebook-f" />{" "}
                                    </a>
                                    <a
                                      className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-b21d7e6"
                                      href="#"
                                      target="_blank"
                                    >
                                      <span className="elementor-screen-only">
                                        Twitter
                                      </span>
                                      <i className="fab fa-twitter" />{" "}
                                    </a>
                                    <a
                                      className="elementor-icon elementor-social-icon elementor-social-icon-google-plus-g elementor-repeater-item-b788108"
                                      href="#"
                                      target="_blank"
                                    >
                                      <span className="elementor-screen-only">
                                        Google-plus-g
                                      </span>
                                      <i className="fab fa-google-plus-g" />{" "}
                                    </a>
                                    <a
                                      className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-805629b"
                                      href="#"
                                      target="_blank"
                                    >
                                      <span className="elementor-screen-only">
                                        Instagram
                                      </span>
                                      <i className="fab fa-instagram" />{" "}
                                    </a>
                                    <a
                                      className="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-repeater-item-fb4e9d5"
                                      href="#"
                                      target="_blank"
                                    >
                                      <span className="elementor-screen-only">
                                        Pinterest
                                      </span>
                                      <i className="fab fa-pinterest" />{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b93c9d7 elementor-column elementor-col-25 elementor-top-column"
                          data-id="b93c9d7"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-276401b elementor-widget elementor-widget-heading"
                                data-id="276401b"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Subscribe Newsletter
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-02eff7a elementor-widget elementor-widget-text-editor"
                                data-id="02eff7a"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>
                                      At Vero Eos Et Accusamus Et Iusto Odio
                                      Dignissimos Ducimus Qui Blanditiis. Lorem
                                      ipsum dolor sit amet, consectetur.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-05e9bf5 elementor-widget elementor-widget-apus_mailchimp"
                                data-id="05e9bf5"
                                data-element_type="widget"
                                data-widget_type="apus_mailchimp.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="widget-mailchimp  default">
                                    {/* Mailchimp for WordPress v4.7.5 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                                    <form
                                      id="mc4wp-form-1"
                                      className="mc4wp-form mc4wp-form-94"
                                      method="post"
                                      data-id={94}
                                      data-name
                                    >
                                      <div className="mc4wp-form-fields">
                                        <div className="input-group">
                                          <input
                                            className="form-control"
                                            type="email"
                                            name="EMAIL"
                                            placeholder="Your email address"
                                            required
                                          />
                                          <span className="input-group-btn">
                                            <button
                                              type="submit"
                                              className="btn"
                                            >
                                              <i className="fas fa-location-arrow" />
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                      <label
                                        style={{ display: "none !important" }}
                                      >
                                        Leave this field empty if you're human:{" "}
                                        <input
                                          type="text"
                                          name="_mc4wp_honeypot"
                                          defaultValue
                                          tabIndex={-1}
                                          autoComplete="off"
                                        />
                                      </label>
                                      <input
                                        type="hidden"
                                        name="_mc4wp_timestamp"
                                        defaultValue={1640517861}
                                      />
                                      <input
                                        type="hidden"
                                        name="_mc4wp_form_id"
                                        defaultValue={94}
                                      />
                                      <input
                                        type="hidden"
                                        name="_mc4wp_form_element_id"
                                        defaultValue="mc4wp-form-1"
                                      />
                                      <div className="mc4wp-response" />
                                    </form>
                                    {/* / Mailchimp for WordPress Plugin */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-element elementor-element-f8c432f elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                    data-id="f8c432f"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div className="elementor-row">
                        <div
                          className="elementor-element elementor-element-b40f607 elementor-column elementor-col-100 elementor-top-column"
                          data-id="b40f607"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-17a5676 elementor-widget elementor-widget-text-editor"
                                data-id="17a5676"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <div>
                                      Copyright@ 2020 Listing Hub Powered By{" "}
                                      <a className="text-white" href="#">
                                        ApusTheme
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* .site-footer */}
      <a href="#" id="back-to-top">
        <i className="fas fa-long-arrow-alt-up" />
      </a>

      {/* .site */}
      <div className="hidden" id="apus_login_register_form_wrapper">
        <div className="apus_login_register_form" data-effect="fadeIn">
          <div className="form-login-register-inner">
            <div className="tab-content">
              <div
                id="apus_login_forgot_form"
                className="tab-pane fade active in"
              >
                <h3 className="title-account">Signin</h3>
                <div className="sign-in-demo-notice">
                  Username: <strong>demo</strong>
                  <br />
                  Password: <strong>demo</strong>
                </div>
                <div className="form-acount" tabIndex={-1} role="dialog">
                  <div className="inner">
                    <div id="apus_login_form" className="form-container">
                      <form
                        className="apus-login-form"
                        action="https://www.demoapus-wp1.com/findus/"
                        method="post"
                      >
                        <div className="form-group">
                          <label className="hidden" htmlFor="username_or_email">
                            Username Or Email
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            autoComplete="off"
                            type="text"
                            name="username"
                            className="form-control style2"
                            id="username_or_email"
                            placeholder="Enter username or email"
                          />
                        </div>
                        <div className="form-group">
                          <label className="hidden" htmlFor="login_password">
                            Password
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            name="password"
                            type="password"
                            className="password required form-control style2"
                            id="login_password"
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="row flex-middle action-login">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label htmlFor="apus-user-remember">
                                <input
                                  type="checkbox"
                                  name="remember"
                                  id="apus-user-remember"
                                  defaultValue="true"
                                />{" "}
                                Keep me signed in{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 text-right">
                            <p>
                              <a
                                href="#apus_forgot_password_form"
                                className="back-link"
                                title="Forgot Password"
                              >
                                Lost Your Password?
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="form-group clear-submit">
                          <input
                            type="submit"
                            className="btn btn-theme btn-outline btn-block"
                            name="submit"
                            defaultValue="Login"
                          />
                        </div>
                        <input
                          type="hidden"
                          id="security_login"
                          name="security_login"
                          defaultValue="af0878ffab"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/findus/home-2/"
                        />
                      </form>
                    </div>
                    {/* reset form */}
                    <div
                      id="apus_forgot_password_form"
                      className="form-container"
                    >
                      <form
                        name="forgotpasswordform"
                        className="forgotpassword-form"
                        action="https://www.demoapus-wp1.com/findus/wp-login.php?action=lostpassword"
                        method="post"
                      >
                        <h3>Reset Password</h3>
                        <div className="lostpassword-fields">
                          <div className="form-group">
                            <label
                              htmlFor="lostpassword_username"
                              className="hidden"
                            >
                              Username or E-mail
                            </label>
                            <sup className="apus-required-field hidden">*</sup>
                            <input
                              type="text"
                              name="user_login"
                              className="user_login form-control style2"
                              id="lostpassword_username"
                              placeholder="Username or E-mail"
                            />
                          </div>
                          <input
                            type="hidden"
                            id="security_lostpassword"
                            name="security_lostpassword"
                            defaultValue="2f6afb0270"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            defaultValue="/findus/home-2/"
                          />
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-theme btn-block"
                              name="wp-submit"
                              defaultValue="Get New Password"
                              tabIndex={100}
                            />
                            <input
                              type="button"
                              className="btn btn-danger btn-block btn-cancel"
                              defaultValue="Cancel"
                              tabIndex={101}
                            />
                          </div>
                        </div>
                        <div className="lostpassword-link">
                          <a
                            href="#apus_login_form"
                            className="back-link text-danger"
                          >
                            Back To Login
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bottom-login text-center">
                  Don't have an account
                </div>
              </div>
              <div id="apus_register_form" className="tab-pane fade in">
                <h3 className="title-account">Register</h3>
                <div className="sign-in-demo-notice">
                  Username: <strong>demo</strong>
                  <br />
                  Password: <strong>demo</strong>
                </div>
                <div className="form-register">
                  <div className="inner">
                    <div className="container-form">
                      <form
                        name="apusRegisterForm"
                        method="post"
                        className="apus-register-form"
                      >
                        <div
                          id="apus-reg-loader-info"
                          className="apus-loader hidden"
                        >
                          <span>Please wait ...</span>
                        </div>
                        <div
                          id="apus-register-alert"
                          className="alert alert-danger"
                          role="alert"
                          style={{ display: "none" }}
                        />
                        <div
                          id="apus-mail-alert"
                          className="alert alert-danger"
                          role="alert"
                          style={{ display: "none" }}
                        />
                        <div className="form-group">
                          <label className="hidden" htmlFor="username">
                            Username
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            type="text"
                            className="form-control style2"
                            name="username"
                            id="username"
                            placeholder="Enter Username"
                          />
                        </div>
                        <div className="form-group">
                          <label className="hidden" htmlFor="reg-email">
                            Email
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            type="text"
                            className="form-control style2"
                            name="email"
                            id="reg-email"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="form-group">
                          <label className="hidden" htmlFor="password">
                            Password
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            type="password"
                            className="form-control style2"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="form-group space-bottom-30">
                          <label className="hidden" htmlFor="confirmpassword">
                            Confirm Password
                          </label>
                          <sup className="apus-required-field hidden">*</sup>
                          <input
                            type="password"
                            className="form-control style2"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <input
                          type="hidden"
                          id="security_register"
                          name="security_register"
                          defaultValue="6694bb5172"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/findus/home-2/"
                        />
                        <div className="form-group clear-submit">
                          <button
                            type="submit"
                            className="btn btn-theme btn-block"
                            name="submitRegister"
                          >
                            Register now{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bottom-login text-center">
                  Already have an account?
                </div>
              </div>
            </div>
            {/* Social */}
            <ul className="nav nav-tabs">
              <li className="active">
                <a
                  id="apus_login_forgot_tab"
                  className="text-theme"
                  data-toggle="tab"
                  href="#apus_login_forgot_form"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  id="apus_register_tab"
                  className="text-theme"
                  data-toggle="tab"
                  href="#apus_register_form"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
