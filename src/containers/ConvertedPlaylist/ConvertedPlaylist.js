import React, { Component } from "react";
import { connect } from "react-redux";

import "./ConvertedPlaylist.css";

import { getSpotifySong } from "../../services/spotify/getSpotifySong";
import { getYoutubeSong } from "../../services/youtube/getYoutubeSong";
import { getDeezerSong } from "../../services/deezer/getDeezerSong";
import { getNapsterSong } from "../../services/napster/getNapsterSong";

import { getSpotifyUserId } from "../../services/spotify/getSpotifyUserId";
// import { getDeezerUserId } from "../../services/deezer/getDeezerUserId";

import { createNewSpotifyPlaylist } from "../../services/spotify/createNewSpotifyPlaylist";
import { createNewYoutubePlaylist } from "../../services/youtube/createNewYoutubePlaylist";
import { createNewDeezerPlaylist } from "../../services/deezer/createNewDeezerPlaylist";
import { createNewNapsterPlaylist } from "../../services/napster/createNewNapsterPlaylist";

import { postSpotifyPlaylist } from "../../services/spotify/postSpotifyPlaylist";
import { postYoutubePlaylist } from "../../services/youtube/postYoutubePlaylist";
import { postDeezerPlaylist } from "../../services/deezer/postDeezerPlaylist";
import { postNapsterPlaylist } from "../../services/napster/postNapsterPlaylist";

import {
  updateFinalPlaylist,
  updateFailedToFindPlaylist
} from "../../store/actions/updateFinalPlaylist";
import { updateFinalPlaylistUrl } from "../../store/actions/updateFinalPlaylistUrl";

import LoadingModal from "../../components/LoadingModal/LoadingModal";

class ConvertedPlaylist extends Component {
  state = {
    artistName: "",
    songName: "",
    show: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSong = async event => {
    event.preventDefault();

    const platformMethods = {
      getSpotifySong: getSpotifySong,
      getYoutubeSong: getYoutubeSong,
      getDeezerSong: getDeezerSong,
      getNapsterSong: getNapsterSong
    };

    const platformName = this.props.playlistNames.finalPlaylist;
    const platformMethodName = `get${platformName}Song`;

    let newSong = await platformMethods[platformMethodName](
      this.state.songName,
      this.state.artistName,
      this.props.finalAccessToken
    );

    debugger;

    if (newSong.id) {
      this.props.updateFinalPlaylist(newSong);
    } else {
      this.props.updateFailedToFindPlaylist(
        `${this.state.songName} - ${this.state.artistName}`
      );
    }

    debugger;

    this.setState({ artistName: "", songName: "" });
  };

  createPlaylist = async (playlistName, event) => {
    this.toggleModal();
    switch (playlistName) {
      case "Spotify":
        await this.createSpotifyPlaylist();
        // this.props.history.push("/uploaded");
        break;
      case "Youtube":
        await this.createYoutubePlaylist();
        // this.props.history.push("/uploaded");
        break;
      case "Deezer":
        await this.createDeezerPlaylist();
        // this.props.history.push("/uploaded");
        break;
      case "Napster":
        await this.createNapsterPlaylist();
        // this.props.history.push("/uploaded");
        break;
      default:
        console.log("No final playlist name detected?");
    }
    this.props.history.push("/uploaded");
  };

  createSpotifyPlaylist = async () => {
    let spotifyUserId = await getSpotifyUserId(this.props.finalAccessToken);
    let newSpotifyPlaylistObject = await createNewSpotifyPlaylist(
      spotifyUserId,
      this.props.finalAccessToken,
      this.props.finalPlaylistName
    );

    const {
      newSpotifyApiPlaylistUrl,
      newSpotifyPlaylistUrl
    } = newSpotifyPlaylistObject;
    debugger;
    this.props.updateFinalPlaylistUrl(newSpotifyPlaylistUrl);

    await postSpotifyPlaylist(
      this.props.finalPlaylist,
      this.props.finalAccessToken,
      newSpotifyApiPlaylistUrl
    );
  };

  createYoutubePlaylist = async () => {
    let youtubePlaylistId = await createNewYoutubePlaylist(
      this.props.finalAccessToken,
      this.props.finalPlaylistName
    );

    let youtubeUrl = `https://www.youtube.com/playlist?list=${youtubePlaylistId}`;
    this.props.updateFinalPlaylistUrl(youtubeUrl);

    await postYoutubePlaylist(
      this.props.finalPlaylist,
      this.props.finalAccessToken,
      // "PLHodO_IJz31bI3uWq35OorlYy3KYztseJ"
      youtubePlaylistId
    );
  };

  createDeezerPlaylist = async () => {
    // let deezerUserId = await getDeezerUserId(this.props.finalAccessToken);
    debugger;
    let newDeezerPlaylistObject = await createNewDeezerPlaylist(
      this.props.finalAccessToken,
      this.props.finalPlaylistName
    );

    const {
      newDeezerApiPlaylistUrl,
      newDeezerPlaylistUrl
    } = newDeezerPlaylistObject;
    debugger;
    this.props.updateFinalPlaylistUrl(newDeezerPlaylistUrl);

    await postDeezerPlaylist(
      this.props.finalPlaylist,
      this.props.finalAccessToken,
      newDeezerApiPlaylistUrl
    );
  };

  createNapsterPlaylist = async () => {
    let newNapsterPlaylistObject = await createNewNapsterPlaylist(
      this.props.finalAccessToken,
      this.props.finalPlaylistName
    );
    debugger;

    const {
      newNapsterApiPlaylistUrl,
      newNapsterPlaylistUrl
    } = newNapsterPlaylistObject;
    debugger;
    this.props.updateFinalPlaylistUrl(newNapsterPlaylistUrl);

    debugger;
    await postNapsterPlaylist(
      this.props.finalPlaylist,
      this.props.finalAccessToken,
      newNapsterApiPlaylistUrl
    );
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    let finalPlaylist = this.props.finalPlaylist.map((songName, index) => {
      return <li key={index}>{songName.title}</li>;
    });

    let failedToFindPlaylist = this.props.failedToFindPlaylist.map(
      (songName, index) => {
        return <li key={index}>{songName}</li>;
      }
    );

    let failedToParsePlaylist = this.props.failedToParsePlaylist.map(
      (songName, index) => {
        return <li key={index}>{songName}</li>;
      }
    );

    return (
      <div className="converted-playlist-outer">
        <div className="converted-playlist-title">
          <h1>Finish Adding Songs</h1>
          <h3 className="step-three">Step: 3/3</h3>
        </div>
        <section className="converted-playlist-container">
          <div>
            <label>Songs successfully converted ({finalPlaylist.length})</label>
            <ul>{finalPlaylist}</ul>
          </div>
          <div>
            <label>Songs unable to find ({failedToFindPlaylist.length})</label>
            <ul>{failedToFindPlaylist}</ul>
          </div>
          <div>
            <label>
              Songs unable to parse ({failedToParsePlaylist.length})
            </label>
            <ul>{failedToParsePlaylist}</ul>
          </div>
        </section>
        <section className="converted-playlist-form-container">
          <form onSubmit={this.addSong} className="converted-playlist-form">
            <label>Add a song</label>
            <div className="converted-playlist-input-container">
              <input
                className="converted-playlist-input"
                type="text"
                // placeholder="Artist Name"
                name="artistName"
                value={this.state.artistName}
                onChange={this.handleChange}
                required
              />

              <label className="converted-playlist-label">Artist Name</label>
            </div>
            <div className="converted-playlist-input-container">
              <input
                className="converted-playlist-input"
                type="text"
                // placeholder="Song Name"
                name="songName"
                value={this.state.songName}
                onChange={this.handleChange}
                required
              />
              <label className="converted-playlist-label">Song Name</label>
            </div>
            <button
              className="converted-playlist-button"
              onClick={this.addSong}
            >
              Add Song
            </button>
          </form>
          <div className="converted-playlist-center">
            <button
              className="converted-playlist-button converted-playlist-submit"
              onClick={this.createPlaylist.bind(
                this,
                this.props.playlistNames.finalPlaylist
              )}
            >
              Create Playlist
            </button>
          </div>
        </section>
        <LoadingModal show={this.state.show} close={this.toggleModal}>
          <h1>Building Your Playlist</h1>
        </LoadingModal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlistNames: state.playlistNames,
    finalPlaylist: state.finalPlaylist,
    failedToFindPlaylist: state.failedToFindPlaylist,
    failedToParsePlaylist: state.failedToParsePlaylist,
    finalAccessToken: state.finalAccessToken,
    finalPlaylistName: state.finalPlaylistName
  };
}

export default connect(
  mapStateToProps,
  {
    updateFinalPlaylist,
    updateFailedToFindPlaylist,
    updateFinalPlaylistUrl
  }
)(ConvertedPlaylist);
