import styles from '../../styles/menu/TabBar.module.css';
import { HiOutlineHome } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

function TabBar() {
    return(
        <>
            <div className={styles['menu-box']}>
                <HiOutlineHome className={styles['icon']} />
                <IoChatbubbleEllipsesOutline className={styles['icon']} />
                <HiOutlinePencilAlt className={styles['icon']} />
                <FiUser className={styles['icon']} />
            </div>
        </>
    )
}

export default TabBar;