import { CREATE_INITIAL_PLAYLIST } from "../actionTypes";

const initialPlaylist = (state = [], action) => {
	switch (action.type) {
		case CREATE_INITIAL_PLAYLIST:
			console.log("updating initial playlist redux state to youtubeplaylist");
			return [...state, action.payload];
		default:
			return state;
	}
};

export default initialPlaylist;
