import React, { Component } from "react";
import { connect } from "react-redux";

import "./ConvertedPlaylist.css";

import { getSpotifySong } from "../../services/spotify/getSpotifySong";
import { getNapsterSong } from "../../services/napster/getNapsterSong";
import { getDeezerSong } from "../../services/deezer/getDeezerSong";
import { getYoutubeSong } from "../../services/youtube/getYoutubeSong";

import { getSpotifyUserId } from "../../services/spotify/getSpotifyUserId";
import { getDeezerUserId } from "../../services/deezer/getDeezerUserId";

import { createNewSpotifyPlaylist } from "../../services/spotify/createNewSpotifyPlaylist";
import { createNewYoutubePlaylist } from "../../services/youtube/createNewYoutubePlaylist";
import { createNewDeezerPlaylist } from "../../services/deezer/createNewDeezerPlaylist";
import { createNewNapsterPlaylist } from "../../services/napster/createNewNapsterPlaylist";

import { postSpotifyPlaylist } from "../../services/spotify/postSpotifyPlaylist";
import { postYoutubePlaylist } from "../../services/youtube/postYoutubePlaylist";
import { postDeezerPlaylist } from "../../services/deezer/postDeezerPlaylist";
import { postNapsterPlaylist } from "../../services/napster/postNapsterPlaylist";

import { updateFinalPlaylist } from "../../store/actions/updateFinalPlaylist";
import { updateFinalPlaylistUrl } from "../../store/actions/updateFinalPlaylistUrl";

class ConvertedPlaylist extends Component {
	state = {
		artistName: "",
		songName: ""
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addSong = async event => {
		event.preventDefault();

		const platformMethods = {
			getSpotifySong: getSpotifySong,
			getNapsterSong: getNapsterSong,
			getDeezerSong: getDeezerSong,
			getYoutubeSong: getYoutubeSong
		};

		const platformName = this.props.playlistNames.finalPlaylist;
		const platformMethodName = `get${platformName}Song`;

		debugger;
		let newSong = await platformMethods[platformMethodName](
			this.state.songName,
			this.state.artistName,
			this.props.finalAccessToken
		);

		// let newSong = await getSpotifySong(
		// 	this.state.songName,
		// 	this.state.artistName,
		// 	this.props.finalAccessToken
		// );

		this.props.updateFinalPlaylist(newSong);

		this.setState({ artistName: "", songName: "" });
	};

	createPlaylist = async (playlistName, event) => {
		debugger;
		switch (playlistName) {
			case "Youtube":
				await this.createYoutubePlaylist();
				this.props.history.push("/uploaded");
				break;
			case "Spotify":
				await this.createSpotifyPlaylist();
				this.props.history.push("/uploaded");
				break;
			case "Deezer":
				await this.createDeezerPlaylist();
				this.props.history.push("/uploaded");
				break;
			case "Napster":
				await this.createNapsterPlaylist();
				this.props.history.push("/uploaded");
				break;
			default:
				console.log("No final playlist name detected?");
		}
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
				<section>
					<form onSubmit={this.addSong} className="converted-playlist-input">
						<label>Add a song</label>
						<input
							type="text"
							placeholder="Artist Name"
							name="artistName"
							value={this.state.artistName}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							placeholder="Song Name"
							name="songName"
							value={this.state.songName}
							onChange={this.handleChange}
						/>
						<button onClick={this.addSong}>Add Song</button>
					</form>
					<button
						onClick={this.createPlaylist.bind(
							this,
							this.props.playlistNames.finalPlaylist
						)}
					>
						Create Playlist
					</button>
				</section>
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

export default connect(mapStateToProps, {
	updateFinalPlaylist,
	updateFinalPlaylistUrl
})(ConvertedPlaylist);
