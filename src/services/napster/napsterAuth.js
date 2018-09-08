export function napsterAuth(initialPlaylist) {
  const apiKey = "ZjFjM2E5MTYtMTY2ZS00N2U0LWFkYTQtMGFkODZiYTZiMGQy";
  const urlString = `https://api.napster.com/oauth/authorize?
		client_id=${apiKey}&
		redirect_uri=https://claytonhart.github.io/playlist-converter/auth/napster&
		response_type=code`;

  const name = `${initialPlaylist}_Auth`;

  const width = 500;
  const height = 500;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const specs = `width=${width},height=${height},left=${left},top=${top}`;
  return { urlString, name, specs };
}
