import { generateRandomString } from './generateRandomString';
export function buttonEvent() {
    console.log("pqp")
    let stateKey = "spotify_auth_state"
    let client_id = "b0348f3e529b4f04a92f0ae70a598c25"; // Your client id
    let redirect_uri = "http://localhost:3000/albums/"; // Your redirect uri
    let state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
    let scope = "user-read-private user-read-email";
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);
    window.location = url;
}