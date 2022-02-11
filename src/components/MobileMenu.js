import React from "react";

export default function MobileMenu() {
  return (
    <>
      <div id="apus-mobile-menu" className="apus-offcanvas hidden-lg">
        <button
          type="button"
          className="btn btn-toggle-canvas"
          data-toggle="offcanvas"
        >
          <i className="ti-close" />
        </button>
        <div className="apus-offcanvas-body">
          <div className="header-top-mobile clearfix">
            <div className="add-listing">
              <a
                className="btn btn-addlisting btn-theme"
                href="https://www.demoapus-wp1.com/findus/submit-listing/"
              >
                <i className="ti-plus" aria-hidden="true" /> Add Listing
              </a>
            </div>
          </div>
          <nav
            className="navbar navbar-offcanvas navbar-static"
            role="navigation"
          >
            <div className="navbar-collapse navbar-offcanvas-collapse">
              <ul id="main-mobile-menu" className="nav navbar-nav">
                <li
                  id="menu-item-66"
                  className="has-submenu active menu-item-66"
                >
                  <a href="#">Home</a>{" "}
                  <span className="icon-toggle">
                    <i className="ti-angle-down" />
                  </span>
                  <ul className="sub-menu">
                    <li id="menu-item-75" className="menu-item-75">
                      <a href="https://www.demoapus-wp1.com/findus/">Home 1</a>
                    </li>
                    <li id="menu-item-73" className="active menu-item-73">
                      <a href="index.html">Home 2</a>
                    </li>
                    <li id="menu-item-72" className="menu-item-72">
                      <a href="https://www.demoapus-wp1.com/findus/home-3/">
                        Home 3
                      </a>
                    </li>
                    <li id="menu-item-71" className="menu-item-71">
                      <a href="https://www.demoapus-wp1.com/findus/home-4/">
                        Home 4
                      </a>
                    </li>
                    <li id="menu-item-251" className="menu-item-251">
                      <a href="https://www.demoapus-wp1.com/findus/home-5/">
                        Home 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-307" className="has-submenu menu-item-307">
                  <a href="https://www.demoapus-wp1.com/findus/listings/">
                    Listings
                  </a>{" "}
                  <span className="icon-toggle">
                    <i className="ti-angle-down" />
                  </span>
                  <ul className="sub-menu">
                    <li id="menu-item-621" className="menu-item-621">
                      <a href="https://www.demoapus-wp1.com/findus/listing-full/">
                        Listings – Full
                      </a>
                    </li>
                    <li id="menu-item-615" className="menu-item-615">
                      <a href="https://www.demoapus-wp1.com/findus/listing-with-sidebar/">
                        Listings – Sidebar
                      </a>
                    </li>
                    <li id="menu-item-616" className="menu-item-616">
                      <a href="https://www.demoapus-wp1.com/findus/listing-half-map/">
                        Listings – Half Map
                      </a>
                    </li>
                    <li id="menu-item-617" className="menu-item-617">
                      <a href="https://www.demoapus-wp1.com/findus/listing-list/">
                        Listings – List
                      </a>
                    </li>
                    <li id="menu-item-618" className="menu-item-618">
                      <a href="https://www.demoapus-wp1.com/findus/job/spotlight-club/">
                        Listing Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-70" className="has-submenu menu-item-70">
                  <a href="https://www.demoapus-wp1.com/findus/blog/">Blog</a>{" "}
                  <span className="icon-toggle">
                    <i className="ti-angle-down" />
                  </span>
                  <ul className="sub-menu">
                    <li id="menu-item-623" className="menu-item-623">
                      <a href="https://www.demoapus-wp1.com/findus/blog/?_preset=1580455841">
                        Blog – Sidebar
                      </a>
                    </li>
                    <li id="menu-item-624" className="menu-item-624">
                      <a href="https://www.demoapus-wp1.com/findus/blog/?_preset=1580455912">
                        Blog – Full
                      </a>
                    </li>
                    <li id="menu-item-622" className="menu-item-622">
                      <a href="https://www.demoapus-wp1.com/findus/blog/?_preset=1580455697">
                        Blog – List
                      </a>
                    </li>
                    <li id="menu-item-625" className="menu-item-625">
                      <a href="https://www.demoapus-wp1.com/findus/why-people-use-listing-hub/">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-76" className="has-submenu menu-item-76">
                  <a href="#">Pages</a>{" "}
                  <span className="icon-toggle">
                    <i className="ti-angle-down" />
                  </span>
                  <ul className="sub-menu">
                    <li id="menu-item-1387" className="menu-item-1387">
                      <a href="https://www.demoapus-wp1.com/findus/shop/">
                        Shop
                      </a>
                    </li>
                    <li id="menu-item-67" className="menu-item-67">
                      <a href="https://www.demoapus-wp1.com/findus/contact/">
                        Contact
                      </a>
                    </li>
                    <li id="menu-item-69" className="menu-item-69">
                      <a href="https://www.demoapus-wp1.com/findus/pricing/">
                        Pricing
                      </a>
                    </li>
                    <li id="menu-item-68" className="menu-item-68">
                      <a href="https://www.demoapus-wp1.com/findus/404-2/">
                        404
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
