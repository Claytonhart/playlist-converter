import { CREATE_FAILED_TO_PARSE_PLAYLIST } from "../actionTypes";

const failedToParsePlaylist = (state = [], action) => {
	switch (action.type) {
		case CREATE_FAILED_TO_PARSE_PLAYLIST:
			console.log("adding failed to parse playlist to redux state");
			return action.payload || state;
		default:
			return state;
	}
};

export default failedToParsePlaylist;
