import React from 'react';
import { Outlet } from 'react-router-dom';
import EmergencyBanner from './EmergencyBanner';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
