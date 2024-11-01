import axios from 'axios';


const BASE_URL = 'http://localhost:5000/auth'; // URL ของ backend ที่ถูกต้อง

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Signup failed');
  }
};

// ฟังก์ชันเข้าสู่ระบบ
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

// ฟังก์ชันดึงข้อมูลผู้ใช้
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

// ฟังก์ชันแก้ไขข้อมูลผู้ใช้
export const updateUserProfile = async (name, email) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.put(`${BASE_URL}/update`, { name, email }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } catch (error) {
    throw new Error('Failed to update profile');
  }
};


// ฟังก์ชันลบข้อมูลผู้ใช้
export const deleteUserProfile = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.delete(`${BASE_URL}/delete`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to delete profile');
  }
};
