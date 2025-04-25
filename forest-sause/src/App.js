import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import AdminPage from './pages/AdminPage';
import UserListPage from './pages/UserListPage';
import PostManagementPage from './pages/PostManagementPage';
import ChatPage from './pages/ChatPage';
import CameraPage from './components/scan/CameraPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<UserListPage />} />
        <Route path="/admin/posts" element={<PostManagementPage />} />
        <Route path="/scan-chat" element={<ChatPage />} />
        <Route path="/scan" element={<CameraPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;