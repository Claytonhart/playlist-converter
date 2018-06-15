import {
	CREATE_FAILED_TO_FIND_PLAYLIST,
	UPDATE_FINAL_FAILED_TO_FIND_PLAYLIST
} from "../actionTypes";

const failedToFindPlaylist = (state = [], action) => {
	switch (action.type) {
		case CREATE_FAILED_TO_FIND_PLAYLIST:
			console.log("adding failed to find playlist to redux state");
			return action.payload || state;
		case UPDATE_FINAL_FAILED_TO_FIND_PLAYLIST:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default failedToFindPlaylist;
