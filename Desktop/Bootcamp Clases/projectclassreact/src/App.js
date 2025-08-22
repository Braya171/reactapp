import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ForgotPage from  './pages/Forgotpage/Forgotpage';
import RegisterPage from './pages/RegisterPage/RegisterPage';



//IMPORT HOOKS
import HooksGral from "./playground/HooksGral"
import useStateHook from "./playground/useState"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/forgot" element={<ForgotPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/hook" element={<HooksGral />} />
        <Route path="/useState" element={<useStateHook />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;