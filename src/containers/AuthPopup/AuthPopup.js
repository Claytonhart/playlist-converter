import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AuthPopup extends Component {
  // window.close();
  componentDidMount() {
    debugger;
    const access_hash = this.props.history.location.hash;

    const access_token = access_hash.split(/[=&]/)[1];

    const targetWindow = window.opener;
    console.log(targetWindow);
    debugger;
    targetWindow.postMessage(
      { access_token, name: "Spotify" },
      // "https://claytonhart.github.io/convert/Spotify/Youtube"
      `https://claytonhart.github.io/playlist-converter/convert/Spotify/Youtube`
    );

    window.close();

    // this.props.updateAccessToken(access_token);

    // console.log(access_array);
    // console.log(access_token);
    // console.log(token_type);

    // console.log(props);
  }
  render() {
    return <div>Hello</div>;
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(AuthPopup)
);
