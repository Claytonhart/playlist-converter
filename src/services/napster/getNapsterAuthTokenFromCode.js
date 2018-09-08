import axios from "axios";

export async function getNapsterAuthTokenFromCode(passedCode) {
  const api_key = "ZjFjM2E5MTYtMTY2ZS00N2U0LWFkYTQtMGFkODZiYTZiMGQy";
  const api_secret = "ODA5ZjI2MWMtNGYzYS00MTg1LWFmYjAtOTljNmVmZDEyYzJj";

  const url = `https://api.napster.com/oauth/access_token`;

  const body = {
    client_id: api_key,
    client_secret: api_secret,
    response_type: "code",
    grant_type: "authorization_code",
    redirect_uri:
      "https://claytonhart.github.io/playlist-converter/auth/napster",
    code: passedCode
  };

  const {
    client_id,
    client_secret,
    response_type,
    grant_type,
    redirect_uri,
    code
  } = body;

  let response = await axios({
    method: "post",
    url: url,
    data: {
      client_id,
      client_secret,
      response_type,
      grant_type,
      redirect_uri,
      code
    }
  });
  let { access_token } = response.data;
  return access_token;
}
