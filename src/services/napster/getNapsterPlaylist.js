import axios from "axios";

export async function getNapsterPlaylist(
  playlistId,
  playlistHolder = [],
  nextNapsterUrl
) {
  const apiKey = "ZjFjM2E5MTYtMTY2ZS00N2U0LWFkYTQtMGFkODZiYTZiMGQy";
  const napsterUrl = `https://api.napster.com/v2.2/playlists/
		${playlistId}/tracks?
		apikey=${apiKey}&
		limit=200`;

  // const config = {
  // 	headers: {
  // 		Authorization: `Bearer ${accessToken}`,
  // 		"Access-Control-Allow-Origin": "https://claytonhart.github.io"
  // 	}
  // };

  const request = await axios.get(nextNapsterUrl || napsterUrl);
  debugger;
  const { next } = request.data.meta.query;
  const { data } = request;

  const playlist = data.tracks.map(song => {
    const songName = song.name;
    const artistName = song.artistName;

    return { artistName, songName };
  });

  playlistHolder.push(...playlist);

  while (next) {
    return await getNapsterPlaylist(playlistId, playlistHolder, next);
  }

  return playlistHolder;
}
