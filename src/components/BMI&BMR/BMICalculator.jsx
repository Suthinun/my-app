import React, { useState } from 'react';
import Navbar from './Navbar';
import QuickLink from './Quicklink';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen flex justify-center items-center font-kanit">
        <div className="max-w-lg w-full p-5 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">BMI</h1>
          <p className="text-center text-gray-700 mb-6">
            เป็นมาตรการที่ใช้ประเมินความสมส่วนและผลลัพธ์ที่ได้ ควรมีอายุ 20 ปีขึ้นไป สามารถทำได้เองที่บ้าน
            ใช้น้ำหนักตัวและส่วนสูงวัดค่าดัชนีมวลกาย โดยใช้เป็นเกณฑ์วัดความสมส่วนของร่างกาย
          </p>
          <form onSubmit={calculateBMI} className="flex flex-col gap-5">
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
            <button type="submit" className="p-3 bg-black text-white rounded-md mt-4 hover:bg-gray-800 transition-all">
              คำนวณ
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-xl">BMI</p>
            <h2 className="text-4xl font-bold">{bmi}</h2>
          </div>
          <div className="mt-8">
            <h2 className="text-xl mb-4">ผลลัพธ์ BMI</h2>
            <ul className="list-none">
              <li className="mb-4">
                <strong>อ้วนมาก = 30.0 ขึ้นไป</strong><br />
                เสี่ยงต่อโรคต่างๆ เช่น เบาหวาน ความดันโลหิตสูง และต้องปรึกษาแพทย์ทันที
              </li>
              <li className="mb-4">
                <strong>อ้วน = 25.0 - 29.9</strong><br />
                ควรลดน้ำหนักเพื่อป้องกันโรคต่างๆ ที่เกี่ยวกับโรคอ้วน
              </li>
              <li className="mb-4">
                <strong>น้ำหนักปกติ = 18.6 - 24.9</strong><br />
                อยู่ในเกณฑ์ดี ควรรักษาน้ำหนัก และสุขภาพอย่างต่อเนื่อง
              </li>
              <li className="mb-4">
                <strong>ผอมเกินไป = น้อยกว่า 18.5</strong><br />
                ควรเพิ่มน้ำหนักเพื่อสุขภาพที่ดีขึ้น
              </li>
            </ul>
          </div>
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default BMI;
