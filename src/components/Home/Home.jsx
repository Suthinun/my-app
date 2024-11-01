import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import weight from '../Assets/weight.jpg';
import tdee from '../Assets/saiwat.jpg';
import streching from '../Assets/streching.jpg';
import weighttraining from '../Assets/weighttraining.jpg';
import fitnessBg from '../Assets/fitness.jpg';
import cardio from '../Assets/cardio.jpg';
import QuickLink from './Quicklink';

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
           <div
                className="flex flex-col items-start text-left p-5 h-[50vh] bg-cover bg-center bg-no-repeat relative" // เปลี่ยน items-center เป็น items-start และ text-center เป็น text-left
                style={{ backgroundImage: `url(${fitnessBg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <h1 className="text-white text-4xl md:text-6xl font-bold z-10 relative mb-5">
                    ไม่มีขีดจำกัด มีเพียงความเป็นไปได้เท่านั้น
                </h1>
                <Link to="/BMI">
                    <button className="bg-white text-black border-2 border-black py-2 px-4 text-lg font-semibold rounded-md z-10 relative hover:bg-black hover:text-white transition-all duration-300">
                        เริ่มต้นการเดินทาง
                    </button>
                </Link>
            </div>

            {/* Body Measurement Section */}
            <div className="flex flex-col items-center mt-10 mb-10 font-kanit">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-3">คำนวณร่างกาย</h2>
                    <div className="w-24 h-[3px] bg-black mx-auto mb-8"></div>
                    <div className="flex justify-center flex-wrap gap-5">
                        <Link to="/BMI" className="flex flex-col items-center">
                            <img src={weight} alt="weight" className="w-[250px] mb-4 rounded-lg shadow-md" />
                            <h3 className="text-2xl font-medium">BMI</h3>
                            <p className="text-gray-600">ประเมินสภาวะร่างกาย</p>
                        </Link>
                        <Link to="/BMR" className="flex flex-col items-center">
                            <img src={tdee} alt="tdee" className="w-[250px] mb-4 rounded-lg shadow-md" />
                            <h3 className="text-2xl font-medium">BMR/TDEE</h3>
                            <p className="text-gray-600">อัตราการเผาผลาญพื้นฐานต่อวัน</p>
                        </Link>
                    </div>
                </div>

                {/* Exercise Section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-3">ท่าออกกำลังกาย</h2>
                    <div className="w-24 h-[3px] bg-black mx-auto mb-8"></div>
                    <div className="flex justify-center flex-wrap gap-5">
                        <Link to="/Weight" className="flex flex-col items-center">
                            <img src={weighttraining} alt="weighttraining" className="w-[250px] mb-4 rounded-lg shadow-md" />
                            <h3 className="text-2xl font-medium">Weight Training</h3>
                            <p className="text-gray-600">ยกน้ำหนักสร้างกล้ามเนื้อ</p>
                        </Link>
                        <Link to="/Cardio" className="flex flex-col items-center">
                            <img src={cardio} alt="cardio" className="w-[250px] mb-4 rounded-lg shadow-md" />
                            <h3 className="text-2xl font-medium">Cardio</h3>
                            <p className="text-gray-600">คาร์ดิโอเพื่อระบบการหายใจ</p>
                        </Link>
                        <Link to="/Streching" className="flex flex-col items-center">
                            <img src={streching} alt="streching" className="w-[250px] mb-4 rounded-lg shadow-md" />
                            <h3 className="text-2xl font-medium">Stretching</h3>
                            <p className="text-gray-600">ยืดกล้ามเนื้อเพื่อป้องกันการบาดเจ็บ</p>
                        </Link>
                    </div>
                </div>
            </div>

            <QuickLink />
        </div>
    );
}

export default Home;
