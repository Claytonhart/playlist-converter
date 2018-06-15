import { UPDATE_PLAYLIST_SELECTION } from "../actionTypes";

const playlistNames = (state = [], action) => {
	switch (action.type) {
		case UPDATE_PLAYLIST_SELECTION:
			console.log("updating playlist selection");
			return { ...action.payload };
		default:
			return state;
	}
};

export default playlistNames;
