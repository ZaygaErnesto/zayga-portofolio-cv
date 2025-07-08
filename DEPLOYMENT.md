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