import React, { Component } from "react";

import PlatformButton from "../PlatformButton/PlatformButton";
import "./PlatformList.css";

import SpotifyIcon from "../../images/spotify.png";
import YoutubeIcon from "../../images/youtube.png";
import DeezerIcon from "../../images/deezer.png";
import NapsterIcon from "../../images/napster.png";

class PlatformList extends Component {
	// state = {
	// 	platforms: {
	// 		Spotify: "green",
	// 		Youtube: "red",
	// 		Deezer: "orange",
	// 		Napster: "blue"
	// 	}
	// };

	state = {
		platforms: {
			Spotify: { color: "green", img: SpotifyIcon },
			Youtube: { color: "red", img: YoutubeIcon },
			Deezer: { color: "orange", img: DeezerIcon },
			Napster: { color: "black", img: NapsterIcon }
		}
	};

	render() {
		const { platforms } = this.state;
		let platformListToRender = [];
		for (const platform in platforms) {
			platformListToRender.push(
				<PlatformButton
					key={platform}
					name={platform}
					color={platforms[platform].color}
					activateButton={this.props.activateButton.bind(
						this,
						this.props.column,
						platform
					)}
					column={this.props.column}
					isActive={this.props.platform === platform}
					imageSrc={platforms[platform].img}
				/>
			);
		}

		return (
			<div className="platform-list">
				<ul className="platform-list-left">{platformListToRender}</ul>
			</div>
		);
	}
}

export default PlatformList;
