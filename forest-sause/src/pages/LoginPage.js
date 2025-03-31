import LogoTitle from '../components/login/Logo'
import LoginButton from '../components/login/Button'

function LoginPage() {
    return (
        <div style={{ 
            height: "100vh",
            rowGap: "121px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <LogoTitle />
            <LoginButton />
        </div>
    )
}

export default LoginPage;