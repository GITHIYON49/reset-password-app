import { useEffect } from "react";
import { Navbar } from "./components";
import { Register, Login, ForgotPassword, ResetPassword, Home } from "./pages";
import { Routes, Route } from "react-router";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

function App() {
  axios.defaults.baseURL = process.env.BACKEND_URL || "http://localhost:5000";
  axios.defaults.withCredentials = true;

  const navigation = useNavigate();
  useEffect(() => {
    const checkAuthAndLinks = async () => {
      const currentPath = window.location.pathname;

      if (currentPath.includes("resetPassword")) {
        return;
      } else {
        navigation("register");
      }
    };

    checkAuthAndLinks();
  }, []);

  return (
    <>
      <Navbar />

      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:id/:token" element={<ResetPassword />} />
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
