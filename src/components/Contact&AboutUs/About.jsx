import React from 'react';
import Navbar from './Navbar';
import QuickLink from './Quicklink';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-5 flex justify-center items-center min-h-screen">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg w-4/5">
                    <h1 className="text-3xl mb-5 font-kanit">เกี่ยวกับเรา</h1>
                    <p className="text-lg leading-relaxed font-kanit text-gray-800 mb-5">
                        เราคือทีมงานที่มีความมุ่งมั่นในการส่งเสริมสุขภาพและความแข็งแรงของผู้คน
                        ด้วยความรู้และการออกกำลังกายที่เหมาะสมสำหรับทุกคน ไม่ว่าจะเป็นการออกกำลังกายเพื่อสุขภาพ
                        หรือการเสริมสร้างกล้ามเนื้อ เรามุ่งมั่นที่จะให้คำแนะนำและข้อมูลที่ดีที่สุด
                    </p>
                    <h1 className="text-3xl mb-5 font-kanit">เป้าหมายของเรา</h1>
                    <ul className="text-lg leading-relaxed font-kanit text-gray-800 list-disc list-inside mb-5">
                        <li>ส่งเสริมการออกกำลังกายเพื่อสุขภาพที่ดี</li>
                        <li>ให้คำแนะนำเกี่ยวกับการดูแลร่างกายและการฝึกฝน</li>
                        <li>สร้างสังคมของคนรักสุขภาพและการออกกำลังกาย</li>
                    </ul>
                    <h1 className="text-3xl mb-5 font-kanit">ทีมงานของเรา</h1>
                    <p className="text-lg leading-relaxed font-kanit text-gray-800">
                        ทีมงานของเราประกอบไปด้วยผู้เชี่ยวชาญด้านการออกกำลังกายและโภชนาการ
                        ที่มีประสบการณ์ในการให้คำแนะนำและการฝึกฝนมาอย่างยาวนาน เราพร้อมที่จะช่วยให้คุณบรรลุเป้าหมายทางด้านสุขภาพ
                    </p>
                </div>
            </div>
            <QuickLink />
        </div>
    );
}

export default About;
