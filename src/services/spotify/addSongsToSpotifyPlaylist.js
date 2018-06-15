import axios from "axios";

export async function addSongsToSpotifyPlaylist(initialPlaylist, accessToken) {
	// let playlist = [];
	// // let spotifyPlaylistNames = [];
	// let failedToParse = [];
	// let failedToFind = [];

	// for (let song of youtubePlaylist) {
	// 	const song_array = song.title
	// 		.replace(/\([^()]*\)/g, "") // removes all ( ) and everything between
	// 		.replace(/\[[^\]]*\]/g, "") // removes all [ ] and everything between
	// 		.replace(/[^\w- ]/g, "")
	// 		.split("-");

	// 	// filter out private videos, deleted videos, and videos whose title could not be parsed
	// 	// which will all have a length of 1
	// 	// song_array = ["artist", "song_title"]
	// 	if (song_array.length > 1) {
	// 		console.log(song_array);

	// 		let result = await getSpotifySong(song_array, playlist, accessToken);

	// 		if (result.id) {
	// 			playlist.push({ id: result.id, title: song.title });
	// 			// spotifyPlaylistNames.push(song.title);
	// 		} else {
	// 			// failedToFind.push(result.song_name);
	// 			failedToFind.push(song.title);
	// 		}
	// 	} else {
	// 		failedToParse.push(song.title);
	// 	}
	// }
	// console.log(failedToParse);
	// console.log(failedToFind);
	// console.log(playlist);
	// return {
	// 	playlist,
	// 	failedToFind,
	// 	failedToParse
	// };

	let playlist = [];
	let failedToFind = [];
	let failedToParse = [];

	for (let song of initialPlaylist) {
		console.log(song);
		if (song.hasOwnProperty("artistName")) {
			const { artistName, songName } = song;
			const result = await getSpotifySong(songName, artistName, accessToken);

			debugger;
			if (result) {
				playlist.push({ id: result, title: `${artistName} - ${songName}` });
			} else {
				failedToFind.push(`${songName} - ${artistName}`);
			}
		} else {
			console.log(song.title);
			debugger;
			failedToParse.push(song.title);
		}
	}
	debugger;
	return { playlist, failedToFind, failedToParse };
}

// async function getSpotifySong(song_array, playlist, accessToken) {
// 	const song_name = song_array[song_array.length - 1].trim();
// 	const artist_name = song_array[song_array.length - 2].trim();

// 	const songUrl = `https://api.spotify.com/v1/search?q=
// 			artist:"${artist_name}"%20
// 			track:${song_name}&
// 			type=track`;

// 	const config = {
// 		headers: {
// 			Authorization: `Bearer ${accessToken}`
// 		}
// 	};

// 	const request = await axios.get(songUrl, config);
// 	const tracks = request.data.tracks;
// 	let id;
// 	if (tracks.items[0]) {
// 		id = tracks.items[0].id;
// 	}

// 	console.log(request);
// 	console.log("getspotifysong");

// 	// return id || song_name;
// 	return { id };
// }

async function getSpotifySong(songName, artistName, accessToken) {
	const songUrl = `https://api.spotify.com/v1/search?q=
		artist:"${artistName}"%20
		track:${songName}&
		type=track`;

	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	const request = await axios.get(songUrl, config);
	const tracks = request.data.tracks;
	let id;
	if (tracks.items[0]) {
		id = tracks.items[0].id;
	}

	console.log(id);
	return id;
}
