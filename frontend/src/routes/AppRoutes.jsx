import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import LandingPage from '../features/landing/LandingPage';
import PsychologistListPage from '../features/psychologists/PsychologistListPage';
import WellnessPage from '../features/wellness/WellnessPage';
import GroundingPage from '../features/wellness/GroundingPage';
import MySchedulesPage from '../features/schedules/MySchedulesPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/psychologists" element={<PsychologistListPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/wellness/grounding" element={<GroundingPage />} />
        <Route path="/my-schedules" element={<MySchedulesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
