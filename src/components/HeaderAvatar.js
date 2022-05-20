import React from "react";

function HeaderAvatar(props) {
  if (props.access_token !== null) {
    const redireURL = `/profile/${props.user_data.data.id}`;
    return (
      <>
        <div className="navbar-collapse navbar-collapse">
          <ul id="main-menu" className="nav navbar-nav">
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-66 aligned-left">
              <img
                src={props.user_data.data.profile_photo_url}
                alt="profile"
                className="dropdown-toogle"
                data-hover="dropdown"
                data-toggle="dropdown"
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                }}
              ></img>
              <ul className="dropdown-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-75 aligned-left">
                  <a href={redireURL}>profile</a>
                </li>
                <hr></hr>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-75 aligned-left">
                  <a
                    href="/"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="elementor-element elementor-element-44254a0 elementor-widget__width-auto elementor-widget elementor-widget-apus_user_info"
          data-id="44254a0"
          data-element_type="widget"
          data-widget_type="apus_user_info.default"
        >
          <div className="elementor-widget-container">
            <div className="account-login">
              <ul className="login-account">
                <li className="icon-log" id="icon_log">
                  <a
                    href="#apus_login_forgot_tab"
                    id="icon_log_a"
                    className="apus-user-login"
                  >
                    <i className="ti-user" />
                    <span
                      href="#apus_login_forgot_tab"
                      className="apus-user-login wel-user"
                    >
                      {" "}
                      Sign in
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderAvatar;
