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
                  <a href="/home">Home</a>
                </li>
                <li id="menu-item-307" className="has-submenu menu-item-307">
                  <a href="/about">About</a>
                </li>
                <li id="menu-item-70" className="has-submenu menu-item-70">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
