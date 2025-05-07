import logo from '../../images/logo.png';
import styles from '../../styles/login/Logo.module.css';

function Logo() {
    return (
        <>
            <div className={styles['logo-container']}>
                <img src={logo} className={styles['logo']} alt="logo" />
                <p className={styles['logo-title']} >AI를 기반으로 하는 재활용 스캐너 서비스</p>
            </div>
        </>
    )
}

export default Logo;