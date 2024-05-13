import React, {useEffect} from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import "./CurrentTrack.css";
import { currentPlaying, reducerCases } from "../../utils/constant";

const CurrentTrack=()=>{
    const [{token, currentlyPlaying} , dispatch]=useStateProvider();
    const getCurrentTrack =async()=>{
        const response=await axios.get(currentPlaying,
            {
                headers:{
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json" 
                },
            }
        )
        console.log(response);
        if(response.data!==""){
            const {item} =response.data;
            const currentPlaying={
                id:item.id,
                name:item.name,
                artists:item.artists.map((artist)=>artist.name),
                image:item.album.images[2].url,
            }
            dispatch({type:reducerCases.SET_PLAYING, currentPlaying})
        }
        else {
            dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
          }
       
    }

    useEffect(()=>{
        getCurrentTrack();
    },[token, dispatch])
    return(
        <div>
            {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentlyPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
        </div>
    )
}

export default CurrentTrack;