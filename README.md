# HUMIND (Human – Mind)

> **"Tempat Pikiranmu Beristirahat dan Didengar."**  
> Platform telekonseling kesehatan mental ramah mahasiswa & dewasa muda yang menggabungkan kepraktisan telemedisin (ala Halodoc) dengan ruang aman humanis (ala Riliv/Serene).

---

## 📁 Struktur Repositori & Pembagian Modul

Struktur folder dirancang dengan pola **Feature-First / Modular Monorepo** agar 5 anggota tim dapat bekerja secara paralel tanpa saling bertabrakan (*merge conflict*) dan mempermudah proses *debugging*:

```text
Humind/
├── PRD.md                           # Single Source of Truth (SSOT) Produk v1.1.0
├── README.md                        # Panduan struktur & setup repository
├── assets/                          # Aset visual, logo master, dan materi desain
│
├── docs/                            # Ruang Dokumentasi & Riset (Fadiyah, Rozin)
│   ├── api/                         # Kontrak spesifikasi endpoint API
│   ├── database/                    # Kamus data & referensi ERD
│   └── qa/                          # Skenario pengujian (test cases) & manual QA
│
├── frontend/                        # Web Client (React + Vite + PWA) - Rozin & Alif
│   ├── public/                      # Aset statis web & manifest PWA
│   └── src/
│       ├── assets/                  # Logo, ilustrasi, dan icon
│       ├── components/              # Komponen antarmuka UI dapat dipakai ulang (reusable)
│       │   ├── common/              # Button, Input, Modal, Badge, Timer
│       │   ├── feedback/            # Alert krisis, Toast, Skeleton loader
│       │   └── layout/              # Navbar, Footer, Header, Emergency Banner
│       ├── features/                # Modul per fitur bisnis (Feature-Based Isolation)
│       │   ├── auth/                # Login, Register, Mode Curhat Anonim Setup
│       │   ├── psychologists/       # Direktori Psikolog, Filter Masalah Mahasiswa
│       │   ├── booking/             # Kalender Slot & Pre-Counseling Intake Form (3 Soal)
│       │   ├── payment/             # Invoice QRIS Dinamis & Virtual Account
│       │   ├── counseling/          # Ruang Telekonseling (Video, Voice Call, Chat 60 Menit)
│       │   ├── wellness/            # Daily Mood Tracker, Guided Journaling, Habit & Panic Grounding 60s
│       │   └── bot/                 # Teaser Humind Buddy (Widget Coming Soon Fase 2)
│       ├── hooks/                   # Custom React Hooks (useAuth, useChat, useCountdown)
│       ├── services/                # API Client (Axios/Fetch) & WebSocket Client
│       ├── context/                 # State management global (AuthContext, ChatContext)
│       ├── utils/                   # Helper pemformat Rupiah, format waktu, validasi
│       └── routes/                  # Definisi rute halaman web
│
├── backend/                         # REST API & Real-Time Server - Atta & Laerra
│   └── src/
│       ├── config/                  # Konfigurasi Environment & koneksi database
│       ├── controllers/             # Handler request/response HTTP
│       ├── routes/                  # Routing API v1 (/auth, /psychologists, /bookings, dll.)
│       ├── services/                # Logika bisnis inti (Booking engine, Payment, AI Bot)
│       ├── middlewares/             # Auth JWT, validasi request, error handler, rate-limit
│       ├── sockets/                 # Handler event WebSocket ruang chat konseling
│       └── utils/                   # Enkripsi payload, logger, parser token
│
└── database/                        # Skema Basis Data Relasional - Laerra
    ├── migrations/                  # Skrip DDL pembentukan dan revisi tabel PostgreSQL
    ├── seeds/                       # Data dummy awal (kategori masalah, contoh psikolog)
    └── schemas/                     # File referensi DDL dan diagram ERD
```

## 💡 Mengapa Struktur Ini Nyaman untuk Debugging?

1. **Feature-Based di Frontend (`features/`):**
   Ketika ada *bug* di ruang chat konseling, Anda cukup memeriksa folder `features/counseling/` tanpa perlu membongkar seluruh kode komponen lain.
2. **Modular Services (`services/`):**
   Seluruh pemanggilan API ke backend terpusat di folder `services/`. Jika ada perubahan URL atau header JWT, perbaikan cukup dilakukan di satu tempat.
3. **Database Versioning (`database/migrations/`):**
   Perubahan skema database tercatat rapi secara berurutan, sehingga rekan tim dapat melakukan migrasi lokal tanpa takut skema database tertinggal.
4. **Isolasi Logika Socket (`backend/src/sockets/`):**
   Transmisi obrolan real-time dipisahkan dari alur REST API biasa, membuat penelusuran *event socket* jauh lebih terisolasi dan mudah di-log.
