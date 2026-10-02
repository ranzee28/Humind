import React, { useState } from 'react';
import { PhoneCall, AlertCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function EmergencyBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Bantuan Darurat Krisis" className="bg-humind-crisis-50 border-b border-humind-crisis-200 text-humind-crisis-700 text-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-humind-crisis-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-humind-crisis-600"></span>
          </span>
          <p className="font-medium text-humind-neutral-800">
            Sedang dalam krisis darurat atau butuh pertolongan segera?
          </p>
          <span className="hidden md:inline text-humind-neutral-500">
            — Humind adalah telekonseling terjadwal, bukan layanan IGD medis.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:119,8"
            className="inline-flex items-center gap-1.5 font-semibold text-humind-crisis-600 hover:text-humind-crisis-700 bg-white px-2.5 py-1 rounded-lg border border-humind-crisis-200 shadow-xs hover:bg-humind-crisis-50 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Hotline SEJIWA (119 ext 8)</span>
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-humind-neutral-600 hover:text-humind-neutral-900 inline-flex items-center gap-1 font-medium focus:outline-none"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Tutup Info' : 'Semua Kontak Darurat'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-humind-crisis-200/70 bg-white/80 backdrop-blur-xs px-4 py-3 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-humind-neutral-700">
            <div className="p-2.5 rounded-lg bg-humind-crisis-50/50 border border-humind-crisis-100">
              <p className="font-semibold text-humind-crisis-700">Layanan SEJIWA (Kemenkes RI)</p>
              <p className="text-[11px] text-humind-neutral-600 mt-0.5">Konseling krisis psikologis 24 jam bebas pulsa</p>
              <a href="tel:119,8" className="inline-block mt-1 font-bold text-humind-crisis-600 text-sm hover:underline">
                119 (Tekan 8)
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-humind-crisis-50/50 border border-humind-crisis-100">
              <p className="font-semibold text-humind-crisis-700">LISA Suicide Prevention</p>
              <p className="text-[11px] text-humind-neutral-600 mt-0.5">Pendampingan krisis 24/7 (ID & EN)</p>
              <a href="tel:08113815472" className="inline-block mt-1 font-bold text-humind-crisis-600 text-sm hover:underline">
                0811-3815-472
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-humind-crisis-50/50 border border-humind-crisis-100">
              <p className="font-semibold text-humind-crisis-700">Kedaruratan Terpadu Nasional</p>
              <p className="text-[11px] text-humind-neutral-600 mt-0.5">Ambulans, Polisi, dan SAR</p>
              <a href="tel:112" className="inline-block mt-1 font-bold text-humind-crisis-600 text-sm hover:underline">
                112
              </a>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
