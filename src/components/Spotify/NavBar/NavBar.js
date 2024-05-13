
import { useStateProvider } from "../../../utils/StateProvider";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavBar=({navBackground})=>{
    const [{userInfo} ]=useStateProvider();
    // console.log(userInfo)
    return(
        <div className="navbar" style={{backgroundColor: navBackground ? 'rgba(0,0,0,0.7)' : ''}}>
            <div className="search__bar">
                <FaSearch />
                <input type="text" placeholder="Artists, songs, or podcasts" />
            </div>
        <div className="avatar">
            <a href={userInfo?.userUrl}>
                <CgProfile />
                <span>{userInfo?.userName}</span>
            </a>
        </div>
        </div>
    )
}

export default NavBar;