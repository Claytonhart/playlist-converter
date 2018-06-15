import { UPDATE_PLAYLIST_SELECTION } from "../actionTypes";

export const updatePlaylistSelection = (initialPlaylist, finalPlaylist) => ({
	type: UPDATE_PLAYLIST_SELECTION,
	payload: {
		initialPlaylist,
		finalPlaylist
	}
});
