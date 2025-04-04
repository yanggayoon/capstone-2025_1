import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";

function UserListPage() {
    return (
        <div style={{
            color: "#5B5B5B",
            padding: "41px 0 44px 0",
        }}>
            <FaAngleLeft style={{
                fontSize: "24px",
                marginLeft: "32px",
                position: "absolute",
            }} />

            <p style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
            }}>사용자 조회</p>
        </div>
    );
}

export default UserListPage; 