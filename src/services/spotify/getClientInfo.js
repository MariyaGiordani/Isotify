import { generateRandomString } from './generateRandomString';
export function getClientInfo() {
    let stateKey = "spotify_auth_state"
    let client_id = process.env.REACT_APP_API_KEY; // Your client id
    let redirect_uri = process.env.REACT_APP_API_URI; // Your redirect uri
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