export const client_id = "cb4d4d76c7524a3489d413ab37080cc1";
export const client_secret="b0192c7d50f046f794b0e9b676f124ec";
export const redirect_uri = "http://localhost:3000/";
export const api_uri = "https://accounts.spotify.com/authorize";
export const scope = [
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
];
export const reducerCases={
    SET_TOKEN:"SET_TOKEN",
    SET_PLAYLISTS:"SET_PLAYLISTS",
    SET_USERINFO:"SET_USERINFO",
    SET_PLAYLIST:"SET_PLAYLIST",
    SET_PLAYING:"SET_PLAYING",
    SET_PLAYLISTID:"SET_PLAYLISTID",
    SET_PLAYER_STATE:"SET_PLAYER_STATE",
}
//"https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n "

export const myPlayListSong="https://api.spotify.com/v1/me/playlists";
export const myUserProfile="https://api.spotify.com/v1/me";
export const PlayListID="https://api.spotify.com/v1/playlists";
export const currentPlaying="https://api.spotify.com/v1/me/player/currently-playing"