import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ConvertPlaylistLanding.css";
import PlatformList from "../../components/PlatformList/PlatformList";
import { updatePlaylistSelection } from "../../store/actions/playlistNames.js";

class ConvertPlaylistLanding extends Component {
	state = {
		initialPlaylist: null,
		finalPlaylist: null
	};

	handleSubmit = event => {
		event.preventDefault();
		const { initialPlaylist, finalPlaylist } = this.state;
		if (!initialPlaylist || !finalPlaylist) {
			// Add an error letting user know they need to select both playlists
			console.log("wrong");
		} else {
			this.props.updatePlaylistSelection(initialPlaylist, finalPlaylist);
			this.props.history.push(`/convert/${initialPlaylist}/${finalPlaylist}`);
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
				<div className="platform-list-container">
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
				</div>
				<button className="convert-submit-button">Convert my playlist</button>
			</form>
		);
	}
}

export default withRouter(
	connect(null, { updatePlaylistSelection })(ConvertPlaylistLanding)
);
