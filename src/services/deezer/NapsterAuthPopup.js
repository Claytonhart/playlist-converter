Searching 60 files for "/auth/deezer"

C:\Users\Clayton\Desktop\ReactPortfolio\TestToRedux\final-converter\final-converter-client\src\containers\Main\Main.js:
   20  				component={PlatformAuth}
   21  			/>
   22: 			<Route path="/auth/deezer" component={DeezerAuthPopup} />
   23  			<Route path="/auth" component={AuthPopup} />
   24  			<Route path="/converted" component={ConvertedPlaylist} />

C:\Users\Clayton\Desktop\ReactPortfolio\TestToRedux\final-converter\final-converter-client\src\services\deezer\deezerAuth.js:
    3  		authEndpoint: "https://connect.deezer.com/oauth/auth.php",
    4  		app_id: 283344,
    5: 		redirect_uri: `http://localhost:3000/auth/deezer`,
    6  		perms: "manage_library,offline_access"
    7  
    8  		// `https://connect.deezer.com/oauth/auth.php?
    9  		// app_id=283344&
   10: 		// redirect_uri=http://localhost:3000/auth/deezer&
   11  		// perms=basic_access,manage_library`
   12  	};

3 matches across 2 files


Searching 61 files for "deezerAuth"

C:\Users\Clayton\Desktop\ReactPortfolio\TestToRedux\final-converter\final-converter-client\src\containers\Main\Main.js:
    5  import Homepage from "../../components/Homepage/Homepage";
    6  import AuthPopup from "../AuthPopup/AuthPopup";
    7: import DeezerAuthPopup from "../../components/DeezerAuthPopup/DeezerAuthPopup";
    8  import ConvertPlaylistLanding from "../ConvertPlaylistLanding/ConvertPlaylistLanding";
    9  import PlatformAuth from "../PlatformAuth/PlatformAuth";
   ..
   20  				component={PlatformAuth}
   21  			/>
   22: 			<Route path="/auth/deezer" component={DeezerAuthPopup} />
   23  			<Route path="/auth" component={AuthPopup} />
   24  			<Route path="/converted" component={ConvertedPlaylist} />

C:\Users\Clayton\Desktop\ReactPortfolio\TestToRedux\final-converter\final-converter-client\src\containers\PlatformAuth\PlatformAuth.js:
   12  
   13  import { spotifyAuth } from "../../services/spotify/spotifyAuth";
   14: import { deezerAuth } from "../../services/deezer/deezerAuth";
   15  
   16  import InitialPlaylist from "../../components/InitialPlaylist/InitialPlaylist";
   ..
   81  			case "Deezer":
   82  				console.log("Authenticating Deezer Playlist");
   83: 				let deezerAuthObject = deezerAuth(platformName);
   84  				this.mountSpotifyPopupEventListener();
   85  				window.open(
   86: 					deezerAuthObject.urlString,
   87: 					deezerAuthObject.name,
   88: 					deezerAuthObject.specs
   89  				);
   90  				break;

C:\Users\Clayton\Desktop\ReactPortfolio\TestToRedux\final-converter\final-converter-client\src\services\deezer\deezerAuth.js:
    1: export function deezerAuth(initialPlaylist) {
    2  	const url = {
    3  		authEndpoint: "https://connect.deezer.com/oauth/auth.php",

12 matches across 3 files
