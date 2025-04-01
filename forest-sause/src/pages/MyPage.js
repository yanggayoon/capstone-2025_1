import TabBar from '../components/menu/TabBar';
import PageTitle from '../components/menu/PageTitle';
import UserInfo from '../components/mypage/UserInfo';

function MyPage() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <PageTitle title={"My Page"} />
                <UserInfo />
            </div>
            <TabBar />
        </>
    )
}

export default MyPage;