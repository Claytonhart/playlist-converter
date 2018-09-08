import axios from "axios";

export async function getDeezerPlaylist(
	userId,
	playlistHolder = [],
	nextDeezerUrl
) {
	console.log("fasdfasd");
	const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
	const deezerUrl = `${corsAnywhere}https://api.deezer.com/playlist/${userId}/tracks`;

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${accessToken}`,
	// 		"Access-Control-Allow-Origin": "https://claytonhart.github.io"
	// 	}
	// };

	const request = await axios.get(nextDeezerUrl || deezerUrl);
	const { next } = request.data;
	const { data } = request.data;

	const playlist = data.map(song => {
		const songName = song.title;
		const artistName = song.artist.name;

		return { artistName, songName };
	});

	playlistHolder.push(...playlist);

	while (next) {
		return await getDeezerPlaylist(
			userId,
			playlistHolder,
			`${corsAnywhere}${next}`
		);
	}

	// while (nextPageToken) {
	// 	return await getDeezerPlaylist(
	// 		url,
	// 		`&pageToken=${nextPageToken}`,
	// 		playlistHolder
	// 	);
	// }

	return playlistHolder;
}
