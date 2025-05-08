import { LuScanLine } from "react-icons/lu";

function InputBox() {
    return (
        <div style={{
            bottom: "32px",
            display: "flex",
            columnGap: "4px",
            marginLeft: "32px",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <LuScanLine style={{
                fontSize: "24px",
                color: "#66955A",
            }} />
            <input style={{
                width: "220px",
                height: "36px",
                border: "none",
                paddingLeft: "16px",
                borderRadius: "30px",
                border: "2px solid #EBEBEB",
            }}
            placeholder="메시지를 입력해주세요" />
            <div style={{
                width: "58px",
                color: "#FFF",
                height: "36px",
                display: "flex",
                fontSize: "14px",
                cursor: "pointer",
                alignItems: "center",
                borderRadius: "30px",
                justifyContent: "center",
                backgroundColor: "#66955A",
            }}>
                전송
            </div>
        </div>
    )
}

export default InputBox;