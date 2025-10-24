import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Book, Code2, Zap } from 'lucide-react';

const ExperiencePage = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  const destinations = [
    {
      id: 1,
      title: 'MCA Student',
      company: 'University Name',
      location: 'Location',
      period: '2024 - Present',
      description: 'First year MCA student focusing on full-stack development, cloud computing, and modern web technologies.',
      icon: Book,
      landmark: '🎓',
      postcardColor: 'from-purple-400 to-pink-400',
      stampBg: 'bg-purple-100',
      stampBorder: 'border-purple-400',
      stampText: 'text-purple-600'
    },
    {
      id: 2,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - 2024',
      description: 'Built custom web applications for clients, focusing on React, Node.js, and database design.',
      icon: Code2,
      landmark: '💻',
      postcardColor: 'from-blue-400 to-cyan-400',
      stampBg: 'bg-blue-100',
      stampBorder: 'border-blue-400',
      stampText: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Coding Enthusiast',
      company: 'Self-Learning',
      location: 'Online',
      period: '2021 - 2023',
      description: 'Started my coding journey through online courses and personal projects. Mastered fundamentals and built strong foundation.',
      icon: Zap,
      landmark: '🚀',
      postcardColor: 'from-orange-400 to-yellow-400',
      stampBg: 'bg-orange-100',
      stampBorder: 'border-orange-400',
      stampText: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />
      
      {/* Animated clouds */}
      <motion.div
        className="absolute top-20 text-6xl opacity-70"
        style={{ left: 0 }}
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-40 text-8xl opacity-60"
        style={{ left: 0 }}
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-60 text-7xl opacity-50"
        style={{ left: 0 }}
        animate={{ x: ['0vw', '100vw'] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: 20 }}
      >
        ☁️
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
             My Journey Timeline 
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-700 font-semibold"
          >
            Every stop has been an adventure!
          </motion.p>
        </motion.div>

        {/* Flight path container */}
        <div className="relative" style={{ height: '800px' }}>
          {/* Dotted flight path */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M 100 400 Q 300 200, 500 350 T 900 250"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeDasharray="15,15"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>

          {/* Animated plane */}
          <motion.div
            className="absolute text-5xl z-30"
            style={{ left: '100px', top: '400px' }}
            animate={{
              x: [0, 400, 800],
              y: [0, -150, -150],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✈️
          </motion.div>

          {/* Destination postcards */}
          {destinations.map((destination, idx) => {
            const Icon = destination.icon;
            const positions = [
              { left: '8%', top: '50%' },
              { left: '42%', top: '28%' },
              { left: '76%', top: '28%' }
            ];
            
            return (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: idx * 0.5 + 1, type: "spring", duration: 0.8 }}
                className="absolute cursor-pointer"
                style={{
                  left: positions[idx].left,
                  top: positions[idx].top,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedDestination(destination)}
              >
                {/* Location pin marker */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: '-70px' }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                >
                  <div className="text-5xl drop-shadow-lg">📍</div>
                </motion.div>

                {/* Postcard */}
                <div 
                  className="w-80 bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white relative"
                  style={{ 
                    height: '210px',
                    transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Postcard header with landmark */}
                  <div className={`h-24 bg-gradient-to-br ${destination.postcardColor} flex items-center justify-center text-6xl relative`}>
                    {destination.landmark}
                    
                    {/* Airmail stripes */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute bg-red-500" style={{ width: '2px', height: '100px', top: 0, right: '16px', transform: 'rotate(45deg)' }} />
                      <div className="absolute bg-blue-500" style={{ width: '2px', height: '100px', top: 0, right: '32px', transform: 'rotate(45deg)' }} />
                      <div className="absolute bg-red-500" style={{ width: '2px', height: '100px', top: 0, right: '48px', transform: 'rotate(45deg)' }} />
                    </div>
                  </div>

                  {/* Postcard content */}
                  <div className="p-4 relative h-[calc(100%-96px)] flex flex-col">
                    {/* Stamp */}
                    <div className={`absolute top-2 right-2 w-12 h-12 ${destination.stampBg} border-2 ${destination.stampBorder} border-dashed rounded flex items-center justify-center`}>
                      <Icon size={24} className={destination.stampText} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {destination.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {destination.company}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <MapPin size={12} />
                      {destination.location}
                      <span className="mx-1">•</span>
                      <Calendar size={15} />
                      {destination.period}
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-grow" />

                    {/* View More indicator */}
                    <div className="pt-2">
                        <div className={`w-full py-2.5 px-4 bg-gradient-to-r ${destination.postcardColor} text-white rounded-lg font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]`}
                             style={{ fontFamily: 'Fredoka, sans-serif' }}>
                          <span>View Full Details</span>
                          <ExternalLink size={14} />
                        </div>
                         </div>
                  </div>
                </div>

                {/* Circular loops animation around pin */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-dashed border-gray-400 opacity-50"
                  style={{ top: '-70px' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.5
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed destination modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large postcard */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
                {/* Header with landmark */}
                <div className={`h-48 bg-gradient-to-br ${selectedDestination.postcardColor} flex items-center justify-center text-9xl relative`}>
                  {selectedDestination.landmark}
                  
                  {/* Airmail stripes */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-24 ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`}
                        style={{ transform: 'rotate(-12deg)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Large stamp */}
                  <div className={`absolute top-4 right-4 w-20 h-20 ${selectedDestination.stampBg} border-4 ${selectedDestination.stampBorder} border-dashed rounded-lg flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const Icon = selectedDestination.icon;
                      return <Icon size={40} className={selectedDestination.stampText} />;
                    })()}
                  </div>

                  <h2 className="text-4xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {selectedDestination.title}
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-semibold text-gray-700">
                      {selectedDestination.company}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{selectedDestination.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{selectedDestination.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-b-2 border-dashed border-gray-300 py-6 mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {selectedDestination.description}
                    </p>
                  </div>

                  {/* Postcard lines */}
                  <div className="space-y-2 mb-6 opacity-30">
                    <div className="h-px bg-gray-400 w-full" />
                    <div className="h-px bg-gray-400" style={{ width: '75%' }} />
                    <div className="h-px bg-gray-400" style={{ width: '66%' }} />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDestination(null)}
                    className={`w-full py-4 bg-gradient-to-r ${selectedDestination.postcardColor} text-white rounded-xl font-bold text-lg shadow-xl`}
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    Close Postcard ✈️
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperiencePage;