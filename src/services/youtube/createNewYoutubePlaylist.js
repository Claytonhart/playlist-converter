import axios from "axios";

export async function createNewYoutubePlaylist(accessToken, playlistName) {
	const url = `https://www.googleapis.com/youtube/v3/playlists`;
	const part = `part=snippet`;
	const snippet = { snippet: { title: playlistName } };
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": `application/json`
		}
	};

	let response = await axios.post(
		`${url}?${part}`,
		JSON.stringify(snippet),
		config
	);

	// response = JSON.parse(response);

	const id = response.data.id;

	// const id = response.data.id;
	// const parsedId = JSON.parse(id);
	debugger;
	return id;
}
