import { UPDATE_FINAL_PLAYLIST } from "../actionTypes";

export const updateFinalPlaylist = finalPlaylist => ({
	type: UPDATE_FINAL_PLAYLIST,
	payload: finalPlaylist
});
