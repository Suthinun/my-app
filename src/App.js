import React /*{ useEffect, useState }*/ from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

import Home from '././components/Home/Home';
import Profile from './components/Contact&AboutUs/Profile';
import Expro from './components/Expro&Ex/Expro';
import BMI from './components/BMI&BMR/BMICalculator';
import BMR from './components/BMI&BMR/BMR';
import Ex from './components/Expro&Ex/Ex';
import LostPassword from './components/Login/LostPassword';
import About from './components/Contact&AboutUs/About';
import Weight from './components/Weight&Cardio/Weight';
import Cardio from './components/Weight&Cardio/Cardio';
import Streching from './components/Weight&Cardio/Streching';
import ExerciseDetail from './components/Expro&Ex/ExerciseDetail';
import exerciseData from './components/Expro&Ex/exerciseData';

const App = () => {
   
   /*const [user,setUser] = useState([])

    const getUser = ()=>{
    fetch("http://localhost:3000/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
   }

   useEffect(()=>{
    getUser()
   },[])
   */

    const handleLoginClick = () => {
        
    };

    const handleSignUpClick = () => {
        
    };

    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Signup handleLoginClick={handleLoginClick} />} />
                    <Route path="/home" element={<Home handleLoginClick={handleLoginClick} />} />
                    <Route path="/Login" element={<Login handleSignUpClick={handleSignUpClick} />} />
                    <Route path="/lost-password" element={<LostPassword />} /> {/* เพิ่มเส้นทางสำหรับ LostPassword */}
                    <Route path="/Signup" element={<Signup handleLoginClick={handleLoginClick} />} />
                    <Route path="/Profile" element={<Profile handleLoginClick={handleLoginClick} />} />
                    <Route path="/Expro" element={<Expro handleLoginClick={handleLoginClick} />} />
                    <Route path="/Ex" element={<Ex handleLoginClick={handleLoginClick} />} />
                    <Route path="/BMI" element={<BMI handleLoginClick={handleLoginClick} />} />
                    <Route path="/BMR" element={<BMR handleLoginClick={handleLoginClick} />} />
                    <Route path="/About" element={<About handleLoginClick={handleLoginClick} />} />
                    <Route path="/Weight" element={<Weight handleLoginClick={handleLoginClick} />} />
                    <Route path="/Cardio" element={<Cardio handleLoginClick={handleLoginClick} />} />
                    <Route path="/Streching" element={<Streching handleLoginClick={handleLoginClick} />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail data={exerciseData} />} />
                </Routes>
            </Router>
        );
};
        /*<div>
            
            {user.map((data)=>{
                return <>
                <div style = {{border:"1px solid gray", width:'500px'}}>
                <h1>Name :{data.name}</h1>
                <h1>Username :{data.username}</h1>
                <h1>Email :{data.email}</h1>
                </div>
                </>
            })}
        </div>
        */
    

export default App;
