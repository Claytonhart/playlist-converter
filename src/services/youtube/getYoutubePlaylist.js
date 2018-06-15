import axios from "axios";

export async function getYoutubePlaylist(
	url,
	pageToken = "",
	playlistHolder = []
) {
	console.log("fasdfasd");
	const youtubeUrl = `https://www.googleapis.com/youtube/v3/playlistItems?
			part=snippet&
			maxResults=50&
			playlistId=${url}&
			key=AIzaSyDwFUK-ngQ3FkrX6taZoQKd7tupYbO7odE&
			fields=items(snippet(title,resourceId(videoId))),nextPageToken${pageToken}`;
	const request = await axios.get(youtubeUrl);
	const { data } = request;

	const { nextPageToken } = data;
	const playlist = data.items.map(result => {
		const { title } = result.snippet;
		// start
		let song_array;
		console.log(song_array);
		console.log(result);
		if (title) {
			song_array = title
				.replace(/\([^()]*\)/g, "") // removes all ( ) and everything between
				.replace(/\[[^\]]*\]/g, "") // removes all [ ] and everything between
				.replace(/[^\w- ]/g, "")
				.split("-");
		}

		// debugger;
		if (song_array.length > 1) {
			const songName = song_array[song_array.length - 1].trim();
			const artistName = song_array[song_array.length - 2].trim();
			return { artistName, songName };
		} else {
			// This will make up the failed to find playlist
			return { title };
		}

		// return { title };
	});

	playlistHolder.push(...playlist);

	// if (nextPageToken) {
	// 	await getYoutubePlaylist(url, `&pageToken=${nextPageToken}`, playlistHolder);
	// }

	while (nextPageToken) {
		return await getYoutubePlaylist(
			url,
			`&pageToken=${nextPageToken}`,
			playlistHolder
		);
	}

	return playlistHolder;
}
