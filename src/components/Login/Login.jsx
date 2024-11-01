import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import email_icon from "../Assets/email.png"; // ปรับเส้นทางให้ถูกต้องตามที่คุณตั้งไว้
import password_icon from "../Assets/password.png"; // ปรับเส้นทางให้ถูกต้องตามที่คุณตั้งไว้
import { login } from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  const handleLostPasswordClick = () => {
    navigate("/lost-password"); // เปลี่ยนให้ไปหน้า LostPassword
  };

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      console.log("Response Data:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 text-white text-[60px] font-bold bg-black min-h-screen">
      <div className="text-center">
        <div className="font-paytone text-white">WELCOME TO</div>
        <div className="font-paytone text-white">FITNESS DUDE</div>
        <div className="w-[410px] h-[6px] bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col mt-[200px] w-[600px] bg-white py-8 px-4">
        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="font-paytone text-black text-[48px]">Log In</div>
          <div className="w-[61px] h-[6px] bg-black rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-6 mt-14">
          <div className="flex items-center mx-auto w-[480px] h-20 bg-gray-200 rounded-md">
            <img src={email_icon} alt="Email Icon" className="mx-7" />
            <input
              type="email"
              placeholder="EmailID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] w-full bg-transparent border-none outline-none text-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center mx-auto w-[480px] h-20 bg-gray-200 rounded-md">
            <img src={password_icon} alt="Password Icon" className="mx-7" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[50px] w-full bg-transparent border-none outline-none text-gray-500 text-lg"
            />
          </div>
          <div className="pl-16 mt-6 text-gray-500 text-lg">
            Lost Password?{" "}
            <span
              className="text-black cursor-pointer"
              onClick={handleLostPasswordClick}
            >
              Click here
            </span>
          </div>
          <div className="flex gap-8 mx-auto mt-16">
            <div
              className="flex justify-center items-center w-[220px] h-[59px] text-gray-500 bg-gray-200 rounded-full text-lg font-bold cursor-pointer"
              onClick={handleSignUpClick}
            >
              Sign Up
            </div>
            <div
              className="flex justify-center items-center w-[220px] h-[59px] text-white bg-black rounded-full text-lg font-bold cursor-pointer"
              onClick={handleLogin}
            >
              Log In
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
