import styles from '../../styles/mypage/UserInfo.module.css'
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

function UserInfo() {
    return(
        <div style={{
            rowGap: "24px",
            color: "5B5B5B",
            display: "flex",
            margin: "0 32px",
            flexDirection: "column",
        }}>
            <p className={styles['title']}>내 정보</p>

            <div className={styles['info-container']}>
                <BsPerson size="32" />
                <div className={styles['info-box']}>
                    <p>사용자 이름</p>
                    <p className={styles['user-name']}></p>
                </div>
            </div>

            <div className={styles['info-container']}>
                <HiOutlineMail size="32" />
                <div className={styles['info-box']}>
                    <p>사용자 이메일</p>
                    <p className={styles['user-email']}></p>
                </div>
            </div>

            <div className={styles['logout']}>
                <p>로그아웃</p>
                <FiLogOut />
            </div>
        </div>
    )
}

export default UserInfo;