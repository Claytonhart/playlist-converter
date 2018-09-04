import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ConvertPlaylistLanding.css";
import PlatformList from "../../components/PlatformList/PlatformList";
import { updatePlaylistSelection } from "../../store/actions/playlistNames.js";

class ConvertPlaylistLanding extends Component {
  state = {
    initialPlaylist: null,
    finalPlaylist: null,
    error: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { initialPlaylist, finalPlaylist } = this.state;
    if (!initialPlaylist || !finalPlaylist) {
      // Add an error letting user know they need to select both playlists
      this.setState({
        error: "You need to select a playlist to convert to and from."
      });
    } else {
      if (initialPlaylist !== finalPlaylist) {
        this.props.updatePlaylistSelection(initialPlaylist, finalPlaylist);
        this.props.history.push(`/convert/${initialPlaylist}/${finalPlaylist}`);
      } else {
        this.setState({
          error: "Can't convert a playlist from the same platform."
        });
        console.log("can't convert the same playlist");
      }
    }
  };

  activateButton = (playlist, activePlatform) => {
    this.setState({ [playlist]: activePlatform });
  };

  // handleChange = event => {
  // 	const { name, value } = event.target;
  // 	this.setState({
  // 		[name]: value
  // 	});
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="convert-form">
        <h1 className="convert-header">Choose Your Platforms</h1>
        <h3 className="step-one">Step: 1/3</h3>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <section className="platform-list-container">
          <div className="platform-list-container-left">
            <label htmlFor="initialPlaylist">From</label>
            <PlatformList
              column="initialPlaylist"
              platform={this.state.initialPlaylist}
              activateButton={this.activateButton}
            />
          </div>
          <div className="platform-list-container-right">
            <label htmlFor="finalPlaylist">To</label>
            <PlatformList
              column="finalPlaylist"
              platform={this.state.finalPlaylist}
              activateButton={this.activateButton}
            />
          </div>
        </section>
        <button className="convert-submit-button">Convert my playlist</button>
      </form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { updatePlaylistSelection }
  )(ConvertPlaylistLanding)
);
