import { UPDATE_FINAL_PLAYLIST_URL } from "../actionTypes";

export const updateFinalPlaylistUrl = finalPlaylistUrl => ({
	type: UPDATE_FINAL_PLAYLIST_URL,
	payload: finalPlaylistUrl
});
