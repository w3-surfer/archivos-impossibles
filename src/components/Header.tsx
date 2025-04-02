'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-red-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <h1 className="text-4xl font-bold text-red-500 font-typewriter">
          Archivos Impossibles
        </h1>
      </div>
    </header>
  );
};

export default Header; 