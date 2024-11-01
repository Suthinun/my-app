module.exports = {
  content: [
    './src/**/*.{js,jsx}', // ระบุไฟล์ทั้งหมดในโฟลเดอร์ src ที่มีนามสกุล .js และ .jsx
    './views/**/*.{js,jsx}', // หากคุณเก็บไฟล์ views แยกจากกัน เช่นใน Express
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'], // เพิ่มฟอนต์ Kanit
      },
    },
  },
  plugins: [],
}
