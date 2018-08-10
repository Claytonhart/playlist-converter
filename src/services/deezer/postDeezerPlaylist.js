import axios from "axios";

export async function postDeezerPlaylist(
	spotifyUriPlaylist,
	accessToken,
	playlistUrl
) {
	let songValues = spotifyUriPlaylist.map(song => {
		return song.id;
	});

	songValues = songValues.join();

	const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
	const url = `${corsAnywhere}https://api.deezer.com/playlist/${playlistUrl}/tracks&songs=${songValues}&request_method=POST&access_token=${accessToken}`;

	await axios.post(url);
}
