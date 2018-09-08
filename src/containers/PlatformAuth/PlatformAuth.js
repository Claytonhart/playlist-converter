import React, { Component } from "react";
import { connect } from "react-redux";

import "./PlatformAuth.css";

import { updateInitialAccessToken } from "../../store/actions/accessToken";
import { updateFinalAccessToken } from "../../store/actions/accessToken";
import {
  buildNewPlaylist,
  updateFinalPlaylistName
} from "../../store/actions/buildNewPlaylist";

import { spotifyAuth } from "../../services/spotify/spotifyAuth";
import { deezerAuth } from "../../services/deezer/deezerAuth";
import { napsterAuth } from "../../services/napster/napsterAuth";
import { getNapsterAuthTokenFromCode } from "../../services/napster/getNapsterAuthTokenFromCode";

import InitialPlaylist from "../../components/InitialPlaylist/InitialPlaylist";
import LoadingModal from "../../components/LoadingModal/LoadingModal";

class PlatformAuth extends Component {
  state = { show: false };
  componentDidMount() {
    // window.addEventListener("message", this.recieveMessage, false);
  }

  componentWillUnmount() {
    // window.removeEventListener("message", this.recieveMessage);
  }

  mountSpotifyPopupEventListener = () => {
    window.addEventListener("message", this.recieveSpotifyMessage, false);
  };

  unmountSpotifyPopupEventListener = () => {
    window.removeEventListener("message", this.recieveSpotifyMessage, false);
  };

  recieveSpotifyMessage = async event => {
    // debugger;
    const { access_token, name } = event.data;
    const { code } = event.data;
    // Only fires on message events sent from /auth to prevent redux actions
    // from triggering the event *change*
    console.log("spotify message");
    console.log(event.source.location.host);
    console.log(event.origin);
    console.log(event.source.location.pathname);
    console.log(name);
    console.log(
      event.origin === "https://claytonhart.github.io" &&
        event.source.location.pathname === "/playlist-converter/auth" &&
        name === "Spotify"
    );
    if (
      // event.source.location.host === https://claytonhart.github.io
      event.origin === "https://claytonhart.github.io" &&
      event.source.location.pathname === "/playlist-converter/auth" &&
      name === "Spotify"
    ) {
      if (this.props.initialPlaylistName === "Spotify") {
        this.props.updateInitialAccessToken(access_token);
      } else if (this.props.finalPlaylistName === "Spotify") {
        this.props.updateFinalAccessToken(access_token);
      }
      this.unmountSpotifyPopupEventListener();
      // this.props.updateFinalAccessToken(access_token);
      this.setState({ [name]: true });
    }
    if (name === "Deezer") {
      if (this.props.initialPlaylistName === "Deezer") {
        this.props.updateInitialAccessToken(access_token);
      } else if (this.props.finalPlaylistName === "Deezer") {
        this.props.updateFinalAccessToken(access_token);
      }
      this.unmountSpotifyPopupEventListener();
      this.setState({ [name]: true });
    }
    if (name === "Napster") {
      console.log("napster listener");
      let napsterAuthToken = await getNapsterAuthTokenFromCode(code);
      if (this.props.initialPlaylistName === "Napster") {
        this.props.updateInitialAccessToken(napsterAuthToken);
      } else if (this.props.finalPlaylistName === "Napster") {
        this.props.updateFinalAccessToken(napsterAuthToken);
      }
      this.unmountSpotifyPopupEventListener();
      this.setState({ [name]: true });
    }
  };

  // Break this out into seperate functions in service files in order to
  // authenticate each type of platform from the same function
  authPlatform = (platformName, event) => {
    event.preventDefault();

    switch (platformName) {
      case "Spotify":
        console.log("Authenticating Spotify Playlist");
        let { urlString, name, specs } = spotifyAuth(platformName);
        this.mountSpotifyPopupEventListener();
        window.open(urlString, name, specs);
        break;
      case "Youtube":
        this.setState({ [platformName]: true });
        break;
      case "Deezer":
        console.log("Authenticating Deezer Playlist");
        let deezerAuthObject = deezerAuth(platformName);
        this.mountSpotifyPopupEventListener();
        window.open(
          deezerAuthObject.urlString,
          deezerAuthObject.name,
          deezerAuthObject.specs
        );
        break;
      case "Napster":
        console.log("Authenticating Napster Playlist");
        let napsterAuthObject = napsterAuth(platformName);
        this.mountSpotifyPopupEventListener();
        window.open(
          napsterAuthObject.urlString,
          napsterAuthObject.name,
          napsterAuthObject.specs
        );
        break;
      default:
        console.log(
          `There was an error determining the platform name: ${platformName}`
        );
    }
  };

  buildNewPlaylist = async event => {
    event.preventDefault();
    this.toggleModal();
    this.props.updateFinalPlaylistName(this.state.finalPlaylistValue);
    debugger;
    await this.props.buildNewPlaylist(
      this.props.initialPlaylistName,
      this.state.initialPlaylistValue,
      this.props.finalPlaylistName,
      this.state.finalPlaylistValue,
      this.props.initialAccessToken,
      this.props.finalAccessToken
    );
    debugger;
    console.log("done!@#$!@");
    this.props.history.push("/converted");

    // let ytPlaylist = await updateYtPlaylist(this.state.YoutubeInputValue);
    // this.props.createInitialPlaylist(ytPlaylist);

    // let spotifyPlaylists = await addSongsToSpotifyPlaylist(
    // 	this.props.initialPlaylist,
    // 	this.props.spotifyAccessToken
    // );

    // this.props.createSpotifyPlaylist(spotifyPlaylists.spotifyPlaylist);
    // this.props.createFailedToFindPlaylist(spotifyPlaylists.spotifyFailedToFind);
    // this.props.createFailedToParsePlaylist(
    // 	spotifyPlaylists.spotifyFailedToParse
    // );

    // this.props.history.push("/converted");
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const initialAuthenticated = this.state[this.props.initialPlaylistName];
    const finalAuthenticated = this.state[this.props.finalPlaylistName];

    return (
      <form
        onSubmit={this.buildNewPlaylist}
        className="platform-form-container"
      >
        <LoadingModal show={this.state.show} close={this.toggleModal}>
          <h1>Fetching Your Songs</h1>
        </LoadingModal>
        <h1 className="convert-header">
          Authenticate and Select Your Playlist
        </h1>
        <h3 className="step-one">Step: 2/3</h3>
        <section className="platform-playlists-container">
          <InitialPlaylist
            authPlatform={this.authPlatform.bind(
              this,
              this.props.initialPlaylistName
            )}
            playlistName={this.props.initialPlaylistName}
            initialAuthenticated={initialAuthenticated}
            onInputChange={this.handleChange}
            column={"initialPlaylistValue"}
            labelText="Playlist id"
            // value={this.state.value}
          />
          <InitialPlaylist
            authPlatform={this.authPlatform.bind(
              this,
              this.props.finalPlaylistName
            )}
            playlistName={this.props.finalPlaylistName}
            initialAuthenticated={finalAuthenticated}
            onInputChange={this.handleChange}
            column={"finalPlaylistValue"}
            labelText="New Playlist Name"
            // value={this.state[`${this.props.finalPlaylistName}InputValue`]}
          />
        </section>
        <button className="platform-auth-button">
          Create a new {this.props.finalPlaylistName} playlist
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialPlaylistName: state.playlistNames.initialPlaylist,
    finalPlaylistName: state.playlistNames.finalPlaylist,
    initialAccessToken: state.initialAccessToken,
    finalAccessToken: state.finalAccessToken
    // initialPlaylist: state.initialPlaylist,
    // finalPlaylist: state.finalPlaylist
  };
}

export default connect(
  mapStateToProps,
  {
    updateFinalAccessToken,
    updateInitialAccessToken,
    buildNewPlaylist,
    updateFinalPlaylistName
  }
)(PlatformAuth);
