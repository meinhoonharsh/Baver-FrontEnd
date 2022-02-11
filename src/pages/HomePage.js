import React from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import LandingSlider from "../components/LandingSlider";
import MobileMenu from "../components/MobileMenu";
import MostPopularDeals from "../components/MostPopularDeals";
import TopPlaces from "../components/TopPlaces";
import TrendingHorecas from "../components/TrendingHorecas";

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
                      <TopPlaces/>
                      <TrendingHorecas />
                     
                    
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
