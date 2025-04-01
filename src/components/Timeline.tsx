'use client';

import React from 'react';

const Timeline = () => {
  const startDate = new Date('1945-10-04');
  const endDate = new Date('2025-01-13');

  return (
    <div className="relative min-h-screen pt-20">
      {/* Linha vertical central */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-500/30 transform -translate-x-1/2" />
      
      {/* Container da timeline */}
      <div className="container mx-auto px-4">
        {/* Ponto inicial */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2" />
          <div className="ml-auto w-1/2 pl-8">
            <div className="text-red-500 font-bold">1945</div>
            <div className="text-gray-400">Nascimento de Jorge Mourão</div>
          </div>
        </div>

        {/* Eventos */}
        <div className="space-y-20">
          {/* 1977 */}
          <div className="relative">
            <div className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2" />
            <div className="ml-auto w-1/2 pl-8">
              <div className="text-red-500 font-bold">1977</div>
              <div className="text-gray-400">Produção do filme Costumes da Casa, em película Super-8</div>
            </div>
          </div>

          {/* 1978 */}
          <div className="relative">
            <div className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2" />
            <div className="ml-auto w-1/2 pl-8">
              <div className="text-red-500 font-bold">1978</div>
              <div className="text-gray-400">Ator em A Lira do Delírio de Walter Lima Jr.</div>
            </div>
          </div>

          {/* 1983 */}
          <div className="relative">
            <div className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2" />
            <div className="ml-auto w-1/2 pl-8">
              <div className="text-red-500 font-bold">1983</div>
              <div className="text-gray-400">Ator em Rio Babilônia de Neville de Almeida</div>
            </div>
          </div>
        </div>

        {/* Espaço para eventos futuros */}
        <div className="h-96" />

        {/* Ponto final */}
        <div className="relative">
          <div className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2" />
          <div className="ml-auto w-1/2 pl-8">
            <div className="text-red-500 font-bold">2025</div>
            <div className="text-gray-400">Falecimento de Jorge Mourão</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 