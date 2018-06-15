import axios from "axios";

export async function postDeezerPlaylist(
	spotifyUriPlaylist,
	accessToken,
	playlistUrl
) {
	debugger;
	let songValues = spotifyUriPlaylist.map(song => {
		debugger;
		return song.id;
	});
	debugger;
	songValues = songValues.join();

	const songList = { songs: 802343 };

	const corsAnywhere = `https://cors-anywhere.herokuapp.com/`;
	const url = `${corsAnywhere}https://api.deezer.com/playlist/${playlistUrl}/tracks&songs=${songValues}&request_method=POST&access_token=${accessToken}`;
	debugger;
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			"Content-type": `application/json`
		}
	};

	// const body = {
	// 	uris: tempArray
	// };

	await axios.post(url);

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
	// console.log(tempPlaylist);
}
