import {
	UPDATE_FINAL_ACCESS_TOKEN,
	UPDATE_INITIAL_ACCESS_TOKEN
} from "../actionTypes";

export const updateFinalAccessToken = spotifyAccessToken => ({
	type: UPDATE_FINAL_ACCESS_TOKEN,
	payload: spotifyAccessToken
});

export const updateInitialAccessToken = accessToken => ({
	type: UPDATE_INITIAL_ACCESS_TOKEN,
	payload: accessToken
});
