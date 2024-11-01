import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import QuickLink from './Quicklink';

const ExerciseDetail = ({ data }) => {
  const { id } = useParams();
  const exercise = data.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!exercise) {
    return <p>Exercise not found!</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <button onClick={() => navigate(-1)} className="bg-gray-300 text-black p-2 rounded mb-4">Back</button>
        <div className="p-8 bg-white shadow-lg rounded-lg">
          {/* ใช้ img แทน ReactPlayer */}
          <img
            src={exercise.imageUrl} // ใช้ imageUrl แทน videoUrl
            alt={exercise.name}
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold">{exercise.name}</h2>
          <p className="text-gray-600 mt-2">ความยาก: {exercise.difficulty}</p>
          <p className="text-gray-600">ระยะเวลา: {exercise.duration}</p>
          <p className="text-gray-600">หมวดหมู่: {exercise.category}</p>
          <p className="mt-4">{exercise.description}</p>
        </div>
      </div>
      <QuickLink />
    </div>
  );
};

export default ExerciseDetail;
