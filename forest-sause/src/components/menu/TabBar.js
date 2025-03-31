import '../../styles/menu/TabBar.module.css';
import { HiOutlineHome } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

function TabBar() {
    return(
        <>
            <div className="menu-box">
                <HiOutlineHome className="icon" />
                <IoCameraOutline className="icon" />
                <HiOutlinePencilAlt className="icon" />
                <FiUser className="icon" />
            </div>
        </>
    )
}

export default TabBar;