import "./PlayList.css";
import React,{useEffect} from "react";
import {useStateProvider} from "../../../utils/StateProvider"
import axios from "axios";
import { myPlayListSong, reducerCases } from "../../../utils/constant";


const PlayList=()=>{
    const[{token, playLists},dispatch]=useStateProvider();

    const handlePlayListID=(id)=>{
        console.log(id);
        dispatch({ type: reducerCases.SET_PLAYLISTID, id });
    }

    const getPlayListdata=async()=>{
       const response= await axios.get(
        myPlayListSong
        ,{
            headers:{
                Authorization:"Bearer "+token,
                "Content-Type":"application/json" 
            },
        }
        );
        //console.log(response);
        const {items} =response.data;
        const playListData=items.map(({name,id})=>{
            return {name,id}
        });
        dispatch({type:reducerCases.SET_PLAYLISTS, playListData})
    }

    useEffect(()=>{
        getPlayListdata();

    },[token, dispatch])

//console.log(playLists);


    return(
        <div className="PlayList">
            <ul>
            {playLists.map(({name,id})=>{
                return <li key={id} onClick={() => handlePlayListID(id)}>{name}</li>
            })}
           
            </ul>
         
        </div>
    )
}

export default PlayList;