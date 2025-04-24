import { TbScan } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function CameraButton() {
    const navigate = useNavigate();

    const handleCameraClick = () => {
        navigate('/scan');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
        }}>
            <div 
                onClick={handleCameraClick}
                style={{
                    left: "50%",
                    width: "68px",
                    height: "65px",
                    bottom: "30px",
                    opacity: "0.75",
                    display: "flex",
                    cursor: "pointer",
                    position: "fixed",
                    alignItems: "center",
                    borderRadius: "100%",
                    justifyContent: "center",
                    backgroundColor: "#66955A",
                    transform: "translateX(-50%)",
                }}
            >
                <TbScan style={{ color: "#FFF", fontSize: "36px" }} />
            </div>
        </div>
    );
}

export default CameraButton;