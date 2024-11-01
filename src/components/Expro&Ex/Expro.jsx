import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้สำหรับการนำทางไปยังหน้าอื่น
import Navbar from './Navbar';
import QuickLink from './Quicklink';
import BurnFat from '../Assets/expro.jpg';
import Stretching from '../Assets/expro2.jpg';
import Muscle from '../Assets/expro3.jpg';

const Expro = () => {
  const [data, ] = useState([
    { id: 1, name: 'Burn fat in 20 mins', difficulty: 'ง่าย', duration: '20 นาที', category: 'Fat loss', description: 'การออกกำลังกายที่จะเน้นเผาผลาญ...', img: BurnFat },
    { id: 2, name: 'Stretch and relax', difficulty: 'ปานกลาง', duration: '30 นาที', category: 'Stretching', description: 'การออกกำลังกายเพื่อผ่อนคลายกล้าม...', img: Stretching },
    { id: 3, name: 'Build muscle in 15 mins', difficulty: 'ยาก', duration: '15 นาที', category: 'Muscle building', description: 'การออกกำลังกายที่เน้นสร้างกล้าม...', img: Muscle },
    // ข้อมูลเพิ่มเติมใส่ตามต้องการ
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนไปหน้ารายละเอียด

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (id) => {
    // เปลี่ยนไปหน้ารายละเอียดของข้อมูล
    navigate(`/exercise/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 flex flex-col items-center">
        {/* Search bar */}
        <input
          type="text"
          placeholder="ค้นหา..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {/* แสดงผลลัพธ์การค้นหา */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">ผลการค้นหา</h2>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="p-4 mb-6 bg-white shadow-lg rounded-lg cursor-pointer"
                onClick={() => handleItemClick(item.id)}
              >
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 mt-2">ความยาก: {item.difficulty}</p>
                <p className="text-gray-600">ระยะเวลา: {item.duration}</p>
                <p className="text-gray-600">หมวดหมู่: {item.category}</p>
                <p className="mt-4">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">ไม่พบข้อมูล</p>
          )}
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default Expro;
