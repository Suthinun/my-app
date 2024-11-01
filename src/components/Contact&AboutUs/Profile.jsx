import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import QuickLink from './Quicklink';

const EditProfile = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [newPassword, setNewPassword] = useState(''); // สร้าง state สำหรับรหัสผ่านใหม่
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // อ่านข้อมูลผู้ใช้เมื่อโหลดหน้า
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://localhost:5000/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // อัปเดตข้อมูลผู้ใช้
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.put('http://localhost:5000/auth/update', { ...user, newPassword }, { // ส่ง newPassword ไปด้วย
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setSuccessMessage('Profile updated successfully');
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  // ลบข้อมูลผู้ใช้
  const handleDelete = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete('http://localhost:5000/auth/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage('Profile deleted successfully');
      setUser({ name: '', email: '' });
    } catch (error) {
      setError('Failed to delete profile');
    }
  };

  // อัปเดตข้อมูลใน state เมื่อผู้ใช้กรอกข้อมูลใหม่
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full mt-10">
          <h1 className="text-3xl font-semibold text-center mb-6">Edit Profile</h1>
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
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
                onChange={(e) => setNewPassword(e.target.value)} // กำหนดค่ารหัสผ่านใหม่
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save
            </button>
          </form>
          <button
            onClick={handleDelete}
            className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300 mt-4"
          >
            Delete Account
          </button>
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default EditProfile;
