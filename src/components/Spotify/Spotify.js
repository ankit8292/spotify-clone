import React, { useEffect, useRef, useState, } from "react";
import "./Spotify.css";
import SideBar from "./SideBar/SideBar";
import Body from "./Body/Body";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { myUserProfile, reducerCases } from "../../utils/constant";

const Spotify=()=>{

    const [{token} , dispatch]=useStateProvider();
    const bodyRef=useRef();
    const [navBackground, setNavBackground]=useState(false);
    const [headerBackground, setHeaderBackground]=useState(false);


    const bodyScrolled=()=>{
        bodyRef.current.scrollTop>=30 ? setNavBackground(true) : setNavBackground(false);
        bodyRef.current.scrollTop>=268 ? setHeaderBackground(true) : setHeaderBackground(false);
    }



    const getuserInfo =async()=>{
        const {data}=await axios.get(myUserProfile,
            {
                headers:{
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json" 
                },
            }
        )
        //console.log(data);
        const userInfo={
            userId:data.id,
            userName:data.display_name
        }
        //console.log(userInfo);
        dispatch({type:reducerCases.SET_USERINFO, userInfo})
    }

    useEffect(()=>{
        getuserInfo();
    },[token, dispatch])

    return(
        <div className="spotify">
           <div className="spotify_body">
                <SideBar />
                <div className="boddy" ref={bodyRef} onScroll={bodyScrolled}>
                    <NavBar navBackground={navBackground} />
                    <div className="body_contents">
                        <Body headerBackground={headerBackground} />
                    </div>
                </div>
           </div>
           <div className="spotify_footer">
                <Footer />
           </div>
        </div>
    )
}

export default Spotify;