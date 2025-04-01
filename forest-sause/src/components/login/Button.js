import styles from '../../styles/login/LoginButton.module.css'
import google from '../../images/google.png';

function Button() {
    return (
        <>
            <div className={styles['login-Button']}>
                <img src={google} alt="google" className={styles['google']}/>
                <p>구글 로그인</p>
            </div>

        </>
    )
}

export default Button;