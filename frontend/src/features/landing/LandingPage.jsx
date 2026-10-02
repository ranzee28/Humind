import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  ShieldCheck,
  EyeOff,
  Clock,
  ArrowRight,
  CheckCircle2,
  Wind,
  MessageSquare,
  Phone,
  Video,
  GraduationCap,
  Compass,
  HeartCrack,
  Home,
  Brain,
} from 'lucide-react';
import Button from '../../components/common/Button';

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const studentCategories = [
    {
      id: 'academic-burnout',
      title: 'Skripsi & Burnout',
      desc: 'Buntu bab 4, revisi tak kunjung usai, dan kehilangan motivasi kuliah.',
      icon: GraduationCap,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      id: 'insecurity',
      title: 'Insecurity & Krisis PD',
      desc: 'Imposter syndrome, minder lihat LinkedIn teman, dan takut presentasi.',
      icon: EyeOff,
      color: 'bg-sky-50 text-sky-600 border-sky-200',
    },
    {
      id: 'quarter-life',
      title: 'Quarter-Life Crisis',
      desc: 'Bingung arah karir setelah lulus dan cemas akan ekspektasi masa depan.',
      icon: Compass,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      id: 'toxic-relationship',
      title: 'Hubungan & Patah Hati',
      desc: 'Toxic relationship, patah hati, hingga sulit menetapkan batasan diri.',
      icon: HeartCrack,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      id: 'family-pressure',
      title: 'Ekspektasi Keluarga',
      desc: 'Beban menjadi tulang punggung keluarga atau konflik pola asuh orang tua.',
      icon: Home,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      id: 'social-anxiety',
      title: 'Overthinking & Cemas',
      desc: 'Pikiran berputar di malam hari dan kecemasan menghadapi interaksi sosial.',
      icon: Brain,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section id="hero" className="relative overflow-hidden">

        {/* ── Full-bleed editorial photo backdrop ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
        >
          <img
            src="/hero-photo.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          {/* Left scrim — lets left-side text stay legible on white bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
          {/* Bottom fade to page background */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* ── Copy overlay ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pt-20 md:pb-32">
          <div className="max-w-xl space-y-6">

            {/* Session format pills — Lucide icons, no emojis */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Chat', Icon: MessageSquare },
                { label: 'Voice Call', Icon: Phone },
                { label: 'Video Call', Icon: Video },
              ].map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-humind-neutral-200 text-humind-neutral-700 text-xs font-semibold shadow-sm"
                >
                  <Icon className="w-3 h-3 text-humind-primary-500" aria-hidden="true" />
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-humind-primary-50/90 border border-humind-primary-100 text-humind-primary-700 text-xs font-semibold shadow-sm">
                <EyeOff className="w-3 h-3" aria-hidden="true" />
                Mode Anonim
              </span>
            </div>

            {/* Headline — 2 lines max, font scale tuned to fit */}
            <h1 className="text-[32px] sm:text-[48px] font-semibold text-humind-neutral-900 leading-tight sm:leading-[52px]">
              Tak Perlu Selalu Kuat,{' '}
              <em className="not-italic text-humind-primary-600">
                Ada Kami Untukmu.
              </em>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-humind-neutral-600 leading-relaxed max-w-[46ch]">
              Bicarakan apa pun yang membebanimu bersama psikolog berlisensi resmi. Aman dan bisa pakai nama samaran.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link to="/psychologists" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  iconRight={ArrowRight}
                  className="w-full shadow-sm"
                >
                  Konseling Sekarang
                </Button>
              </Link>
              <Link to="/wellness/grounding" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  iconLeft={Wind}
                  className="w-full bg-white/90"
                >
                  Latihan Napas 60s
                </Button>
              </Link>
            </div>

            {/* Trust strip — inline row, below CTAs */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-humind-neutral-500 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-humind-primary-400 shrink-0" aria-hidden="true" />
                Psikolog Berlisensi SIPP
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-humind-primary-400 shrink-0" aria-hidden="true" />
                Sesi Penuh 50 Menit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-humind-primary-400 shrink-0" aria-hidden="true" />
                Tarif Terjangkau
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6 MASALAH MAHASISWA SECTION
      ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="section-eyebrow">Isu yang Umum Dihadapi</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-humind-neutral-900">
            Apa yang Sedang Mengganjal Pikiranmu?
          </h2>
          <p className="text-sm text-humind-neutral-600">
            Kamu tidak sendirian. Psikolog kami memiliki keahlian klinis khusus untuk isu-isu yang sering dialami di fase bangku kuliah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {studentCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white p-6 rounded-2xl border border-humind-neutral-200/80 shadow-soft hover:shadow-soft-hover transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-humind-neutral-900 group-hover:text-humind-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-humind-neutral-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-humind-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-humind-primary-600 group-hover:underline">
                    Lihat Psikolog Terkait
                  </span>
                  <ArrowRight className="w-4 h-4 text-humind-primary-500 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
                <Link to={`/psychologists?specialty=${item.id}`} className="absolute inset-0">
                  <span className="sr-only">Buka kategori {item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STANDAR PELAYANAN / RUANG AMAN SECTION
      ═══════════════════════════════════════════ */}
      <section id="ruang-aman" className="bg-humind-primary-50/50 py-16 border-y border-humind-primary-100/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="section-eyebrow">Ruang Aman Pikiranmu</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-humind-neutral-900">
              Mengapa Memilih Humind?
            </h2>
            <p className="text-sm text-humind-neutral-600">
              Dirancang dari keresahan mahasiswa yang butuh bantuan profesional tanpa ribet dan tanpa rasa cemas privasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-humind-neutral-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-humind-primary-500 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-humind-neutral-900">
                Psikolog Berlisensi Resmi SIPP
              </h3>
              <p className="text-sm text-humind-neutral-600 leading-relaxed">
                Seluruh psikolog mitra telah diverifikasi Surat Izin Praktik Psikologi (SIPP) dari HIMPSI.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-humind-neutral-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-humind-primary-500 text-white flex items-center justify-center">
                <EyeOff className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-humind-neutral-900">
                Mode Curhat Anonim (Alias)
              </h3>
              <p className="text-sm text-humind-neutral-600 leading-relaxed">
                Kamu bebas memilih nama samaran saat sesi konseling tanpa perlu khawatir identitas kampusmu tersebar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-humind-neutral-200/80 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-xl bg-humind-primary-500 text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-humind-neutral-900">
                3 Pilihan Metode & Harga Jelas
              </h3>
              <p className="text-sm text-humind-neutral-600 leading-relaxed">
                Pilih metode paling nyaman: Chat interaktif, Voice Call, atau Video Call. Tarif terstandarisasi ramah mahasiswa tanpa biaya tersembunyi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOX BREATHING PANIC CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-humind-primary-500 to-humind-primary-600 rounded-3xl p-8 sm:p-12 text-white shadow-soft-hover relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left max-w-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
              <Wind className="w-3.5 h-3.5" aria-hidden="true" />
              Fitur Panic Grounding 60 Detik
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Dada Terasa Sesak atau Sedang Cemas?
            </h2>
            <p className="text-sm text-white/90 leading-relaxed">
              Tarik napas sejenak. Gunakan panduan visual <em>Box Breathing</em> kami untuk meredakan denyut jantung dan menenangkan sistem sarafmu dalam 1 menit.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <Link to="/wellness/grounding">
              <button className="px-6 py-3.5 bg-white text-humind-primary-600 font-bold rounded-2xl shadow-lg hover:bg-humind-primary-50 transition-all transform hover:scale-105 active:scale-95 text-sm flex items-center gap-2">
                <Wind className="w-4 h-4 text-humind-primary-500" aria-hidden="true" />
                Mulai Latihan Napas Sekarang
              </button>
            </Link>
            <span className="text-[11px] text-white/80 mt-2">100% Gratis & Tanpa Perlu Login</span>
          </div>
        </div>
      </section>

    </div>
  );
}
