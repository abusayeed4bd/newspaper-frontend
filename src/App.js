

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

        <Route path="/dashboard" element={<Dashboard></Dashboard>}>

          <Route index path="" element={<AddNews></AddNews>} />
          <Route path="manageuser" element={<ManageUsers></ManageUsers>} />
        </Route>

      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
