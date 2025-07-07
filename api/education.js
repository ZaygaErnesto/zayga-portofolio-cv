// api/education.js

// Impor hanya data yang diperlukan dari file data.js
const { educationHistory } = require('../backend/data.js');

// Ekspor fungsi serverless
module.exports = (req, res) => {
  // Atur header CORS secara manual jika diperlukan (lihat catatan di bawah)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Kirim data sebagai response JSON
  res.status(200).json(educationHistory);
};