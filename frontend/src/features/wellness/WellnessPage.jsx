import React, { useState } from 'react';
import { Sparkles, Calendar, Check, Smile, Frown, Meh, AlertCircle, Heart, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { Link } from 'react-router-dom';

export default function WellnessPage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  const moodScales = [
    { value: 1, label: 'Sangat Berat / Burnout', emoji: '😫', color: 'hover:border-rose-400' },
    { value: 2, label: 'Lelah / Cemas', emoji: '😔', color: 'hover:border-amber-400' },
    { value: 3, label: 'Netral / Biasa Saja', emoji: '😐', color: 'hover:border-blue-400' },
    { value: 4, label: 'Cukup Tenang & Baik', emoji: '🙂', color: 'hover:border-emerald-400' },
    { value: 5, label: 'Penuh Energi / Bahagia', emoji: '😊', color: 'hover:border-humind-primary-400' },
  ];

  const triggerTags = [
    'Tugas & Ujian', 'Bimbingan Skripsi', 'Hubungan Pertemanan',
    'Masalah Keluarga', 'Kondisi Finansial', 'Kurang Tidur',
    'Overthinking Masa Depan', 'Konflik Pasangan'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      if (selectedTags.length < 3) {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  const handleCheckIn = () => {
    if (!selectedMood) return;
    setHasCheckedIn(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <Badge variant="primary" size="md">Ruang Rawat Diri Harian</Badge>
        <h1 className="text-3xl font-extrabold text-humind-neutral-900 tracking-tight">
          Wellness & Mood Tracker
        </h1>
        <p className="text-sm text-humind-neutral-600">
          Check-in singkat kurang dari 15 detik. Kenali emosimu hari ini tanpa menghakimi dirimu sendiri.
        </p>
      </div>

      {/* Mood Check-In Card */}
      <div className="bg-white rounded-3xl border border-humind-neutral-200/90 shadow-soft p-6 sm:p-8 space-y-6">
        {!hasCheckedIn ? (
          <>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-humind-neutral-900">
                Bagaimana perasaanmu sekarang?
              </h2>
              <p className="text-xs text-humind-neutral-500">
                Pilih satu skala emosi yang paling mewakili keadaan batinmu:
              </p>
            </div>

            {/* Mood Scale Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {moodScales.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setSelectedMood(item.value)}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                    selectedMood === item.value
                      ? 'border-humind-primary-500 bg-humind-primary-50 ring-2 ring-humind-primary-200 shadow-sm'
                      : 'border-humind-neutral-200 bg-white hover:bg-humind-neutral-50'
                  }`}
                >
                  <span className="text-3xl select-none">{item.emoji}</span>
                  <span className="text-xs font-semibold text-humind-neutral-700">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Trigger Tags */}
            {selectedMood && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold text-humind-neutral-700">
                  Apa pemicu utamanya? (Pilih 1 - 3 tag opsional)
                </p>
                <div className="flex flex-wrap gap-2">
                  {triggerTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-humind-primary-500 text-white border-humind-primary-500 font-medium'
                          : 'bg-humind-neutral-50 text-humind-neutral-600 border-humind-neutral-200 hover:border-humind-primary-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                disabled={!selectedMood}
                onClick={handleCheckIn}
                className="w-full sm:w-auto"
              >
                Simpan Check-In Hari Ini
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-humind-primary-100 text-humind-primary-600 flex items-center justify-center">
              <Heart className="w-7 h-7 fill-humind-primary-500 text-humind-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-humind-neutral-900">
              Terima kasih sudah jujur dengan perasaanmu hari ini.
            </h3>
            <p className="text-sm text-humind-neutral-600 max-w-md mx-auto">
              Perasaan apa pun yang kamu alami hari ini adalah valid. Istirahat sejenak, minumlah segelas air putih hangat.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link to="/wellness/grounding">
                <Button variant="secondary" size="sm">
                  Latihan Pernapasan 60s
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => setHasCheckedIn(false)}>
                Ubah Catatan
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Access to Grounding Banner */}
      <div className="p-6 bg-gradient-to-r from-humind-primary-50 to-white rounded-2xl border border-humind-primary-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-sm text-humind-neutral-900">
            Latihan Relaksasi Singkat
          </h3>
          <p className="text-xs text-humind-neutral-600">
            Meredakan panik dan kecemasan dalam 60 detik dengan visual Box Breathing.
          </p>
        </div>
        <Link to="/wellness/grounding" className="shrink-0">
          <Button variant="primary" size="sm" iconRight={ArrowRight}>
            Buka Fitur Grounding
          </Button>
        </Link>
      </div>
    </div>
  );
}
