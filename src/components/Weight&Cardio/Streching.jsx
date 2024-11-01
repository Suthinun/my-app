import React from 'react';
import Navbar from './Navbar';
import Strech2 from '../Assets/Streching2.jpg';
import QuickLink from './Quicklink';

const Streching = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-5 flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl text-left">
                    {/* รูปภาพด้านบนหัวข้อ */}
                    <div className="mb-5">
                        <img
                            src={Strech2}
                            alt="Muscle"
                            className="w-full max-w-xl h-auto mx-auto rounded-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-5 font-kanit">การยืดกล้ามเนื้อ</h1>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6 font-kanit">
                        การยืดกล้ามเนื้อ (Streching) เป็นการออกกำลังกายที่ช่วยเพิ่มความยืดหยุ่นของกล้ามเนื้อ
                        ช่วยลดความเสี่ยงต่อการบาดเจ็บ และช่วยฟื้นฟูร่างกายหลังการออกกำลังกายหนัก ๆ
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">ประโยชน์ของการยืดกล้ามเนื้อ</h2>
                    <ul className="list-disc ml-5 mb-6 text-lg leading-relaxed text-gray-800 font-kanit">
                        <li>เพิ่มความยืดหยุ่นของร่างกาย</li>
                        <li>ลดความเสี่ยงต่อการบาดเจ็บ</li>
                        <li>ช่วยฟื้นฟูร่างกายหลังการออกกำลังกาย</li>
                        <li>เพิ่มการไหลเวียนของเลือดไปยังกล้ามเนื้อ</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">วิธีการยืดกล้ามเนื้อที่ถูกต้อง</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 font-kanit">
                        ก่อนการยืดกล้ามเนื้อ ควรทำการวอร์มอัพเบา ๆ เพื่อให้ร่างกายพร้อมสำหรับการยืด โดยทำการยืดกล้ามเนื้อแต่ละส่วนอย่างช้า ๆ
                        และคงท่าไว้ประมาณ 20-30 วินาที ไม่ควรยืดกล้ามเนื้อแบบรีบเร่งหรือดึงแรงเกินไป เพราะอาจเกิดอาการบาดเจ็บได้
                    </p>
                </div>
            </div>
            <QuickLink />
        </div>
    );
}

export default Streching;
