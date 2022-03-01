import React from "react";

export default function MostPopularDeals() {
  const mostPopularDeals = [
    {
      category: "Food & Restaurants"
    },
    {
      category: "Hotels"
    },
    {
      category: "Travel & Tours"
    },
    {
      category: "Lifestyle"
    },
    {
      category:"Entertainment"
    }
  ];
  return (
    <>
      <section
        className="elementor-element elementor-element-ca1c1b0 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
        data-id="ca1c1b0"
        data-element_type="section"
        data-settings='{"stretch_section":"section-stretched"}'
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div className="elementor-row">
            <div
              className="elementor-element elementor-element-2289b4b elementor-column elementor-col-100 elementor-top-column"
              data-id="2289b4b"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-d785160 elementor-widget elementor-widget-spacer"
                    data-id="d785160"
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
                    className="elementor-element elementor-element-117d575 elementor-widget elementor-widget-heading"
                    data-id="117d575"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Most Popular
                        <span className="text-theme">Deals</span>
                      </h2>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-366e86c elementor-widget elementor-widget-spacer"
                    data-id="366e86c"
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
                    className="elementor-element elementor-element-74f21b7 elementor-widget elementor-widget-text-editor"
                    data-id="74f21b7"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis.
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
        className="elementor-element elementor-element-1daa8f5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
        data-id="1daa8f5"
        data-element_type="section"
        data-settings='{"stretch_section":"section-stretched"}'
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div className="elementor-row">
            <div
              className="elementor-element elementor-element-936c639 elementor-column elementor-col-100 elementor-top-column"
              data-id="936c639"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-8778b23 elementor-widget elementor-widget-apus_listings_category_list_banner"
                    data-id="8778b23"
                    data-element_type="widget"
                    data-widget_type="apus_listings_category_list_banner.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="widget-listing-category-list-banner style2 ">
                        <div
                          className="slick-carousel "
                          data-items={3}
                          data-medium={2}
                          data-smallmedium={1}
                          data-extrasmall={1}
                          data-pagination="true"
                          data-nav="true"
                          data-autoplay="false"
                          data-loop="true"
                        >
                          {mostPopularDeals.map((deal, index) => (
                            <a href="https://www.demoapus-wp1.com/findus/listing-category/business/">
                              <div className="category-banner-list style2">
                                <div className="banner-image">
                                  <div className="image-wrapper">
                                    <img
                                      src="https://www.demoapus-wp1.com/wp-content/uploads/2019/11/banner-1.jpg"
                                    />
                                  </div>
                                </div>
                                <div className="inner">
                                  <div className="left-inner">
                                    <div
                                      className="category-icon"
                                      style={{
                                        backgroundColor: "#5565D0"
                                      }}
                                    >
                                      <i className="fas fa-briefcase" />
                                    </div>
                                    <h4 className="title">{deal.category}</h4>
                                  </div>
                                  <div className="bottom-link">
                                    <span className="btn-forwarded">
                                      Browse
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-602ec59 elementor-widget elementor-widget-spacer"
                    data-id="602ec59"
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
    </>
  );
}
