import { reducerCases } from "./constant";

export const initialState={
    token:null,
    playLists:[],
    userInfo:null,
    selectedPlayListID:'0MphKdnj4zThUYBpzi6s3r',
    selectedPlaylist:null,
    currentlyPlaying:null,
    playerState: false,
};

const reducer=(state, action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN: {
            return{
                ...state,
                token:action.token
            }
        }
        case reducerCases.SET_PLAYLISTS: {
            return{
                ...state,
                playLists:action.playListData
            }
        }

        case reducerCases.SET_USERINFO:{
            return{
                ...state,
                userInfo:action.userInfo
            }
        }

        case reducerCases.SET_PLAYLIST: {
            return{
                ...state,
                selectedPlaylist:action.selectedPlaylist
            }
        }
        case reducerCases.SET_PLAYING: {
            return{
                ...state,
                currentlyPlaying:action.currentPlaying
            }
        }

        case reducerCases.SET_PLAYER_STATE:
            return {
              ...state,
              playerState: action.playerState,
            };
        
        case reducerCases.SET_PLAYLISTID: {
            return{
                ...state,
                selectedPlayListID:action.id
            }
        }
        
        default:
            return state;
    }
};

export default reducer;