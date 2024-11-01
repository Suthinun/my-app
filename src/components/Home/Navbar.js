import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import User_icon from '../Assets/person.png';

const Navbar = () => {
    return (
        <nav className="bg-[#18181b] p-7 flex justify-between items-center">
            <ul className="flex items-center">
                <div className="mr-6">
                    <Link to="/Home">
                        <img src={logo} alt="Logo" className="h-10" />
                    </Link>
                </div>
            </ul>
            <ul className="flex gap-5 items-center flex-grow justify-center">
                <li className="font-kanit">
                    <Link to="/BMI" className="text-white text-sm hover:underline">BMI</Link>
                </li>
                <li className="font-kanit">
                    <Link to="/BMR" className="text-white text-sm hover:underline">BMR/TDEE</Link>
                </li>
                <li className="font-kanit">
                    <Link to="/Expro" className="text-white text-sm hover:underline">โปรแกรมออกกำลังกาย</Link>
                </li>
                <li className="font-kanit">
                    <Link to="/Ex" className="text-white text-sm hover:underline">ท่าออกกำลังกาย</Link>
                </li>
                <li className="font-paytone">
                    <Link to="/about" className="text-white text-sm hover:underline">About Us</Link>
                </li>
            </ul>
            <ul className="flex items-center">
                <Link to="/Profile">
                    <img src={User_icon} alt="user" className="h-8 ml-4" />
                </Link>
                <li className="font-paytone">
                    <Link to="/Signup" className="text-white text-sm hover:underline">Signup</Link>
                    
                </li>
                <li className="font-paytone ml-4"> {/* Add margin here for spacing */}
                    <Link to="/Login" className="text-white text-sm hover:underline">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
