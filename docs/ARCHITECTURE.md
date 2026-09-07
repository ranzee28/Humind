# Panduan Arsitektur & Struktur Folder Proyek Humind
**Versi Dokumen:** 1.0.0  
**Target:** Tim Pengembang Humind (Rozin, Alif, Atta, Laerra, Fadiyah)

---

## 1. Gambaran Arsitektur Sistem (High-Level Overview)

Humind mengadopsi arsitektur **Client-Server Terpisah (Decoupled Architecture)** dengan komunikasi berbasis RESTful API dan protokol WebSocket terenkripsi:

```text
       [ Klien Web (React + Vite + PWA) ]
                       │
         ┌─────────────┴─────────────┐
         ▼ (HTTP / REST API)         ▼ (WebSocket / WSS)
   [ Express/Fastify API ]     [ Real-Time Chat Server ]
   ├── Auth & JWT              ├── Room-based Chat
   ├── Booking & Slots         ├── Session Countdown Sync
   ├── Payment Webhooks        └── Instant Messaging
   └── AI Buddy Navigator
         │                                   │
         ├───────────────────────────────────┤
         ▼                                   ▼
 [ PostgreSQL Relational DB ]      [ Eksternal: Payment Gateway & AI ]
 (Transaksional, SIPP, Chat Logs)  (QRIS/VA Midtrans & Gemini API)
```

---

## 2. Peta Lengkap Struktur Folder Proyek

```text
Humind/
├── PRD.md                           # Single Source of Truth (SSOT) Spesifikasi Produk
├── README.md                        # Panduan ringkas setup repositori
├── .gitignore                       # File pengecualian Git (node_modules, .env, build)
├── assets/                          # Aset visual master, logo konsep, dan materi desain
│
├── docs/                            # 📚 RUANG DOKUMENTASI TEKNIS & QA
│   ├── ARCHITECTURE.md              # Dokumen ini (panduan arsitektur & konvensi koding)
│   ├── api/                         # Kontrak endpoint REST API & payload JSON
│   ├── database/                    # Kamus data, diagram relasi (ERD), skrip skema
│   └── qa/                          # Skenario pengujian (test cases) oleh Fadiyah
│
├── frontend/                        # 🎨 CLIENT APPLICATION (React + Vite + PWA)
│   ├── public/                      # Aset statis web & manifest.json PWA
│   └── src/
│       ├── assets/                  # Gambar, icon SVG, favicon
│       ├── components/              # Komponen UI umum yang reusable lintas fitur
│       │   ├── common/              # Tombol (Button), InputField, Modal, Badge SIPP
│       │   ├── feedback/            # Banner Darurat Krisis, Toast Notifikasi, Skeleton Loader
│       │   └── layout/              # Navbar, Footer, Header Navigasi, Container
│       ├── features/                # ⚡ FEATURE-FIRST DIRECTORY (Isolasi Modul Bisnis)
│       │   ├── auth/                # Login, Register, Mode Curhat Anonim Setup
│       │   ├── psychologists/       # Katalog Psikolog, 4 Filter Masalah Mahasiswa
│       │   ├── booking/             # Kalender Slot & Pre-Counseling Intake Form (3 Soal)
│       │   ├── payment/             # Invoice QRIS Dinamis & Virtual Account + Timer 15m
│       │   ├── counseling/          # Ruang Chat 60m, Read-Only Lock, & Post-Session Summary
│       │   └── bot/                 # Widget Humind Buddy (AI First-Listener 24/7)
│       ├── hooks/                   # Custom Hooks (useAuth, useChat, useCountdownTimer)
│       ├── services/                # Konfigurasi Axios/Fetch Client & Socket.io Client
│       ├── context/                 # State management global (AuthContext, ChatContext)
│       ├── utils/                   # Pemformat Rupiah (IDR), waktu WIB, validasi form
│       └── routes/                  # Konfigurasi Router (React Router DOM)
│
├── backend/                         # ⚙️ SERVER APPLICATION (REST API & WebSockets)
│   └── src/
│       ├── config/                  # Konfigurasi Environment, database pool, JWT secret
│       ├── controllers/             # Handler request/response HTTP
│       ├── routes/                  # Definisi rute API v1 (/auth, /psychologists, /bookings)
│       ├── services/                # Logika bisnis inti (Booking engine, Payment, AI Bot)
│       ├── middlewares/             # Auth JWT, validasi input, error handler terpusat
│       ├── sockets/                 # Handler event WebSocket ruang chat konseling
│       └── utils/                   # Helper enkripsi payload pesan, logger, JWT sign/verify
│
└── database/                        # 🗄️ MANAJEMEN BASIS DATA RELASIONAL (PostgreSQL)
    ├── migrations/                  # Skrip DDL pembentukan & migrasi skema tabel
    ├── seeds/                       # Data dummy awal (kategori masalah, psikolog berlisensi)
    └── schemas/                     # File referensi DDL dan diagram ERD mentah
```

## 4. Konvensi Koding & Standar Penamaan (*Coding Guidelines*)

### 4.1. Konvensi Frontend (Rozin & Alif)
1. **Komponen React:** Gunakan format **PascalCase** (contoh: `PsychologistCard.jsx`, `EmergencyButton.jsx`, `IntakeFormModal.jsx`).
2. **Custom Hooks:** Awali dengan kata `use` dan gunakan **camelCase** (contoh: `useChatSession.js`, `useCountdown.js`).
3. **Services & Utility:** Gunakan **camelCase** (contoh: `apiClient.js`, `formatCurrency.js`).
4. **Isolasi Fitur (*Feature-First*):**  
   Setiap fitur di `features/` idealnya memiliki subfolder sendiri jika kompleks:
   ```text
   features/booking/
   ├── components/       # Komponen khusus booking (CalendarSlotPicker.jsx, IntakeForm.jsx)
   ├── hooks/            # useBookingSlot.js
   └── bookingService.js # Pemanggilan endpoint API /bookings
   ```

### 4.2. Konvensi Backend (Atta & Laerra)
1. **Format Respon API Terstandar:**  
   Seluruh endpoint REST API wajib mengembalikan format JSON yang konsisten:
   ```json
   {
     "success": true,
     "message": "Operasi berhasil",
     "data": { ... }
   }
   ```
   Dan untuk penanganan error:
   ```json
   {
     "success": false,
     "message": "Keterangan pesan kesalahan yang informatif",
     "errors": [ ... ]
   }
   ```
2. **WebSocket Room Naming:**  
   Setiap ruang chat konseling wajib diisolasi per ID sesi:
   `room_counseling_{session_id}`
3. **Penyimpanan Pesan:**  
   Pesan teks dienkripsi (*encryption at rest*) sebelum disimpan ke basis data PostgreSQL.

### 4.3. Konvensi Database (Laerra)
1. **Penamaan Tabel & Kolom:** Gunakan **snake_case** dalam bentuk jamak (*plural*) untuk tabel (contoh: `users`, `psychologist_profiles`, `counseling_sessions`, `chat_messages`).
2. **File Migrasi Terurut:** Beri awalan nomor urut tanggal/indeks (contoh: `001_create_users_table.sql`, `002_create_psychologists_table.sql`).

---

## 5. Alur Kerja Git (*Git Collaboration Workflow*)

Untuk mencegah bentrok kode (*merge conflict*) antar 5 developer:

1. **Branch Utama:**
   - `main`: Kode produksi yang sudah stabil dan siap dinilai/didemokan.
   - `staging` / `dev`: Tempat penggabungan fitur sebelum rilis.
2. **Branch Fitur (Feature Branches):**
   Gunakan format: `<tipe>/<nama-singkat-fitur>`
   - `feat/fe-booking-calendar` (Alif/Rozin)
   - `feat/be-auth-jwt` (Atta)
   - `feat/db-migration-intake` (Laerra)
   - `docs/qa-testcases` (Fadiyah)
3. **Pesan Commit Berstandar (*Conventional Commits*):**
   - `feat:` Penambahan fitur baru.
   - `fix:` Perbaikan bug.
   - `docs:` Perubahan dokumen/PRD.
   - `style:` Perapian visual/CSS tanpa mengubah logika.
   - `refactor:` Restrukturisasi kode tanpa mengubah fungsionalitas.
