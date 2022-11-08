import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Shared/Navbar';
import Login from './components/Pages/UserAccess/Login';
import Registration from './components/Pages/UserAccess/Registration';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />

      </Routes>
    </div>
  );
}

export default App;
