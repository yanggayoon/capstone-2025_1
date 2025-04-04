import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";

function PostManagementPage() {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <div style={{
            color: "#5B5B5B",
            padding: "41px 0 44px 0",
        }}>
            <FaAngleLeft style={{
                fontSize: "20px",
                marginLeft: "32px",
                position: "absolute",
                cursor: "pointer"
            }}
            onClick={handleBackButtonClick} />

            <p style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
            }}>사용자 게시물 관리</p>
        </div>
    );
}

export default PostManagementPage; 