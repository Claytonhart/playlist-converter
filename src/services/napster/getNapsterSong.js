import axios from "axios";

export async function getNapsterSong(songName, artistName, accessToken) {
  const apiKey = "ZjFjM2E5MTYtMTY2ZS00N2U0LWFkYTQtMGFkODZiYTZiMGQy";
  const songUrl = `https://api.napster.com/v2.2/search/verbose?
		apikey=${apiKey}&
		per_type_limit=1&
		query=${songName} ${artistName}&
		type=track`;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  const request = await axios.get(songUrl, config);
  debugger;

  const order = request.data.search.order;
  let id;
  debugger;
  if (order[0]) {
    id = order[0];
  }

  const title = `${artistName} - ${songName}`;

  return { id, title };
}
