import TabBar from '../components/menu/TabBar';
import PageTitle from '../components/menu/PageTitle';
import UserInfo from '../components/mypage/UserInfo';
import ServiceInfo from '../components/mypage/ServiceInfo';

function MyPage() {
    return (
        <>
            <div style={{
                display: "flex",
                rowGap: "36px",
                flexDirection: "column",
            }}>
                <PageTitle title={"My Page"} />
                <UserInfo />
                <ServiceInfo />
            </div>
            <TabBar />
        </>
    )
}

export default MyPage;