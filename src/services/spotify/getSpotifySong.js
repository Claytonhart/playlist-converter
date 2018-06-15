import axios from "axios";

export async function getSpotifySong(song_name, artist_name, accessToken) {
	// const song_name = song_array[song_array.length - 1].trim();
	// const artist_name = song_array[song_array.length - 2].trim();

	const songUrl = `https://api.spotify.com/v1/search?q=
			artist:"${artist_name}"%20
			track:${song_name}&
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

	console.log(request);
	console.log("getspotifysong");

	const title = `${artist_name} - ${song_name}`;

	// return id || song_name;
	return { id, title };
}
