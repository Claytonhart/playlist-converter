import axios from "axios";

export async function postYoutubePlaylist(
	youtubeUriPlaylist,
	accessToken,
	playlistId
) {
	const url = `https://www.googleapis.com/youtube/v3/playlistItems`;
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": `application/json`
		}
	};
	const part = `part=snippet`;

	const youtubeUrl = `${url}?${part}`;

	for (let video of youtubeUriPlaylist) {
		debugger;
		let { id } = video;
		let snippet = {
			snippet: {
				playlistId: playlistId,
				resourceId: id
			}
		};
		let result = await axios.post(youtubeUrl, snippet, config);
		// axios.post(youtubeUrl, snippet, config);

		debugger;
		console.log(result);
	}

	// const request = await axios.get(youtubeUrl);
	// const { data } = request;

	// const { nextPageToken } = data;
	// const playlist = data.items.map(result => {
	// 	const { title } = result.snippet;
	// 	return { title };
	// });

	// playlistHolder.push(...playlist);

	// while (nextPageToken) {
	// 	return await getYoutubePlaylist(
	// 		url,
	// 		`&pageToken=${nextPageToken}`,
	// 		playlistHolder
	// 	);
	// }

	// let tempPlaylist = [];
	// for (let i = 0; i < spotifyUriPlaylist.length; i += 100) {
	// 	let tempArray = [];
	// 	for (let j = 0; j < 100; j++) {
	// 		if (spotifyUriPlaylist[j + i]) {
	// 			tempArray.push(`spotify:track:${spotifyUriPlaylist[j + i].id}`);
	// 			// console.log("j + i: " + (j + i))
	// 		}
	// 	}
	// 	tempPlaylist.push(tempArray);

	// 	const url = `${playlistUrl}/tracks`;

	// 	const config = {
	// 		headers: {
	// 			Authorization: `Bearer ${accessToken}`,
	// 			"Content-type": `application/json`
	// 		}
	// 	};

	// 	const body = {
	// 		uris: tempArray
	// 	};

	// 	await axios.post(url, JSON.stringify(body), config);

	// }
	// console.log(tempPlaylist);
}
