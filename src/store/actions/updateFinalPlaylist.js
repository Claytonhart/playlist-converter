import {
	UPDATE_FINAL_PLAYLIST,
	UPDATE_FINAL_FAILED_TO_FIND_PLAYLIST
} from "../actionTypes";

export const updateFinalPlaylist = finalPlaylist => ({
	type: UPDATE_FINAL_PLAYLIST,
	payload: finalPlaylist
});

export const updateFailedToFindPlaylist = finalPlaylist => ({
	type: UPDATE_FINAL_FAILED_TO_FIND_PLAYLIST,
	payload: finalPlaylist
});
