'use client';

import React, { useState } from 'react';

interface Event {
  year: number;
  title: string;
  description?: string;
  media?: {
    type: 'image' | 'video' | 'audio';
    url: string;
  }[];
}

const events: Event[] = [
  {
    year: 1945,
    title: 'Nascimento de Jorge Mourão',
    description: 'Jorge Mourão nasceu em 4 de outubro de 1945.'
  },
  {
    year: 1973,
    title: 'Manifesto:\nTO THE GOVERNMENT OF BRAZIL',
    description: 'Contra a censura das gravuras eróticas de Picasso, o manifesto foi assinado por ilustres personas como Jorge O. Mourão, Nicanor Parra, Mario Lafont, Miles Davis, Allen Ginsberg, Julian Beck, Patty Oldenburg, Judith Malina, Helio Oiticica, Stan Getz, John & Yoko Ono Lennon. Também autorizaram a inclusão dos nomes sem constar assinatura Abbie Hoffman, Andy Warhol, Jerry Rubin e Larry Rivers.',
    media: [
      {
        type: 'image',
        url: '/images/manifesto.jpg'
      }
    ]
  },
  {
    year: 1977,
    title: 'Costumes da Casa',
    description: 'Curta-metragem dirigido por Jorge Mourão',
    media: [
      {
        type: 'image',
        url: '/images/costumes da casa.jpg'
      }
    ]
  },
  {
    year: 1977,
    title: 'Brasil 1.872.000 Minutos, Noves Fora?',
    description: 'Curta-metragem dirigido por Jorge Mourão'
  },
  {
    year: 1977,
    title: 'A Pátria',
    description: 'Curta-metragem dirigido por Jorge Mourão'
  },
  {
    year: 1977,
    title: 'Shave & Send',
    description: 'Curta-metragem dirigido por Jorge Mourão',
    media: [
      {
        type: 'image',
        url: '/images/shavesend.jpg'
      }
    ]
  },
  {
    year: 1978,
    title: 'Ator em A Lira do Delírio',
    description: 'Ator em A Lira do Delírio de Walter Lima Jr.',
    media: [
      {
        type: 'image',
        url: '/images/A_Lira_do_Delírio.jpg'
      }
    ]
  },
  {
    year: 1983,
    title: 'Ator em Rio Babilônia',
    description: 'Ator em Rio Babilônia de Neville de Almeida',
    media: [
      {
        type: 'image',
        url: '/images/rio babilonia.jpg'
      }
    ]
  },
  {
    year: 1983,
    title: 'Simpósio Maconha em Debate',
    description: 'Simpósio Maconha em Debate realizado no IFCS pelo Grupo Maria Sabina'
  },
  {
    year: 1985,
    title: 'MACONHA EM DEBATE',
    description: 'Co-Autor do livro MACONHA EM DEBATE publicado pela Editora Brasiliense, foi realizado com transcrições do Simpósio Maconha em Debate realizado no IFCS pelo grupo Maria Sabina em 1983.',
    media: [
      {
        type: 'image',
        url: '/images/maconhaemdebate.jpeg'
      }
    ]
  },
  {
    year: 1990,
    title: 'BRAZILIAN CONNECTION',
    description: 'Autor do livro BRAZILIAN CONNECTION, publicado pela editora Massao Ohno. Lapelas: Walmir Ayala. Apresentação: Fernando Gabeira. Prefácio: Fausto Wolff.',
    media: [
      {
        type: 'image',
        url: '/images/brazilianconnection.jpg'
      }
    ]
  },
  {
    year: 1995,
    title: 'TRAGÉDIA NA SEITA DO DAIME',
    description: 'Autor do livro TRAGÉDIA NA SEITA DO DAIME, publicado pela Editora Imago.',
    media: [
      {
        type: 'image',
        url: '/images/tragediadaime.jpg'
      }
    ]
  },
  {
    year: 2025,
    title: 'Falecimento de Jorge Mourão',
    description: 'Jorge Mourão faleceu em 13 de janeiro de 2025.'
  }
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    setIsModalOpen(true);
  };

  const handleEventClick = (event: Event) => {
    if (selectedEvent?.title === event.title) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedYear(null);
    setSelectedEvent(null);
  };

  const handleButtonClick = (type: 'book' | 'movie') => {
    setPopupMessage(type === 'book' ? 'ESTE LIVRO AINDA NÃO ESTÁ DISPONÍVEL PARA VENDA' : 'ESTE FILME AINDA NÃO ESTÁ DISPONÍVEL PARA ASSISTIR');
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const uniqueYears = Array.from(new Set(events.map(event => event.year))).sort((a, b) => a - b);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20 min-h-screen pt-40">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
      
      {uniqueYears.map((year, index) => {
        const yearEvents = events.filter(event => event.year === year);
        return (
          <div key={year} className="relative mb-16">
            <div className="flex items-center">
              <div 
                className="absolute left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 cursor-pointer hover:bg-white transition-colors duration-200"
                onClick={() => handleYearClick(year)}
              />
              <div className={`absolute ${index % 2 === 0 ? 'left-[calc(50%-12rem)]' : 'left-[calc(50%+12rem)]'}`}>
                <div 
                  className="text-red-500 font-bold text-2xl cursor-pointer hover:text-white transition-colors duration-200 font-typewriter"
                  onClick={() => handleYearClick(year)}
                >
                  {year}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {selectedYear && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-red-500 font-typewriter">{selectedYear}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {events
                .filter(event => event.year === selectedYear)
                .map((event, index) => {
                  const yearEvents = events.filter(e => e.year === selectedYear);
                  const isSingleEvent = yearEvents.length === 1;
                  
                  return (
                    <div 
                      key={index} 
                      className={`border-b border-gray-200 pb-4 last:border-0 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200 ${
                        selectedEvent?.title === event.title ? 'bg-gray-50' : ''
                      }`}
                      onClick={() => !isSingleEvent && handleEventClick(event)}
                    >
                      <div className="flex gap-8">
                        <div className="flex-1 flex flex-col">
                          <div>
                            <h3 className="text-xl font-bold text-black mb-2 whitespace-pre-line">{event.title}</h3>
                            {(isSingleEvent || selectedEvent?.title === event.title) && (
                              <>
                                <p className="text-black">{event.description}</p>
                                {(event.title.includes('MACONHA EM DEBATE') || 
                                  event.title.includes('BRAZILIAN CONNECTION') || 
                                  event.title.includes('TRAGÉDIA NA SEITA DO DAIME')) && (
                                  <div className="mt-4 flex justify-center">
                                    <button 
                                      onClick={() => handleButtonClick('book')}
                                      className="px-6 py-2 bg-green-500 text-black hover:bg-green-600 hover:text-white transition-colors duration-200 rounded-md font-bold"
                                    >
                                      COMPRAR LIVRO
                                    </button>
                                  </div>
                                )}
                                {(event.title.includes('Rio Babilônia') || 
                                  event.title.includes('Shave & Send') || 
                                  event.title.includes('Costumes da Casa') || 
                                  event.title.includes('Brasil 1.872.000 Minutos') || 
                                  event.title.includes('A Pátria') || 
                                  event.title.includes('A Lira do Delírio')) && (
                                  <div className="mt-4 flex justify-center">
                                    <button 
                                      onClick={() => handleButtonClick('movie')}
                                      className="px-6 py-2 bg-green-500 text-black hover:bg-green-600 hover:text-white transition-colors duration-200 rounded-md font-bold"
                                    >
                                      ASSISTIR FILME
                                    </button>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        {(isSingleEvent || selectedEvent?.title === event.title) && event.media && event.media.map((media, mediaIndex) => (
                          <div key={mediaIndex} className="w-1/2">
                            {media.type === 'image' && (
                              <img 
                                src={media.url} 
                                alt={event.title}
                                className="w-full h-auto rounded-lg shadow-lg object-contain"
                                onError={(e) => {
                                  console.error('Erro ao carregar imagem:', media.url);
                                  e.currentTarget.style.display = 'none';
                                }}
                                loading="lazy"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-red-500">{popupMessage}</h2>
              <button 
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={closePopup}
                className="px-6 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 rounded-md font-bold"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline; 