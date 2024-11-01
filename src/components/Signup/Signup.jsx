import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User_icon from "../Assets/person.png"; // ปรับเส้นทางให้ถูกต้องตามที่คุณตั้งไว้
import email_icon from "../Assets/email.png"; // ปรับเส้นทางให้ถูกต้องตามที่คุณตั้งไว้
import password_icon from "../Assets/password.png"; // ปรับเส้นทางให้ถูกต้องตามที่คุณตั้งไว้
import { signup } from "../api"; // ตรวจสอบให้แน่ใจว่า path ถูกต้อง

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for signup

  const handleLoginClick = () => {
    navigate("/Login"); // Redirect to login page
  };

  const handleSignup = async () => { // ตรวจจับข้อมูลที่ไม่ได้กรอก
    if (!name || !email || !password) {
      setErrorMessage("Please fill out all fields."); // ตรวจสอบให้แน่ใจว่ากรอกข้อมูลครบถ้วน
      return;
    }

    setIsLoading(true); // Start loading
    try {
      console.log("Signup Data:", { name, email, password });

      // Call signup API
      const data = await signup(name, email, password); // เรียกฟังก์ชัน signup จาก api.js
      console.log("API Response:", data);

      if (data.success) {
        alert("Signup successful!"); // แจ้งความสำเร็จในการสมัคร
        navigate("/Login"); // Redirect to login page after successful signup
      } else {
        console.log("Signup failed:", data.message);
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage("An error occurred during signup. Please try again."); // แสดงข้อความข้อผิดพลาด
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 text-white text-[60px] font-bold bg-black min-h-screen">
      <div className="text-center">
        <div className="font-paytone text-white">WELCOME TO</div>
        <div className="font-paytone text-white">FITNESS DUDE</div>
        <div className="w-[410px] h-1.5 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col mt-[50px] w-[600px] bg-white py-8 px-4">
        <div className="flex flex-col items-center gap-2">
          <div className="font-paytone text-black text-[48px]">Sign Up</div>
          <div className="w-24 h-1.5 bg-black rounded-lg"></div>
        </div>
        <div className="flex flex-col gap-6 mt-14">
          {/* Name Input */}
          <div className="flex items-center mx-auto w-[480px] h-20 bg-gray-200 rounded-md">
            <img src={User_icon} alt="User Icon" className="mx-7" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[50px] w-full bg-transparent border-none outline-none text-gray-500 text-lg"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center mx-auto w-[480px] h-20 bg-gray-200 rounded-md">
            <img src={email_icon} alt="Email Icon" className="mx-7" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] w-full bg-transparent border-none outline-none text-gray-500 text-lg"
            />
          </div>

          {/* Password Input */}
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

          {/* Signup and Login Buttons */}
          <div className="flex gap-8 mx-auto mt-16">
            <button
              className={`flex justify-center items-center w-[220px] h-[59px] text-white bg-black rounded-full text-lg font-bold cursor-pointer ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleSignup}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>

            <button
              className="flex justify-center items-center w-[220px] h-[59px] text-gray-500 bg-gray-200 rounded-full text-lg font-bold cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>

          {/* Display error message */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
