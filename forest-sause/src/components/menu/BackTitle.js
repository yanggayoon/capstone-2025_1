import { FaAngleLeft } from "react-icons/fa6";

function BackTitle( props ) {
    return (
        <div style={{
            color: "#5B5B5B",
            padding: "41px 0 44px 0",
        }}>
            <FaAngleLeft style={{
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "32px",
                position: "absolute",
            }}/>

            <p style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
            }}>
                { props.title }
            </p>
        </div>
    )
}

export default BackTitle;