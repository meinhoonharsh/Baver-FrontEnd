import React from "react";

export default function HeaderMobile() {
  return (
    <>
      <div id="apus-header-mobile" className="header-mobile hidden-lg clearfix">
        <div className="container">
          <div className="row flex-middle">
            <div className="col-xs-7 left-inner">
              <div className="flex-middle">
                <div className="active-mobile">
                  <button
                    data-toggle="offcanvas"
                    className="btn btn-sm btn-offcanvas offcanvas"
                    type="button"
                  >
                    <i className="ti-align-left" aria-hidden="true" />
                  </button>
                </div>
                <div className="logo logo-theme">
                  <a href="https://www.demoapus-wp1.com/findus/">
                    <h2
                      style={{
                        margin: 0
                      }}
                    >
                      Baver
                    </h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-5">
              <div className="flex-middle">
                <div className="ali-right">
                  <div className="apus-top-cart cart">
                    <a
                      className="dropdown-toggle mini-cart"
                      href="#"
                      title="View your shopping cart"
                    >
                      <i className="ti-shopping-cart" />
                      <span className="count">0</span>
                      <span className="total-minicart hidden">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          0
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="widget_shopping_cart_content">
                        <div className="shopping_cart_content">
                          <div className="cart_list ">
                            <p className="total empty">
                              Currently Empty:{" "}
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                0
                              </span>
                            </p>
                            <div className="buttons clearfix">
                              <a
                                href="https://www.demoapus-wp1.com/findus/shop/"
                                className="btn btn-block btn-primary wc-forward"
                              >
                                Continue shopping
                              </a>
                            </div>
                          </div>
                          {/* end product list */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="account-login">
                    <ul className="login-account">
                      <li className="icon-log">
                        <a
                          href="#apus_login_forgot_tab"
                          className="apus-user-login wel-user"
                        >
                          <i className="ti-user" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
