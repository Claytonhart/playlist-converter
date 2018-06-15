import {
	CREATE_INITIAL_PLAYLIST,
	CREATE_FAILED_TO_PARSE_PLAYLIST,
	CREATE_FAILED_TO_FIND_PLAYLIST,
	UPDATE_FINAL_PLAYLIST_NAME,
	CREATE_FINAL_PLAYLIST
} from "../actionTypes";

import { getYoutubePlaylist } from "../../services/youtube/getYoutubePlaylist";
import { getSpotifyPlaylist } from "../../services/spotify/getSpotifyPlaylist";
import { getDeezerPlaylist } from "../../services/deezer/getDeezerPlaylist";
import { getNapsterPlaylist } from "../../services/napster/getNapsterPlaylist";

import { addSongsToSpotifyPlaylist } from "../../services/spotify/addSongsToSpotifyPlaylist";
import { addSongsToYoutubePlaylist } from "../../services/youtube/addSongsToYoutubePlaylist";
import { addSongsToDeezerPlaylist } from "../../services/deezer/addSongsToDeezerPlaylist";
import { addSongsToNapsterPlaylist } from "../../services/napster/addSongsToNapsterPlaylist";

// import { createFinalPlaylist } from "./createFinalPlaylist";
// import { createFailedToFindPlaylist } from "./createFailedToFindPlaylist";
// import { createFailedToParsePlaylist } from "./createFailedToParsePlaylist";

export const createFinalPlaylist = finalPlaylist => ({
	type: CREATE_FINAL_PLAYLIST,
	payload: finalPlaylist
});

export const createFailedToFindPlaylist = failedToFindPlaylist => ({
	type: CREATE_FAILED_TO_FIND_PLAYLIST,
	payload: failedToFindPlaylist
});

export const createFailedToParsePlaylist = failedToParsePlaylist => ({
	type: CREATE_FAILED_TO_PARSE_PLAYLIST,
	payload: failedToParsePlaylist
});

export const createInitialPlaylist = initialPlaylist => ({
	type: CREATE_INITIAL_PLAYLIST,
	payload: initialPlaylist
});

export const updateFinalPlaylistName = finalPlaylistName => ({
	type: UPDATE_FINAL_PLAYLIST_NAME,
	payload: finalPlaylistName
});

// export function buildNewPlaylist(
// 	initialPlaylistName,
// 	id,
// 	finalPlaylistName,
// 	finalPlaylistValue,
// 	initialAccessToken,
// 	finalAccessToken
// ) {
// 	return async dispatch => {
// 		let initial;
// 		let final;
// 		debugger;
// 		switch (initialPlaylistName) {
// 			case "Spotify":
// 				initial = await getSpotifyPlaylist(id, initialAccessToken);
// 				dispatch(createInitialPlaylist(initial));
// 				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
// 				debugger;
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				debugger;
// 				// final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
// 				// console.log("spotify");
// 				// dispatch(createFinalPlaylist(final.playlist));
// 				// dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				// dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break;
// 			case "Youtube":
// 				initial = await getYoutubePlaylist(id);
// 				dispatch(createInitialPlaylist(initial));
// 				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break;
// 			case "Deezer":
// 				initial = await getDeezerPlaylist(id, initialAccessToken);
// 				debugger;
// 				dispatch(createInitialPlaylist(initial));
// 				// final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
// 				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
// 				console.log("spotify");
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				debugger;
// 			default:
// 				console.log("no initial playlist");
// 		}
// 	};
// }

// export function buildNewPlaylist(
// 	initialPlaylistName,
// 	id,
// 	finalPlaylistName,
// 	finalPlaylistValue,
// 	initialAccessToken,
// 	finalAccessToken
// ) {
// 	return async dispatch => {
// 		let initial;
// 		let final;
// 		debugger;
// 		switch (true) {
// 			case initialPlaylistName === "Spotify" && finalPlaylistName === "Youtube":
// 			debugger;
// 				initial = await getSpotifyPlaylist(id, initialAccessToken);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break
// 			case initialPlaylistName === "Spotify" && finalPlaylistName === "Deezer":
// 			debugger;
// 				initial = await getSpotifyPlaylist(id, initialAccessToken);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break
// 			case initialPlaylistName === "Youtube" && finalPlaylistName === "Spotify":
// 			debugger;
// 				initial = await getYoutubePlaylist(id);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break

// 			case initialPlaylistName === "Youtube" && finalPlaylistName === "Deezer":
// 			debugger;
// 				initial = await getYoutubePlaylist(id);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break
// 			case initialPlaylistName === "Deezer" && finalPlaylistName === "Spotify":
// 			debugger;
// 				initial = await getDeezerPlaylist(id, initialAccessToken);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break
// 			case initialPlaylistName === "Deezer" && finalPlaylistName === "Youtube":
// 			debugger;
// 				initial = await getDeezerPlaylist(id, initialAccessToken);
// 				dispatch(createInitialPlaylist(initial));

// 				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
// 				dispatch(createFinalPlaylist(final.playlist));
// 				dispatch(createFailedToFindPlaylist(final.failedToFind));
// 				dispatch(createFailedToParsePlaylist(final.failedToParse));
// 				break
// 			default:
// 			debugger;
// 				console.log(`${initialPlaylistName} - initial, ${finalPlaylistName} - final`)
// 		}}}

export function buildNewPlaylist(
	initialPlaylistName,
	id,
	finalPlaylistName,
	finalPlaylistValue,
	initialAccessToken,
	finalAccessToken
) {
	return async dispatch => {
		let initial;
		let final;
		debugger;
		switch (true) {
			case initialPlaylistName === "Spotify" && finalPlaylistName === "Youtube":
				initial = await getSpotifyPlaylist(id, initialAccessToken);
				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Spotify" && finalPlaylistName === "Deezer":
				initial = await getSpotifyPlaylist(id, initialAccessToken);
				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Spotify" && finalPlaylistName === "Napster":
				initial = await getSpotifyPlaylist(id, initialAccessToken);
				final = await addSongsToNapsterPlaylist(initial, finalAccessToken);
				break;

			case initialPlaylistName === "Youtube" && finalPlaylistName === "Spotify":
				initial = await getYoutubePlaylist(id);
				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Youtube" && finalPlaylistName === "Deezer":
				initial = await getYoutubePlaylist(id);
				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Youtube" && finalPlaylistName === "Napster":
				initial = await getYoutubePlaylist(id);
				final = await addSongsToNapsterPlaylist(initial, finalAccessToken);
				break;

			case initialPlaylistName === "Deezer" && finalPlaylistName === "Spotify":
				initial = await getDeezerPlaylist(id);
				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Deezer" && finalPlaylistName === "Youtube":
				initial = await getDeezerPlaylist(id);
				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Deezer" && finalPlaylistName === "Napster":
				initial = await getDeezerPlaylist(id);
				final = await addSongsToNapsterPlaylist(initial, finalAccessToken);
				break;

			case initialPlaylistName === "Napster" && finalPlaylistName === "Youtube":
				initial = await getNapsterPlaylist(id);
				final = await addSongsToYoutubePlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Napster" && finalPlaylistName === "Spotify":
				initial = await getNapsterPlaylist(id);
				final = await addSongsToSpotifyPlaylist(initial, finalAccessToken);
				break;
			case initialPlaylistName === "Napster" && finalPlaylistName === "Deezer":
				initial = await getNapsterPlaylist(id);
				final = await addSongsToDeezerPlaylist(initial, finalAccessToken);
				break;
			default:
				debugger;
				console.log(
					`${initialPlaylistName} - initial, ${finalPlaylistName} - final`
				);
		}
		dispatch(createInitialPlaylist(initial));
		dispatch(createFinalPlaylist(final.playlist));
		dispatch(createFailedToFindPlaylist(final.failedToFind));
		dispatch(createFailedToParsePlaylist(final.failedToParse));
	};
}
