import React, { Component } from "react";

const clientId =
  "605425009699-a08v212752nbljkldsado1odec6d8nfk.apps.googleusercontent.com";

class GoogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  decodeJwtResponse(params) {
    return params;
  }

  handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    // const responsePayload = decodeJwtResponse(response.credential);

    // console.log("ID: " + responsePayload.sub);
    // console.log('Full Name: ' + responsePayload.name);
    // console.log('Given Name: ' + responsePayload.given_name);
    // console.log('Family Name: ' + responsePayload.family_name);
    // console.log("Image URL: " + responsePayload.picture);
    // console.log("Email: " + responsePayload.email);

    console.log(response);
  };

  render() {
    return (
      <div id="googleButton">
        <div
          id="g_id_onload"
          data-client_id={clientId}
          data-login_uri="http://localhost:3000"
          data-auto_prompt="true"
          data-callback="handleCredentialResponse"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="continue_in_with"
          data-shape="pill"
          data-logo_alignment="left"
        ></div>
      </div>
    );
  }
}

export default GoogleButton;
