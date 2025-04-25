import BackTitle from "../components/menu/BackTitle";
import CameraButton from "../components/menu/CameraButton";
import PageTItle from "../components/menu/PageTitle";
import TabBar from "../components/menu/TabBar";

function MenuPage() {  
    return (
        <>
            <BackTitle title="제목" />
            <CameraButton />
            <PageTItle title="제목" />
            <TabBar />
        </>
    )
}

export default MenuPage;