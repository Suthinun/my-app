import React from 'react';
import { Link } from 'react-router-dom';

const QuickLink = () => {
  return (
    <div className="bg-[#18181b] text-white p-5 flex justify-center items-center">
      <div className="flex justify-between w-4/5 border-t border-white pt-5 flex-col md:flex-row">
        <div className="mb-5 md:mb-0">
          <h2 className="mb-3 font-kanit">Quick Links</h2>
          <ul className="space-y-2">
            <li className="font-kanit">
              <Link to="/BMI" className="text-white hover:underline">BMI</Link>
            </li>
            <li className="font-kanit">
              <Link to="/BMR" className="text-white hover:underline">BMR/TDEE</Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 md:mb-0">
          <ul className="space-y-2">
            <li className="font-kanit">
              <Link to="/Expro" className="text-white hover:underline">โปรแกรมออกกำลังกาย</Link>
            </li>
            <li className="font-kanit">
              <Link to="/Ex" className="text-white hover:underline">ท่าออกกำลังกาย</Link>
            </li>
          </ul>
        </div>
       
        <div>
          <Link to="/about">
            <h2 className="mb-3 font-kanit">About Us</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
