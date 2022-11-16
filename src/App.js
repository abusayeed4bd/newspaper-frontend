

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Shared/Navbar';
import Login from './components/Pages/UserAccess/Login';
import Registration from './components/Pages/UserAccess/Registration';
import Footer from './components/Shared/Footer';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AddNews from './components/Pages/Dashboard/AddNews';
import ManageUsers from './components/Pages/Dashboard/ManageUsers';
import Post from './components/Pages/news/Post';
import NotFound from './components/Shared/NotFound';
import ScrollToTop from './components/Shared/ScrollToTop';
import RequireAuth from './components/Hooks/RequireAuth';
import Archive from './components/Pages/Archive/Archive';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/news/:id" element={<Post></Post>}></Route>

        {/* ===================================== */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />

        {/* ========================== */}

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

          <Route index path="" element={<RequireAuth><AddNews></AddNews></RequireAuth>} />
          <Route path="manageuser" element={<RequireAuth><ManageUsers></ManageUsers></RequireAuth>} />
        </Route>

        <Route path="/archive" element={<Archive />}></Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}

export default App;
