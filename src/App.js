import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './Login'
import Task from './Task';
import RequireAuth from './PrivateRoute';

function App() {
 
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="/" element={<RequireAuth><Task></Task></RequireAuth>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
