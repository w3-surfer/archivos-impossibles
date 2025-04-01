'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-red-500/20">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-red-500">ARCHIVOS IMPOSSIBLES</h1>
      </div>
    </header>
  );
};

export default Header; 