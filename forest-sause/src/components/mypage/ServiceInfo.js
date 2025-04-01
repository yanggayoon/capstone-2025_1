import styles from '../../styles/mypage/ServiceInfo.module.css'
import { FaChevronRight } from "react-icons/fa6";

function ServiceInfo() {
    const items = ["공지사항", "개인정보처리방침", "서비스 이용약관", "앱 정보"];

    return(
        <div style={{
            rowGap: "24px",
            color: "5B5B5B",
            display: "flex",
            margin: "0 32px",
            flexDirection: "column",
        }}>
            <p className={styles['title']}>서비스 정보</p>

            {items.map((item, index) => (
                <p key={index} className={styles['list']}>
                    {item}
                    <FaChevronRight />
                </p>
                
            ))}
        </div>
    )
}

export default ServiceInfo;