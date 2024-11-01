import React from 'react';
import Navbar from './Navbar';
import Msc from '../Assets/Muscle.jpg';
import QuickLink from './Quicklink';

const Weight = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-5 flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl text-left">
                    {/* รูปภาพด้านบนหัวข้อ */}
                    <div className="mb-5">
                        <img
                            src={Msc}
                            alt="Muscle"
                            className="w-full max-w-xl h-auto mx-auto rounded-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-5 font-kanit">การยกน้ำหนัก</h1>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6 font-kanit">
                        การยกน้ำหนักเป็นวิธีที่มีประสิทธิภาพในการเสริมสร้างกล้ามเนื้อและเพิ่มความแข็งแรงให้กับร่างกาย
                        ไม่ว่าจะเป็นนักกีฬาหรือคนทั่วไป การฝึกยกน้ำหนักสามารถช่วยพัฒนาความแข็งแกร่งของกล้ามเนื้อทุกส่วน
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">ประโยชน์ของการยกน้ำหนัก</h2>
                    <ul className="list-disc ml-5 mb-6 text-lg leading-relaxed text-gray-800 font-kanit">
                        <li>เสริมสร้างกล้ามเนื้อและเพิ่มความแข็งแรง</li>
                        <li>ช่วยเผาผลาญพลังงานและลดไขมัน</li>
                        <li>เพิ่มความทนทานและการฟื้นฟูร่างกาย</li>
                        <li>เสริมสร้างความสมดุลและการทรงตัว</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">วิธีเริ่มต้น</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 font-kanit">
                        หากคุณยังไม่เคยยกน้ำหนักมาก่อน ควรเริ่มต้นจากน้ำหนักที่เบาและค่อยๆ เพิ่มความหนักเมื่อร่างกายแข็งแรงมากขึ้น
                        ควรฝึกท่าพื้นฐาน เช่น สควอช, เดดลิฟท์, และเบนช์เพรส โดยเน้นที่ความถูกต้องของท่าทาง
                    </p>
                </div>
            </div>
            <QuickLink />
        </div>
    );
}

export default Weight;
