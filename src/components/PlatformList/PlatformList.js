import React, { Component } from "react";

import PlatformButton from "../PlatformButton/PlatformButton";
import "./PlatformList.css";

class PlatformList extends Component {
	state = {
		platforms: {
			Spotify: "green",
			Youtube: "red",
			Deezer: "orange",
			Napster: "blue"
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
					color={platforms[platform]}
					activateButton={this.props.activateButton.bind(
						this,
						this.props.column,
						platform
					)}
					column={this.props.column}
					isActive={this.props.platform === platform}
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
