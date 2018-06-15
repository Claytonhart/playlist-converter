import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";
import Homepage from "../../components/Homepage/Homepage";
import AuthPopup from "../AuthPopup/AuthPopup";
import DeezerAuthPopup from "../../components/DeezerAuthPopup/DeezerAuthPopup";
import NapsterAuthPopup from "../../components/NapsterAuthPopup/NapsterAuthPopup";
import ConvertPlaylistLanding from "../ConvertPlaylistLanding/ConvertPlaylistLanding";
import PlatformAuth from "../PlatformAuth/PlatformAuth";
import ConvertedPlaylist from "../ConvertedPlaylist/ConvertedPlaylist";
import Uploaded from "../Uploaded/Uploaded";

const Main = props => (
	<div className="clear-navbar">
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/convert" component={ConvertPlaylistLanding} />
			<Route
				path="/convert/:initialPlaylist/:finalPlaylist"
				component={PlatformAuth}
			/>
			<Route path="/auth/deezer" component={DeezerAuthPopup} />
			<Route path="/auth/napster" component={NapsterAuthPopup} />
			<Route path="/auth" component={AuthPopup} />
			<Route path="/converted" component={ConvertedPlaylist} />
			<Route path="/uploaded" component={Uploaded} />
		</Switch>
	</div>
);

export default Main;
