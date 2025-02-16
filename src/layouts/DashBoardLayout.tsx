import React from 'react';
import Navbar from '@components/Navbar';


interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: itemsNavValue) => void;
  // onLogout: () => void;
};

function DasBoardLayout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export { DasBoardLayout };