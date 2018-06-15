import axios from "axios";

export async function createNewSpotifyPlaylist(
	userId,
	accessToken,
	playlistName
) {
	const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": `application/json`
		}
	};

	const body = {
		name: `${playlistName}`
	};

	let response = await axios.post(url, JSON.stringify(body), config);
	console.log(response);

	let newSpotifyApiPlaylistUrl = response.data.href;
	let newSpotifyPlaylistUrl = response.data.external_urls.spotify;

	return { newSpotifyApiPlaylistUrl, newSpotifyPlaylistUrl };
}
