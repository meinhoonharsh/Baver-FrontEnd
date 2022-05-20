import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import axios from "axios";

function LoginPopup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedin, changeKeepLoggedStatus] = useState(false);

  async function handleGoogleLogin(responsePayload) {
    const apiResponse = await axios.post(
      "http://localhost:8000/api/googleauth",
      {
        name: responsePayload.name,
        email: responsePayload.email,
        profile_photo_path: responsePayload.picture,
        google_id: responsePayload.sub,
      }
    );
    localStorage.setItem("token", JSON.stringify(apiResponse.data.data.token));
    window.location.reload();
  }

  if (props.access_token === null) {
    return (
      <>
        <div className="hidden" id="apus_login_register_form_wrapper">
          <div className="apus_login_register_form" data-effect="fadeIn">
            <div
              id="form-login-register-inner"
              className="form-login-register-inner"
            >
              <div className="tab-content">
                <div
                  id="apus_login_forgot_form"
                  className="tab-pane fade active in"
                >
                  <h3 className="title-account">Signin</h3>
                  <div className="form-acount" tabIndex={-1} role="dialog">
                    <div className="inner">
                      <div id="apus_login_form" className="form-container">
                        <form
                          className="apus-login-form"
                          action="https://www.demoapus-wp1.com/findus/"
                          method="post"
                        >
                          <div className="form-group">
                            <label
                              className="hidden"
                              htmlFor="username_or_email"
                            >
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
                              value={username}
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
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
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
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
                                    value={keepLoggedin}
                                    onChange={() => {
                                      changeKeepLoggedStatus(!keepLoggedin);
                                    }}
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
                          <div className="form-group">
                            <input
                              type="button"
                              className="btn btn-theme btn-outline btn-block"
                            />
                          </div>
                          <GoogleButton
                            handleGoogleLogin={handleGoogleLogin}
                            access_token={props.access_token}
                          />

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
                              <sup className="apus-required-field hidden">
                                *
                              </sup>
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
                          <GoogleButton
                            handleGoogleLogin={handleGoogleLogin}
                            access_token={props.access_token}
                          />
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
  } else {
    return <div></div>;
  }
}

export default LoginPopup;
