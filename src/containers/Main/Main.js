import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";
import AuthPopup from "../AuthPopup/AuthPopup";
import DeezerAuthPopup from "../../components/DeezerAuthPopup/DeezerAuthPopup";
import NapsterAuthPopup from "../../components/NapsterAuthPopup/NapsterAuthPopup";
import ConvertPlaylistLanding from "../ConvertPlaylistLanding/ConvertPlaylistLanding";
import PlatformAuth from "../PlatformAuth/PlatformAuth";
import ConvertedPlaylist from "../ConvertedPlaylist/ConvertedPlaylist";
import Uploaded from "../Uploaded/Uploaded";
import NotFound from "../../components/NotFound/NotFound";

const Main = props => (
  <div className="clear-navbar">
    <Switch>
      <Route exact path="/" component={ConvertPlaylistLanding} />
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
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
