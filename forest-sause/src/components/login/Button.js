import styles from '../../styles/login/LoginButton.module.css'
import kakao from '../../images/kakao.png';

function Button() {
    return (
        <>
            <div className={styles['login-Button']}>
                <img src={kakao} alt="kakao" className={styles['kakao']}/>
                <p>카카오 로그인</p>
            </div>

        </>
    )
}

export default Button;