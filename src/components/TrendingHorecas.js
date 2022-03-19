import React from "react";

export default function TrendingHorecas() {
  const Horecas = [
    {
      name: "Bhatt Viiiis Cafe",
      location: "RGPV Nagar, Bhopal",
      lat_long: "23.25,77.4",
      city: "Bhopal",
      cover_image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      open_time: "10:00 AM",
      close_time: "10:00 PM",
      type: "Cafe",
      rating: "4.5",
      contact: "1234567890"
    },
    {
      name: "Mathur Kushwaha Sweets",
      location: "UIT Villa, Bhopal",
      lat_long: "23.25,77.4",
      city: "Bhopal",
      cover_image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      open_time: "10:00 AM",
      close_time: "10:00 PM",
      type: "Sweets",
      rating: "4.5",
      contact: "1234567890"
    }
  ];
  return (
    <>
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
                        Trending &nbsp;
                        <span className="text-theme">HORECAs</span>
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
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi
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
                            {Horecas.map((horeca, index) => {
                              return(
                                <div className="full-smallest col-xs-12 col-sm-6 col-md-4">
                                  <div
                                    className="job-grid-style post-524 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_category-food-restaurants job_listing_category-shopping job_listing_type-freelance job_listing_amenity-accepts-credit-cards job_listing_amenity-alarm-system job_listing_amenity-bike-parking job_listing_amenity-coupons job_listing_amenity-elevator job_listing_amenity-outdoor-seating job_listing_amenity-parking-street job_listing_amenity-reservations job_listing_amenity-security-cameras job_listing_amenity-smoking-allowed job_listing_amenity-wireless-internet job_listing_region-new-york job_listing_region-usa job-type-freelance"
                                    data-latitude="40.760552"
                                    data-longitude="-73.926861"
                                    data-img={horeca.cover_image}
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
                                           />
                                        </div>
                                      </a>
                                      <div className="flags-top-wrapper">
                                        <span className="price-range">
                                          <span className="currency-symbol">
                                            $
                                          </span>
                                          <span className="price">60</span>-{" "}
                                          <span className="currency-symbol">
                                            $
                                          </span>
                                          <span className="price">85</span>
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
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="listing-content-inner clearfix">
                                          <h3 className="listing-title">
                                            <a href="https://www.demoapus-wp1.com/findus/listing/healthy-food/">
                                              {horeca.name}
                                            </a>
                                          </h3>
                                          <div className="listing-tagline">
                                            {horeca.location}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="listing-contact">
                                        <div className="grid-contact-inner flex-middle">
                                          <div className="listing-location listing-address">
                                            <i className="flaticon-placeholder" />
                                            <span>{horeca.city}</span>
                                          </div>
                                          <div className="phone-wrapper listing-phone phone-hide">
                                            <a
                                              className="phone"
                                              href="tel:+88-123-456-789"
                                            >
                                              <i className="flaticon-call" />
                                              {horeca.contact}
                                            </a>
                                            <span
                                              className="phone-show"
                                              onclick="this.parentNode.classList.add('show');"
                                            >
                                              <i className="flaticon-call" />
                                              {horeca.contact}
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
                                                  background: "#fd5c05"
                                                }}
                                              >
                                                <i className="fas fa-wine-glass" />
                                              </span>
                                              {horeca.type}
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
                                                      background: "#f73d51"
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
                              );
                            })}
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
    </>
  );
}
