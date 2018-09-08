import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AuthPopup extends Component {
  // window.close();
  componentDidMount() {
    const access_hash = this.props.history.location.hash;

    const access_token = access_hash.split(/[=&]/)[1];

    const targetWindow = window.opener;
    console.log(targetWindow);
    console.log(access_hash);
    console.log(access_token);
    targetWindow.postMessage(
      { access_token, name: "Deezer" },
      "https://claytonhart.github.io/playlist-converter/convert/Deezer/Youtube"
    );
    debugger;
    window.close();
  }
  render() {
    return <div>Hello</div>;
  }
}

export default withRouter(AuthPopup);
