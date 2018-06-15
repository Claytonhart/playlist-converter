import React, { Component } from "react";
import { connect } from "react-redux";

class Uploaded extends Component {
	render() {
		return (
			<div>
				<h1>Link to new playlist: </h1>
				<a href={this.props.finalPlaylistUrl}>link</a>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		finalPlaylistUrl: state.finalPlaylistUrl
	};
}

export default connect(mapStateToProps, null)(Uploaded);
