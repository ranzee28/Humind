import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Star, 
  MessageSquare, 
  Phone, 
  Video, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export default function PsychologistListPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'Semua Spesialisasi' },
    { id: 'academic-burnout', label: 'Skripsi & Burnout' },
    { id: 'insecurity', label: 'Insecurity & Percaya Diri' },
    { id: 'quarter-life', label: 'Quarter-Life & Karir' },
    { id: 'toxic-relationship', label: 'Hubungan & Patah Hati' },
    { id: 'family-pressure', label: 'Ekspektasi Keluarga' },
    { id: 'social-anxiety', label: 'Cemas & Overthinking' },
  ];

  // Dummy data sesuai data skema SIPP
  const psychologists = [
    {
      id: 'psy-01',
      name: 'Nadia Larasati, M.Psi., Psikolog',
      sipp: 'SIPP: 2024-08-1123',
      rating: 4.95,
      reviews: 148,
      specialties: ['Skripsi & Burnout', 'Insecurity & Percaya Diri'],
      specialtyIds: ['academic-burnout', 'insecurity'],
      bio: 'Fokus mendampingi mahasiswa tingkat akhir yang mengalami blokade skripsi, sindrom imposter, dan kecemasan presentasi akademik.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
      methods: ['Chat', 'Voice Call', 'Video Call'],
      nextAvailable: 'Hari ini, 19:30 WIB'
    },
    {
      id: 'psy-02',
      name: 'Dimas Satria, M.Psi., Psikolog',
      sipp: 'SIPP: 2023-11-0982',
      rating: 4.92,
      reviews: 96,
      specialties: ['Quarter-Life & Karir', 'Cemas & Overthinking'],
      specialtyIds: ['quarter-life', 'social-anxiety'],
      bio: 'Pendekatan CBT ramah anak muda untuk mengatasi kebingungan arah hidup pasca-kampus dan overthinking masa depan.',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=256',
      methods: ['Chat', 'Video Call'],
      nextAvailable: 'Besok, 14:00 WIB'
    },
    {
      id: 'psy-03',
      name: 'Aulia Rahma, S.Psi., M.Psi., Psikolog',
      sipp: 'SIPP: 2022-04-0541',
      rating: 4.98,
      reviews: 215,
      specialties: ['Hubungan & Patah Hati', 'Ekspektasi Keluarga'],
      specialtyIds: ['toxic-relationship', 'family-pressure'],
      bio: 'Ruang aman dan tanpa penghakiman untuk memproses luka batin, hubungan tidak sehat, serta dinamika relasi dengan orang tua.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256',
      methods: ['Chat', 'Voice Call', 'Video Call'],
      nextAvailable: 'Hari ini, 21:00 WIB'
    }
  ];

  const filteredPsychologists = psychologists.filter((psy) => {
    const matchesFilter = selectedSpecialty === 'all' || psy.specialtyIds.includes(selectedSpecialty);
    const matchesSearch = psy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          psy.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          psy.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <Badge variant="primary" size="md">Direktori Tenaga Profesional</Badge>
        <h1 className="text-3xl font-extrabold text-humind-neutral-900 tracking-tight">
          Pilih Psikolog Berlisensi Resmi
        </h1>
        <p className="text-sm text-humind-neutral-600 max-w-2xl">
          Setiap psikolog di Humind telah melalui verifikasi ketat nomor izin praktik (SIPP) dari Himpunan Psikologi Indonesia (HIMPSI).
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-humind-neutral-400" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama atau topik masalah..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-humind-neutral-200 bg-white text-sm text-humind-neutral-800 placeholder-humind-neutral-400 focus:outline-none focus:ring-2 focus:ring-humind-primary-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSpecialty(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedSpecialty === tab.id
                  ? 'bg-humind-primary-500 text-white shadow-xs'
                  : 'bg-white border border-humind-neutral-200 text-humind-neutral-600 hover:border-humind-primary-300 hover:text-humind-primary-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Psychologist List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPsychologists.map((psy) => (
          <div
            key={psy.id}
            className="bg-white rounded-2xl border border-humind-neutral-200/90 shadow-soft hover:shadow-soft-hover transition-all flex flex-col justify-between overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {/* Profile Top */}
              <div className="flex items-start gap-4">
                <img
                  src={psy.avatar}
                  alt={psy.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-humind-neutral-100 shadow-xs"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-humind-neutral-900 leading-snug">
                    {psy.name}
                  </h3>
                  <Badge variant="sipp" size="sm" icon={ShieldCheck}>
                    {psy.sipp}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-humind-neutral-500 pt-0.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-humind-neutral-800">{psy.rating}</span>
                    <span>({psy.reviews} ulasan)</span>
                  </div>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-humind-neutral-600 leading-relaxed line-clamp-3">
                {psy.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {psy.specialties.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-humind-primary-50 text-humind-primary-700 border border-humind-primary-100"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Support Methods */}
              <div className="pt-2 border-t border-humind-neutral-100 flex items-center justify-between text-xs text-humind-neutral-500">
                <span className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-humind-primary-500" />
                  Slot: <strong className="text-humind-neutral-700">{psy.nextAvailable}</strong>
                </span>
                <div className="flex items-center gap-1.5 text-humind-primary-600">
                  <MessageSquare className="w-3.5 h-3.5" title="Chat" />
                  <Phone className="w-3.5 h-3.5" title="Voice Call" />
                  <Video className="w-3.5 h-3.5" title="Video Call" />
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="px-6 pb-6 pt-2 bg-humind-neutral-50/50 border-t border-humind-neutral-100">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                iconRight={ArrowRight}
                onClick={() => alert(`Memulai alur reservasi dengan ${psy.name}. Alur Dynamic Calculator akan muncul!`)}
              >
                Pilih Jadwal Konsultasi
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
