# Deployment Guide - Portfolio CV Zayga

## Struktur Proyek untuk Vercel

Proyek ini telah dikonfigurasi untuk deployment di Vercel dengan struktur berikut:

### Frontend (Vue.js)
- **Lokasi**: `frontend/`
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/dist`

### Backend (Serverless Functions)
- **Lokasi**: `api/`
- **Endpoint**:
  - `/api/education` - Data pendidikan
  - `/api/skills` - Data keahlian
  - `/api/projects` - Data proyek

## Konfigurasi Vercel

File `vercel.json` telah dikonfigurasi untuk:
1. **Build Process**: Otomatis build frontend Vue.js
2. **API Routing**: Mengarahkan `/api/*` ke serverless functions
3. **SPA Routing**: Mengarahkan semua route lain ke `index.html`
4. **CORS**: Mengizinkan akses dari semua origin

## Cara Deploy

1. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Deploy di Vercel**:
   - Buka [vercel.com](https://vercel.com)
   - Import repository dari GitHub
   - Vercel akan otomatis mendeteksi konfigurasi
   - Deploy akan berjalan otomatis

## Troubleshooting

### Jika API tidak berfungsi:
1. Periksa console browser untuk error CORS
2. Pastikan endpoint `/api/*` mengarah ke serverless functions
3. Periksa log deployment di Vercel dashboard

### Jika frontend tidak load:
1. Periksa build log di Vercel
2. Pastikan `outputDirectory` mengarah ke `frontend/dist`
3. Periksa apakah semua dependencies terinstall

## Development Local

Untuk development lokal:
```bash
# Backend
cd backend
npm install
npm start

# Frontend (di terminal terpisah)
cd frontend
npm install
npm run dev
```

## Environment Variables

Tidak ada environment variables yang diperlukan untuk deployment ini karena menggunakan data statis. 

# Cara Menyambungkan Backend ke Neon PostgreSQL

Berikut langkah-langkah untuk menghubungkan backend Node.js/Express ke database Neon PostgreSQL (cloud):

---

## 1. Daftar & Buat Database di Neon
- Kunjungi [neon.tech](https://neon.tech) dan daftar/login.
- Buat project baru dan database.
- Catat **connection string** dan detail kredensial (host, user, password, database, dll).

## 2. Buat Tabel Database
- Buka menu SQL Editor di Neon dashboard.
- Copy-paste isi file `backend/database/init.sql` ke editor.
- Jalankan query untuk membuat tabel dan data sample.

## 3. Tambahkan Environment Variables
- Buat file `.env` di folder `backend/` (atau gunakan dashboard Vercel jika deploy ke Vercel).
- Isi dengan kredensial Neon, contoh:
  ```env
  PGHOST=ep-xxxxxx-pooler.region.aws.neon.tech
  PGDATABASE=neondb
  PGUSER=neondb_owner
  PGPASSWORD=your_password
  PGSSLMODE=require
  PGCHANNELBINDING=require
  PORT=3000
  NODE_ENV=development
  ```

## 4. Install Dependency PostgreSQL
- Jalankan di folder backend:
  ```sh
  npm install express cors pg dotenv
  ```

## 5. Contoh Kode Backend Express + Neon

### File: `backend/config/database.js`
```js
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false, sslmode: process.env.PGSSLMODE || 'require' },
  sslmode: process.env.PGSSLMODE || 'require'
});
module.exports = pool;
```

### File: `backend/index.js` (atau `api/index.js` untuk Vercel)
```js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

// Test koneksi
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Database connected!', timestamp: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Contoh endpoint ambil data education
app.get('/api/education', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch education data' });
  }
});

// Jalankan server (untuk lokal)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## 6. Test Koneksi
- Jalankan backend secara lokal:
  ```sh
  npm start
  ```
- Cek endpoint test (misal `/api/test`) untuk memastikan backend terhubung ke Neon.

## 7. Deploy ke Vercel (Opsional)
- Pastikan environment variables juga diatur di dashboard Vercel.
- Deploy project, backend Express akan berjalan sebagai serverless function dan tetap terhubung ke Neon.

---

**Catatan:**
- Jangan commit file `.env` ke repo publik.
- Untuk production, gunakan password yang kuat dan batasi akses database. 