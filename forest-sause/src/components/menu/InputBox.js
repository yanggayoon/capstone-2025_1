import { LuScanLine } from "react-icons/lu";
import { useState } from "react";

function InputBox({ onSendMessage }) {
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsActive(e.target.value.length > 0);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onSendMessage(inputValue.trim());
            setInputValue("");
            setIsActive(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div style={{
            bottom: "32px",
            display: "flex",
            columnGap: "8px",
            marginLeft: "28px",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <LuScanLine style={{
                fontSize: "24px",
                color: "#66955A",
            }} />
            <input 
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                    width: "220px",
                    height: "36px",
                    border: "none",
                    paddingLeft: "16px",
                    borderRadius: "30px",
                    border: "2px solid #EBEBEB",
                }}
                placeholder="메시지를 입력해주세요" 
            />
            <div 
                onClick={handleSubmit}
                style={{
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