import { CREATE_FINAL_PLAYLIST, UPDATE_FINAL_PLAYLIST } from "../actionTypes";

const finalPlaylist = (state = [], action) => {
	switch (action.type) {
		case CREATE_FINAL_PLAYLIST:
			console.log("updating final playlist redux state to spotifyplaylist");
			return action.payload || state;
		case UPDATE_FINAL_PLAYLIST:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default finalPlaylist;
