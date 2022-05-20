import React from "react";
import HeaderAvatar from "./HeaderAvatar";

export default function Header(props) {
  return (
    <>
      <div id="apus-header" className="apus-header visible-lg header-1-78">
        <div className="main-sticky-header">
          <div
            data-elementor-type="wp-post"
            data-elementor-id={78}
            className="elementor elementor-78"
            data-elementor-settings="[]"
          >
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <section
                  className="elementor-element elementor-element-5067a0c elementor-section-stretched elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
                  data-id="5067a0c"
                  data-element_type="section"
                  data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                >
                  <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-row">
                      <div
                        className="elementor-element elementor-element-c7da690 elementor-column elementor-col-25 elementor-top-column"
                        data-id="c7da690"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap  elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-922b374 elementor-widget elementor-widget-apus_logo"
                              data-id="922b374"
                              data-element_type="widget"
                              data-widget_type="apus_logo.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="wrapper-logo ">
                                  <a
                                    className="logo"
                                    href="https://www.demoapus-wp1.com/findus/"
                                  >
                                    <span className="logo-main has-transparent-logo">
                                      <h2
                                        style={{
                                          margin: 0,
                                        }}
                                      >
                                        Baver
                                      </h2>
                                    </span>
                                    <span className="transparent-logo">
                                      <h2
                                        style={{
                                          color: "white",
                                          margin: 0,
                                        }}
                                      >
                                        Baver
                                      </h2>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-23b386e elementor-column elementor-col-50 elementor-top-column"
                        data-id="23b386e"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap  elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-e1b36ef elementor-widget elementor-widget-apus_primary_menu"
                              data-id="e1b36ef"
                              data-element_type="widget"
                              data-widget_type="apus_primary_menu.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="main-menu menu-center ">
                                  <nav
                                    data-duration={400}
                                    className="apus-megamenu slide animate navbar p-static"
                                    role="navigation"
                                  >
                                    <div className="collapse navbar-collapse no-padding">
                                      <ul
                                        id="primary-menu"
                                        className="nav navbar-nav megamenu effect1"
                                      >
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent acive">
                                          <a href="/home">Home </a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent ">
                                          <a href="/about">About</a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent ">
                                          <a href="/contact">Contact</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-d60fa60 elementor-column elementor-col-25 elementor-top-column"
                        data-id="d60fa60"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap  elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <HeaderAvatar
                              access_token={props.access_token}
                              user_data={props.user_data}
                            />
                            <div
                              className="elementor-element elementor-element-56eb1e6 elementor-widget__width-auto elementor-widget elementor-widget-apus_listings_add_listing_btn"
                              data-id="56eb1e6"
                              data-element_type="widget"
                              data-widget_type="apus_listings_add_listing_btn.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="add-listing ">
                                  <a
                                    className="btn btn-theme"
                                    href="https://www.demoapus-wp1.com/findus/submit-listing/"
                                  >
                                    <i className="ti-plus" />
                                    Add Listing
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
