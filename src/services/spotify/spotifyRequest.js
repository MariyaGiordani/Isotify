import { getHashParams } from "./getHashParams";

export function spotifyRequest() {
    let stateKey = "spotify_auth_state";
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    let params = getHashParams();
    let access_token = params.access_token,
        state = params.state,
        storedState = localStorage.getItem(stateKey);
    if (access_token && (state == null || state !== storedState)) {
        alert("There was an error during the authentication");
    } else {
        localStorage.removeItem(stateKey);
        if (access_token) {
            let mocks = [
                {
                    name: "Amy",
                    year: "2018"
                }
            ]

            localStorage.setItem("requestSpotify", JSON.stringify(mocks))
            let objectResponse = localStorage.getItem("requestSpotify")
            let objectRequest = JSON.parse(objectResponse)
            console.log(objectRequest);
        } else {
            alert("Login não efetuado");
        }
    };
}