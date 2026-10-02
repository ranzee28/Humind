import React from 'react';
import { Calendar, Clock, Video, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { Link } from 'react-router-dom';

export default function MySchedulesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <Badge variant="primary" size="md">Jadwal & Kuota Aktif</Badge>
        <h1 className="text-3xl font-extrabold text-humind-neutral-900 tracking-tight">
          Sesi Konseling Saya
        </h1>
        <p className="text-sm text-humind-neutral-600">
          Pantau jadwal konsultasi yang akan datang dan sisa paket sesi konselingmu.
        </p>
      </div>

      {/* Empty State or Sample Card */}
      <div className="bg-white rounded-3xl border border-humind-neutral-200/90 shadow-soft p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-humind-primary-50 text-humind-primary-500 flex items-center justify-center">
          <Calendar className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-humind-neutral-900">
            Belum Ada Sesi Konsultasi Aktif
          </h3>
          <p className="text-sm text-humind-neutral-500 max-w-md mx-auto">
            Jadwalkan sesi pertamamu dengan psikolog berlisensi untuk mulai memproses beban pikiranmu.
          </p>
        </div>
        <div className="pt-2">
          <Link to="/psychologists">
            <Button variant="primary" size="md" iconRight={ArrowRight}>
              Cari & Jadwalkan Psikolog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
