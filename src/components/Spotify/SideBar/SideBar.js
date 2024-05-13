import "./SideBar.css";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { Logo } from "../../../images/img";
import PlayList from "../PlayList/PlayList";




const SideBar=()=>{
    return(
        <div className="sidebar">
            <div className="top_links">
                <div className="logo">
                    <img 
                        src={Logo}
                        alt="spotify"
                    />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            <PlayList />
        </div>
    )
}

export default SideBar;