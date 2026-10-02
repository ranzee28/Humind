import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, Sparkles, Heart } from 'lucide-react';
import Button from '../../components/common/Button';

export default function GroundingPage() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('inhale'); // inhale, hold1, exhale, hold2
  const [timer, setTimer] = useState(4);
  const [totalSeconds, setTotalSeconds] = useState(60);

  const phaseConfig = {
    inhale: { text: 'Tarik Napas Perlahan...', instruction: 'Rasakan udara sejuk mengisi paru-parumu', scale: 'scale-125' },
    hold1: { text: 'Tahan Sebentar...', instruction: 'Biarkan tubuhmu rileks dan tenang', scale: 'scale-125' },
    exhale: { text: 'Hembuskan Bebanmu...', instruction: 'Keluarkan semua ketegangan dari dalam dada', scale: 'scale-75' },
    hold2: { text: 'Diam Sejenak...', instruction: 'Istirahatkan pikiranmu di titik ini', scale: 'scale-75' }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            // Next phase
            setPhase((curr) => {
              if (curr === 'inhale') return 'hold1';
              if (curr === 'hold1') return 'exhale';
              if (curr === 'exhale') return 'hold2';
              return 'inhale';
            });
            return 4;
          }
          return prev - 1;
        });

        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setTimer(4);
    setTotalSeconds(60);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:py-16 text-center space-y-8">
      <div className="flex items-center justify-between text-left">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-humind-neutral-500 hover:text-humind-neutral-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
        <span className="text-xs font-semibold px-2.5 py-1 bg-humind-primary-50 text-humind-primary-700 rounded-full border border-humind-primary-200">
          Metode 4-4-4-4 Box Breathing
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-humind-neutral-900 tracking-tight">
          Panic Grounding 60 Detik
        </h1>
        <p className="text-sm sm:text-base text-humind-neutral-600 max-w-lg mx-auto">
          Fokuskan pandanganmu pada lingkaran di bawah. Ikuti ritme pernapasan untuk menurunkan stimulasi sistem saraf simpatik.
        </p>
      </div>

      {/* Animation Container */}
      <div className="py-12 flex flex-col items-center justify-center relative min-h-[320px]">
        {/* Breathing Circle */}
        <div className="relative flex items-center justify-center">
          <div
            className={`w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-humind-primary-400/30 to-humind-primary-200/50 flex items-center justify-center transition-all duration-1000 ease-in-out ${
              isActive ? phaseConfig[phase].scale : 'scale-100'
            }`}
          >
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-humind-primary-500 text-white flex flex-col items-center justify-center shadow-soft transition-all duration-1000 ease-in-out ${
                isActive ? phaseConfig[phase].scale : 'scale-100'
              }`}
            >
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {isActive ? timer : '4s'}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-white/90 mt-1">
                {isActive ? phase.toUpperCase() : 'SIAP'}
              </span>
            </div>
          </div>
        </div>

        {/* Phase instructions */}
        <div className="mt-8 space-y-1">
          <p className="text-lg font-bold text-humind-neutral-800 transition-all">
            {isActive ? phaseConfig[phase].text : 'Tekan Mulai untuk Memulai Sesi'}
          </p>
          <p className="text-xs text-humind-neutral-500">
            {isActive ? phaseConfig[phase].instruction : 'Durasi total 60 detik latihan terpandu'}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          size="lg"
          variant={isActive ? 'secondary' : 'primary'}
          iconLeft={isActive ? Pause : Play}
          onClick={() => setIsActive(!isActive)}
          className="min-w-[150px]"
        >
          {isActive ? 'Jeda' : 'Mulai Latihan'}
        </Button>
        <Button
          size="lg"
          variant="outline"
          iconLeft={RotateCcw}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>

      <div className="pt-4 text-xs text-humind-neutral-400 flex items-center justify-center gap-1">
        <Heart className="w-3.5 h-3.5 text-humind-primary-500" />
        <span>Sisa waktu latihan: {totalSeconds} detik</span>
      </div>
    </div>
  );
}
