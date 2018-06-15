import React from "react";

import "./PlatformButton.css";

const PlatformButton = props => {
	// console.log(props.isActive);
	// console.log(props.name);

	return (
		<li
			className={`platform-container ${props.color}${
				props.isActive ? " platform-button-active" : ""
			}`}
		>
			<div className="platform-sidebar" />
			<input
				type="button"
				value={props.name}
				onClick={props.activateButton}
				className="platform-button"
			/>
		</li>
	);
};

export default PlatformButton;
