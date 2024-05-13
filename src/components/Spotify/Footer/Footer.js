
import CurrentTrack from "../../CurrentTrack/CurrentTrack";
import PlayerControl from "../../PlayerControl/PlayerControl";
import Volume from "../../Volume/Volume";
import "./Footer.css";


const Footer=()=>{
    return(
        <div className="footer">
            <CurrentTrack />
            <PlayerControl />
            <Volume />
        </div>
    )
}

export default Footer;