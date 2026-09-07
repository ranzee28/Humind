# Product Requirements Document (PRD)
# HUMIND (Human – Mind)

---

## Document Control & Metadata

| Atribut | Keterangan |
| :--- | :--- |
| **Nama Dokumen** | Product Requirements Document (PRD) – Humind Platform |
| **Versi Dokumen** | v1.1.0 |
| **Status** | Approved Baseline – Enhanced with AI Navigator & Clinical Intake/Summary |
| **Penulis Utama** | Tim Humind (Rozin, Alif, Atta, Laerra, Fadiyah) |
| **Target Rilis MVP** | `[TBD - Target Sprint/Bulan Rilis]` |
| **Platform Target** | **Fase 1:** Web Application (Mobile-First Responsive & PWA-Ready)<br>**Fase 2:** Cross-Platform Mobile App (React Native / Expo) |
| **Klasifikasi Dokumen**| Internal Team Single Source of Truth (SSOT) |

---

## 1. Executive Summary & Project Background

### 1.1. Latar Belakang Masalah
Di lingkungan perguruan tinggi dan fase awal karir (*first-jobber*), tekanan hidup meningkat secara eksponensial. Mahasiswa dan generasi muda Gen Z/Milenial kerap menghadapi:
1. **Academic Burnout & Tugas Akhir:** Beban skripsi, praktikum, dan tuntutan akademik berulang yang memicu stres kronis dan kelelahan mental (*cognitive exhaustion*).
2. **Insomnia & Overthinking:** Pola tidur berantakan akibat siklus cemas di malam hari yang tidak tersalurkan.
3. **Kecemasan Finansial & Karir:** Ketidakpastian masa depan, krisis seperempat abad (*quarter-life crisis*), dan tekanan biaya hidup mandiri.
4. **Toxic Circle & Hubungan Interpersonal:** Masalah pertemanan kampus, dinamika organisasi, atau relasi keluarga yang melelahkan emosi.

### 1.2. Validasi Permasalahan di Lapangan
Meskipun kebutuhan akan bantuan kesehatan mental sangat mendesak, terdapat jurang pemisah (*gap*) yang besar antara kebutuhan dan akses:
- **Gengsi dan Takut Terhakimi:** Mahasiswa khawatir riwayat konselingnya diketahui oleh teman kampus, dosen, atau lingkungan pergaulan (*fear of social stigma*).
- **Kebingungan Awal & Ragu Bercerita:** Banyak mahasiswa bingung mengidentifikasi apa yang sedang mereka alami dan ragu apakah masalahnya "cukup pantas" dibawa ke psikolog profesional.
- **Kompleksitas Istilah Klinis:** Platform telemedisin umum (seperti Halodoc) terlalu kaku dan berorientasi medis klinis, di mana pengguna bingung memilih dokter berdasarkan gelar spesialisasi kedokteran yang formal.
- **Keterbatasan Solusi Non-Klinis:** Platform wellness mandiri (seperti Riliv) berfokus pada konten umum, namun proses transisi menuju konseling ahli sering kali terasa berjarak atau tidak secara spesifik membedah masalah riil anak kuliahan.

### 1.3. Value Proposition & Posisi Pasar
**Humind** hadir menjembatani kepraktisan transaksional direktori telekonseling (ala Halodoc) dengan pendekatan holistik dan humanis (ala Riliv/Serene), yang secara spesifik dirancang untuk **segmen mahasiswa dan dewasa muda**:
- **Humind Buddy (AI First-Listener & Navigator):** Asisten AI empatis 24/7 untuk teman curhat awal tanpa rasa malu, membantu memetakan masalah, serta merekomendasikan psikolog yang paling sesuai.
- **Bahasa Manusia (Human-Centric Language):** Penemuan psikolog menggunakan filter masalah nyata mahasiswa, bukan klasifikasi penyakit medis.
- **Mode Curhat Anonim (Safe Haven):** Memberikan kebebasan berekspresi menggunakan nama alias dalam sesi chat konseling, sementara kepatuhan administratif dan keamanan data rekam medis tetap terjaga di tingkat sistem.
- **Formulir Asesmen Pra-Konseling Singkat (Intake Form 3 Pertanyaan):** Mempersiapkan psikolog dengan konteks emosi klien sebelum sesi obrolan dimulai.
- **Chat-First Counseling & Post-Session Summary:** Sesi teks interaktif 60 menit yang diakhiri dengan rangkuman catatan refleksi (*takeaways*) dan latihan mandiri (*action plan*) dari psikolog.

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
| FASE 1: Core MVP (Fokus Transaksional Web, Konseling Utama, & AI Navigator)   |
| 1. Modul Autentikasi & Profil Pengguna (Termasuk Setup Identitas Anonim)      |
| 2. Direktori & Profil Psikolog Berlisensi (SIPP & Tarif Transparan)           |
| 3. Filter Masalah Khas Mahasiswa (Human-Language Category)                    |
| 4. Sistem Booking & Kalender Slot Waktu (Termasuk Intake Form 3 Pertanyaan)   |
| 5. Integrasi Pembayaran Sederhana (Payment Gateway QRIS / Virtual Account)    |
| 6. Ruang Konsultasi Web: Encrypted Real-Time Chat & Post-Session Summary      |
| 7. Humind Buddy: AI First-Listener & Psychologist Matcher (Chatbot 24/7)      |
| 8. SOP & Protokol Krisis Darurat (Disclaimer, Bantuan Cepat, Hotline SEJIWA)  |
| 9. Standar Responsif Mobile-First & Konfigurasi PWA (Installable Shortcut)    |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
| FASE 2: Retensi, Wellness Mandiri, & Ekspansi Native Mobile App               |
| 1. Audio Meditasi & Sleep Aid (Panduan Box Breathing & Soundscapes)           |
| 2. Mood Tracker & Jurnal Harian (Pre-Counseling Emotional Check-in)           |
| 3. Artikel Edukasi Singkat (Bacaan Ringkas 2 Menit & Coping Strategy)         |
| 4. Telekonseling Berbasis Video Call Terenkripsi                              |
| 5. Aplikasi Mobile Native (React Native / Expo) dengan Push Notification      |
| 6. Pemutar Audio Latar Belakang (Background Audio Player untuk Sleep Aid)     |
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

#### Main Flow (Alur Utama):
1. Pengguna membuka halaman pendaftaran/login Humind.
2. Pengguna mendaftarkan akun menggunakan email dan kata sandi yang aman.
3. Pada saat melengkapi profil awal atau sebelum memulai sesi konseling, pengguna diberikan opsi: *"Gunakan Nama Asli"* atau *"Gunakan Nama Samaran (Mode Curhat Anonim)"*.
4. Pengguna memilih Mode Curhat Anonim dan memasukkan nama alias yang diinginkan.
5. Sistem menyimpan alias tersebut dan menetapkannya sebagai tampilan publik pada ruang chat konseling.

#### Alternative & Edge Cases:
- **Pengguna Ingin Mengubah Alias:** Pengguna dapat mengubah nama samaran melalui menu pengaturan profil sebelum sesi booking baru dimulai.
- **Penggunaan Nama Samaran Tidak Pantas/SARA:** Sistem memvalidasi alias terhadap daftar kata terlarang (*blacklist keywords*). Jika terdeteksi, sistem meminta pengguna memasukkan alias alternatif.

#### Acceptance Criteria (AC-1.1):
- [ ] Pengguna dapat mendaftar dan login dengan email serta password yang terenkripsi.
- [ ] Terdapat opsi input `Alias Name` pada profil pengguna.
- [ ] Di sisi psikolog, saat sesi chat berlangsung, nama yang tertera adalah `Alias Name` jika pengguna mengaktifkannya.
- [ ] Data nama asli pengguna tidak pernah dikirim ke antarmuka klien psikolog pada saat mode anonim aktif.

---

### Fitur 1.2: Direktori & Profil Psikolog Berlisensi dengan Filter Masalah Mahasiswa

- **Tujuan Fitur:**  
  Menyediakan katalog psikolog terverifikasi yang mudah dipahami oleh mahasiswa melalui kurasi masalah kontekstual, nomor legalitas resmi (SIPP), dan tarif yang transparan.
- **Aktor:** Pengguna (Mahasiswa/Client), Psikolog Mitra.
- **Prekondisi:** Direktori telah diisi oleh psikolog yang telah melalui proses verifikasi SIPP oleh tim Humind.

#### Business Rules (BR-1.2):
1. **Wajib Nomor SIPP (Kredibilitas):** Setiap profil psikolog yang dipublikasikan **wajib** mencantumkan Nomor Surat Izin Praktik Psikologi (SIPP) aktif yang terverifikasi. Profil tanpa SIPP tidak dapat ditampilkan di direktori publik.
2. **Kategori Filter Bahasa Manusia (Killer Feature Segmen Kampus):**
   Direktori tidak menggunakan kategori klinis kaku (misal: "Bipolar Type I", "Major Depressive Disorder"), melainkan 4 kategori bahasa manusia yang relatable bagi mahasiswa:
   - **Burnout Tugas:** Khusus kelelahan akademik, skripsi macet, stres ekspektasi prestasi.
   - **Kecemasan Finansial:** Khusus biaya kuliah, biaya hidup anak rantau, krisis karir pertama.
   - **Insomnia & Overthinking:** Khusus pola tidur kacau, pikiran berputar di malam hari, kecemasan masa depan.
   - **Toxic Circle:** Khusus dinamika pertemanan kampus yang melelahkan, konflik organisasi, atau masalah relasi asmara.
3. **Transparansi Tarif:** Tarif per sesi konseling (misalnya durasi 60 menit) harus ditampilkan eksplisit tanpa biaya administrasi terselubung.

#### Main Flow (Alur Utama):
1. Pengguna membuka halaman Direktori Psikolog di web Humind.
2. Pengguna melihat daftar kartu psikolog yang memuat: Foto profesional, Nama & Gelar, Nomor SIPP terverifikasi, Spesialisasi Masalah, dan Tarif per sesi.
3. Pengguna memilih salah satu atau lebih filter masalah (contoh: klik filter *"Burnout Tugas"*).
4. Sistem memfilter daftar psikolog secara instan sesuai kriteria masalah yang relevan.
5. Pengguna mengklik kartu psikolog untuk melihat profil lengkap (biografi singkat, pendekatan konseling, ulasan/testimoni terkurasi).

#### Alternative & Edge Cases:
- **Tidak Ada Psikolog yang Cocok dengan Kombinasi Filter:** Tampilkan pesan empati (*empty state*): *"Belum menemukan psikolog dengan kombinasi ini? Coba reset filter atau lihat semua psikolog yang siap mendengarkanmu."* beserta tombol *Reset Filter*.
- **Psikolog Sedang Tidak Menerima Konsultasi Baru:** Kartu psikolog menampilkan penanda visual *"Jadwal Penuh"* atau *"Sedang Beristirahat"*, dan tombol booking dinonaktifkan.

#### Acceptance Criteria (AC-1.2):
- [ ] Seluruh kartu psikolog menampilkan Foto, Nama Lengkap + Gelar, Badge "SIPP Terverifikasi: [Nomor SIPP]", Kategori Spesialisasi, dan Tarif Per Sesi (dalam IDR).
- [ ] Tersedia 4 tombol pill filter masalah khas mahasiswa yang berfungsi menyaring hasil daftar secara dinamis.
- [ ] Halaman detail profil memuat ringkasan latar belakang profesional dan pendekatan konseling psikolog.

---

### Fitur 1.3: Sistem Booking & Kalender Slot Waktu Konseling Dinamis

- **Tujuan Fitur:**  
  Menyediakan alur pemilihan tanggal dan jam konseling yang mulus, akurat, dan mencegah terjadinya bentrok jadwal (*double booking*).
- **Aktor:** Pengguna (Client), Psikolog Mitra, Sistem Kalender.
- **Prekondisi:** Pengguna telah memilih profil psikolog dan masuk ke alur reservasi.

#### Business Rules (BR-1.3):
1. **Durasi Sesi Standar:** Tiap sesi konseling chat berdurasi 60 menit per reservasi.
2. **Buffer Time Antar-Sesi:** Sistem memberikan jeda otomatis minimal 15 menit antara satu sesi dengan sesi berikutnya agar psikolog memiliki waktu istirahat dan mencatat evaluasi.
3. **Locking Slot Sementara:** Ketika pengguna memilih suatu slot jam dan melangkah ke halaman pembayaran, slot tersebut dikunci (*reserved/locked*) selama maksimal 15 menit. Jika pembayaran tidak diselesaikan dalam 15 menit, slot otomatis terbuka kembali untuk publik.
4. **Batas Waktu Reservasi:** Pengguna hanya dapat memesan slot paling lambat 2 jam sebelum jam praktik dimulai (*lead time buffer*).
5. **Formulir Pra-Konseling Singkat (Pre-Counseling Intake Form):**
   Untuk memaksimalkan efektivitas sesi 60 menit dan meniru *best practice* platform konseling klinis (ala Riliv), sebelum checkout pengguna wajib mengisi **3 pertanyaan singkat**:
   - **Pertanyaan 1 (Mood Meter Saat Ini):** Skala emosi 1–10 atau pilihan 5 indikator (*Sangat Berat/Cemas, Tertekan, Netral, Mulai Tenang, Baik*).
   - **Pertanyaan 2 (Poin yang Mengganjal):** Teks singkat (1–3 kalimat) mengenai hal utama yang paling membebani pikiran saat ini (misal: "Buntu revisi bab 4 dan takut bertemu dosen penguji").
   - **Pertanyaan 3 (Ekspektasi dari Sesi Konseling):** Pilihan cepat tujuan sesi (*"Hanya butuh didengarkan tanpa penghakiman"*, *"Butuh saran praktis/strategi koping"*, *"Butuh sudut pandang objektif/netral"*).
   - Data asesmen awal ini otomatis disematkan pada kartu ringkasan klien di panel psikolog sebelum sesi dimulai.

#### Main Flow (Alur Utama):
1. Dari halaman profil psikolog, pengguna mengklik tombol *"Jadwalkan Konsultasi"*.
2. Pengguna disajikan tampilan kalender interaktif yang memuat tanggal yang tersedia (maksimal hingga 14 hari ke depan).
3. Pengguna memilih tanggal, dan sistem memuat daftar slot jam yang masih berstatus *"Tersedia"*.
4. Pengguna memilih salah satu slot waktu (misal: 19.00 - 20.00 WIB).
5. Pengguna melengkapi formulir pra-konseling 3 pertanyaan (Mood Meter, Poin yang Mengganjal, dan Ekspektasi Sesi), serta menentukan mode identitas (Gunakan Nama Asli atau Mode Curhat Anonim).
6. Pengguna mengklik *"Lanjut ke Pembayaran"*, dan sistem mengunci slot tersebut selama batas waktu checkout 15 menit.

#### Alternative & Edge Cases:
- **Slot Waktu Diambil Pengguna Lain Sebelum Terkunci:** Jika dua pengguna mengklik slot waktu yang sama di detik yang berdekatan, sistem yang pertama kali memproses *lock* akan berhasil, sedangkan pengguna kedua menerima notifikasi: *"Maaf, slot waktu ini baru saja dipesan oleh pengguna lain. Silakan pilih slot lain."*
- **Sesi Kedaluwarsa Saat Checkout:** Jika pengguna tidak membayar dalam rentang waktu 15 menit, sistem membatalkan reservasi sementara dan mengarahkan pengguna kembali ke pemilihan jadwal.
- **Pengguna Mengosongkan Pertanyaan Pra-Konseling:** Form mewajibkan input minimal pada Mood Meter dan Ekspektasi Sesi, sementara teks deskripsi disediakan *placeholder* pemandu agar tidak membebani pengguna yang sedang lelah berpikir.

#### Acceptance Criteria (AC-1.3):
- [ ] Pengguna dapat melihat tanggal dan jam praktik psikolog yang diperbarui secara real-time.
- [ ] Slot waktu yang sudah dibooking oleh klien lain berstatus *disabled* / tidak dapat diklik.
- [ ] Formulir pra-konseling (3 pertanyaan: mood scale, poin masalah, ekspektasi sesi) muncul sebelum menuju pembayaran dan divalidasi dengan baik.
- [ ] Data formulir pra-konseling tersimpan dan dapat dilihat oleh psikolog sebelum sesi chat dimulai.
- [ ] Slot waktu otomatis terkunci selama 15 menit saat pengguna berada di tahap checkout pembayaran.
- [ ] Sistem mencegah secara absolut terjadinya *double-booking* pada slot psikolog yang sama.

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

### Fitur 1.5: Ruang Konsultasi Web (Encrypted Real-Time Chat Consultation)

- **Tujuan Fitur:**  
  Menyediakan ruang interaksi konseling berbasis teks yang aman, privat, terenkripsi, dan intuitif bagi pengguna serta psikolog untuk melaksanakan sesi terapi tanpa hambatan teknis.
- **Aktor:** Pengguna (Client/Alias), Psikolog Mitra, Sistem Chat Server.
- **Prekondisi:** Status reservasi telah berstatus `PAID/CONFIRMED` dan waktu sesi telah tiba (atau 5 menit sebelum jadwal).

#### Business Rules (BR-1.5):
1. **Aksesibilitas Ruang Chat Berdasarkan Waktu:**
   - Ruang konsultasi hanya dapat dibuka 5 menit sebelum jadwal sesi dimulai.
   - Sesi chat otomatis ditutup/dikunci menjadi status *Read-Only* setelah 60 menit berakhir, dengan toleransi waktu peringatan (*warning prompt*) pada 10 menit dan 5 menit menjelang akhir sesi.
2. **Kerahasiaan & Privasi Tampilan:**
   - Ruang chat menampilkan nama alias pengguna jika Mode Curhat Anonim diaktifkan.
   - Dilarang menampilkan metadata sensitif (alamat email, IP address, nomor telepon klien) kepada pihak psikolog dalam ruang chat.
3. **Integritas & Enkripsi Pesan:**
   - Semua transmisi data chat antara browser dan server wajib menggunakan protokol terenkripsi (WSS / HTTPS dengan TLS).
   - Data pesan di database dilindungi dengan enkripsi saat istirahat (*encryption at rest*).
4. **Pembatasan Jenis Berkas (MVP):**
   - Pada MVP Fase 1, chat hanya mendukung pesan teks murni dan indikator status baca (*read receipt*) serta pengetikan (*typing indicator*). Lampiran berkas gambar/dokumen ditangguhkan ke iterasi berikutnya `[TBD]`.
5. **Rangkuman Pasca-Konseling & Lembar Latihan (Post-Session Summary & Action Plan):**
   - Setelah sesi 60 menit berakhir, antarmuka psikolog memunculkan formulir *Post-Session Clinical Notes* yang wajib diisi (maksimal 1x24 jam setelah sesi):
     1. **Key Takeaways (Poin Refleksi Kunci):** Rangkuman 1–2 paragraf mengenai inti masalah dan pemahaman baru yang dicapai selama sesi.
     2. **Actionable Coping Exercise (Latihan Mandiri):** 1–3 rekomendasi tindakan nyata yang bisa dipraktikkan klien secara mandiri (misal: teknik pernapasan kotak 4-4-4-4, pembatasan jam belajar malam, atau *thought journaling*).
     3. **Rekomendasi Tindak Lanjut:** Rekomendasi status (*"Kondisi Cukup Stabil - Perawatan Mandiri"* atau *"Disarankan Sesi Lanjutan 1-2 Minggu Lagi"*).
   - Rangkuman ini otomatis diterbitkan ke tab *"Riwayat Sesi Saya"* di akun klien sehingga klien memiliki panduan nyata pasca-konseling.

#### Main Flow (Alur Utama):
1. Saat jam konseling tiba, pengguna dan psikolog mengklik tombol *"Masuk Ruang Konsultasi"* pada dashboard akun masing-masing.
2. Kedua belah pihak terhubung ke ruang chat privat yang terisolasi. Panel psikolog menampilkan ringkasan profil klien (atau alias) beserta data *Pre-Counseling Intake Form* (skala mood, keluhan utama, dan harapan sesi).
3. Terdapat indikator status sesi di bagian atas layar: Nama Psikolog & SIPP, Nama Pengguna (atau Nama Alias), dan Jam Durasi Konsultasi yang tersisa.
4. Pengguna dan psikolog berkomunikasi secara real-time. Pesan terkirim seketika dengan status terkirim (*sent*) dan terbaca (*read*).
5. Pada menit ke-50 (10 menit sebelum selesai), sistem memunculkan banner pengingat lembut: *"Waktu konseling tersisa 10 menit. Silakan mulai merangkum pembahasan hari ini."*
6. Pada menit ke-60, sesi berakhir secara resmi. Input chat dinonaktifkan (read-only), dan sistem menampilkan formulir evaluasi bintang/rating kepada klien.
7. Di sisi psikolog, sistem membuka form *Post-Session Summary*. Psikolog mengisi poin refleksi, panduan aksi koping, dan rekomendasi tindak lanjut.
8. Klien menerima notifikasi bahwa catatan rangkuman sesi telah siap dan dapat diakses kapan saja melalui tab *"Riwayat Konseling"*.

#### Alternative & Edge Cases:
- **Koneksi Terputus di Tengah Sesi:** Klien atau psikolog yang kehilangan sinyal internet dapat masuk kembali ke ruang konsultasi selama durasi waktu 60 menit sesi belum berakhir tanpa kehilangan riwayat obrolan sesi tersebut.
- **Psikolog Terlambat Hadir (No-Show):** Jika psikolog tidak masuk ke ruang chat dalam kurun waktu 15 menit pertama sejak jadwal dimulai, sistem memberikan opsi kepada klien untuk melaporkan kendala dan meminta penjadwalan ulang penuh (*reschedule*) atau *refund*.
- **Psikolog Belum Mengisi Rangkuman Sesi:** Status riwayat sesi di klien menampilkan label *"Menunggu Rangkuman Psikolog"* dengan batas waktu maksimal pengisian $1 \times 24$ jam.

#### Acceptance Criteria (AC-1.5):
- [ ] Pengguna dan psikolog dapat bertukar pesan teks secara real-time tanpa perlu reload browser.
- [ ] Panel psikolog dapat melihat ringkasan formulir pra-konseling klien sebelum obrolan dimulai.
- [ ] Terdapat penunjuk sisa waktu sesi (*countdown timer*) yang sinkron antara sisi klien dan psikolog.
- [ ] Nama yang ditampilkan di ruang chat klien adalah alias yang dipilih jika Mode Anonim aktif.
- [ ] Ruang chat beralih ke mode read-only tepat setelah durasi 60 menit sesi berakhir.
- [ ] Psikolog dapat menginput formulir rangkuman pasca-konseling (Key Takeaways, Action Plan, Rekomendasi).
- [ ] Klien dapat membaca rangkuman dan panduan aksi dari psikolog di halaman riwayat sesi.
- [ ] Riwayat pesan tersimpan aman dan dapat diakses kembali oleh pengguna dan psikolog yang bersangkutan sesuai masa retensi data.

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

### Fitur 1.7: Humind Buddy – AI First-Listener & Psychologist Matcher (Chatbot Curhat Awal)

- **Tujuan Fitur:**  
  Menyediakan teman cerita pertama yang selalu siap 24/7 tanpa biaya, membantu mahasiswa memetakan benang kusut di kepala tanpa rasa cemas/gengsi, menjawab pertanyaan seputar alur konseling dan privasi, serta merekomendasikan profil psikolog yang paling relevan dengan masalah mereka.
- **Aktor:** Pengguna (Guest / Mahasiswa), Mesin AI Humind Buddy (LLM API dengan guardrail etis ketat).
- **Prekondisi:** Pengguna membuka platform web Humind (tersedia baik sebelum login maupun sesudah login).

#### Business Rules (BR-1.7):
1. **Peran Non-Klinis (Bukan Pengganti Terapi Manusia):**
   - Humind Buddy secara transparan memposisikan diri sebagai *teman dengar awal (active listener)* dan pemandu navigasi, **bukan pengganti psikolog klinis profesional**. AI dilarang memberikan diagnosis medis formal (*no diagnostic labeling*).
2. **Nada Bicara Hangat, Santun, & Gen-Z/Mahasiswa Friendly:**
   - AI menggunakan bahasa yang ramah, hangat, validatif, dan menenangkan (contoh: *"Perasaanmu valid banget kok, wajar kalau kamu ngerasa capek setelah berjuang sejauh ini"*).
3. **Problem Mapping & Smart Matcher:**
   - Berdasarkan curhatan pengguna, AI membantu mengidentifikasi akar masalah ke salah satu dari 4 kategori utama (*Burnout Tugas, Kecemasan Finansial, Insomnia & Overthinking, Toxic Circle*).
   - AI menampilkan 2–3 kartu ringkas psikolog mitra yang memiliki keahlian pada kategori tersebut dengan tombol aksi langsung: *"Lihat Profil & Jadwalkan"*.
4. **FAQ & Barrier Breaker (Penghilang Ragu):**
   - Mampu menjawab kekhawatiran mahasiswa seputar kerahasiaan: *"Apakah aman? Di Humind kamu bisa pakai Mode Curhat Anonim (nama samaran), jadi identitas aslimu tidak diketahui siapapun termasuk psikolog."*
   - Menjelaskan transparansi tarif sesi (misal: "Tarif mulai dari Rp [X]/sesi 60 menit via QRIS tanpa biaya tersembunyi").
5. **Crisis Safety Guardrail (Protokol Keselamatan Prioritas):**
   - Apabila pengguna mengetik kata kunci atau frasa indikasi melukai diri sendiri (*self-harm*) atau keputusasaan akut/bunuh diri, AI **seketika menghentikan mode santai** dan memunculkan respons intervensi darurat: pesan penenang hangat beserta tombol panggilan langsung ke Hotline SEJIWA (119 ext 8), LISA (0811-3815-472), dan 112.

#### Main Flow (Alur Utama):
1. Pengguna membuka web Humind dan melihat widget floating *"💬 Butuh Teman Cerita? / Humind Buddy"* di pojok kanan bawah.
2. Pengguna mengklik widget. Jendela chat mengambang terbuka dengan sapaan hangat dan beberapa pilihan tombol cepat (*quick prompt chips*):
   - *"Aku lagi overthinking skripsi & tugas"*
   - *"Gak bisa tidur, pikiran muter terus"*
   - *"Lagi capek sama circle pertemanan"*
   - *"Gimana cara konseling di Humind?"*
3. Pengguna mengetik curhatan atau mengklik salah satu chip.
4. Humind Buddy merespon dengan empati, mendengarkan, dan memberikan 1–2 pertanyaan reflektif pendek.
5. Setelah obrolan singkat (2–3 pertukaran pesan), Humind Buddy menyimpulkan secara lembut: *"Sepertinya kamu lagi mengalami burnout tugas akhir yang cukup berat ya. Mengurai hal ini bareng ahlinya bisa sangat membantu. Mau aku bantu pilihkan psikolog yang cocok?"*
6. Humind Buddy menampilkan kartu psikolog yang direkomendasikan langsung di dalam gelembung pesan chat.
7. Pengguna mengklik tombol *"Jadwalkan Sesi"* pada kartu tersebut dan langsung diarahkan ke halaman booking psikolog yang bersangkutan dengan data pra-konseling terisi otomatis.

#### Alternative & Edge Cases:
- **Pengguna Mengalami Krisis Akut:** AI langsung mengalihkan ke mode tanggap darurat, menyembunyikan opsi rekomendasi psikolog berbayar, dan memfokuskan antarmuka pada hotline bantuan gratis 24 jam.
- **Pengguna Hanya Ingin Tanya Biaya/Teknis:** AI menjawab FAQ secara singkat, jelas, dan santun tanpa memaksa booking.
- **Pengguna Menutup Jendela Chat:** Riwayat obrolan dengan bot disimpan di *local storage* browser (selama sesi aktif) agar pengguna dapat melanjutkan percakapan kapan saja tanpa mengulang dari awal.

#### Acceptance Criteria (AC-1.7):
- [ ] Widget chatbot mengambang tersedia di halaman utama dan dapat dibuka/tutup dengan transisi halus di mobile dan desktop.
- [ ] Tersedia tombol chip pintasan untuk topik-topik populer mahasiswa.
- [ ] Chatbot merespon dengan cepat (< 3 detik) menggunakan gaya bahasa empatis dan hangat.
- [ ] Chatbot berhasil memetakan obrolan pengguna dan menampilkan kartu psikolog yang relevan.
- [ ] Tautan pada kartu psikolog di dalam chatbot dapat diklik dan langsung mengarahkan ke alur reservasi.
- [ ] Guardrail keamanan bekerja seketika menampilkan nomor darurat jika terdeteksi indikasi krisis keselamatan diri.

---

## 7. Roadmap Fitur: Phase 2 (Retensi & Wellness Mandiri)

Fitur-fitur pada Fase 2 dirancang untuk meningkatkan retensi pengguna (*daily active users*), menjaga kesehatan mental harian sebelum masalah memuncak, dan membangun kebiasaan positif tanpa membebani kapasitas tim pada fase awal:

### 7.1. Audio Meditasi & Sleep Aid
- **Deskripsi:** Modul pemutar audio mandiri yang memuat panduan pernapasan terstruktur (metode *Box Breathing* 4-4-4-4 untuk meredakan serangan panik/kecemasan) serta kurasi audio *soundscape* penenang tidur (hujan lembut, white noise, ambient malam) untuk mahasiswa yang mengalami insomnia.
- **Rasional:** Menjawab langsung problem insomnia mahasiswa di luar jam sesi konseling berbayar.

### 7.2. Mood Tracker & Jurnal Harian
- **Deskripsi:** Antarmuka pencatatan emosi harian (*emotional check-in*) yang sederhana (memilih emoji suasana hati, tingkat energi, dan 1-2 kalimat refleksi pendek).
- **Integrasi dengan Konseling:** Riwayat grafik mood 7 hari terakhir dapat dipilih oleh pengguna untuk dibagikan secara otomatis kepada psikolog sebagai pengantar sebelum sesi konseling dimulai.

### 7.3. Artikel Edukasi Singkat (Micro-Articles)
- **Deskripsi:** Konten bacaan edukatif berbasis riset yang dikurasi khusus oleh tim (Product Research/Fadiyah) dengan format bacaan kilat 2-3 menit.
- **Fokus Topik:** Teknik manajemen waktu skripsi tanpa stres, mekanisme koping (*coping mechanisms*) saat pekan ujian, mengenali *toxic relationship*, dan cara mengatasi sindrom imposter (*imposter syndrome*).

### 7.4. Telekonseling Berbasis Video Call (Next Iteration)
- **Deskripsi:** Menambahkan saluran konsultasi tatap muka visual berbasis WebRTC bagi pengguna yang menginginkan interaksi langsung dengan psikolog setelah merasa nyaman melalui sesi chat.

### 7.5. Aplikasi Mobile Native (React Native / Expo)
- **Deskripsi:** Menghadirkan aplikasi mobile multi-platform (Android & iOS) yang didistribusikan melalui Google Play Store untuk memaksimalkan retensi dan utilisasi perangkat keras smartphone.
- **Fitur Khusus Native:**
  1. **Native Push Notifications:** Pengingat otomatis 15 menit dan 5 menit sebelum sesi konseling dimulai untuk meminimalisasi tingkat ketidakhadiran (*no-show*).
  2. **Background Audio Player:** Memungkinkan panduan pernapasan (*box breathing*) dan audio relaksasi tidur (*soundscapes*) tetap berputar di latar belakang saat layar ponsel terkunci.
  3. **Local Offline Cache:** Kemampuan menyimpan draf jurnal emosi dan mengunduh artikel edukasi untuk dibaca saat koneksi internet kampus tidak stabil.

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
+------------------+         +-------------------------+         +---------------------+
|      users       |         |   psychologist_profiles |         |   problem_categories|
+------------------+         +-------------------------+         +---------------------+
| id (PK)          |         | id (PK)                 |         | id (PK)             |
| email            |         | user_id (FK -> users)   |         | slug (code)         |
| password_hash    |         | full_name_with_title    |         | display_name        |
| legal_full_name  |         | sipp_number (UNIQUE)    |         | description         |
| default_alias    |         | bio_summary             |         +---------------------+
| phone_number     |         | session_fee_idr         |                    ▲
| role (client/psy)|         | is_active (bool)        |                    │ (many-to-many)
| created_at       |         +-------------------------+         +---------------------+
+------------------+                      ▲                      | psycho_specialties  |
        │                                 │                      +---------------------+
        │                                 │                      | psychologist_id (FK)|
        │                                 │                      | category_id (FK)    |
        ▼                                 ▼                      +---------------------+
+------------------------------------------------------+
|                  counseling_sessions                 |
+------------------------------------------------------+
| id (PK)                                              |
| client_id (FK -> users)                              |
| psychologist_id (FK -> psychologist_profiles)        |
| scheduled_date (DATE)                                |
| start_time (TIME)                                    |
| end_time (TIME)                                      |
| client_display_name (Snapshot: Real Name or Alias)   |
| session_status (PENDING, PAID, ONGOING, COMPLETED)   |
| intake_mood_scale (INT 1-10)                         |
| intake_issue_summary (TEXT)                          |
| intake_expectation (VARCHAR)                         |
| post_summary_takeaways (TEXT, nullable)              |
| post_summary_action_plan (TEXT, nullable)            |
| post_summary_followup (VARCHAR, nullable)            |
| booking_created_at                                   |
+------------------------------------------------------+
        │                                 ▲
        ▼                                 │
+------------------------+      +------------------------+
|      transactions      |      |     chat_messages      |
+------------------------+      +------------------------+
| id (PK)                |      | id (PK)                |
| session_id (FK)        |      | session_id (FK)        |
| payment_gateway_ref    |      | sender_id (FK -> users)|
| payment_method (QRIS/VA|      | sender_role (client/psy|
| gross_amount_idr       |      | message_body_encrypted|
| payment_status         |      | sent_at (TIMESTAMP)    |
| expires_at             |      | is_read (bool)         |
+------------------------+      +------------------------+
```

### 9.3. Usulan Kontrak Endpoint API Awal (Proposed Endpoints Draft)

| Method | Endpoint Path | Deskripsi Singkat | Aktor yang Memiliki Akses |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Pendaftaran akun baru | Publik |
| `POST` | `/api/v1/auth/login` | Autentikasi dan penerbitan token sesi | Publik |
| `POST` | `/api/v1/bot/chat` | Mengirim pesan ke Humind Buddy (AI First-Listener, FAQ, & rekomendasi psikolog) | Publik / Pengguna |
| `GET` | `/api/v1/psychologists` | Mengambil daftar direktori psikolog (dukungan filter kategori) | Publik |
| `GET` | `/api/v1/psychologists/:id` | Mengambil rincian profil psikolog, SIPP, dan bio | Publik |
| `GET` | `/api/v1/psychologists/:id/slots` | Mengambil slot jadwal yang tersedia pada tanggal tertentu | Pengguna Terautentikasi |
| `POST` | `/api/v1/bookings` | Mengunci slot jadwal, menyimpan draf intake form, dan membuat pesanan sesi | Klien Terautentikasi |
| `POST` | `/api/v1/payments/charge` | Meminta invoice pembayaran (QRIS / Virtual Account) | Klien Terautentikasi |
| `POST` | `/api/v1/payments/webhook` | Menerima callback status transaksi dari Payment Gateway | Payment Gateway Service |
| `GET` | `/api/v1/counseling/:id/messages`| Mengambil riwayat pesan dari ruang chat sesi konseling | Klien / Psikolog Terkait |
| `GET` | `/api/v1/counseling/:id/intake` | Mengambil rincian formulir asesmen pra-konseling klien | Psikolog Terkait / Klien |
| `POST` | `/api/v1/counseling/:id/summary`| Menyimpan rangkuman sesi, latihan mandiri (*action plan*), dan rujukan tindak lanjut | Psikolog Terkait |
| `GET` | `/api/v1/counseling/:id/summary`| Mengambil rangkuman pasca-konseling dan panduan latihan | Klien / Psikolog Terkait |

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
| **Pre-Counseling Form & Post-Session Summary** | C | **R** | C | **A** | C |
| **Arsitektur API & Sistem Autentikasi** | C | C | **A / R** | C | I |
| **Model Data ERD & Skema Relasional** | I | I | C | **A / R** | I |
| **Modul Real-Time Chat & Enkripsi** | I | C | C | **A / R** | C |
| **Integrasi Payment Gateway (QRIS/VA)** | C | C | **A / R** | C | I |
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
| :---: | :--- | :--- | :---: | :---: |
| **OQ-01** | **Konsistensi Nama Brand** | Nama brand resmi disepakati 100% menggunakan **Humind** (Human – Mind) untuk seluruh antarmuka, aset, dan dokumen legal/proyek. | Seluruh Tim | **RESOLVED (DECIDED)** |
| **OQ-02** | **Pemilihan Tagline Resmi** | Tagline resmi hero section ditetapkan menggunakan Opsi 1: **"Tempat Pikiranmu Beristirahat dan Didengar."** (Opsi 2 & 3 dicadangkan untuk materi promosi). | Rozin & Fadiyah | **RESOLVED (DECIDED)** |
| **OQ-03** | **Mitra Payment Gateway** | Pemilihan vendor spesifik (Midtrans / Xendit / Tripay) ditunda ke fase perencanaan teknis. Desain sistem menggunakan *Payment Adapter Interface* agar *switch* vendor mudah dilakukan tanpa mengubah kode inti. | Atta & Rozin | **PLANNING (DEFERRED)** |
| **OQ-04** | **Prosedur Penanganan Darurat** | SOP Krisis Darurat ditetapkan mengadopsi standar Riliv (Pre-session disclaimer, tombol bantuan darurat persisten, direktori hotline resmi SEJIWA 119 ext 8 & LISA 24/7, serta kartu intervensi psikolog). | Fadiyah & Rozin | **RESOLVED (ADOPTED)** |
| **OQ-05** | **Kebijakan Pembagian Tarif** | Penentuan persentase bagi hasil (*revenue share*) antara platform Humind dan psikolog mitra per sesi konseling (usulan awal: 80% psikolog, 20% platform untuk operasional server). | Rozin & Atta | `[TBD - Finalisasi Model Finansial]` |
| **OQ-06** | **Penyedia Layanan Real-time Chat** | Evaluasi arsitektur modul chat (*self-hosted* WebSocket vs managed service BaaS) ditunda ke fase riset arsitektur backend. | Atta & Laerra | **PLANNING (DEFERRED)** |
| **OQ-07** | **Penyediaan AI Chatbot Entry Point** | Disepakati menambahkan **Humind Buddy** (AI First-Listener & Matcher) di Fase 1 untuk teman curhat 24/7, FAQ, pemetaan masalah, serta crisis guardrail sebelum booking. | Rozin & Alif | **RESOLVED (ADOPTED)** |
| **OQ-08** | **Formulir Asesmen Pra-Konseling** | Disepakati menerapkan formulir pra-konseling ringkas (3 pertanyaan: mood meter 1-10, keluhan utama, dan ekspektasi sesi) pada alur booking demi efisiensi sesi 60 menit. | Fadiyah & Rozin | **RESOLVED (ADOPTED)** |
| **OQ-09** | **Rangkuman Pasca-Konseling (Post-Session Notes)** | Disepakati psikolog wajib memberikan ringkasan sesi (Key Takeaways, Coping Action Plan, Rekomendasi) yang tersimpan di riwayat klien sebagai hasil nyata konseling. | Seluruh Tim | **RESOLVED (ADOPTED)** |

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
