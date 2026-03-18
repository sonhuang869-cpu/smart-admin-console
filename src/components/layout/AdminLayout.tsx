'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 lg:p-6 min-h-[calc(100vh-8rem)]">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
