import axios from "axios";

export async function postSpotifyPlaylist(
	spotifyUriPlaylist,
	accessToken,
	playlistUrl
) {
	let tempPlaylist = [];
	for (let i = 0; i < spotifyUriPlaylist.length; i += 100) {
		let tempArray = [];
		for (let j = 0; j < 100; j++) {
			if (spotifyUriPlaylist[j + i]) {
				tempArray.push(`spotify:track:${spotifyUriPlaylist[j + i].id}`);
				// console.log("j + i: " + (j + i))
			}
		}
		tempPlaylist.push(tempArray);

		const url = `${playlistUrl}/tracks`;

		const config = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-type": `application/json`
			}
		};

		const body = {
			uris: tempArray
		};

		await axios.post(url, JSON.stringify(body), config);

		// fetch(songUrlToAdd, {
		// 		method: "POST",
		//  	headers: {
		//     'Authorization': `Bearer ${this.state.access_token}`,
		//     'Content-Type': 'application/json'
		//  	},
		//  	body: JSON.stringify({uris: tempArray})
		// }
		// )
		// .then(response => console.log(response))
		// .catch(error => console.error(error))
		// console.log("i: " + i)
	}
	console.log(tempPlaylist);
}
