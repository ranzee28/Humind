# Product Requirements Document (PRD)
# HUMIND (Human – Mind)

---

## Document Control & Metadata

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Dokumen** | Product Requirements Document (PRD) – Humind Platform |
| **Versi Dokumen** | v1.4.0 |
| **Status** | Approved Baseline – Alur Booking Berbasis Spesialisasi, Kalkulator Layanan Dinamis (Chat/Call/Video, Sesi 1/2/4 Diskon Bundling, 60 Menit Fixed), Direktori Ketersediaan Psikolog & Mood Tracker |
| **Penulis Utama** | Tim Humind (Rozin, Alif, Atta, Laerra, Fadiyah) |
| **Target Rilis MVP** | `[TBD - Target Sprint/Bulan Rilis]` |
| **Platform Target** | **Fase 1:** Web Application (Mobile-First Responsive & PWA-Ready)<br>**Fase 2:** Cross-Platform Mobile App (React Native / Expo) |
| **Klasifikasi Dokumen**| Internal Team Single Source of Truth (SSOT) |

---

## 1. Executive Summary & Project Background

### 1.1. Latar Belakang Masalah
Di lingkungan perguruan tinggi dan fase awal karir (*first-jobber*), tekanan hidup meningkat secara eksponensial. Mahasiswa dan generasi muda Gen Z/Milenial kerap menghadapi 6 tantangan utama:
1. **Academic Burnout & Tugas Akhir:** Beban skripsi, praktikum, revisi berulang, dan ekspektasi IPK yang memicu stres kronis dan kelelahan mental (*cognitive exhaustion*).
2. **Kecemasan Finansial:** Beban uang kuliah tunggal (UKT), biaya hidup mandiri anak rantau, pengelolaan uang saku bulanan, dan tekanan finansial keluarga.
3. **Insomnia & Overthinking:** Pola tidur berantakan akibat siklus cemas di malam hari (*night rumination*) yang tidak tersalurkan.
4. **Toxic Circle & Hubungan Interpersonal:** Masalah pertemanan kampus yang melelahkan, konflik organisasi/kepanitiaan, *people-pleasing*, atau relasi keluarga dan asmara yang menguras emosi.
5. **Krisis Arah Karir (Quarter-Life Crisis):** Ketidakpastian masa depan pasca-lulus, kecemasan merasa salah jurusan, dan tekanan memasuki persaingan dunia kerja.
6. **Insecurity & Krisis Percaya Diri:** Rasa minder akibat jebakan perbandingan sosial di media sosial/LinkedIn, sindrom imposter (*imposter syndrome*), ketakutan bicara di depan umum, dan masalah citra diri (*self-worth*).

### 1.2. Validasi Permasalahan di Lapangan
Meskipun kebutuhan akan bantuan kesehatan mental sangat mendesak, terdapat jurang pemisah (*gap*) yang besar antara kebutuhan dan akses:
- **Gengsi dan Takut Terhakimi:** Mahasiswa khawatir riwayat konselingnya diketahui oleh teman kampus, dosen, atau lingkungan pergaulan (*fear of social stigma*).
- **Kebingungan Awal & Ragu Bercerita:** Banyak mahasiswa bingung mengidentifikasi apa yang sedang mereka alami dan ragu apakah masalahnya "cukup pantas" dibawa ke psikolog profesional.
- **Kompleksitas Istilah Klinis:** Platform telemedisin umum (seperti Halodoc) terlalu kaku dan berorientasi medis klinis, di mana pengguna bingung memilih dokter berdasarkan gelar spesialisasi kedokteran yang formal.
- **Keterbatasan Solusi Non-Klinis:** Platform wellness mandiri (seperti Riliv) berfokus pada konten umum, namun proses transisi menuju konseling ahli sering kali terasa berjarak atau tidak secara spesifik membedah masalah riil anak kuliahan.

### 1.3. Value Proposition & Posisi Pasar
**Humind** hadir menjembatani kepraktisan transaksional direktori telekonseling (ala Halodoc) dengan pendekatan holistik dan humanis (ala Riliv/Serene), yang secara spesifik dirancang untuk **segmen mahasiswa dan dewasa muda**:
- **Bahasa Manusia (Human-Centric Language):** Penemuan psikolog menggunakan filter masalah nyata mahasiswa, bukan klasifikasi penyakit medis.
- **Mode Curhat Anonim (Safe Haven):** Memberikan kebebasan berekspresi menggunakan nama alias dalam sesi konseling, sementara kepatuhan administratif dan keamanan data rekam medis tetap terjaga di tingkat sistem.
- **Unified Telecounseling Room (Video, Voice Call, & Real-Time Chat):** Ruang konsultasi 60 menit terintegrasi multi-moda (Video Call tatap muka untuk koneksi empati mendalam, Voice Call untuk privasi tinggi/hemat kuota, serta Chat Teks pendukung) yang berfokus penuh pada interaksi manusiawi tanpa beban pengisian laporan administratif pasca-sesi.
- **Pemesanan Instan Tanpa Beban Kuesioner (Frictionless Booking):** Pengguna tidak dibebani pengisian formulir pra-konseling yang melelahkan. Cukup tentukan identitas (Nama Asli atau Mode Curhat Anonim) agar proses pemesanan berlangsung cepat dan bebas hambatan kognitif.
- **Panic Button / Grounding Cepat 60 Detik:** Akses instan latihan pernapasan (*Box Breathing*) visual langsung dari beranda tanpa syarat login untuk menenangkan serangan panik seketika.
- **Humind Buddy (AI First-Listener – Coming Soon Fase 2):** Sahabat AI interaktif 24/7 yang dipersiapkan pada Fase 2 (ditampilkan dalam bentuk kartu informatif *Coming Soon* pada rilis MVP).

---

## 2. Brand Identity, Tone of Voice, & Visual Guidelines

### 2.1. Brand Identity
- **Nama Produk Resmi:** **Humind** (Sintesis dari kata *Human* dan *Mind*).  
  *Catatan Penyelarasan:* Nama resmi pada seluruh dokumen, antarmuka web, dan metadata sistem adalah **Humind**.
- **Tagline Resmi (Utama):**  
  **"Tempat Pikiranmu Beristirahat dan Didengar."**  
  *(Tagline terpilih: Relatable, hangat, dan secara langsung menjawab kebutuhan mahasiswa yang membutuhkan ruang aman untuk didengarkan tanpa stigma).*  
  *Tagline Sekunder / Kampanye:* "Your Safe Space to Unwind Your Mind" (Opsi Bilingual) & "Urai Benang Kusut di Kepala Bersama Ahlinya" (Opsi Solutif).
- **Tone of Voice:**
  - **Empatis & Hangat:** Berbicara selayaknya kawan yang mendengarkan tanpa menghakimi.
  - **Tenang (Calming):** Menurunkan ketegangan kognitif pengguna yang sedang cemas.
  - **Transparan & Kredibel:** Informasi tarif, izin praktik psikolog (SIPP), dan durasi konseling disajikan terbuka tanpa biaya tersembunyi.
  - **Bebas Stigma Medis:** Menghindari terminologi patologis yang menakut-nakuti pengguna awam.

### 2.2. Visual Guidelines & UI Direction (Berdasarkan Konsep Logo & Karakter Brand)
Berdasarkan artefak visual logo (`logo_konsep2.jpeg`), identitas visual Humind merepresentasikan dua telapak tangan yang saling bertaut membentuk huruf **H** dengan lekukan organik yang lembut dan dinamis:

1. **Makna Simbolis Logo:**
   - Bentuk siluet tangan yang merangkul mencerminkan koneksi antar-manusia (*human connection*), dukungan moral yang aman (*safe embrace*), serta integrasi antara pikiran (*mind*) dan perasaan.
2. **Color Identity (Proposed Palette):**
   - **Primary Calming Green / Mint (`#52B788` - `#74C69D`):** Melambangkan pemulihan, pertumbuhan, kesegaran mental, dan keseimbangan emosional.
   - **Primary Calming Sky Blue (`#4EA8DE` - `#5DADE2`):** Melambangkan ketenangan pikiran, kejernihan, ruang aman, dan rasa percaya.
   - **Neutral Background (`#F8FAF9` / Pure White `#FFFFFF`):** Latar belakang bersih, menyejukkan mata, dan memberikan kontras yang nyaman.
   - **Text & Neutral Contrast (`#1E293B` / Slate):** Tipografi bernuansa lembut namun memiliki keterbacaan tinggi (*high legibility*).
   - **Accents (Warning/Alert):** Amber lembut (`#F59E0B`) dan Muted Rose (`#F43F5E`) hanya untuk peringatan esensial tanpa memicu kepanikan visual.
3. **Layout Vibe & UI Layout:**
   - **Minimalis & Airy:** Memaksimalkan *whitespace* agar pengguna dengan tingkat kecemasan tinggi tidak merasa kewalahan (*information overload*).
   - **Soft Rounded Corners:** Sudut komponen konsisten (border-radius berkisar antara 12px hingga 16px) untuk menghilangkan kesan kaku/tajam.
   - **Card-Based Interface:** Seluruh pengelompokan informasi (kartu psikolog, jadwal, ringkasan transaksi) dibungkus dalam kontainer berstruktur rapi dengan elevasi bayangan halus (*soft ambient shadow*).

---

## 3. Target User Personas

### Persona 1: Mahasiswa Tingkat Akhir (Primary Consumer)
- **Nama Fiktif:** Raka (22 Tahun)
- **Status:** Mahasiswa Semester 8, sedang menyusun skripsi dan menghadapi tuntutan orang tua.
- **Pain Points:** 
  - Mengalami insomnia, sering melamun (*overthinking*) jam 2 pagi memikirkan revisi skripsi dan prospek kerja.
  - Takut mencari bantuan ke psikolog kampus karena cemas dianggap bermasalah mental oleh teman seangkatan.
  - Memiliki anggaran terbatas, enggan membayar biaya konsultasi jika tarifnya tidak transparan sejak awal.
- **Goals:** Ingin sesi konsultasi cepat via teks/chat, bisa menggunakan nama samaran, dan psikolog memahami konteks kehidupan kuliah.

### Persona 2: First-Jobber / Pekerja Awal Karir (Secondary Consumer)
- **Nama Fiktif:** Nadia (24 Tahun)
- **Status:** Karyawan magang/kontrak di tahun pertama kerja.
- **Pain Points:** 
  - Mengalami *quarter-life crisis*, kelelahan kerja (*office burnout*), dan kesulitan beradaptasi dengan lingkungan rekan kerja yang toksik.
  - Jadwal kerja padat, tidak memiliki waktu untuk konsultasi tatap muka langsung.
- **Goals:** Kemudahan melihat slot jadwal konsultasi yang fleksibel (malam hari atau akhir pekan) dan pembayaran instan via QRIS/m-banking.

### Persona 3: Psikolog Mitra Berlisensi (Provider)
- **Nama Fiktif:** Farida, M.Psi., Psikolog (32 Tahun)
- **Status:** Psikolog Klinis Dewasa berlisensi aktif dengan Surat Izin Praktik Psikologi (SIPP).
- **Pain Points:** 
  - Kerap kesulitan mengatur kalender reservasi jika dilakukan secara manual melalui pesan instan.
  - Khawatir platform digital tidak memiliki batasan privasi dan kepatuhan kode etik rekam psikologi.
- **Goals:** Platform yang terstruktur untuk mengelola jam praktik, menampilkan profil dan nomor izin resmi, serta memfasilitasi ruang konsultasi teks yang aman.

---

## 4. Tim, Struktur Peran & Tanggung Jawab

Tim pengembang terdiri dari 5 (lima) orang dengan pembagian peran dan tanggung jawab terdefinisi sebagai berikut:

| Nama Anggota | Role | Cakupan Tanggung Jawab Utama |
| :--- | :--- | :--- |
| **Rozin** | **Project Manager & Frontend Lead (Visual)** | - Koordinasi proyek menyeluruh, penetapan sprint, dan roadmap.<br>- Menentukan arah branding visual, filosofi logo, dan *design system*.<br>- Slicing komponen visual utama dan arsitektur UI. |
| **Alif** | **Frontend (Logic) & User Experience** | - Integrasi API dari Backend ke antarmuka aplikasi web.<br>- Membangun alur interaksi antarmuka pengguna (*state management*, form validation).<br>- Memastikan aplikasi web responsif di perangkat desktop, tablet, dan mobile. |
| **Atta** | **Backend Lead & API** | - Merancang arsitektur server, routing, dan kontrak REST/GraphQL API.<br>- Mengelola modul autentikasi pengguna dan otorisasi sesi konseling.<br>- Membangun endpoint reservasi jadwal, manajemen slot waktu, dan integrasi transaksi. |
| **Laerra** | **Backend & Database** | - Merancang skema relasi basis data (ERD) dan integritas data konseling.<br>- Mengelola migrasi database dan optimasi query data.<br>- Mengintegrasikan modul komunikasi *real-time chat* dan mekanisme enkripsi payload pesan. |
| **Fadiyah**| **Product Research & Quality Assurance** | - Melakukan riset kebutuhan pengguna riil (isu mahasiswa dan dinamika kesehatan mental).<br>- Kurasi materi konten edukasi, artikel, dan materi panduan relaksasi.<br>- Menyusun skenario uji coba (*test cases*) dan pengujian manual (*manual testing*) seluruh alur aplikasi. |

---

## 5. Scope & Product Release Phasing

### 5.1. Matriks Prioritas Fitur
Untuk menjaga fokus eksekusi tim beranggotakan 5 orang dan mencegah *scope creep*, fitur dibagi ke dalam 2 (dua) fase:

```
+-------------------------------------------------------------------------------+
| FASE 1: Core MVP (Transaksional Web, Telekonseling Multi-Moda, Mood Tracker)  |
| 1. Modul Autentikasi & Profil Pengguna (Termasuk Setup Identitas Anonim)      |
| 2. Direktori Profil Psikolog Berlisensi (SIPP & Spesialisasi Masalah)         |
| 3. Filter Masalah Khas Mahasiswa (Human-Language Category: 6 Isu Utama)       |
| 4. Atur Layanan & Kalkulator Biaya (Chat/Call/Video, 1/2/4 Sesi, Diskon)     |
| 5. Pemilihan Tanggal, Slot Jam Ketersediaan Psikolog, & Pilihan Mode Anonim   |
| 6. Integrasi Pembayaran Sederhana (Payment Gateway QRIS / Virtual Account)    |
| 7. Ruang Telekonseling Terpadu: Video Call, Voice Call & Encrypted Chat 60m   |
| 8. Daily Wellness: Daily Mood Tracker & Coping Habit Check-in                 |
| 9. Panic Button / Grounding Cepat 60 Detik (Box Breathing Langsung di Beranda)|
| 10. SOP & Protokol Krisis Darurat (Disclaimer, Bantuan Cepat, Hotline SEJIWA) |
| 11. Standar Responsif Mobile-First & Konfigurasi PWA (Installable Shortcut)   |
| 12. Teaser Humind Buddy (Kartu Interaktif 'Coming Soon' Teman Curhat AI)      |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
| FASE 2: Retensi Lanjutan, AI Buddy 24/7, & Ekspansi Native Mobile App (Expo)  |
| 1. Humind Buddy: AI First-Listener & Smart Matcher (Integrasi LLM Aktif 24/7) |
| 2. Audio Meditasi & Sleep Aid (Panduan Box Breathing Audio & Soundscapes)     |
| 3. Pola Analisis Emosi Lanjutan (AI Mood Trend Insights & Predictive Journal)  |
| 4. Artikel Edukasi Singkat (Bacaan Ringkas 2 Menit & Coping Strategy)         |
| 5. Group Support & Peer Sharing Circles (Ruang Saling Dengar Mahasiswa)       |
| 6. Aplikasi Mobile Native (React Native / Expo) dengan Push Notification      |
| 7. Pemutar Audio Latar Belakang (Background Audio Player untuk Sleep Aid)     |
+-------------------------------------------------------------------------------+
```

### 5.2. Strategi Rilis Multi-Platform: "Web-First -> PWA -> Mobile App"
Berdasarkan analisis kebutuhan pengguna (mahasiswa) dan kapasitas tim beranggotakan 2 Frontend Developer (Rozin & Alif):
1. **Fase 1 (MVP Lomba): Web-First Mobile-Responsive:**
   - **Zero Friction:** Mahasiswa yang sedang mengalami kepanikan atau kecemasan membutuhkan akses instan tanpa hambatan harus mengunduh file besar dari Play Store.
   - **Kecepatan Pitching & Demo:** Penguji/juri lomba dapat langsung mengakses dan mencoba seluruh alur melalui tautan URL tanpa hambatan instalasi perangkat.
   - **Bebas Hambatan App Store:** Menghindari penundaan proses moderasi/review toko aplikasi serta biaya pendaftaran akun developer di awal.
2. **Jembatan Transisi: PWA (Progressive Web App):**
   - Web dikonfigurasikan dengan `manifest.json` dan *service worker*, memungkinkan pengguna menyematkan aplikasi langsung ke layar utama (*Add to Home Screen*) dengan ikon mandiri dan tampilan *standalone fullscreen*.
3. **Fase 2: Ekspansi Native Mobile App (React Native / Expo):**
   - Dibangun setelah alur bisnis tervalidasi pada versi web.
   - Menggunakan **React Native (Expo)** agar Rozin dan Alif dapat memanfaatkan kembali hingga 70-80% logika bisnis (API services, custom hooks, state management, dan socket parser) yang telah ditulis di React Web tanpa harus mempelajari bahasa baru seperti Dart/Flutter.
   - Membuka kapabilitas perangkat keras native: *Native Push Notifications* untuk pengingat jadwal konsultasi dan *Background Audio Playback* untuk fitur audio meditasi saat layar ponsel mati.

### 5.3. Arsitektur Antarmuka: Pemisahan Zona Publik vs Dashboard Aplikasi (Dual-State Interface)
Untuk mengatasi perbedaan tujuan pengguna antara *calon klien* yang baru datang dengan *klien aktif*, antarmuka web Humind dibagi secara terstruktur menjadi dua zona utama:

1. **Zona Publik (Public Landing Page - Rute `/`):**
   * **Target:** Pengunjung umum / belum terautentikasi (mengadopsi efektivitas visual Riliv Web).
   * **Konten Inti:** Hero section persuasif ("Tempat Pikiranmu Beristirahat dan Didengar"), statistik kredibilitas & nomor izin SIPP, filter cepat direktori psikolog, widget mengambang Humind Buddy, serta tombol CTA *"Daftar / Masuk"*.
   * **Navigasi:** Menggunakan *Top Navbar* standar dengan logo, tautan informasi, dan tombol autentikasi.
2. **Zona Aplikasi (Authenticated App Dashboard - Rute `/app/*` atau `/dashboard`):**
   * **Target:** Klien yang telah login / terautentikasi (mengadopsi efektivitas *in-app daily experience* Riliv Mobile).
   * **Konten Inti:** Sapaan personal (*"Hai, [Nama/Alias]"*), kartu Mood Check-in 10 detik, kartu kebiasaan sehat harian (habit checklist), serta kartu tiket sesi konseling aktif.
   * **Navigasi Adaptif (*Responsive Behavior*):**
     * **Pada Layar Desktop / Laptop ($\ge 768\text{px}$):** Menggunakan *Top Navbar* atau *Sidebar* modern yang memuat menu Dashboard, Konseling, Wellness, dan Profil Pengguna.
     * **Pada Layar Smartphone ($< 768\text{px}$ / PWA):** Menu otomatis berpindah ke **Bottom Navigation Bar** di bawah layar (`Home`, `Konseling`, `Wellness`, `Profil`) demi kenyamanan jempol (*thumb-zone accessibility*) layaknya membuka aplikasi mobile native.

---

## 6. Functional Requirements: Phase 1 (Core MVP)

---

### Fitur 1.1: Autentikasi & Manajemen Akun (Dengan Mode Curhat Anonim)

- **Tujuan Fitur:**  
  Memfasilitasi pendaftaran dan login pengguna secara aman, sekaligus memberikan opsi pengaturan nama samaran (alias) agar mahasiswa merasa bebas bercerita tanpa takut stigma atau identitasnya tersebar di kalangan rekan kampus.
- **Aktor:** Pengguna (Mahasiswa/Client), Psikolog Mitra, Administrator Sistem.
- **Prekondisi:** Pengguna memiliki koneksi internet dan email/nomor kontak yang valid.

#### Business Rules (BR-1.1):
1. **Pemisahan Data Identitas Legal vs Identitas Konseling:**
   - Sistem wajib mencatat data akun riil (Nama Lengkap, Email, Nomor Telepon) untuk keperluan administrasi, verifikasi pembayaran, dan kepatuhan hukum/kontak darurat.
   - Pengguna memiliki opsi untuk mengaktifkan **Mode Curhat Anonim** dengan memasukkan `Alias Name` (contoh: "Kawan Biru", "Pelajar Rehat").
2. **Kerahasiaan di Ruang Konsultasi:**
   - Apabila Mode Curhat Anonim aktif, antarmuka psikolog hanya menampilkan `Alias Name` dan data konteks umum (misal: kategori masalah dan usia), tanpa menampilkan nama lengkap, email, atau nomor telepon pribadi pengguna.
   - Rekam medis/catatan klinis terikat secara aman pada entitas akun pengguna di database terisolasi.
3. **Onboarding Portal & Future Campus Teaser (Coming Soon):**
   - Pada halaman selamat datang/login awal, antarmuka menyajikan pemilih jalur:
     - **Mahasiswa Mandiri / Personal (Aktif):** Alur pendaftaran mandiri standar (B2C) dengan pembayaran per sesi.
     - **Mahasiswa Kampus Mitra (Badge: *Coming Soon*):** Jalur kemitraan universitas (B2B2C). Ketika diklik, memunculkan modal informatif: *"Segera Hadir: Akses konseling gratis tersubsidi via SSO kampusmu! Ingin BEM/Kampusmu bermitra dengan Humind? [Ajukan Kemitraan Kampus]"*.

#### Main Flow (Alur Utama):
1. Pengguna membuka halaman pendaftaran/login Humind dan memilih opsi *"Individu/Mahasiswa"*.
2. Pengguna mendaftarkan akun menggunakan email dan kata sandi yang aman.
3. Pada saat melengkapi profil awal atau sebelum memulai sesi konseling, pengguna diberikan opsi: *"Gunakan Nama Asli"* atau *"Gunakan Nama Samaran (Mode Curhat Anonim)"*.
4. Pengguna memilih Mode Curhat Anonim dan memasukkan nama alias yang diinginkan.
5. Sistem menyimpan alias tersebut dan menetapkannya sebagai tampilan publik pada ruang chat konseling.

#### Alternative & Edge Cases:
- **Pengguna Mengklik Tombol Mahasiswa Kampus Mitra:** Sistem tidak mengarahkan ke error 404, melainkan membuka modal pop-up informatif program kemitraan kampus (*coming soon teaser*) lengkap dengan formulir singkat kontak BEM/kemahasiswaan.
- **Pengguna Ingin Mengubah Alias:** Pengguna dapat mengubah nama samaran melalui menu pengaturan profil sebelum sesi booking baru dimulai.
- **Penggunaan Nama Samaran Tidak Pantas/SARA:** Sistem memvalidasi alias terhadap daftar kata terlarang (*blacklist keywords*). Jika terdeteksi, sistem meminta pengguna memasukkan alias alternatif.

#### Acceptance Criteria (AC-1.1):
- [ ] Pengguna dapat mendaftar dan login dengan email serta password yang terenkripsi.
- [ ] Terdapat opsi input `Alias Name` pada profil pengguna.
- [ ] Di sisi psikolog, saat sesi chat berlangsung, nama yang tertera adalah `Alias Name` jika pengguna mengaktifkannya.
- [ ] Data nama asli pengguna tidak pernah dikirim ke antarmuka klien psikolog pada saat mode anonim aktif.
- [ ] Halaman login/onboarding awal memuat tombol pembeda jalur Mahasiswa Mandiri (aktif) dan Mahasiswa Kampus Mitra (badge *Coming Soon* dengan modal interaktif).

---

### Fitur 1.2: Direktori & Profil Psikolog Berlisensi Berbasis Spesialisasi

- **Tujuan Fitur:**  
  Menyediakan katalog psikolog terverifikasi yang mudah dipahami oleh mahasiswa melalui kurasi masalah kontekstual, nomor legalitas resmi (SIPP), kredibilitas profesional, dan penautan ke bidang spesialisasi yang relevan.
- **Aktor:** Pengguna (Mahasiswa/Client), Psikolog Mitra.
- **Prekondisi:** Direktori telah diisi oleh psikolog yang telah melalui proses verifikasi nomor SIPP oleh tim Humind.

#### Business Rules (BR-1.2):
1. **Wajib Nomor SIPP (Kredibilitas):** Setiap profil psikolog yang dipublikasikan **wajib** mencantumkan Nomor Surat Izin Praktik Psikologi (SIPP) aktif yang terverifikasi. Profil tanpa SIPP tidak dapat ditampilkan di direktori publik.
2. **Kategori Spesialisasi Bahasa Manusia (Killer Feature Segmen Kampus):**
   Direktori dan profil psikolog terhubung dengan 6 master spesialisasi masalah mahasiswa:
   - **Burnout Tugas:** Khusus kelelahan akademik, skripsi macet, tugas menumpuk, stres ekspektasi IPK/prestasi.
   - **Kecemasan Finansial:** Khusus biaya kuliah (UKT), biaya hidup anak rantau, pengelolaan uang saku bulanan, dan tekanan finansial keluarga.
   - **Insomnia & Overthinking:** Khusus pola tidur kacau, pikiran berputar di malam hari (*night rumination*), dan kecemasan tanpa sebab jelas.
   - **Toxic Circle & Hubungan:** Khusus dinamika pertemanan kampus yang melelahkan, konflik organisasi/kepanitiaan, *people-pleasing*, atau masalah relasi asmara.
   - **Krisis Arah Karir:** Khusus kebingungan prospek pasca-lulus, merasa salah jurusan, krisis karir pertama (*quarter-life crisis*), dan kecemasan memasuki dunia kerja.
   - **Insecurity & Krisis PD:** Khusus rasa minder akibat perbandingan sosial di medsos/LinkedIn, *imposter syndrome*, takut presentasi/bicara di depan umum, dan masalah citra diri (*self-worth*).
3. **Pemisahan Tarif dari Profil Psikolog:** Profil psikolog tidak menetapkan tarif perorangan secara manual, melainkan terstandarisasi melalui pilihan paket layanan pada kalkulator pemesanan (*Dynamic Service Calculator*) demi keseragaman mutu layanan dan kepastian harga bagi mahasiswa.

#### Main Flow (Alur Utama):
1. Pengguna membuka halaman Direktori Psikolog di web Humind.
2. Pengguna melihat daftar kartu psikolog yang memuat: Foto profesional, Nama & Gelar, Badge SIPP terverifikasi, Badge Tag Spesialisasi Masalah, dan Rating rata-rata.
3. Pengguna memilih filter spesialisasi masalah (contoh: *"Burnout Tugas"*).
4. Sistem menyaring daftar psikolog yang memiliki spesialisasi tersebut secara instan.
5. Pengguna dapat mengklik kartu psikolog untuk membaca biografi singkat, pengalaman penanganan kasus, serta ulasan bintang dari klien sebelumnya.

#### Alternative & Edge Cases:
- **Tidak Ada Psikolog yang Cocok:** Tampilkan pesan empati (*empty state*): *"Belum menemukan psikolog dengan spesialisasi ini? Coba reset filter atau lihat semua psikolog yang siap mendengarkanmu."* beserta tombol *Reset Filter*.
- **Psikolog Sedang Tidak Menerima Konsultasi Baru:** Kartu psikolog menampilkan penanda visual *"Sedang Beristirahat"*, dan tombol booking pada profilnya dinonaktifkan.

#### Acceptance Criteria (AC-1.2):
- [ ] Seluruh kartu psikolog menampilkan Foto, Nama Lengkap + Gelar, Badge "SIPP Terverifikasi: [Nomor SIPP]", Tag Kategori Spesialisasi Masalah, dan Rating rata-rata.
- [ ] Tersedia 6 tombol pill filter masalah khas mahasiswa yang berfungsi menyaring hasil daftar secara dinamis.
- [ ] Halaman detail profil memuat ringkasan latar belakang profesional dan keahlian spesialisasi psikolog.

---

### Fitur 1.3: Alur Booking Berbasis Spesialisasi, Kalkulator Layanan Dinamis, & Kalender Ketersediaan

- **Tujuan Fitur:**  
  Menyediakan alur reservasi cerdas bertahap: mulai dari pemilihan masalah/spesialisasi, kustomisasi layanan & perhitungan diskon real-time melalui modal kalkulator, pemilihan tanggal dan psikolog yang tersedia beserta jam praktiknya, hingga pencegahan mutlak terjadinya jadwal ganda (*zero double-booking*).
- **Aktor:** Pengguna (Client), Psikolog Mitra, Sistem Reservasi Humind.
- **Prekondisi:** Pengguna mengakses platform web Humind dan ingin menjadwalkan konseling.

#### Business Rules (BR-1.3):
1. **Durasi Sesi Standar Terkunci (60 Menit):** Tiap sesi telekonseling berdurasi tepat **60 menit** (durasi dikunci tetap pada 60 menit per sesi demi standarisasi sesi klinis dan kenyamanan ritme istirahat).
2. **Kalkulator Layanan Dinamis (Modal "Atur Layanan Konseling"):**
   Sebelum memilih psikolog dan jadwal, pengguna menentukan paket melalui modal interaktif dengan opsi:
   - **Metode Konseling:** `💬 Chat` (Teks Real-Time), `📞 Call` (Panggilan Suara Langsung), atau `📹 Video Call` (Tatap Muka Virtual).
   - **Lama Durasi:** `60 menit` (Terkunci / *fixed*).
   - **Jumlah Sesi:** Pilihan `1 kali sesi`, `2 kali sesi`, atau `4 kali sesi`.
   - **Diskon Bundling Otomatis (Multi-Sesi):**
     - Memilih lebih dari 1 sesi (2 atau 4 sesi) otomatis mengaktifkan diskon paket (misal: 2 sesi diskon 10%, 4 sesi diskon 20%).
   - **Kalkulasi Harga Real-Time:**
     - Di dalam modal langsung muncul estimasi biaya transparan: **Harga Normal (Coret)**, **Potongan Hemat Paket**, dan **Total Bayar**.
     - Pengguna menekan tombol **[Terapkan]** untuk mengonfirmasi konfigurasi layanan.
3. **Penyaringan Psikolog Berdasarkan Tanggal & Ketersediaan Jam:**
   - Setelah paket diterapkan, pengguna memilih tanggal konseling pada kalender interaktif.
   - Sistem menampilkan daftar psikolog yang memenuhi dua kriteria: **(1)** Memiliki keahlian spesialisasi masalah yang dipilih, dan **(2)** Memiliki slot jam praktik yang berstatus *"Tersedia"* pada tanggal tersebut.
   - Slot jam kosong ditampilkan langsung dalam bentuk tombol *chips* yang dapat diklik (misal: `[ 14.00 - 15.00 ]`, `[ 19.00 - 20.00 ]`).
4. **Buffer Time Antar-Sesi:** Sistem memberikan jeda otomatis minimal 15 menit antara satu sesi dengan sesi berikutnya untuk evaluasi psikolog.
5. **Locking Slot Sementara (15 Menit):** Ketika pengguna memilih slot jam dan melangkah ke checkout pembayaran, slot tersebut dikunci (*reserved/locked*) selama maksimal 15 menit. Jika pembayaran tidak diselesaikan dalam 15 menit, slot otomatis dibebaskan kembali untuk pengguna lain.
6. **Batas Waktu Reservasi:** Pengguna hanya dapat memesan slot paling lambat 2 jam sebelum jam praktik dimulai (*lead time buffer*).
7. **Mekanisme Multi-Sesi (Manajemen Kuota Paket):**
   - Apabila pengguna membeli paket 2 atau 4 sesi, pengguna langsung menjadwalkan **Sesi Pertama** pada alur booking saat ini.
   - Sisa sesi (misal: 1 sesi pada paket 2-sesi, atau 3 sesi pada paket 4-sesi) tersimpan sebagai **Kuota Konseling Aktif** di akun pengguna. Pengguna dapat menjadwalkan sesi berikutnya kapan saja melalui menu *"Jadwal Saya"*.
8. **Pemilihan Mode Identitas Sesi (Nama Asli atau Mode Curhat Anonim):**
   Sebelum melangkah ke pembayaran, pengguna cukup menentukan identitas yang ingin ditampilkan pada sesi konseling:
   - **Gunakan Nama Asli:** Menampilkan nama lengkap akun.
   - **Mode Curhat Anonim (Alias):** Menampilkan nama samaran (contoh: "Kawan Biru") untuk menjaga privasi mutlak.
   *(Catatan: Formulir pra-konseling kuesioner ditiadakan sepenuhnya agar alur reservasi mahasiswa instan dan bebas hambatan).*

#### Main Flow (Alur Pemesanan Terpadu):
1. **Pilih Spesialisasi Masalah:** Pengguna memilih kategori masalah yang dialami (contoh: *"Burnout Tugas"*).
2. **Atur Layanan Konseling:** Pengguna membuka modal *"Atur Layanan Konseling"*, memilih metode (`Chat`/`Call`/`Video Call`) dan jumlah sesi (`1`/`2`/`4 sesi`). Modal secara dinamis menampilkan harga normal, potongan diskon, dan total biaya. Pengguna menekan tombol *[Terapkan]*.
3. **Pilih Tanggal:** Pengguna memilih tanggal konseling pada kalender interaktif.
4. **Pilih Psikolog & Slot Jam:** Sistem memunculkan kartu psikolog yang berspesialisasi di bidang tersebut dan memiliki jam praktik di tanggal yang dipilih. Pengguna mengklik salah satu tombol jam yang tersedia.
5. **Pilih Mode Identitas:** Pengguna menentukan mode identitas untuk sesi konseling (*Nama Asli* atau *Mode Curhat Anonim / Alias*).
6. **Kunci Slot & Checkout:** Pengguna menekan *"Lanjut ke Pembayaran"*, slot waktu terkunci selama 15 menit, dan sistem menampilkan invoice pembayaran.

#### Alternative & Edge Cases:
- **Slot Waktu Diambil Pengguna Lain Sebelum Terkunci:** Sistem membatalkan proses lock dan menampilkan notifikasi ramah: *"Maaf, slot waktu ini baru saja dipesan oleh pengguna lain. Silakan pilih slot lain atau psikolog lainnya."*
- **Sesi Kedaluwarsa Saat Checkout:** Transaksi dibatalkan otomatis setelah 15 menit, dan slot jam dikembalikan ke status tersedia.

#### Acceptance Criteria (AC-1.3):
- [ ] Tersedia modal "Atur Layanan Konseling" dengan pilihan Metode (`Chat`, `Call`, `Video Call`), Durasi (terkunci 60 menit), dan Jumlah Sesi (`1`, `2`, `4`).
- [ ] Modal menampilkan kalkulasi harga, potongan diskon bundling (> 1 sesi), dan total biaya secara real-time.
- [ ] Sistem menampilkan psikolog dan slot jam kosong berdasarkan tanggal dan filter spesialisasi yang dipilih.
- [ ] Pengguna dapat memilih mode identitas (Nama Asli atau Alias) dengan mudah sebelum menuju ke pembayaran tanpa dibebani pengisian kuesioner asesmen.
- [ ] Slot waktu otomatis terkunci selama 15 menit saat berada di halaman tagihan pembayaran.
- [ ] Sistem mencegah secara absolut terjadinya *double-booking* pada slot psikolog yang sama.
- [ ] Paket multi-sesi (2 dan 4 sesi) berhasil mencatat sisa kuota sesi di akun klien setelah pembayaran terkonfirmasi.

---

### Fitur 1.4: Sistem Pembayaran Sederhana (Payment Gateway QRIS & Virtual Account)

- **Tujuan Fitur:**  
  Menyediakan metode pembayaran non-tunai yang cepat, otomatis, dan terverifikasi seketika sehingga mahasiswa dapat membayar dengan mudah menggunakan aplikasi m-banking atau e-wallet tanpa perlu konfirmasi manual.
- **Aktor:** Pengguna (Client), Sistem Payment Gateway Mitra, Sistem Backend Humind.
- **Prekondisi:** Pengguna telah mengunci slot waktu konseling dan berada di halaman tagihan (*invoice*).

#### Business Rules (BR-1.4):
1. **Metode Pembayaran MVP:** Mendukung QRIS Dinamis (kompatibel dengan GoPay, OVO, Dana, ShopeePay, BCA/Mandiri QRIS) dan Virtual Account (BCA, Mandiri, BRI, BNI).
2. **Validasi Otomatis via Webhook:** Status pemesanan hanya berubah menjadi *"Dikonfirmasi"* setelah sistem backend menerima callback webhook resmi yang valid dari Payment Gateway.
3. **Kedaluwarsa Pembayaran:** Batas waktu transfer/pembayaran adalah 15 menit sejak kode pembayaran/QRIS diterbitkan.
4. **Kebijakan Pembatalan & Pengembalian Dana (Refund):**
   - Pembatalan oleh pengguna: Dapat dilakukan maksimal 6 jam sebelum sesi dimulai dengan pengembalian dana `[TBD: Persentase/Biaya Admin]`.
   - Pembatalan darurat oleh psikolog: Pengguna berhak mendapatkan penjadwalan ulang (*reschedule*) penuh atau pengembalian dana 100%.

#### Main Flow (Alur Utama):
1. Pengguna diarahkan ke halaman pembayaran yang menampilkan ringkasan pesanan: Nama Psikolog, Tanggal & Jam Sesi, Tarif Konseling, dan Biaya Layanan (jika ada).
2. Pengguna memilih metode: *"QRIS"* atau *"Virtual Account [Pilihan Bank]"*.
3. Sistem menampilkan kode QR dinamis atau nomor Virtual Account beserta penghitung waktu mundur (*countdown timer*) 15 menit.
4. Pengguna menyelesaikan pembayaran melalui aplikasi m-banking atau e-wallet di ponselnya.
5. Payment gateway mengirimkan notifikasi callback ke webhook backend Humind.
6. Antarmuka web pengguna otomatis memperbarui status menjadi *"Pembayaran Berhasil"*, dan menerbitkan tautan masuk ke Ruang Konsultasi.

#### Alternative & Edge Cases:
- **Waktu Pembayaran Habis (Expired):** Transaksi otomatis dibatalkan, status berubah menjadi *"Kedaluwarsa"*, dan slot jadwal dibebaskan kembali.
- **Pembayaran Berhasil tetapi Jaringan Pengguna Terputus:** Pengguna tetap menerima email konfirmasi bukti pembayaran dan tiket reservasi aktif dapat diakses kembali melalui menu *"Jadwal Saya"* setelah login.

#### Acceptance Criteria (AC-1.4):
- [ ] QRIS dinamis dan nomor Virtual Account berhasil di-generate dengan nominal yang sesuai dengan tarif sesi.
- [ ] Terdapat visual timer 15 menit yang menghitung mundur secara akurat.
- [ ] Backend berhasil menangani webhook payment gateway dan mengubah status reservasi menjadi `PAID` / `CONFIRMED`.
- [ ] Pengguna menerima konfirmasi visual instan di antarmuka tanpa perlu refresh manual (via polling atau socket).

---

### Fitur 1.5: Ruang Telekonseling Terpadu (Encrypted Video Call, Voice Call, & Real-Time Chat Consultation)

- **Tujuan Fitur:**  
  Menyediakan ruang telekonseling multi-moda yang aman, privat, terenkripsi, dan intuitif yang memfasilitasi interaksi **Video Call** (tatap muka visual untuk empati mendalam & ekspresi mikro), **Voice Call** (panggilan audio langsung untuk kenyamanan privasi ekstra), serta **Real-Time Chat** pendukung, memastikan nilai manfaat konsultasi berbayar terasa nyata dan manusiawi.
- **Aktor:** Pengguna (Client/Alias), Psikolog Mitra, Server Sinyal WebRTC / Media Provider (LiveKit / Agora / Daily).
- **Prekondisi:** Status reservasi telah berstatus `PAID/CONFIRMED` dan waktu sesi telah tiba (atau 5 menit sebelum jadwal).

#### Business Rules (BR-1.5):
1. **Aksesibilitas Ruang Konsultasi Berdasarkan Waktu:**
   - Ruang konsultasi dapat diakses melalui tombol *"Masuk Ruang Konseling"* mulai 5 menit sebelum jadwal sesi dimulai.
   - Sesi telekonseling otomatis selesai setelah durasi 60 menit berakhir, dengan banner peringatan lembut (*warning prompt*) pada 10 menit dan 5 menit menjelang akhir sesi.
2. **Multi-Moda Interaksi Fleksibel (Video, Voice, & Chat):**
   - Klien dan psikolog dapat berinteraksi secara fleksibel di dalam satu ruangan terpadu:
     - **Mode Video Call:** Kamera aktif dua arah untuk sesi tatap muka interaktif.
     - **Mode Voice Call (Audio-Only):** Kamera dimatikan, hanya mikrofon yang aktif. Sangat cocok bagi mahasiswa yang ingin curhat dengan intonasi suara langsung namun belum siap bertatap muka, atau saat koneksi internet kosan sedang tidak stabil.
     - **Side-Panel Text Chat:** Obrolan teks real-time yang tetap dapat dibuka berdampingan dengan panggilan video/audio untuk membagikan tautan materi koping, catatan reflektif, atau jika salah satu pihak mengalami kendala mikrofon.
3. **Kerahasiaan & Privasi Mode Anonim pada Panggilan:**
   - Apabila pengguna mengaktifkan **Mode Curhat Anonim**, nama yang tampil pada panel video dan chat adalah `Alias Name`.
   - Jika pengguna memilih mematikan kamera (mode suara), antarmuka menampilkan avatar tenang (*peaceful placeholder avatar*) dengan nama alias pengguna, tanpa membocorkan identitas visual.
   - Psikolog dianjurkan menyalakan kamera untuk memberikan rasa aman, profesionalisme, dan kehangatan manusiawi (*human warmth*).
4. **Kontrol Media Pengguna & Psikolog:**
   - Bar kendali mengambang (*floating control bar*) menyediakan tombol:
     - `🎙️ Mute / Unmute Mikrofon`
     - `📹 Nyalakan / Matikan Kamera`
     - `💬 Buka / Tutup Panel Chat Teks`
     - `🆘 Butuh Bantuan Mendesak? (Hotline Krisis Langsung)`
     - `📞 Akhiri Sesi (End Call)`
5. **Integritas & Enkripsi Media Stream:**
   - Seluruh transmisi audio dan video dienkripsi secara end-to-end transport menggunakan standar WebRTC (DTLS-SRTP).
   - Seluruh transmisi teks chat dilindungi enkripsi WSS/TLS dan data di basis data dilindungi enkripsi *at rest*.
   - Menggunakan arsitektur WebRTC modern berbasis SDK teruji (seperti LiveKit Cloud atau Agora) dengan mekanisme *Adaptive Bitrate & Audio-Only Fallback* otomatis jika koneksi internet pengguna melemah.
#### Main Flow (Alur Utama):
1. Saat jam konseling tiba, pengguna dan psikolog mengklik tombol *"Masuk Ruang Konsultasi"* pada dashboard akun masing-masing.
2. Pengguna melewati *Pre-Call Lobby* singkat untuk menguji mikrofon dan kamera (klien dapat memilih menyalakan kamera atau masuk dengan audio saja).
3. Keduanya terhubung ke ruang telekonseling terpadu. Panel psikolog menampilkan kartu ringkasan klien (nama alias/asli yang dipilih dan topik spesialisasi masalah).
4. Sesi telekonseling berjalan secara real-time (Video/Voice + Side Chat). Indikator durasi sesi (60 menit) menghitung mundur secara sinkron di bagian atas layar.
5. Pada menit ke-50 (10 menit sebelum selesai), sistem memunculkan banner pengingat lembut: *"Waktu konseling tersisa 10 menit. Silakan mulai merangkum sesi hari ini."*
6. Pada menit ke-60, sesi panggilan dan chat ditutup secara otomatis, status sesi beralih menjadi `COMPLETED`, dan sistem menampilkan modal evaluasi bintang/rating (1–5 bintang serta ulasan pengalaman opsional) kepada klien.
7. Riwayat sesi konseling (tanggal, nama psikolog, durasi) tersimpan di tab *"Riwayat Konseling"*.

#### Alternative & Edge Cases:
- **Koneksi Terputus di Tengah Sesi:** Klien atau psikolog yang kehilangan sinyal dapat langsung masuk kembali ke ruang konsultasi selama durasi waktu 60 menit belum habis tanpa kehilangan riwayat pesan teks.
- **Koneksi Internet Klien Lemah di Kosan:** Sistem otomatis mendowngrade resolusi video atau menghentikan video stream dan mempertahankan audio stream agar suara psikolog tetap jernih tanpa putus (*graceful degradation*).
- **Psikolog Terlambat Hadir (No-Show):** Jika psikolog belum masuk ke ruang sesi dalam 15 menit pertama, klien dapat menekan tombol bantuan untuk mengajukan penjadwalan ulang penuh (*reschedule*) atau *refund*.

#### Acceptance Criteria (AC-1.5):
- [ ] Pengguna dan psikolog dapat terhubung dalam panggilan Video dan Audio dua arah secara real-time dengan latensi rendah (< 400ms).
- [ ] Kontrol media (Mute/Unmute Mic, On/Off Kamera, End Call) berfungsi instan dan responsif di perangkat desktop maupun mobile browser.
- [ ] Klien dapat memilih mematikan kamera dan menggunakan Voice Call dengan tampilan avatar nama alias yang tenang.
- [ ] Panel chat teks dapat dibuka-tutup berdampingan dengan layar video tanpa mengganggu jalannya panggilan.
- [ ] Panel psikolog dapat melihat kartu ringkasan klien dan mode identitas yang dipilih sebelum obrolan dimulai.
- [ ] Terdapat penunjuk sisa waktu sesi (*countdown timer*) yang sinkron antara sisi klien dan psikolog.
- [ ] Ruang sesi tertutup otomatis tepat setelah durasi 60 menit berakhir.
- [ ] Klien disajikan modal evaluasi bintang (1–5) dan ulasan pengalaman konseling setelah sesi selesai.

---

### Fitur 1.6: SOP & Protokol Penanganan Krisis Mental Darurat (Referensial: Best Practice Riliv)

- **Tujuan Fitur / SOP:**  
  Melindungi keselamatan nyawa pengguna serta memastikan kepatuhan etika klinis dan aspek legalitas platform telekonseling dengan menyediakan protokol mitigasi krisis mental akut (seperti kecenderungan melukai diri sendiri atau risiko bunuh diri).
- **Aktor:** Pengguna (Client), Psikolog Mitra, Sistem Humind, Penyedia Layanan Kedaruratan Nasional.
- **Prekondisi:** Pengguna mengakses platform web Humind, berada dalam alur reservasi, atau sedang menjalani sesi chat konseling aktif.

#### Business Rules & Kebijakan Legalitas (BR-1.6):
1. **Batasan Layanan Non-Kedaruratan (Non-Crisis Disclaimer):**
   - Humind secara tegas memposisikan diri sebagai platform pendampingan psikologis non-kritis dan **bukan instalasi gawat darurat psikiatri**.
   - Setiap pengguna wajib menyetujui *Pernyataan Batasan Tanggap Darurat* sebelum menyelesaikan reservasi pertama kali.
2. **Ketersediaan Jalur Bantuan Persisten:**
   - Akses menuju kontak darurat nasional wajib tersedia secara persisten di seluruh halaman web (header/footer) dan dapat dibuka kapan saja tanpa mengharuskan pengguna login atau membayar.
3. **Kerahasiaan vs Keselamatan Nyawa (Ethical Exception):**
   - Sesuai kode etik psikologi, kerahasiaan sesi konseling memiliki pengecualian mutlak apabila terdapat ancaman nyata terhadap keselamatan nyawa pengguna atau orang lain.

#### Komponen Implementasi & Alur Penanganan (Ala Riliv):
1. **Pre-Session Disclaimer Modal:**
   - Saat pengguna pertama kali mengonfirmasi booking, muncul dialog peringatan tenang:  
     *"Humind hadir untuk mendengarkan dan mengurai masalahmu. Namun, layanan ini tidak dirancang untuk menangani situasi krisis akut atau kondisi yang mengancam nyawa. Jika Anda membutuhkan pertolongan segera, hubungi layanan darurat 112 atau hotline krisis yang tersedia."*
2. **Tombol "Bantuan Mendesak / Hotline Darurat" di Ruang Chat:**
   - Pada ruang chat konseling, terdapat ikon/tombol tenang di sudut atas: `🆘 Butuh Bantuan Mendesak?`.
   - Menekan tombol ini tidak akan memutus koneksi chat, melainkan membuka lembar pop-up (*sheet modal*) yang menampilkan nomor darurat resmi.
3. **Direktori Rujukan Hotline Darurat Resmi Indonesia:**
   - **Layanan SEJIWA (Kemenkes RI):** Hubungi `119` (tekan ekstensi `8`) — Layanan konseling krisis psikologis 24 jam bebas pulsa.
   - **LISA Suicide Prevention Helpline:** `0811-3815-472` — Layanan pendampingan krisis dan pencegahan bunuh diri 24/7 (Bahasa Indonesia & Inggris).
   - **Yayasan Pulih:** `0811-8436-633` — Layanan konseling krisis trauma dan pemulihan psikologis.
   - **Layanan Kedaruratan Terpadu Nasional (Polisi / Ambulans / SAR):** `112`.
4. **Protokol Intervensi Psikolog di Sesi Konseling (In-Session Crisis Escalation):**
   - Jika dalam ruang chat pengguna menyampaikan pernyataan krisis eksplisit (*active suicidal ideation* / *self-harm*):
     - Psikolog menerapkan teknik *grounding* dan stabilisasi emosional.
     - Psikolog mengaktifkan tombol di panel psikolog: *"Kirim Kartu Bantuan Darurat"*.
     - Sistem memunculkan kartu interaktif di ruang chat pengguna berisi tombol cepat panggilan langsung (*one-click call*) ke hotline darurat SEJIWA dan kontak pendamping darurat.
     - Psikolog mengarahkan pengguna secara persuasif untuk mencari pertolongan medis langsung ke Instalasi Gawat Darurat (IGD) rumah sakit terdekat.

#### Acceptance Criteria (AC-1.6):
- [ ] Disclaimer batasan layanan krisis tampil pada saat konfirmasi pemesanan dan wajib disetujui satu kali oleh klien.
- [ ] Tombol pintas "Hotline Bantuan Darurat" selalu dapat diakses dari header/footer dan dari dalam ruang chat.
- [ ] Seluruh nomor hotline (119 ext 8, LISA 0811-3815-472, 112) dapat diklik langsung (*tel: link*) di perangkat mobile/desktop.
- [ ] Psikolog memiliki kontrol aksi untuk memunculkan kartu informasi darurat interaktif ke tampilan chat pengguna.

---

### Fitur 1.7: Panic Button & Grounding Cepat 60 Detik (Visual Box Breathing Langsung di Beranda)

- **Tujuan Fitur:**  
  Menyediakan pertolongan pertama relaksasi cepat (*instant grounding*) tanpa hambatan (*zero friction*) bagi mahasiswa yang sedang mengalami serangan panik (*panic attack*), sesak akibat cemas berlebih, atau ketegangan kognitif akut, tanpa perlu login atau membayar.
- **Aktor:** Pengguna Umum (Guest / Mahasiswa).
- **Prekondisi:** Pengguna membuka platform web Humind di perangkat mobile atau desktop.

#### Business Rules (BR-1.7):
1. **Aksesibilitas Tanpa Syarat (Zero Friction Access):**
   - Tombol Grounding cepat disematkan secara mencolok di beranda (*hero section*) dan navbar/floating button:  
     `"Lagi Panik atau Cemas? Tarik Napas Bersama Kami (60 Detik)"`.
   - Dapat diakses langsung oleh siapa saja tanpa perlu mendaftar akun atau login terlebih dahulu.
2. **Animasi Visual Terpandu (Box Breathing 4-4-4-4):**
   - Menggunakan teknik ilmiah *Box Breathing* yang divalidasi secara klinis:
     - **Tarik Napas (4 detik):** Lingkaran visual mengembang lembut dengan warna hijau sage/mint menenangkan.
     - **Tahan Napas (4 detik):** Lingkaran stabil dengan teks panduan: *"Tahan sebentar..."*.
     - **Hembuskan Perlahan (4 detik):** Lingkaran mengempis perlahan dengan teks: *"Lepaskan semua beban..."*.
     - **Rehat Tenang (4 detik):** Lingkaran diam sejenak sebelum siklus berikutnya.
3. **Audio Penenang Lembut (Opsional):**
   - Disertai efek suara ambient tenang (suara deburan ombak lembut atau lonceng meditasi) yang dapat diaktifkan/dinonaktifkan (*toggle mute*) oleh pengguna.
4. **Jalur Lanjutan Pasca-Grounding (Call-to-Action Tenang):**
   - Setelah 3–5 siklus (sekitar 60–90 detik), layar memunculkan pesan validasi hangat:  
     *"Napasmu sudah lebih teratur. Kamu aman di sini. Apa yang ingin kamu lakukan selanjutnya?"*
      - Pilihan 1: *"Ulangi Latihan Pernapasan"*
      - Pilihan 2: *"Check-in Mood Harian (Daily Mood Tracker)"*
      - Pilihan 3: *"Cari Psikolog yang Memahami Masalahmu"*
      - Pilihan 4: `🆘 Butuh Bantuan Darurat? (Hotline Bebas Pulsa 119 ext 8)`

#### Main Flow (Alur Utama):
1. Pengguna membuka web Humind dan mengklik tombol *"Lagi Panik? Tarik Napas Bersama Kami"*.
2. Layar membuka modal layar penuh (*zen mode modal*) dengan latar belakang gelap/redup yang menenangkan mata.
3. Animasi visual lingkaran pernapasan otomatis mulai berdetak dengan ritme 4-4-4-4.
4. Pengguna mengikuti ritme visual selama 60 detik.
5. Setelah selesai, pengguna disajikan pilihan langkah berikutnya (mood tracker, direktori psikolog, atau hotline krisis).

#### Acceptance Criteria (AC-1.7):
- [ ] Tombol Grounding Cepat dapat diakses langsung dari beranda tanpa harus login.
- [ ] Animasi visual lingkaran napas Box Breathing (4-4-4-4) berjalan halus dan akurat secara tempo waktu.
- [ ] Tersedia tombol kontrol audio (suara latar penenang) yang dapat dihidupkan/dimatikan.
- [ ] Terdapat tombol keluar (*exit zen mode*) kapan saja dengan satu sentuhan.
- [ ] Tampilan pasca-grounding memuat opsi lanjutan yang relevan dan tautan cepat ke hotline bantuan darurat.

---

### Fitur 1.8: Daily Wellness – Daily Mood Tracker & Coping Habit Check-in

- **Tujuan Fitur:**  
  Menyediakan ruang perawatan diri harian (*self-care & emotional check-in*) yang cepat, ringan (< 15 detik), dan privat untuk membantu mahasiswa mengenali pola suasana hati harian, membangun kebiasaan koping positif, serta meninjau tren kesehatan mental pribadi secara mandiri.
- **Aktor:** Pengguna (Mahasiswa Terautentikasi), Psikolog Mitra (Penerima Insight Klinis), Humind Buddy (Penerima Konteks Emosi).
- **Prekondisi:** Pengguna telah memiliki akun dan login ke platform web Humind.

#### Business Rules (BR-1.8):
1. **Quick Mood Check-in (< 15 Detik):**
   - Menggunakan skala 5 indikator emosi visual yang ramah mahasiswa:
     - 😫 `1 - Burnout / Sangat Berat`
     - 😰 `2 - Cemas / Overthinking`
     - 😐 `3 - Netral / Biasa Aja`
     - 😌 `4 - Tenang / Mulai Lega`
     - 😊 `5 - Bersemangat / Stabil`
   - Disertai pilihan *Pill Tags* pemicu kontekstual (bisa multi-select): `#Skripsi`, `#TugasKuliah`, `#UangKos`, `#Pertemanan`, `#Keluarga`, `#TidurBerantakan`, `#Karir`, `#Asmara`.
   - Pengguna dapat mengisi check-in mood lebih dari 1 kali per hari, namun visual kalender/dashboard menampilkan status mood terkini atau rata-rata harian.
2. **Coping Micro-Habit Checklist:**
   - 3 kebiasaan harian mikro yang dapat dicentang:
     - [ ] Hidrasi cukup (minum air 2L)
     - [ ] Rehat layar & peregangan (15 menit)
     - [ ] Latihan pernapasan relaksasi 2 menit (tersedia tombol cepat untuk memandu animasi *Box Breathing* visual 4-4-4 langsung di web).
3. **Integrasi Ekosistem Lintas Modul (Sinergi Klinis & AI):**
   - **Koneksi ke Dashboard Refleksi:** Pengguna dapat meninjau grafik tren mood 7–30 hari terakhir di dashboard aplikasi sebagai panduan kesadaran diri (*self-awareness*).
   - **Koneksi ke Humind Buddy (AI):** Humind Buddy dapat membaca ringkasan tren emosi 3–7 hari terakhir pengguna untuk memberikan sambutan empatis yang terpersonalisasi pada kartu sapaan.
4. **Privasi & Keamanan Data Mood:**
   - Data suasana hati disimpan dengan aman di database terisolasi per akun pengguna.

#### Main Flow (Alur Utama):
1. Pengguna membuka dashboard Humind dan masuk ke tab *"Daily Wellness"* (atau widget ringkas di beranda aplikasi).
2. Pengguna memilih emoji mood hari ini dan menekan 1–2 tag pemicu utama.
3. Sistem menyimpan check-in mood ke tabel `mood_logs`, memperbarui visualisasi *streak calendar* 7–30 hari terakhir, dan menampilkan pesan afirmasi hangat: *"Terima kasih sudah jujur dengan perasaanmu hari ini."*
4. Pengguna dapat mencentang micro-habit harian atau menjalankan panduan visual latihan pernapasan 2 menit.

#### Alternative & Edge Cases:
- **Deteksi Emosi Ekstrem Berturut-turut:** Jika pengguna mencatat skor mood `1` (*Burnout / Sangat Berat*) selama 3 hari berturut-turut, sistem memunculkan kartu rekomendasi hangat: *"Pikiranmu sepertinya sedang memikul beban yang sangat berat. Meringankannya bersama ahli mungkin bisa membantumu. Mau bicarakan ini dengan konselor kami atau ngobrol dulu bareng Humind Buddy?"*

#### Acceptance Criteria (AC-1.8):
- [ ] Tersedia antarmuka pemilih skala mood 1-5 dengan emoji dan chip tag pemicu masalah khas mahasiswa.
- [ ] Visualisasi tren mood 7–30 hari ditampilkan dalam bentuk kartu kalender warna/grafik yang responsif.
- [ ] Tersedia checklist 3 kebiasaan koping mikro harian yang interaktif.
- [ ] Tersedia panduan visual animasi pernapasan relaksasi sederhana di antarmuka web.
- [ ] Riwayat catatan suasana hati tersimpan secara aman di database dan dapat diakses mandiri oleh pengguna melalui dashboard aplikasi.

---

## 7. Roadmap Fitur: Phase 2 (Retensi Lanjutan, AI Buddy 24/7, & Ekspansi Native Mobile)

Fitur-fitur pada Fase 2 dirancang untuk memperluas kapabilitas retensi pengguna (*daily active users*), utilisasi fitur perangkat keras native smartphone, kecerdasan buatan terpersonalisasi, dan membangun kebiasaan positif yang lebih mendalam:

### 7.1. Humind Buddy – AI First-Listener & Psychologist Matcher (Integrasi LLM 24/7)
- **Deskripsi:** Sahabat curhat awal berbasis AI (LLM API dengan guardrail ketat) yang aktif 24/7 tanpa biaya, membantu mahasiswa memetakan benang kusut di kepala tanpa rasa malu/gengsi, menjawab pertanyaan seputar privasi & tarif, serta merekomendasikan psikolog yang paling relevan.
- **Rasional:** Di Fase 1 (MVP), widget ditampilkan sebagai kartu teaser interaktif berstatus *"Coming Soon"* untuk menjaga fokus tim pada telekonseling utama. Di Fase 2, bot diaktifkan penuh dengan integrasi API LLM (Gemini) dan protokol keselamatan krisis otomatis.

### 7.2. Artikel Edukasi Singkat (Micro-Articles)
- **Deskripsi:** Konten bacaan edukatif berbasis riset yang dikurasi khusus oleh tim (Product Research/Fadiyah) dengan format bacaan kilat 2-3 menit.
- **Fokus Topik:** Teknik manajemen waktu skripsi tanpa stres, mekanisme koping (*coping mechanisms*) saat pekan ujian, mengenali *toxic relationship*, dan cara mengatasi sindrom imposter (*imposter syndrome*).

### 7.3. Aplikasi Mobile Native (React Native / Expo)
- **Deskripsi:** Menghadirkan aplikasi mobile multi-platform (Android & iOS) yang didistribusikan melalui Google Play Store untuk memaksimalkan retensi dan utilisasi perangkat keras smartphone.
- **Fitur Khusus Native:**
  1. **Native Push Notifications:** Pengingat otomatis 15 menit dan 5 menit sebelum sesi konseling dimulai untuk meminimalisasi tingkat ketidakhadiran (*no-show*).
  2. **Background Audio Player:** Memungkinkan panduan pernapasan (*box breathing*) dan audio relaksasi tidur (*soundscapes*) tetap berputar di latar belakang saat layar ponsel terkunci.
  3. **Local Offline Cache:** Kemampuan menyimpan draf jurnal emosi dan mengunduh artikel edukasi untuk dibaca saat koneksi internet kampus tidak stabil.

### 7.4. Humind for Campus (B2B2C / Student Assistance Program - SAP)
- **Deskripsi:** Membuka kanal kemitraan resmi dengan institusi perguruan tinggi, fakultas, rektorat, dan BEM di Indonesia untuk menyediakan layanan konseling bersubsidi bagi mahasiswa.
- **Fitur & Kapabilitas Kemitraan Kampus:**
  1. **Single Sign-On (SSO) & Domain Email Kampus:** Mahasiswa dapat masuk langsung menggunakan kredensial email institusi kampus (contoh: `@student.ac.id`, Google Workspace for Education, atau SAML SSO).
  2. **Alokasi Kuota Konseling Kampus:** Mahasiswa menerima jatah sesi konseling gratis (misal: 3–5 sesi per semester) yang ditanggung sepenuhnya oleh dana kemahasiswaan/beasiswa tanpa membebani dompet mahasiswa.
  3. **Dashboard Analitik Agregat Kampus (*Campus Wellbeing Index*):** Menyediakan portal dashboard analitik bagi biro bimbingan konseling universitas untuk memantau tren beban mental mahasiswa (misal: lonjakan stres menjelang UTS/UAS, persentase burnout skripsi) **secara agregat dan 100% anonim** tanpa pernah membocorkan identitas maupun isi curhat individu. Hal ini membantu pimpinan universitas mengambil kebijakan akademik yang lebih sehat dan berempati.

---

## 8. Non-Functional Requirements (NFR)

### 8.1. Keamanan Data & Privasi (Security & Privacy)
- **Kepatuhan Privasi Data Medis/Konseling:** Seluruh rekaman percakapan konseling dikategorikan sebagai Data Pribadi Sensitif. Akses data hanya diberikan kepada klien dan psikolog yang bersangkutan.
- **Enkripsi Data:** Wajib menerapkan enkripsi end-to-end transport menggunakan HTTPS/TLS v1.3 untuk komunikasi web dan WSS (WebSocket Secure) untuk komunikasi pesan real-time. Data sensitif pada basis data wajib dienkripsi saat istirahat (*encryption at rest* menggunakan AES-256).
- **Isolasi Identitas Anonim:** Database wajib memisahkan atau mengenkripsi referensi antara profil alias chat publik dengan tabel identitas legal pengguna.

### 8.2. Kinerja & Kecepatan Respon (Performance)
- **Kecepatan Muat Awal (Initial Page Load):** Halaman publik (landing page dan direktori psikolog) harus memiliki nilai *First Contentful Paint* (FCP) < 1.8 detik dan *Largest Contentful Paint* (LCP) < 2.5 detik pada koneksi standar 4G.
- **Latensi Pesan Chat:** Latensi pengiriman dan penerimaan pesan real-time melalui WebSocket tidak boleh melebihi 300 ms dalam kondisi jaringan normal.
- **Ketersediaan Layanan (Uptime):** Target ketersediaan platform minimum 99.5% selama jam operasional aktif konseling.

### 8.3. Desain Responsif & Kompatibilitas Browser
- **Responsivitas Antarmuka:** Antarmuka web harus sepenuhnya fungsional dan proporsional pada rentang resolusi layar:
  - Mobile: 360px - 480px.
  - Tablet: 768px - 1024px.
  - Desktop / Laptop: 1280px ke atas.
- **Kompatibilitas:** Mendukung versi stabil terbaru dari Google Chrome, Mozilla Firefox, Apple Safari, dan Microsoft Edge.

### 8.4. Aksesibilitas & Kenyamanan Mental (Calm Ergonomics)
- **Calm UI Standards:** Menghindari warna-warna neon mencolok, elemen berkedip agresif, atau *pop-up* yang mengejutkan.
- **Kontras Teks:** Memenuhi standar kontras minimum WCAG 2.1 Level AA (minimal rasio 4.5:1 untuk teks biasa) agar nyaman dibaca pada malam hari atau kondisi mata lelah.

---

## 9. Technical Considerations (Proposed - Non-Final)

> **Catatan Penting:**  
> Bagian ini merupakan **usulan rancangan awal (Proposed Draft)** untuk memandu tim Backend (Atta, Laerra) dan Frontend (Rozin, Alif). Keputusan arsitektur final akan ditetapkan setelah evaluasi kapasitas infrastruktur dan pengujian beban.

### 9.1. Usulan Arsitektur Sistem (Proposed Architecture)
- **Frontend Layer:** Single Page Application (SPA) berbasis React / Vite dengan state management yang ringan dan styling modular berbasis design token identitas Humind.
- **Backend API Layer:** RESTful API untuk modul otentikasi, profil direktori, manajemen jadwal, dan pemrosesan transaksi webhook.
- **Real-Time Communication Layer:** WebSocket Server (misalnya memanfaatkan Node.js/Socket.io atau provider managed service WebSocket) untuk menangani *room-based event* sesi chat konseling.
- **Database Layer:** Relational Database (seperti PostgreSQL) untuk menjamin integritas transaksi booking slot dan referensi data relasional konseling.

### 9.2. Usulan Skema Basis Data Relasional Awal (Proposed ERD Model)

```
+--------------------------+         +-------------------------------+         +---------------------+
|         profiles         |         |     psychologist_profiles     |         |     specialties     |
+--------------------------+         +-------------------------------+         +---------------------+
| id (PK, FK auth.users)   |         | id (PK)                       |         | id (PK)             |
| email                    |         | user_id (FK -> profiles)      |         | slug (code)         |
| legal_full_name          |         | full_name_with_title          |         | display_name        |
| alias_name (curhat anon) |         | sipp_number (UNIQUE)          |         | description         |
| phone_number             |         | bio_summary                   |         +---------------------+
| role (client/psycho)     |         | avatar_url                    |                    ▲
| created_at               |         | rating_avg                    |                    │ (many-to-many)
+--------------------------+         | is_active (bool)              |         +-------------------------+
        │                            +-------------------------------+         | psychologist_specialties|
        │                                     ▲              ▲                 +-------------------------+
        │                                     │              │                 | psychologist_id (FK)    |
        │                                     │              │                 | specialty_id (FK)       |
        ▼                                     │              │                 +-------------------------+
+--------------------------+                  │              │
|   counseling_packages    |                  │   +--------------------------+
+--------------------------+                  │   |  psychologist_schedules  |
| id (PK)                  |                  │   +--------------------------+
| counseling_method (enum) |                  │   | id (PK)                  |
| session_count (1, 2, 4)  |                  │   | psychologist_id (FK)     |
| duration_minutes (60m)   |                  │   | day_of_week (1-7)        |
| original_price_idr       |                  │   | start_time (TIME)        |
| discount_percentage      |                  │   | end_time (TIME)          |
| final_price_idr          |                  │   | is_active (bool)         |
+--------------------------+                  │   +--------------------------+
        ▲                                     │
        │                                     │
+--------------------------+                  │
|    counseling_orders     |                  │
+--------------------------+                  │
| id (PK)                  |                  │
| user_id (FK -> profiles) |                  │
| package_id (FK->packages)|                  │
| total_sessions (1, 2, 4) |                  │
| used_sessions (INT)      |                  │
| remaining_sessions (INT) |                  │
| order_status (enum)      |                  │
+--------------------------+                  │
        │                                     │
        ├──────────────────────┐              │
        ▼                      ▼              │
+--------------------+   +------------------------------------------------------+
|    transactions    |   |                  counseling_sessions                 |
+--------------------+   +------------------------------------------------------+
| id (PK)            |   | id (PK)                                              |
| order_id (FK)      |   | order_id (FK -> counseling_orders)                   |
| payment_gateway_ref|   | session_number (1, 2, 3, 4)                          |
| payment_method     |   | psychologist_id (FK -> psychologist_profiles)        |
| gross_amount_idr   |   | scheduled_date (DATE)                                |
| payment_status     |   | start_time (TIME)                                    |
| expires_at         |   | end_time (TIME)                                      |
+--------------------+   | client_display_name (Snapshot: Alias / Real Name)    |
                         | session_status (SCHEDULED, ONGOING, COMPLETED, etc.) |
                         | rating_score (INT 1-5, nullable)                     |
                         | rating_review (TEXT, nullable)                       |
                         +------------------------------------------------------+
                                      │                        ▲
                                      ▼                        │
                         +------------------------+  +-------------------+
                         |       mood_logs        |  |   chat_messages   |
                         +------------------------+  +-------------------+
                         | id (PK)                |  | id (PK)           |
                         | user_id (FK -> profiles|  | session_id (FK)   |
                         | mood_score (INT 1-5)   |  | sender_id (FK)    |
                         | trigger_tags (JSONB)   |  | message_body_enc  |
                         | logged_at (TIMESTAMP)  |  | sent_at (TIMESTAMP|
                         +------------------------+  +-------------------+
```

### 9.3. Usulan Kontrak Endpoint API Awal (Proposed Endpoints Draft)

| Method | Endpoint Path | Deskripsi Singkat | Aktor yang Memiliki Akses |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Pendaftaran akun baru (mendukung input nama alias) | Publik |
| `POST` | `/api/v1/auth/login` | Autentikasi dan penerbitan token JWT sesi | Publik |
| `POST` | `/api/v1/bot/chat` | Mengirim pesan ke Humind Buddy (AI First-Listener, FAQ, & rekomendasi spesialisasi) | Publik / Pengguna |
| `GET` | `/api/v1/counseling/packages` | Mengambil opsi kombinasi paket layanan (Chat/Call/Video, Sesi 1/2/4, Diskon) untuk modal kalkulator | Publik / Pengguna |
| `GET` | `/api/v1/psychologists` | Mengambil daftar direktori profil psikolog dan spesialisasi masalah | Publik |
| `GET` | `/api/v1/psychologists/:id` | Mengambil rincian profil psikolog, nomor izin SIPP, bio, dan rating | Publik |
| `GET` | `/api/v1/psychologists/available` | Mengambil daftar psikolog & slot jam yang tersedia pada tanggal tertentu berdasarkan spesialisasi | Pengguna Terautentikasi |
| `POST` | `/api/v1/bookings/order` | Membuat order paket, mengunci slot jadwal sesi pertama (15m), dan menyimpan preferensi mode anonim | Klien Terautentikasi |
| `POST` | `/api/v1/bookings/schedule-next`| Menjadwalkan sisa kuota sesi berikutnya pada paket multi-sesi (2 atau 4 sesi) | Klien Terautentikasi |
| `POST` | `/api/v1/payments/charge` | Meminta invoice pembayaran (QRIS / Virtual Account) sesuai total harga paket | Klien Terautentikasi |
| `POST` | `/api/v1/payments/webhook` | Menerima callback status transaksi dari Payment Gateway | Payment Gateway Service |
| `GET` | `/api/v1/counseling/:id/messages`| Mengambil riwayat pesan dari ruang chat sesi konseling | Klien / Psikolog Terkait |
| `POST` | `/api/v1/counseling/:id/summary`| Menyimpan rangkuman sesi, latihan mandiri (*action plan*), dan rujukan tindak lanjut | Psikolog Terkait |
| `GET` | `/api/v1/counseling/:id/summary`| Mengambil rangkuman pasca-konseling dan panduan latihan | Klien / Psikolog Terkait |
| `POST` | `/api/v1/wellness/mood` | Menyimpan entri check-in mood harian dan tag pemicu | Pengguna Terautentikasi |
| `GET` | `/api/v1/wellness/mood/history` | Mengambil riwayat tren mood 7–30 hari (untuk visualisasi heatmap & kalender) | Pengguna Terautentikasi |

### 9.4. Strategi Arsitektur Multi-Platform & Kesiapan Mobile (Mobile-Ready Guidelines)
Untuk mempermudah transisi dari Web ke Mobile App tanpa membongkar ulang sistem, tim menetapkan pedoman arsitektur berikut:

1. **Frontend Code & Logic Reusability (Rozin & Alif):**
   - **Modular Services Pattern:** Seluruh logika pemanggilan API dan manipulasi data diisolasi ke dalam direktori independen (`/src/services/` atau `/src/api/`) serta custom React Hooks (`/src/hooks/`).
   - **Maksimalisasi Efisiensi Tim:** Dengan memilih **React Native (Expo)** untuk mobile di Fase 2, hingga 70-80% kode logika bisnis, state management, dan parsing event WebSocket yang dibangun pada React Web dapat langsung digunakan kembali (*reusable*) tanpa perlu menulis ulang dalam bahasa pemrograman lain.
   - **Progressive Web App (PWA):** Pada Fase 1, web dilengkapi dengan `manifest.json` dan *service worker* ringan agar pengguna dapat menambahkan Humind ke layar utama ponsel (*Add to Home Screen*) dan berjalan seperti aplikasi mandiri sebelum native app dipublikasikan ke Play Store.

2. **Backend Mobile-Ready Contract (Atta & Laerra):**
   - **Murni Headless (API-First):** Backend hanya bertindak sebagai penyedia data murni (*pure JSON data provider*). Tidak ada perenderan HTML di sisi server (*zero SSR coupling*).
   - **Stateless Token-Based Authentication:** Menggunakan **JWT (JSON Web Token)** yang dikirim melalui *HTTP Authorization Header* (`Bearer <token>`). Mekanisme ini kompatibel 100% baik pada Web browser maupun Mobile App native tanpa kendala batasan domain cookie.
   - **Netralitas Format Payload Real-time:** Protokol event WebSocket (seperti `send_message`, `receive_message`, `typing`, `session_timer`) distandarisasi dalam payload JSON generik yang dapat dikonsumsi secara seragam oleh klien Web dan Mobile.

---

## 10. RACI Matrix (Operasional Tim 5 Orang)

Untuk menjamin kejelasan akuntabilitas eksekusi di setiap modul:

| Modul / Deliverable | Rozin (PM & FE Visual) | Alif (FE Logic & UX) | Atta (BE Lead & API) | Laerra (BE & DB) | Fadiyah (Research & QA) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Penyusunan PRD & Roadmap Proyek** | **A / R** | C | C | C | C |
| **Brand Identity, Logo & UI Slicing** | **A / R** | C | I | I | C |
| **Implementasi State & Alur Antarmuka** | C | **A / R** | C | I | C |
| **Humind Buddy (AI Chatbot & Matcher)** | C | **R** | **A** | C | C |
| **Opsi Anonimitas & Post-Session Summary** | C | **R** | C | **A** | C |
| **Arsitektur API & Sistem Autentikasi** | C | C | **A / R** | C | I |
| **Model Data ERD & Skema Relasional** | I | I | C | **A / R** | I |
| **Modul Real-Time Chat & Enkripsi** | I | C | C | **A / R** | C |
| **Integrasi Payment Gateway (QRIS/VA)** | C | C | **A / R** | C | I |
| **Daily Wellness (Mood Tracker & Habit)**| **A / R** | **R** | C | **A** | C |
| **Kurasi Konten Edukasi & Kategori Masalah**| C | I | I | I | **A / R** |
| **Penyusunan Test Cases & Manual Testing** | C | C | C | C | **A / R** |

*Keterangan: **R** = Responsible (Pelaksana), **A** = Accountable (Penanggung Jawab Utama), **C** = Consulted (Dimintai Masukan), **I** = Informed (Menerima Informasi).*

---

## 11. Constraints, Assumptions, & Dependencies

### 11.1. Asumsi (Assumptions)
- `[ASUMSI-01]` Psikolog mitra yang terdaftar bersedia mempraktikkan telekonseling via teks secara disiplin selama durasi 60 menit per sesi.
- `[ASUMSI-02]` Target pengguna (mahasiswa dan first-jobber) sudah terbiasa melakukan transaksi non-tunai melalui QRIS atau transfer m-banking.
- `[ASUMSI-03]` Mode konsultasi berbasis chat memiliki penerimaan psikologis yang tinggi pada segmen pengguna yang memiliki hambatan sosial atau kecemasan kamera.
- `[ASUMSI-04]` Validasi keabsahan nomor SIPP psikolog dapat dilakukan secara administratif oleh tim sebelum profil ditayangkan ke publik.

### 11.2. Batasan (Constraints)
- **Kapasitas Tim Pengembang:** Tim beranggotakan 5 orang mahasiswa/developer, sehingga kompleksitas sistem harus dijaga agar rilis tepat waktu tanpa *over-engineering*.
- **Kepatuhan Legalitas & Etika Psikologi:** Layanan konseling teks tidak melayani kasus darurat kritis akut (seperti kecenderungan melukai diri sendiri atau percobaan bunuh diri). Humind wajib menyediakan rujukan *hotline* darurat kesehatan mental nasional.
- **Keterbatasan Anggaran MVP:** Mengutamakan solusi open-source dan integrasi payment gateway berbiaya transaksi per-kejadian (*per-transaction fee*) tanpa beban biaya langganan server yang mahal.

### 11.3. Dependensi Eksternal (Dependencies)
- **Penyedia Payment Gateway:** Ketersediaan integrasi API QRIS dan Virtual Account (misalnya Midtrans / Xendit / Tripay).
- **Infrastruktur WebSocket / Realtime:** Kehandalan koneksi jaringan real-time untuk transmisi chat.
- **Ketersediaan Psikolog Mitra:** Kesediaan psikolog bersertifikat SIPP untuk mengisi ketersediaan jadwal pada platform.

---

## 12. Open Questions & Decisions Log

Berikut adalah log status keputusan dan hal-hal yang masih dalam tahap perancangan:

| ID | Topik Permasalahan | Detail Keputusan / Rancangan | Pemilik Keputusan | Status |
| :---: | :--- | :--- | :--- | :---: |
| **OQ-01** | **Konsistensi Nama Brand** | Nama brand resmi disepakati 100% menggunakan **Humind** (Human – Mind) untuk seluruh antarmuka, aset, dan dokumen legal/proyek. | Seluruh Tim | **RESOLVED (DECIDED)** |
| **OQ-02** | **Pemilihan Tagline Resmi** | Tagline resmi hero section ditetapkan menggunakan Opsi 1: **"Tempat Pikiranmu Beristirahat dan Didengar."** (Opsi 2 & 3 dicadangkan untuk materi promosi). | Rozin & Fadiyah | **RESOLVED (DECIDED)** |
| **OQ-03** | **Mitra Payment Gateway** | Pemilihan vendor spesifik (Midtrans / Xendit / Tripay) ditunda ke fase perencanaan teknis. Desain sistem menggunakan *Payment Adapter Interface* agar *switch* vendor mudah dilakukan tanpa mengubah kode inti. | Atta & Rozin | **PLANNING (DEFERRED)** |
| **OQ-04** | **Prosedur Penanganan Darurat** | SOP Krisis Darurat ditetapkan mengadopsi standar Riliv (Pre-session disclaimer, tombol bantuan darurat persisten, direktori hotline resmi SEJIWA 119 ext 8 & LISA 24/7, serta kartu intervensi psikolog). | Fadiyah & Rozin | **RESOLVED (ADOPTED)** |
| **OQ-05** | **Kebijakan Pembagian Tarif** | Penentuan persentase bagi hasil (*revenue share*) antara platform Humind dan psikolog mitra per sesi konseling (usulan awal: 80% psikolog, 20% platform untuk operasional server). | Rozin & Atta | `[TBD - Finalisasi Model Finansial]` |
| **OQ-06** | **Penyedia Layanan Real-time Chat** | Evaluasi arsitektur modul chat (*self-hosted* WebSocket vs managed service BaaS) ditunda ke fase riset arsitektur backend. | Atta & Laerra | **PLANNING (DEFERRED)** |
| **OQ-07** | **Penyediaan AI Chatbot Entry Point** | Disepakati menambahkan **Humind Buddy** (AI First-Listener & Matcher) di Fase 1 untuk teman curhat 24/7, FAQ, pemetaan masalah, serta crisis guardrail sebelum booking. | Rozin & Alif | **RESOLVED (ADOPTED)** |
| **OQ-08** | **Peniadaan Formulir Pra-Konseling** | Disepakati formulir pra-konseling (3 pertanyaan) ditiadakan sepenuhnya dari alur reservasi. Klien hanya memilih opsi identitas (Nama Asli / Alias) demi pengalaman checkout instan dan bebas beban kognitif (*frictionless booking*). | Rozin & Alif | **RESOLVED (ADOPTED)** |
| **OQ-09** | **Rangkuman Pasca-Konseling (Post-Session Notes)** | Disepakati psikolog wajib memberikan ringkasan sesi (Key Takeaways, Coping Action Plan, Rekomendasi) yang tersimpan di riwayat klien sebagai hasil nyata konseling. | Seluruh Tim | **RESOLVED (ADOPTED)** |
| **OQ-10** | **Daily Wellness di Fase 1 (Web)** | Disepakati modul Daily Wellness difokuskan pada Daily Mood Tracker, Panic Button 60 Detik, dan Habit Check-in. Modul Guided Micro-Journaling ditiadakan untuk menjaga ketepatan waktu rilis MVP dan menghindari beban kognitif berlebih bagi mahasiswa. | Rozin & Tim | **RESOLVED (ADOPTED)** |
| **OQ-11** | **Kalkulator Layanan & Diskon Bundling** | Diterapkan alur kalkulator dinamis (Modal "Atur Layanan Konseling") dengan durasi tetap 60 menit, metode Chat/Call/Video, serta pilihan 1, 2, atau 4 sesi dengan diskon bundling otomatis. Sisa kuota multi-sesi tersimpan di akun klien. | Rozin & Atta | **RESOLVED (ADOPTED)** |

---

## 13. Metrik Keberhasilan & Uji Penerimaan (Success Metrics & QA)

### 13.1. Product & Business Metrics
1. **Rasio Penyelesaian Reservasi (Booking Completion Rate):** $\ge 75\%$ pengguna yang memilih slot waktu berhasil menyelesaikan pembayaran hingga sesi terkonfirmasi.
2. **Tingkat Adopsi Curhat Anonim:** Mengukur berapa persen mahasiswa yang memilih opsi nama samaran saat konseling (target hipotesis: $\ge 60\%$ mahasiswa memilih anonim).
3. **Kepuasan Sesi Konseling (CSAT):** Rata-rata penilaian kepuasan pengguna setelah sesi berakhir $\ge 4.5$ dari skala 5.0.

### 13.2. Engineering & Quality Assurance Metrics (Fadiyah)
1. **Zero Double-Booking Incident:** Tidak ada dua klien berbeda yang berhasil memesan slot waktu psikolog yang sama.
2. **Toleransi Kegagalan Chat:** Tingkat keberhasilan transmisi pesan pada sesi aktif mencapai $99.9\%$.
3. **Lolos Skenario Uji Coba Manual:** Seluruh test-case fase 1 (Autentikasi -> Filter Direktori -> Reservasi Slot -> Pembayaran Webhook -> Sesi Chat) memiliki status *PASS* sebelum peluncuran resmi.
