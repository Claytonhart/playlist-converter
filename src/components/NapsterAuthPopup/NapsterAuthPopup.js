import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NapsterAuthPopup extends Component {
	// window.close();
	componentDidMount() {
		const codeUrl = this.props.history.location.search;

		const code = codeUrl.substring(codeUrl.indexOf("=") + 1);

		const targetWindow = window.opener;
		console.log(targetWindow);

		targetWindow.postMessage(
			{ code, name: "Napster" },
			"http://localhost:3000/convert/Napster/Youtube"
		);

		window.close();
	}
	render() {
		return <div>Hello</div>;
	}
}

export default withRouter(NapsterAuthPopup);
