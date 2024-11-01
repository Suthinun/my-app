import React from 'react';
import Navbar from './Navbar';
import Car2 from '../Assets/Cardio2.jpg';  // นำเข้ารูปภาพ
import QuickLink from './Quicklink';

const Cardio = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-5 flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl text-left">
                    {/* รูปภาพด้านบนหัวข้อ */}
                    <div className="mb-5">
                        <img
                            src={Car2}
                            alt="Muscle"
                            className="w-full max-w-xl h-auto mx-auto rounded-lg"
                        />
                    </div>

                    <h1 className="text-3xl font-bold mb-5 font-kanit">การคาร์ดิโอ</h1>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6 font-kanit">
                        การคาร์ดิโอ (Cardio) เป็นการออกกำลังกายที่ช่วยเสริมสร้างระบบหัวใจและหลอดเลือด
                        ช่วยเพิ่มความแข็งแรงและความทนทานให้กับร่างกาย นอกจากนี้ยังช่วยเผาผลาญไขมันและพลังงานได้อย่างมีประสิทธิภาพ
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">ประโยชน์ของการคาร์ดิโอ</h2>
                    <ul className="list-disc ml-5 mb-6 text-lg leading-relaxed text-gray-800 font-kanit">
                        <li>เสริมสร้างระบบหัวใจและหลอดเลือด</li>
                        <li>เผาผลาญไขมันและพลังงาน</li>
                        <li>เพิ่มความแข็งแรงของปอดและระบบการหายใจ</li>
                        <li>ลดความเสี่ยงต่อโรคต่างๆ เช่น เบาหวานและความดันโลหิตสูง</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4 font-kanit">วิธีเริ่มต้น</h2>
                    <p className="text-lg leading-relaxed text-gray-800 mb-4 font-kanit">
                        การคาร์ดิโอสามารถทำได้หลายรูปแบบ เช่น การเดินเร็ว, การวิ่ง, การปั่นจักรยาน, หรือการว่ายน้ำ
                        ควรเริ่มจากความหนักที่พอเหมาะและเพิ่มขึ้นตามระดับความแข็งแรงของร่างกาย
                    </p>
                </div>
            </div>
            <QuickLink />
        </div>
    );
}

export default Cardio;
