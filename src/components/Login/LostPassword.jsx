import React, { useState } from 'react';
import axios from 'axios';

const LostPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState(''); // token ที่ได้รับจากลิงก์ในอีเมล
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // ขอ reset link สำหรับรีเซ็ตรหัสผ่าน
  const handleRequestReset = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/auth/lost-password', { email });
      if (response.status === 200) {
        setSuccessMessage('A reset link has been sent to your email');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to send reset link. Please try again.');
    }
  };

  // รีเซ็ตรหัสผ่านโดยใช้ token
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/auth/reset-password', { token, newPassword });
      if (response.status === 200) {
        setSuccessMessage('Password reset successfully');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Lost Password</h1>
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        
        {/* ฟอร์มขอรีเซ็ตรหัสผ่าน */}
        <form onSubmit={handleRequestReset} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Request Reset Link
          </button>
        </form>

         {/* Form for entering token and new password */}
         <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">Token</label>
            <input
              type="text"
              name="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default LostPassword;
