import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  EyeOff,
  HeartHandshake,
  PhoneCall,
  Wind,
  Smile,
  GraduationCap,
  UserPlus,
  HelpCircle,
  FileText,
  ShieldAlert,
  X,
  Lock,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Video,
  Phone,
  CheckCircle2
} from 'lucide-react';
import Button from '../common/Button';

const EMERGENCY_CONTACTS = [
  {
    name: 'SEJIWA (Kemenkes RI)',
    number: '119 (Tekan 8)',
    tel: '119,8',
    type: 'Bebas Pulsa 24 Jam',
    desc: 'Layanan resmi konseling krisis psikologis nasional.',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    btnClass: 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-emerald-700 bg-white border-emerald-200'
  },
  {
    name: 'LISA Suicide Helpline',
    number: '0811-3815-472',
    tel: '08113815472',
    type: 'Pencegahan Bunuh Diri',
    desc: 'Dukungan krisis emosional darurat bilingual (ID & EN).',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
    btnClass: 'hover:bg-amber-600 hover:text-white hover:border-amber-600 text-amber-800 bg-white border-amber-200'
  },
  {
    name: 'Yayasan Pulih',
    number: '0811-8436-633',
    tel: '08118436633',
    type: 'Pemulihan Trauma',
    desc: 'Konseling trauma healing dan kekerasan berbasis gender.',
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-200/80',
    btnClass: 'hover:bg-sky-600 hover:text-white hover:border-sky-600 text-sky-800 bg-white border-sky-200'
  },
  {
    name: 'Kedaruratan Terpadu',
    number: '112',
    tel: '112',
    type: 'Ambulans & Medis',
    desc: 'Panggilan darurat ambulans medis dan tim pertolongan cepat.',
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-200/80',
    btnClass: 'hover:bg-rose-600 hover:text-white hover:border-rose-600 text-rose-700 bg-white border-rose-200'
  }
];

export default function Footer() {
  const location = useLocation();

  // Modals state for footer links to prevent dead clicks
  const [modalType, setModalType] = useState(null); // 'campus' | 'join' | 'faq' | 'privacy' | 'terms' | null

  const handleScrollToTop = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleScrollToRuangAman = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('ruang-aman');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-50/70 border-t border-slate-200/90 text-slate-700 text-sm mt-auto select-none transition-colors">
      
      {/* ── 1. Top Section: Non-IGD Crisis & Safety Disclaimer ── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-rose-50/70 via-amber-50/40 to-sky-50/50 border border-rose-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                    Protokol Keselamatan & Penafian Medis
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Layanan konseling Humind berfokus pada kesehatan mental non-kegawatdaruratan dan <strong>bukan pengganti Instalasi Gawat Darurat (IGD)</strong>. Jika Anda atau orang terdekat sedang berada dalam krisis keselamatan jiwa atau dorongan melukai diri, segera hubungi nomor bebas pulsa <a href="tel:119,8" className="font-bold text-rose-700 underline hover:text-rose-800">SEJIWA 119 ext 8</a> atau datangi fasilitas medis darurat terdekat.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 w-full md:w-auto">
              <a
                href="tel:119,8"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Panggilan Cepat 119</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Main Footer Grid: 4 Balanced Columns ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Kolom 1 (Span 4): Brand, Value Proposition & SIPP Verification */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-humind-primary-500 flex items-center justify-center text-white shadow-soft group-hover:bg-humind-primary-600 transition-colors">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-humind-primary-600 transition-colors">
                  Hum<span className="text-humind-primary-500">ind</span>
                </span>
                <span className="text-[10px] -mt-1 text-slate-400 font-medium">
                  Ruang Aman Pikiranmu
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed pr-2">
              Tempat pikiranmu beristirahat dan didengar tanpa penghakiman. Platform telekonseling kesehatan mental yang menghubungkan mahasiswa dan dewasa muda dengan psikolog profesional berlisensi resmi.
            </p>

            {/* SIPP & HIMPSI Credibility Seal */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-humind-primary-500 shrink-0" />
                <span>100% Psikolog Berizin SIPP Aktif</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Seluruh mitra konselor klinis telah melalui kurasi ketat dan terdaftar resmi di Himpunan Psikologi Indonesia (HIMPSI).
              </p>
            </div>

            {/* Mode Anonim Guarantee Tag */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <EyeOff className="w-3 h-3" />
              </div>
              <span className="text-[11px]">Kerahasiaan terjamin dengan opsi Mode Curhat Anonim</span>
            </div>
          </div>

          {/* Kolom 2 (Span 2.5): Layanan Konseling */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Layanan Telekonseling
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link
                  to="/psychologists"
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Cari Psikolog SIPP</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/psychologists"
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Sesi Chat, Voice & Video Call</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/#ruang-aman"
                  onClick={handleScrollToRuangAman}
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Standar Pelayanan Humanis</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('campus')}
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group w-full text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span className="flex-1">Humind for Campus</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Soon
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('join')}
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group w-full text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span className="flex-1">Gabung Mitra Psikolog</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Soon
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3 (Span 2.5): Self-Care & Pemulihan Mandiri */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Self-Care Mandiri
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link
                  to="/wellness/grounding"
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Latihan Napas 60 Detik</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wellness"
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Daily Mood Tracker</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-1.5 py-0.5 text-slate-400">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  <span className="flex-1">Humind Buddy (AI)</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                    Soon
                  </span>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('faq')}
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group w-full text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>FAQ & Pusat Bantuan</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType('privacy')}
                  className="hover:text-humind-primary-600 transition-colors flex items-center gap-1.5 py-0.5 group w-full text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-humind-primary-500 group-hover:translate-x-0.5 transition-all" />
                  <span>Kerahasiaan & Privasi</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 4 (Span 3): Hotline Darurat 24 Jam */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
                <span>Bantuan Darurat 24 Jam</span>
              </h4>
              <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                Bebas Pulsa
              </span>
            </div>

            <div className="space-y-2">
              {EMERGENCY_CONTACTS.map((item) => (
                <div
                  key={item.name}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-2 hover:border-slate-300 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      {item.desc}
                    </p>
                  </div>
                  <a
                    href={`tel:${item.tel}`}
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors shadow-sm ${item.btnClass}`}
                    title={`Hubungi ${item.name} (${item.number})`}
                  >
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── 3. Bottom Legal & Meta Bar ── */}
      <div className="border-t border-slate-200/90 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Humind. Seluruh hak cipta dilindungi.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-400">Dirancang dengan empati untuk mahasiswa Indonesia.</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-humind-primary-600 transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-humind-primary-600 transition-colors"
            >
              Kebijakan Privasi
            </button>
            <span className="text-slate-300">•</span>
            <a
              href="https://himpsi.or.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-humind-primary-600 transition-colors inline-flex items-center gap-1"
            >
              <span>Kode Etik HIMPSI</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FOOTER INTERACTIVE MODALS
      ══════════════════════════════════════════════ */}

      {/* Modal 1: Humind for Campus */}
      {modalType === 'campus' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" role="dialog">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                Kemitraan Kampus (Soon)
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Humind for Campus
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami sedang menyiapkan ekosistem kesehatan mental terpadu khusus institusi pendidikan tinggi — mencakup subsidi kuota konseling mahasiswa, pendampingan peer-counselor kampus, hingga dashboard analitik anonymized untuk kesejahteraan civitas akademika.
              </p>
            </div>
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-soft"
                onClick={() => setModalType(null)}
              >
                Mengerti & Tutup
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Gabung Mitra Psikolog */}
      {modalType === 'join' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" role="dialog">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-100">
              <UserPlus className="w-6 h-6" />
            </div>
            <div className="text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200">
                Rekrutmen Mitra Klinis (Soon)
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Bergabung Sebagai Mitra Psikolog
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apakah Anda seorang Psikolog Klinis dengan nomor Surat Izin Praktik Psikologi (SIPP) aktif dari HIMPSI? Humind mengundang Anda untuk berkolaborasi menyediakan ruang telekonseling yang aman, terjangkau, dan ramah generasi muda.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3.5 space-y-2 text-xs text-slate-700 border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Pendidikan minimal Magister Profesi Psikologi Klinis (S2)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Memiliki SIPP aktif dan terdaftar resmi di HIMPSI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Jadwal praktik fleksibel (Chat, Voice Call, Video Call)</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-soft"
                onClick={() => setModalType(null)}
              >
                Saya Tertarik & Mengerti
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: FAQ & Pusat Bantuan */}
      {modalType === 'faq' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" role="dialog">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-humind-primary-600 flex items-center justify-center mx-auto border border-sky-100">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                FAQ & Pusat Bantuan
              </h3>
              <p className="text-xs text-slate-500">
                Pertanyaan yang sering diajukan seputar sesi konseling di Humind
              </p>
            </div>

            <div className="space-y-3 pt-2 text-left">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  Apakah identitas saya aman saat konseling?
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Sangat aman. Anda dapat menggunakan <strong>Mode Curhat Anonim</strong> dengan nama samaran (alias). Psikolog hanya dapat melihat nama samaran Anda demi kenyamanan bercerita.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  Berapa durasi waktu setiap sesi konseling?
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Setiap sesi berlangsung selama <strong>60 menit utuh</strong> melalui pilihan moda Chat interaktif, Voice Call, atau Video Call tatap muka.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  Apakah psikolog mitra memiliki izin resmi?
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Ya, 100% psikolog telah terverifikasi memiliki nomor Surat Izin Praktik Psikologi (SIPP) aktif dari Himpunan Psikologi Indonesia (HIMPSI).
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-soft"
                onClick={() => setModalType(null)}
              >
                Tutup FAQ
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 4: Kebijakan Privasi & Perlindungan Data */}
      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" role="dialog">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto border border-purple-100">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Kebijakan Privasi & Kerahasiaan
              </h3>
              <p className="text-xs text-slate-500">
                Komitmen perlindungan data pribadi dan privasi konseling Anda
              </p>
            </div>

            <div className="space-y-3 pt-2 text-left text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">1. Perlindungan Data (UU PDP No. 27/2022)</h4>
                <p className="text-[11px]">
                  Humind menjamin data pribadi dan riwayat sesi pengguna terlindungi dengan enkripsi standar industri dan tidak akan pernah dijual atau dibagikan ke pihak ketiga tanpa persetujuan eksplisit.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">2. Mode Curhat Anonim (Safe Haven)</h4>
                <p className="text-[11px]">
                  Saat mengaktifkan Mode Anonim, nama asli dan identitas kampus Anda disamarkan secara penuh dari psikolog demi menciptakan ruang curhat yang bebas stigma.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">3. Kerahasiaan Rekam Psikologis</h4>
                <p className="text-[11px]">
                  Catatan konsultasi berada di bawah perlindungan kode etik kerahasiaan profesi psikologi HIMPSI, kecuali dalam kondisi darurat yang mengancam keselamatan nyawa pengguna atau orang lain sesuai hukum yang berlaku.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-soft"
                onClick={() => setModalType(null)}
              >
                Saya Memahami Kebijakan Ini
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 5: Syarat & Ketentuan Penggunaan */}
      {modalType === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" role="dialog">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-humind-primary-600 flex items-center justify-center mx-auto border border-sky-100">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                Syarat & Ketentuan Penggunaan
              </h3>
              <p className="text-xs text-slate-500">
                Ketentuan umum layanan telekonseling Humind
              </p>
            </div>

            <div className="space-y-3 pt-2 text-left text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">1. Bukan Layanan Gawat Darurat (Non-IGD)</h4>
                <p className="text-[11px]">
                  Humind bukan fasilitas rawat inap psikiatri atau IGD. Pengguna dengan kecenderungan bahaya medis darurat wajib menghubungi nomor 112 / 119 ext 8 atau rumah sakit terdekat.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">2. Ketepatan Waktu Sesi (60 Menit Fixed)</h4>
                <p className="text-[11px]">
                  Sesi konseling memiliki durasi terstandarisasi 60 menit. Pengguna diharapkan hadir tepat waktu di ruang telekonseling virtual sesuai slot yang telah dipesan.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs">3. Etika Interaksi Humanis</h4>
                <p className="text-[11px]">
                  Pengguna dan psikolog berkomitmen saling menghormati, tidak melakukan pelecehan, intimidasi, atau tindakan yang melanggar norma hukum dan etika psikologi.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-soft"
                onClick={() => setModalType(null)}
              >
                Setuju & Tutup
              </Button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
