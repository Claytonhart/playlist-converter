import React from "react";

import "./PlatformButton.css";

import SpotifyIcon from "../../images/spotify.png";
import YoutubeIcon from "../../images/youtube.png";
import DeezerIcon from "../../images/deezer.png";
import NapsterIcon from "../../images/napster.png";

const PlatformButton = props => {
	// console.log(props.isActive);
	// console.log(props.name);
	const iconName = `${props.name}Icon`;
	return (
		<li
			/*className={`platform-container ${props.color}${
				props.isActive ? ` background-${props.color}` : ""
			}`}*/
			className={`platform-container ${props.color}`}
			onClick={props.activateButton}
		>
			<div className="platform-button-left">
				<img
					src={props.imageSrc}
					alt="spotify icon"
					width="64px"
					height="64px"
				/>
			</div>
			<div
				className={`platform-button-right background-${props.color}${
					props.isActive ? ` background-active` : ""
				}`}
			>
				<p className="platform-button">{props.name}</p>
			</div>
		</li>
	);
};

export default PlatformButton;
