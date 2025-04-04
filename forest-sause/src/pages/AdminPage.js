import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";

function ManagePage() {
    const menuItems = [
        { title: "사용자 조회", path: "/admin/users" },
        { title: "사용자 게시물 관리", path: "/admin/posts" }
    ];
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div style={{
            color: "#5B5B5B",
            padding: "0 32px",
        }}>
            <p style={{
                display: "flex",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "41px 0 44px 0",
                justifyContent: "center",
            }}>관리자 모드</p>
            
            {menuItems.map((item, index) => (
                <p 
                    key={index} 
                    onClick={() => handleClick(item.path)}
                    style={{
                        margin: "0",
                        display: "flex",
                        cursor: "pointer",
                        fontWeight: "bold",
                        alignItems: "center",
                        marginBottom: "36px",
                        justifyContent: "space-between",
                    }}
                >
                    {item.title}
                    <FaChevronRight />
                </p>
            ))}
        </div>
    )
}

export default ManagePage;