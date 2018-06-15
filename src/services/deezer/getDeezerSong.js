import axios from "axios";

export async function getDeezerSong(songName, artistName, accessToken) {
	const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
	const songUrl = `${corsAnywhere}https://api.deezer.com/search?dataype=jsonp&q=artist:"${artistName}" track:"${songName}"`;

	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	const request = await axios.get(songUrl, config);
	debugger;

	if (request.error) {
		return;
	}

	const { data } = request.data;
	let id;

	if (data[0]) {
		id = data[0].id;
	}

	const title = `${artistName} - ${songName}`;

	return { id, title };
}
