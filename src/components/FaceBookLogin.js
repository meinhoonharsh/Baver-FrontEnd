import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
export class FaceBookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedin: true,
    });
  };

  componentClicked = () => {
    console.log("FaceBook Clicked");
  };

  render() {
    return this.state.isLoggedin ? (
      "Home"
    ) : (
      <div>
        <FacebookLogin
          appId="735877610994897"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
          size="medium"
          textButton="continue with Facebook"
          tag={"button"}
        />
      </div>
    );
  }
}

export default FaceBookLogin;
