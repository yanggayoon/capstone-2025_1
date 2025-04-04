import styles from '../../styles/menu/TabBar.module.css';
import { HiOutlineHome } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TabBar() {
    const [activeTab, setActiveTab] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/home') {
            setActiveTab('home');
        }
        else if (location.pathname === '/chat') {
            setActiveTab('chat');
        }
        else if (location.pathname === '/post') {
            setActiveTab('write');
        }
        else {
            setActiveTab('user');
        }
    }, [location]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        switch(tabName) {
            case 'home':
                navigate('/home');
                break;
            case 'chat':
                navigate('/chat');
                break;
            case 'write':
                navigate('/post');
                break;
            case 'user':
                navigate('/mypage');
                break;
            default:
                break;
        }
    };

    return(
        <>
            <div className={styles['menu-box']}>
                <HiOutlineHome 
                    className={`${styles['icon']} ${activeTab === 'home' ? styles['active'] : ''}`} 
                    onClick={() => handleTabClick('home')}
                />
                <IoChatbubbleEllipsesOutline 
                    className={`${styles['icon']} ${activeTab === 'chat' ? styles['active'] : ''}`} 
                    onClick={() => handleTabClick('chat')}
                />
                <HiOutlinePencilAlt 
                    className={`${styles['icon']} ${activeTab === 'write' ? styles['active'] : ''}`} 
                    onClick={() => handleTabClick('write')}
                />
                <FiUser 
                    className={`${styles['icon']} ${activeTab === 'user' ? styles['active'] : ''}`} 
                    onClick={() => handleTabClick('user')}
                />
            </div>
        </>
    )
}

export default TabBar;