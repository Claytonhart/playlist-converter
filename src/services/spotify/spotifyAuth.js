export function spotifyAuth(initialPlaylist) {
  const url = {
    authEndpoint: "https://accounts.spotify.com/authorize/",
    client_id: "ff95d3ccaa6b43b6aa80410010f6072a",
    redirect_uri: `https://claytonhart.github.io/playlist-converter/auth`,
    scope: "playlist-modify-public playlist-modify-private"
  };
  const { authEndpoint, client_id, redirect_uri, scope } = url;
  const urlString = `${authEndpoint}?
				client_id=${client_id}&
				redirect_uri=${redirect_uri}&
				scope=${scope}&
				response_type=token`;
  const name = `${initialPlaylist}_Auth`;

  const width = 500;
  const height = 500;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const specs = `width=${width},height=${height},left=${left},top=${top}`;

  return { urlString, name, specs };
}
