import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import AdminPage from './pages/AdminPage';
import UserListPage from './pages/UserListPage';
import PostManagementPage from './pages/PostManagementPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<UserListPage />} />
        <Route path="/admin/posts" element={<PostManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;