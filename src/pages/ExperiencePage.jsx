import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Book, Code2, Heart, GraduationCap, Users } from 'lucide-react';

const ExperiencePage = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  const destinations = [
    {
      id: 1,
      title: 'MCA Student',
      company: 'Siliguri Institute of Technology',
      location: 'Siliguri, West Bengal',
      period: '2025 - 2027',
      description: 'Currently pursuing Master of Computer Applications with a focus on advanced software development, data structures, algorithms, and modern web technologies. Actively participating in hackathons and building innovative projects.',
      icon: GraduationCap,
      landmark: '🎓',
      postcardColor: 'from-purple-400 to-pink-400',
      stampBg: 'bg-purple-100',
      stampBorder: 'border-purple-400',
      stampText: 'text-purple-600',
      position: { left: '3%', top: '22%' }
    },
    {
      id: 2,
      title: 'Volunteer at Robin Hood Army',
      company: 'Robin Hood Army',
      location: 'Siliguri, West Bengal',
      period: 'Feb 2025 - Present',
      description: 'Actively volunteering to distribute surplus food from events and restaurants to hungry people in need. Contributing to reducing food waste while helping feed the underprivileged in the community.',
      icon: Heart,
      landmark: '❤️',
      postcardColor: 'from-red-400 to-rose-400',
      stampBg: 'bg-red-100',
      stampBorder: 'border-red-400',
      stampText: 'text-red-600',
      position: { left: '35%', top: '8%' }
    },
    {
      id: 3,
      title: 'Freelance Full Stack Developer',
      company: 'Freelancer & Upwork',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Building custom web applications for clients worldwide, specializing in React, Node.js, Express, MongoDB, and modern full-stack technologies. Delivering high-quality, scalable solutions tailored to client needs.',
      icon: Code2,
      landmark: '💻',
      postcardColor: 'from-blue-400 to-cyan-400',
      stampBg: 'bg-blue-100',
      stampBorder: 'border-blue-400',
      stampText: 'text-blue-600',
      position: { left: '68%', top: '18%' }
    },
    {
      id: 4,
      title: 'Volunteer Teacher',
      company: 'Yuva Tutors',
      location: 'Mumbai, Maharashtra',
      period: '2019 - 2021',
      description: 'Taught underprivileged children as a volunteer educator, helping them with their studies and building their confidence. Made education accessible and fun for students from disadvantaged backgrounds.',
      icon: Users,
      landmark: '👩‍🏫',
      postcardColor: 'from-orange-400 to-yellow-400',
      stampBg: 'bg-orange-100',
      stampBorder: 'border-orange-400',
      stampText: 'text-orange-600',
      position: { left: '8%', top: '63%' }
    },
    {
      id: 5,
      title: 'BCA Graduate',
      company: 'IGNOU (Salesian College)',
      location: 'Siliguri, West Bengal',
      period: '2022 - 2025',
      description: 'Completed Bachelor of Computer Applications from IGNOU through Salesian College study center. Built strong foundation in programming, database management, software engineering, and web development.',
      icon: Book,
      landmark: '📚',
      postcardColor: 'from-green-400 to-emerald-400',
      stampBg: 'bg-green-100',
      stampBorder: 'border-green-400',
      stampText: 'text-green-600',
      position: { left: '66%', top: '55%' }
    }
  ];

  return (
    <div className="min-h-screen relative pt-20 pb-16 px-4 overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200">
      {/* Decorative clouds */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-70"
        animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 text-8xl opacity-60"
        animate={{ x: [0, -35, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-32 text-7xl opacity-50"
        animate={{ x: [0, 22, 0], y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        ☁️
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl font-black mb-3 text-white drop-shadow-lg" style={{ fontFamily: 'Space Grotesk, sans-serif', textShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}>
            ✈️ My Journey Timeline ✈️
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white font-bold drop-shadow-md"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Every stop has been an adventure!
          </motion.p>
        </motion.div>

        {/* Flight map container */}
        <div className="relative w-full mx-auto" style={{ height: '850px', maxWidth: '1400px' }}>
          {/* SVG flight path - very curvy like real flight routes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
                <stop offset="25%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.85" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            
            {/* Very curvy, organic flight path */}
            <motion.path
              d="M 80 200 Q 150 100, 280 80 Q 400 60, 520 90 Q 640 120, 720 100 Q 850 70, 950 160 Q 1020 220, 1050 320 Q 1070 420, 1020 500 Q 970 560, 880 580 Q 750 600, 600 590 Q 450 580, 320 570 Q 200 560, 140 540 Q 100 530, 80 520"
              stroke="url(#pathGradient)"
              strokeWidth="3.5"
              strokeDasharray="16,10"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Animated airplane following the curved path */}
          <motion.div
            className="absolute text-4xl z-50 drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}
          >
            <motion.div
              style={{
                offsetPath: 'path("M 80 200 Q 150 100, 280 80 Q 400 60, 520 90 Q 640 120, 720 100 Q 850 70, 950 160 Q 1020 220, 1050 320 Q 1070 420, 1020 500 Q 970 560, 880 580 Q 750 600, 600 590 Q 450 580, 320 570 Q 200 560, 140 540 Q 100 530, 80 520")',
                offsetRotate: 'auto 90deg',
              }}
              animate={{
                offsetDistance: ['0%', '100%']
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✈️
            </motion.div>
          </motion.div>

          {/* Destination postcards with pins - scattered positions */}
          {destinations.map((destination, idx) => {
            const Icon = destination.icon;
            
            return (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: idx * 0.22 + 0.8, 
                  type: "spring", 
                  duration: 0.7,
                  bounce: 0.35 
                }}
                className="absolute"
                style={{
                  left: destination.position.left,
                  top: destination.position.top,
                  zIndex: 20
                }}
              >
                {/* Animated location pin */}
                <motion.div
                  className="absolute text-4xl"
                  style={{ 
                    left: '60px', 
                    top: '-50px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                  }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5
                  }}
                >
                  📍
                </motion.div>

                {/* Ripple effect */}
                <motion.div
                  className="absolute w-10 h-10 rounded-full border-3 border-white opacity-50"
                  style={{ left: '58px', top: '-44px' }}
                  animate={{
                    scale: [1, 2.2, 2.2],
                    opacity: [0.5, 0, 0]
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: idx * 0.6
                  }}
                />

                {/* Postcard - varied rotations for organic feel */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -6, rotate: 0 }}
                  onClick={() => setSelectedDestination(destination)}
                  className="cursor-pointer relative"
                  style={{
                    transform: `rotate(${[3, -4, 2, -3, 4][idx]}deg)`
                  }}
                >
                  <div 
                    className="w-64 bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-white"
                    style={{ 
                      boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08)'
                    }}
                  >
                    {/* Postcard top with landmark */}
                    <div className={`h-28 bg-gradient-to-br ${destination.postcardColor} flex items-center justify-center text-5xl relative overflow-hidden`}>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {destination.landmark}
                      </motion.div>
                      
                      {/* Airmail design stripes */}
                      <div className="absolute top-2 right-2 flex gap-1 opacity-90">
                        {[0, 1, 2, 3].map((i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-16 ${i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'} rounded-sm`}
                            style={{ transform: 'rotate(-15deg)' }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Postcard content */}
                    <div className="p-4 bg-white relative">
                      {/* Decorative stamp */}
                      <div className={`absolute top-3 right-3 w-11 h-11 ${destination.stampBg} border-2 ${destination.stampBorder} border-dashed rounded flex items-center justify-center shadow-md`}>
                        <Icon size={20} className={destination.stampText} strokeWidth={2.5} />
                      </div>

                      <h3 className="text-base font-black text-gray-800 mb-1.5 pr-14" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {destination.title}
                      </h3>
                      <p className="text-sm font-bold text-gray-600 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {destination.company}
                      </p>
                      
                      <div className="space-y-1.5 mb-3.5">
                        <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          <MapPin size={13} className="flex-shrink-0 text-gray-500" strokeWidth={2.5} />
                          <span>{destination.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                          <Calendar size={13} className="flex-shrink-0 text-gray-500" strokeWidth={2.5} />
                          <span>{destination.period}</span>
                        </div>
                      </div>

                      {/* CTA button */}
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: '0 6px 16px rgba(0,0,0,0.2)' }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-2.5 bg-gradient-to-r ${destination.postcardColor} text-white rounded-lg font-black text-sm shadow-lg`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        View Details ✈️
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 20 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                {/* Modal header */}
                <div className={`h-56 bg-gradient-to-br ${selectedDestination.postcardColor} flex items-center justify-center text-9xl relative overflow-hidden`}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {selectedDestination.landmark}
                  </motion.div>
                  
                  {/* Airmail stripes */}
                  <div className="absolute top-6 right-6 flex gap-2.5">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-32 ${i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'} rounded`}
                        style={{ transform: 'rotate(-12deg)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Modal content */}
                <div className="p-10 relative">
                  {/* Large stamp */}
                  <div className={`absolute top-6 right-6 w-24 h-24 ${selectedDestination.stampBg} border-4 ${selectedDestination.stampBorder} border-dashed rounded-xl flex items-center justify-center shadow-xl`}>
                    {(() => {
                      const Icon = selectedDestination.icon;
                      return <Icon size={48} className={selectedDestination.stampText} strokeWidth={2.5} />;
                    })()}
                  </div>

                  <h2 className="text-5xl font-black text-gray-800 mb-4 pr-28" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {selectedDestination.title}
                  </h2>
                  
                  <div className="mb-8">
                    <p className="text-2xl font-bold text-gray-700 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {selectedDestination.company}
                    </p>
                    <div className="flex items-center gap-6 text-gray-600 font-medium">
                      <div className="flex items-center gap-2.5">
                        <MapPin size={20} strokeWidth={2.5} />
                        <span className="text-lg">{selectedDestination.location}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Calendar size={20} strokeWidth={2.5} />
                        <span className="text-lg">{selectedDestination.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-4 border-b-4 border-dashed border-gray-300 py-8 mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {selectedDestination.description}
                    </p>
                  </div>

                  {/* Decorative postcard lines */}
                  <div className="space-y-3 mb-8 opacity-20">
                    <div className="h-0.5 bg-gray-500 w-full rounded" />
                    <div className="h-0.5 bg-gray-500 w-4/5 rounded" />
                    <div className="h-0.5 bg-gray-500 w-3/5 rounded" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDestination(null)}
                    className={`w-full py-5 bg-gradient-to-r ${selectedDestination.postcardColor} text-white rounded-2xl font-black text-xl shadow-2xl`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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