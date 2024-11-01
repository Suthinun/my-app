import React, { useState } from "react";
import { Link } from "react-router-dom"; // ใช้ Link จาก react-router-dom
import Navbar from "./Navbar";
import QuickLink from "./Quicklink";
import weighttraining from "../Assets/weighttraining.jpg"; // แก้ไขตามพาธที่ถูกต้องของรูป
import cardio from "../Assets/cardio.jpg"; // แก้ไขตามพาธที่ถูกต้องของรูป
import streching from "../Assets/streching.jpg"; // แก้ไขตามพาธที่ถูกต้องของรูป

const exercises = [
  {
    name: "Weight Training",
    image: weighttraining,
    description: "ยกน้ำหนักสร้างกล้ามเนื้อ",
    link: "/Weight",
  },
  {
    name: "Cardio",
    image: cardio,
    description: "คาร์ดิโอเพื่อระบบการหายใจ",
    link: "/Cardio",
  },
  {
    name: "Stretching",
    image: streching,
    description: "ยืดกล้ามเนื้อเพื่อป้องกันการบาดเจ็บ",
    link: "/Streching",
  },
];

const Ex = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // ทำการกรองข้อมูลจากค่าการค้นหา
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8 flex flex-col items-center">
        {/* Search bar */}
        <input
          type="text"
          placeholder="ค้นหา..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded mb-8"
        />
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800 mb-3">
            ท่าออกกำลังกาย
          </h2>
          <div className="w-24 h-[3px] bg-black mx-auto mb-8"></div>
          <div className="flex flex-col justify-center gap-8 w-full"> {/* แก้ไขตรงนี้ */}
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise) => (
                <Link
                  to={exercise.link}
                  className="flex flex-col items-center p-6 border rounded-lg shadow-md w-full max-w-2xl"
                  key={exercise.name}
                >
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-64 object-cover mb-4 rounded-lg" // ปรับขนาดความกว้างและสูงให้เต็มพื้นที่
                  />
                  <h3 className="text-3xl font-medium">{exercise.name}</h3> {/* เพิ่มขนาดตัวอักษร */}
                  <p className="text-gray-600 mt-2">{exercise.description}</p> {/* เพิ่มช่องว่างบน */}
                </Link>
              ))
            ) : (
              <p className="text-gray-600">ไม่พบผลลัพธ์การค้นหา</p>
            )}
          </div>
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default Ex;
