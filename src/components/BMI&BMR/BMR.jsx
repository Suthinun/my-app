import React, { useState } from 'react';
import Navbar from './Navbar';
import QuickLink from './Quicklink';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState(0);
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [tdee, setTDEE] = useState(0);

  const calculateBMR = (e) => {
    e.preventDefault();
    if (age && height && weight) {
      let bmrValue;
      if (gender === 'male') {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBMR(bmrValue.toFixed(2));
      calculateTDEE(bmrValue);
    }
  };

  const calculateTDEE = (bmrValue) => {
    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };
    const tdeeValue = (bmrValue * activityMultipliers[activityLevel]).toFixed(2);
    setTDEE(tdeeValue);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen flex justify-center items-center font-kanit">
        <div className="max-w-lg w-full p-5 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">BMR & TDEE Calculator</h1>
          <form onSubmit={calculateBMR} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-lg">อายุ (ปี)</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="weight" className="text-lg">น้ำหนักตัว (kg.)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="height" className="text-lg">ส่วนสูง (cm.)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">เพศ</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <label htmlFor="male" className="ml-2">ชาย</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <label htmlFor="female" className="ml-2">หญิง</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg">ระดับกิจกรรม</label>
              <select
                id="activity-level"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="p-3 border border-gray-300 rounded-md"
              >
                <option value="sedentary">นั่งทำงาน</option>
                <option value="lightlyActive">ออกกำลังกายเล็กน้อย</option>
                <option value="moderatelyActive">ออกกำลังกายปานกลาง</option>
                <option value="veryActive">ออกกำลังกายหนัก</option>
                <option value="extraActive">ออกกำลังกายหนักมาก</option>
              </select>
            </div>
            <button type="submit" className="p-3 bg-black text-white rounded-md mt-4 hover:bg-gray-800 transition-all">
              คำนวณ
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-xl">BMR</p>
            <h2 className="text-4xl font-bold">{bmr} kcal/day</h2>
          </div>
          <div className="mt-8">
            <h2 className="text-xl mb-4">ผลลัพธ์ BMR</h2>
            <ul className="list-none">
              <li className="mb-4">
                <strong>ต่ำกว่าปกติ:</strong><br />
                BMR ต่ำอาจเป็นสัญญาณของภาวะสุขภาพที่ต้องตรวจสอบเพิ่มเติม
              </li>
              <li className="mb-4">
                <strong>ปกติ:</strong><br />
                BMR ที่อยู่ในช่วงปกติ แสดงว่าร่างกายของคุณทำงานตามปกติ
              </li>
              <li className="mb-4">
                <strong>สูงกว่าปกติ:</strong><br />
                BMR สูงอาจบ่งบอกถึงการเผาผลาญที่สูงกว่าปกติ ซึ่งอาจมีสาเหตุมาจากปัจจัยต่าง ๆ
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl mb-4">การคำนวณ TDEE</h2>
            <p className="mb-4">การคำนวณ TDEE โดยใช้ BMR ที่คำนวณได้และปัจจัยระดับกิจกรรม:</p>
            <ul className="list-none">
              <li><strong>นั่งทำงาน:</strong> 1.2</li>
              <li><strong>ออกกำลังกายเล็กน้อย:</strong> 1.375</li>
              <li><strong>ออกกำลังกายปานกลาง:</strong> 1.55</li>
              <li><strong>ออกกำลังกายหนัก:</strong> 1.725</li>
              <li><strong>ออกกำลังกายหนักมาก:</strong> 1.9</li>
            </ul>
            <div className="text-center mt-6">
              <p className="text-xl">TDEE</p>
              <h2 className="text-4xl font-bold">{tdee} kcal/day</h2>
            </div>
          </div>
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default BMRCalculator;
