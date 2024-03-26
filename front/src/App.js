import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import {Routes, Route, Navigate} from 'react-router-dom'
import Index from './pages/Index'
import { useAuthContext } from "./Context/authContext";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin";


function App() {
  const {authUser} = useAuthContext(); 
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
        <Route path="/admin" element={<Admin/>}/>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={authUser ? <Navigate to="/Chats"/> : <Login/>}/>
          <Route path="/signup" element={authUser ? <Navigate to="/login"/> : <Signup/>}/>
          <Route path="/Chats" element={authUser ? <Home/> : <Navigate to="/login"/>}/>
        </Routes>
        <Toaster/>
    </div>
    </>
  );
}

export default App;
