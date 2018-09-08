import React, { Component } from "react";
import { connect } from "react-redux";

import "./InitialPlaylist.css";

import { GoogleLogin } from "react-google-login";

import { updateInitialAccessToken } from "../../store/actions/accessToken";
import { updateFinalAccessToken } from "../../store/actions/accessToken";

class InitialPlaylist extends Component {
  responseYoutube = async (column, response) => {
    console.log(column);
    if (column === "initialPlaylistValue") {
      this.props.updateInitialAccessToken(response.Zi.access_token);
    } else if (column === "finalPlaylistValue") {
      this.props.updateFinalAccessToken(response.Zi.access_token);
    } else {
      console.log("How did i get here");
    }

    // console.log(response);
    // const url = "https://www.googleapis.com/youtube/v3/search";
    // const q = "machine gun kelly - 27";
    // const type = "video";

    // const config = {
    // 	headers: {
    // 		Authorization: `Bearer ${response.Zi.access_token}`,
    // 		"Content-type": `application/json`
    // 	}
    // };

    // let ytResponse = await axios.get(
    // 	`${url}?part=snippet&q=${q}&type=${type}`,
    // 	config
    // );

    // let { etag } = ytResponse.data.items[0];

    // console.log(etag);
  };

  render() {
    const {
      initialAuthenticated,
      authPlatform,
      playlistName,
      column,
      labelText
    } = this.props;

    let authButtonToRender;

    switch (playlistName) {
      case "Youtube":
        authButtonToRender = (
          <div onClick={authPlatform}>
            <GoogleLogin
              // redirectUri="https://claytonhart.github.io/playlist-converter"
              clientId="765030499566-0hfptahsbp45p3pj9f5dqlj6ibot8lj6.apps.googleusercontent.com"
              // scope="https://www.googleapis.com/auth/youtube.force-ssl"
              onSuccess={this.responseYoutube.bind(this, column)}
              onFailure={this.responseYoutube}
              buttonText={`Authenticate ${playlistName}`}
              className="auth-button"
            />
          </div>
        );
        break;
      case "Spotify":
        authButtonToRender = (
          <button className="auth-button" onClick={authPlatform}>
            Authenticate {playlistName}
          </button>
        );
        break;
      case "Deezer":
        authButtonToRender = (
          <button className="auth-button" onClick={authPlatform}>
            Authenticate {playlistName}
          </button>
        );
        break;
      case "Napster":
        authButtonToRender = (
          <button className="auth-button" onClick={authPlatform}>
            Authenticate {playlistName}
          </button>
        );
        break;
      default:
        console.log("Default no playlistName??");
    }

    // const inputName = `${playlistName}InputValue`;
    // return (
    // 	<div className="playlist-column">
    // 		{authButtonToRender}
    // 		{initialAuthenticated && (
    // 			<div className="playlist-column-form">
    // 				<input
    // 					type="text"
    // 					// value={this.props.value}
    // 					onChange={this.props.onInputChange}
    // 					name={column}
    // 					placeholder={labelText}
    // 				/>
    // 			</div>
    // 		)}
    // 	</div>
    // );

    return (
      <div className="playlist-column">
        {initialAuthenticated ? (
          <div className="playlist-column-form">
            <button className="auth-button">{playlistName}</button>
            <input
              type="text"
              // value={this.props.value}
              onChange={this.props.onInputChange}
              name={column}
              // placeholder={labelText}
              required
            />
            <label className="auth-label">{labelText}</label>
          </div>
        ) : (
          <div>{authButtonToRender}</div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  {
    updateInitialAccessToken,
    updateFinalAccessToken
  }
)(InitialPlaylist);
