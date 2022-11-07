import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
