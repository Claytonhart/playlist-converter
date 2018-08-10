import React from "react";

import "./PlatformButton.css";

const PlatformButton = props => {
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
