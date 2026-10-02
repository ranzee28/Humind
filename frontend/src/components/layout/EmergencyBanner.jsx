import React, { useState } from 'react';
import { PhoneCall, ChevronDown, ShieldAlert, HeartHandshake } from 'lucide-react';

const EMERGENCY_HOTLINES = [
  {
    id: 'sejiwa',
    name: 'Layanan SEJIWA',
    institution: 'Kemenkes RI',
    desc: 'Layanan resmi konseling krisis psikologis dan pertolongan pertama kesehatan mental.',
    badge: '24 Jam Bebas Pulsa',
    tel: '119,8',
    displayNumber: '119 (Tekan 8)',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    btnHover: 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600',
  },
  {
    id: 'lisa',
    name: 'LISA Helpline',
    institution: 'Love Inside Suicide Awareness',
    desc: 'Pendampingan krisis mental dan pencegahan bunuh diri bilingual (ID & EN).',
    badge: '24/7 Krisis',
    tel: '08113815472',
    displayNumber: '0811-3815-472',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
    btnHover: 'hover:bg-amber-600 hover:text-white hover:border-amber-600',
  },
  {
    id: 'pulih',
    name: 'Yayasan Pulih',
    institution: 'Pemulihan Trauma',
    desc: 'Konseling krisis trauma healing, kekerasan berbasis gender, dan pendampingan emosional.',
    badge: 'Trauma & Pulih',
    tel: '08118436633',
    displayNumber: '0811-8436-633',
    tagColor: 'bg-sky-50 text-sky-800 border-sky-200/80',
    btnHover: 'hover:bg-sky-600 hover:text-white hover:border-sky-600',
  },
  {
    id: '112',
    name: 'Kedaruratan Terpadu',
    institution: 'Layanan Nasional 112',
    desc: 'Panggilan darurat terpadu nasional untuk ambulans medis, tim SAR, dan kepolisian.',
    badge: 'Ambulans / Polisi',
    tel: '112',
    displayNumber: '112',
    tagColor: 'bg-rose-50 text-rose-800 border-rose-200/80',
    btnHover: 'hover:bg-rose-600 hover:text-white hover:border-rose-600',
  },
];

export default function EmergencyBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      aria-label="Pusat Bantuan Krisis dan Darurat"
      className="bg-[#FFF5F5] border-b border-rose-200/70 text-slate-700 text-xs transition-colors select-none relative z-50"
    >
      {/* Collapsed Top Bar: Strictly 1 Single Horizontal Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
        {/* Left: Gentle organic pulse indicator & calming message */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
          </span>

          <div className="flex items-center gap-2 truncate text-xs">
            <span className="font-bold text-rose-700 shrink-0">Krisis Darurat?</span>
            <span className="text-slate-800 text-[11px] shrink-0">
              Humind adalah layanan konseling, bukan IGD medis. Segera hubungi nomor darurat berikut jika kamu membutuhkan pertolongan darurat.
            </span>
          </div>
        </div>

        {/* Right: Cohesive pill action buttons (Aligned horizontally) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:119,8"
            className="inline-flex items-center gap-1.5 font-bold text-rose-700 hover:text-white bg-white hover:bg-rose-600 px-3 py-1 rounded-full border border-rose-200/90 shadow-sm transition-all duration-150 active:scale-95 text-xs group"
            title="Telepon Langsung Hotline SEJIWA Kemenkes 119 ext 8 (Bebas Pulsa)"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-600 group-hover:text-white transition-colors shrink-0" />
            <span className="hidden sm:inline">Hotline SEJIWA (119 ext 8)</span>
            <span className="sm:hidden">119 (ext 8)</span>
          </a>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-rose-700 bg-rose-100/60 hover:bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200/70 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 text-xs"
            aria-expanded={isExpanded}
            aria-controls="emergency-hotlines-panel"
          >
            <span className="hidden sm:inline">{isExpanded ? 'Tutup' : 'Semua Kontak (4)'}</span>
            <span className="sm:hidden">{isExpanded ? 'Tutup' : 'Kontak (4)'}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-rose-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Expanded: Full Directory & Safety Protocol Sheet */}
      {isExpanded && (
        <div
          id="emergency-hotlines-panel"
          className="border-t border-rose-200/70 bg-white/95 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 shadow-sm transition-all duration-200"
        >
          <div className="max-w-7xl mx-auto space-y-3.5">
            {/* Directory Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">
                  Direktori Rujukan Krisis & Kedaruratan Bebas Pulsa (Indonesia)
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Dapat dihubungi langsung 24/7 tanpa perlu mendaftar akun
              </span>
            </div>

            {/* 4 Responsive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-700">
              {EMERGENCY_HOTLINES.map((hotline) => (
                <div
                  key={hotline.id}
                  className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-rose-300 hover:shadow-soft transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1.5 mb-1">
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight group-hover:text-rose-700 transition-colors">
                          {hotline.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-medium mt-0.5">{hotline.institution}</p>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${hotline.tagColor}`}
                      >
                        {hotline.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1.5">
                      {hotline.desc}
                    </p>
                  </div>

                  <a
                    href={`tel:${hotline.tel}`}
                    className={`mt-3.5 inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg bg-white text-slate-800 font-semibold text-xs border border-slate-200 shadow-sm transition-all duration-150 active:scale-[0.98] ${hotline.btnHover}`}
                    title={`Panggil ${hotline.name} (${hotline.displayNumber})`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-rose-600 group-hover:text-inherit shrink-0 transition-colors" />
                    <span>Panggil {hotline.displayNumber}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Reassuring Psychological Safety Disclaimer Notice */}
            <div className="rounded-xl bg-rose-50/60 border border-rose-100/90 p-3 flex items-start gap-2.5 text-[11px] text-slate-600 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-800">Batasan Layanan & Keamanan:</strong> Humind menyediakan layanan telekonseling psikologis terjadwal dan{' '}
                <strong className="text-rose-700">bukan penyedia layanan gawat darurat medis (IGD)</strong>. Jika Anda atau orang terdekat berada dalam ancaman bahaya fisik langsung atau kondisi darurat medis akut, segera hubungi <strong>112</strong> atau kunjungi Instalasi Gawat Darurat (IGD) rumah sakit terdekat.
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
