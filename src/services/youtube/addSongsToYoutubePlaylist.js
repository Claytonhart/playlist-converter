import axios from "axios";

export async function addSongsToYoutubePlaylist(initialPlaylist, accessToken) {
	let playlist = [];
	// let spotifyPlaylistNames = [];
	// let failedToParse = [];
	// let failedToFind = [];

	for (let song of initialPlaylist) {
		let { artistName, songName } = song;
		let result = await getYoutubeSong(songName, artistName, accessToken);

		playlist.push({ id: result, title: `${artistName} - ${songName}` });
	}
	debugger;
	return { playlist };

	// console.log(response);
	// const url = "https://www.googleapis.com/youtube/v3/search";
	// const q = "machine gun kelly - 27";
	// const type = "video";

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${response.Zi.access_token}`,
	// 		"Content-type": `application/json`
	// 	}
	// };

	// let ytResponse = await axios.get(
	// 	`${url}?part=snippet&q=${q}&type=${type}`,
	// 	config
	// );

	// let { etag } = ytResponse.data.items[0];

	// console.log(etag);
}

async function getYoutubeSong(songName, artistName, accessToken) {
	const url = "https://www.googleapis.com/youtube/v3/search";
	const q = `${artistName} - ${songName}`;
	const type = "video";

	const youtubeUrl = `${url}?part=snippet&q=${q}&type=${type}`;

	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": `application/json`
		}
	};

	let ytResponse = await axios.get(youtubeUrl, config);

	// let id = ytResponse.data.items[0].id.videoId;
	let id = ytResponse.data.items[0].id;
	// let etag = ytResponse.data.items[0].etag;
	// etag = etag.substr(1, etag.length - 2);
	console.log(id);
	return id;

	// const song_name = song_array[song_array.length - 1].trim();
	// const artist_name = song_array[song_array.length - 2].trim();

	// const songUrl = `https://api.spotify.com/v1/search?q=
	// 		artist:"${artist_name}"%20
	// 		track:${song_name}&
	// 		type=track`;

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${accessToken}`
	// 	}
	// };

	// const request = await axios.get(songUrl, config);
	// const tracks = request.data.tracks;
	// let id;
	// if (tracks.items[0]) {
	// 	id = tracks.items[0].id;
	// }

	// console.log(request);
	// console.log("getspotifysong");

	// // return id || song_name;
	// return { id };
}
