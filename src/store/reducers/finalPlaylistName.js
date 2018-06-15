import { UPDATE_FINAL_PLAYLIST_NAME } from "../actionTypes";

const finalPlaylistName = (state = null, action) => {
	switch (action.type) {
		case UPDATE_FINAL_PLAYLIST_NAME:
			return action.payload || state;
		default:
			return state;
	}
};

export default finalPlaylistName;
