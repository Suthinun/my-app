import BurnFat from '../Assets/expro.jpg';
import Stretching from '../Assets/expro2.jpg';
import Muscle from '../Assets/expro3.jpg';

const exerciseData = [
  {
    id: 1,
    name: 'Burn fat in 20 mins',
    difficulty: 'ง่าย',
    duration: '20 นาที',
    category: 'Fat loss',
    description: `
      การออกกำลังกายที่ออกแบบมาเพื่อเผาผลาญไขมันใน 20 นาที:
      - นาทีที่ 1-5: วอร์มร่างกายด้วยการเดินหรือวิ่งจ็อกกิ้งเบา ๆ เพื่อเตรียมร่างกายให้พร้อม
      - นาทีที่ 6-10: ออกกำลังด้วยการทำเบิร์พี (burpees) และกระโดดเชือก เพิ่มการเผาผลาญไขมันและเพิ่มความฟิต
      - นาทีที่ 11-15: ทำท่า Squats และ Lunges เพื่อเน้นการออกกำลังกายกล้ามเนื้อขาและสะโพก
      - นาทีที่ 16-20: จบด้วยการทำ Jumping Jacks และ High Knees เพื่อปิดการเผาผลาญที่สมบูรณ์
    `,
    imageUrl: BurnFat, // ใช้รูปจาก import ที่ได้ทำไว้แล้ว
  },
  {
    id: 2,
    name: 'Stretch and relax',
    difficulty: 'ปานกลาง',
    duration: '30 นาที',
    category: 'Stretching',
    description: `
      การออกกำลังกายเพื่อการยืดเหยียดและผ่อนคลาย:
      - นาทีที่ 1-10: เริ่มต้นด้วยการยืดเหยียดกล้ามเนื้อส่วนขาและหลังแบบพื้นฐาน
      - นาทีที่ 11-20: ยืดกล้ามเนื้อแขน ไหล่ และคอ เพื่อผ่อนคลายจากการทำงานหรือการออกกำลังหนัก
      - นาทีที่ 21-30: จบด้วยท่าทางการยืดที่ช่วยปรับสมดุลและสร้างความยืดหยุ่นของกล้ามเนื้อทั่วร่างกาย
    `,
    imageUrl: Stretching, // ใช้รูปจาก import ที่ได้ทำไว้แล้ว
  },
  {
    id: 3,
    name: 'Build muscle in 15 mins',
    difficulty: 'ยาก',
    duration: '15 นาที',
    category: 'Muscle building',
    description: `
      การออกกำลังกายเพื่อสร้างกล้ามเนื้อภายใน 15 นาที:
      - นาทีที่ 1-5: ทำท่า Push-ups และ Planks เน้นการสร้างกล้ามเนื้อแขน หน้าอก และแกนกลางลำตัว
      - นาทีที่ 6-10: ทำท่า Squats และ Deadlifts เพื่อสร้างกล้ามเนื้อขาและหลัง
      - นาทีที่ 11-15: ทำท่า Dumbbell Rows และ Shoulder Press เพื่อเพิ่มกล้ามเนื้อส่วนแขนและไหล่
    `,
    imageUrl: Muscle, // ใช้รูปจาก import ที่ได้ทำไว้แล้ว
  },
];

export default exerciseData;
