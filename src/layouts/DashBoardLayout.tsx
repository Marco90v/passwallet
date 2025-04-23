import React from 'react';
import Navbar from '@components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: itemsNavValue) => void;
};

function DasBoardLayout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="mx-2 max-w-7xl py-6 lg:mx-auto lg:px-8">
        {children}
      </main>
    </div>
  );
}

export { DasBoardLayout };