import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';


export default function AppRouter() {


  return (
    <div className="h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}