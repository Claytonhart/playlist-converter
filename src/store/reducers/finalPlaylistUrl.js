import { UPDATE_FINAL_PLAYLIST_URL } from "../actionTypes";

const finalPlaylistName = (state = null, action) => {
	switch (action.type) {
		case UPDATE_FINAL_PLAYLIST_URL:
			return action.payload || state;
		default:
			return state;
	}
};

export default finalPlaylistName;
