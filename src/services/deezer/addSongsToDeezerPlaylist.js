import axios from "axios";
// import jsonp from "jsonp";

export async function addSongsToDeezerPlaylist(initialPlaylist, accessToken) {
	let playlist = [];
	let failedToFind = [];
	let failedToParse = [];

	for (let song of initialPlaylist) {
		console.log(song);
		if (song.hasOwnProperty("artistName")) {
			const { artistName, songName } = song;
			const result = await getDeezerSong(songName, artistName, accessToken);
			if (result) {
				debugger;
				let songId;
				if (result.data.data[0]) {
					songId = result.data.data[0].id;
				}
				// debugger;
				if (songId) {
					playlist.push({ id: songId, title: `${artistName} - ${songName}` });
				} else {
					failedToFind.push(`${songName} - ${artistName}`);
				}
			}
		} else {
			console.log(song.title);
			debugger;
			failedToParse.push(song.title);
		}
	}
	// debugger;
	return { playlist, failedToFind, failedToParse };
}

async function getDeezerSong(songName, artistName, accessToken) {
	const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
	// const corsAnywhere = `https://crossorigin.me/`;
	const songUrl = `${corsAnywhere}https://api.deezer.com/search?dataype=jsonp&q=artist:"${artistName}" track:"${songName}"`;
	// const songUrl = `https://api.deezer.com/search?access_token=${accessToken}&q=artist:${artistName} track:"${songName}"`;

	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	const request = await axios.get(songUrl, config);
	// debugger;
	// const tracks = request.data.data;
	if (request.error) {
		return;
	}
	// let id;
	// if (tracks[0]) {
	// 	id = tracks[0].id;
	// }

	// console.log(id);
	// return id;
	return request;
}

// async function getDeezerSong(songName, artistName, accessToken) {
// 	// const songUrl = `https://api.deezer.com/search?dataype=jsonp&q=artist:"${artistName}" track:"${songName}"`;
// 	const songUrl = `https://api.deezer.com/search?q=artist:"${artistName}" track:"${songName}"&output=jsonp&output=jsonp`;
// 	let response;
// 	let id;
// 	const callback = (err, data) => {
// 		// debugger;
// 		if (err) {
// 			console.error(err.message);
// 			return;
// 		} else {
// 			console.log(data);

// 			let songId;
// 			if (data.data[0]) {
// 				songId = result.data.data[0].id;
// 			}
// 			// debugger;
// 			if (songId) {
// 				playlist.push({ id: songId, title: `${artistName} - ${songName}` });
// 			} else {
// 				failedToFind.push(`${songName} - ${artistName}`);
// 			}

// 			// response = data.data;
// 			// // let id;
// 			// if (response[0]) {
// 			// 	id = response[0].id;
// 			// }
// 			return id;
// 		}
// 	};

// 	jsonp(songUrl, { timeout: 0 }, callback);
// 	// return id;
// 	return id;
// 	// debugger;
// }

// async function getDeezerSong(songName, artistName, accessToken) {
// 	const songUrl = `https://api.deezer.com/search?q=artist:"${artistName}" track:"${songName}"`;
// 	let id;
// 	try {
// 		let data = await jsonp(songUrl, { param: "jsonp" }).promise;
// 		debugger;
// 		let response = data.data;

// 		if (response[0]) {
// 			id = response[0].id;
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}

// 	return id;
// }
