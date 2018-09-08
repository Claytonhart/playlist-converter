export function deezerAuth(initialPlaylist) {
  const url = {
    authEndpoint: "https://connect.deezer.com/oauth/auth.php",
    app_id: 283344,
    redirect_uri: `https://claytonhart.github.io/playlist-converter/auth/deezer`,
    perms: "manage_library,offline_access"

    // `https://connect.deezer.com/oauth/auth.php?
    // app_id=283344&
    // redirect_uri=https://claytonhart.github.io/playlist-converter/auth/deezer&
    // perms=basic_access,manage_library`
  };
  const { authEndpoint, app_id, redirect_uri, perms } = url;
  const urlString = `${authEndpoint}?
				app_id=${app_id}&
				redirect_uri=${redirect_uri}&
				perms=${perms}&
				response_type=token`;
  const name = `${initialPlaylist}_Auth`;

  const width = 500;
  const height = 500;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const specs = `width=${width},height=${height},left=${left},top=${top}`;

  return { urlString, name, specs };
}
