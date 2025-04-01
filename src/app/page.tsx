'use client';

import React from 'react';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Timeline />
    </main>
  );
} 