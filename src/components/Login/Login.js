import React from "react";
import {Spotify_Logo} from "../../images/img";
import './Login.css'
import { api_uri, client_id, redirect_uri, scope } from "../../utils/constant";
const Login=()=>{

    const handleClick=()=>{
        window.location.href=`${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(" ")}
        &response_type=token&show_dialog=true`;
    }


    return(
        <div className="container">
            <img 
                src={Spotify_Logo} 
                alt="Spotify-logo"
            />


            <button onClick={handleClick}>Connect to Spotify</button>

            
        </div>
    )
}

export default Login;