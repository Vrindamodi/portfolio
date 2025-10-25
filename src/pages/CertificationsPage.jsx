import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
  
const CertificationsPage = () => {
  const [selectedFrame, setSelectedFrame] = useState(null);
  
  const achievements = [
    {
      id: 1,
      title: 'Smart India Hackathon Winner',
      issuer: 'Internal Smart India Hackathon',
      date: 'September 26, 2025',
      description: 'Won first place at the Internal Smart India Hackathon for innovative project and exceptional problem-solving skills',
      icon: Trophy,
      link: 'https://www.instagram.com/p/DPEdhrOD6Cx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    // Commented out for future use
    // {
    //   id: 2,
    //   title: 'AWS Certified Developer',
    //   issuer: 'Amazon Web Services',
    //   date: '2024',
    //   description: 'Professional certification in cloud development and deployment',
    //   icon: Cloud,
    //   link: '#'
    // },
    // {
    //   id: 3,
    //   title: 'React Advanced Certification',
    //   issuer: 'Meta',
    //   date: '2023',
    //   description: 'Advanced React patterns, performance optimization, and best practices',
    //   icon: Layout,
    //   link: '#'
    // },
    // {
    //   id: 4,
    //   title: 'CodeChef 4-Star',
    //   issuer: 'CodeChef',
    //   date: '2023',
    //   description: 'Achieved 4-star rating through competitive programming',
    //   icon: Trophy,
    //   link: '#'
    // },
  ];

  return (
    <div className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Elegant wallpaper background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50" />
      
      {/* Subtle damask pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 10h10l-8 6 3 10-10-7-10 7 3-10-8-6h10zM0 30l10 5v10l6-8 10 3-7-10 7-10-10 3-6-8v10zM60 30l-10 5v10l-6-8-10 3 7-10-7-10 10 3 6-8v10z' fill='%23d97706' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-7xl font-bold mb-4"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              background: 'linear-gradient(to right, #92400e, #b45309, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 12px rgba(217, 119, 6, 0.2)'
            }}
          >
             WALL OF FAME 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-amber-900 font-semibold"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            A Gallery of Achievements & Excellence
          </motion.p>
        </motion.div>

        {/* Centered Single Achievement */}
        <div className="flex justify-center items-center min-h-[500px]">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            const isSelected = selectedFrame?.id === achievement.id;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.3, type: "spring", duration: 0.8 }}
                className="cursor-pointer group w-full max-w-2xl"
                onClick={() => setSelectedFrame(isSelected ? null : achievement)}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <div className="relative p-2 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 rounded-2xl shadow-2xl">
                  {/* Ornate frame border */}
                  <div className="absolute inset-0 rounded-2xl border-8 border-double border-amber-600/50" 
                       style={{ 
                         boxShadow: 'inset 0 0 20px rgba(217, 119, 6, 0.3), 0 12px 48px rgba(0,0,0,0.4)'
                       }} 
                  />
                  
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-50 shadow-inner" />
                  
                  {/* Certificate content */}
                  <div className="relative flex flex-col items-center justify-center p-12 bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-xl m-4">
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 left-4 text-3xl text-amber-600 opacity-40">◆</div>
                    <div className="absolute top-4 right-4 text-3xl text-amber-600 opacity-40">◆</div>
                    <div className="absolute bottom-4 left-4 text-3xl text-amber-600 opacity-40">◆</div>
                    <div className="absolute bottom-4 right-4 text-3xl text-amber-600 opacity-40">◆</div>
                    
                    {/* Icon with gold shimmer */}
                    <motion.div
                      className="relative mb-6"
                      animate={{
                        rotateY: [0, 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div 
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center text-white shadow-xl relative"
                        style={{
                          boxShadow: '0 0 40px rgba(251, 191, 36, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <Icon size={56} />
                        
                        {/* Gold shimmer effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                          }}
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Title with elegant font */}
                    <h3 
                      className="text-4xl font-bold text-center mb-4 text-amber-900"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {achievement.title}
                    </h3>
                    
                    <p className="text-center text-xl font-semibold text-amber-700 mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {achievement.issuer}
                    </p>
                    <p className="text-center text-lg text-amber-600 mb-6">
                      {achievement.date}
                    </p>
                    
                    <div className="border-t-2 border-b-2 border-amber-300 py-4 mb-6 w-full">
                      <p className="text-center text-gray-700 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {achievement.description}
                      </p>
                    </div>
                    
                    {/* Royal seal at bottom */}
                    <motion.div
                      className="mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-yellow-300 text-xs font-bold border-4 border-yellow-500"
                           style={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)' }}>
                        WINNER
                      </div>
                    </motion.div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-8">
                      <span className="text-white font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                        Click for Details & View Award
                      </span>
                    </div>
                  </div>
                  
                  {/* Frame lighting effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(251, 191, 36, 0.3)',
                        '0 0 50px rgba(251, 191, 36, 0.5)',
                        '0 0 30px rgba(251, 191, 36, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedFrame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedFrame(null)}
            >
              <motion.div
                initial={{ scale: 0.8, rotateY: -90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.8, rotateY: 90 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-2 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl border-8 border-double border-amber-600/50" 
                       style={{ boxShadow: 'inset 0 0 30px rgba(217, 119, 6, 0.4), 0 12px 48px rgba(0,0,0,0.6)' }} 
                  />
                  
                  <div className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-xl p-12 m-2">
                    {/* Decorative corners */}
                    <div className="absolute top-4 left-4 text-3xl text-amber-600 opacity-40">✦</div>
                    <div className="absolute top-4 right-4 text-3xl text-amber-600 opacity-40">✦</div>
                    <div className="absolute bottom-4 left-4 text-3xl text-amber-600 opacity-40">✦</div>
                    <div className="absolute bottom-4 right-4 text-3xl text-amber-600 opacity-40">✦</div>
                    
                    {(() => {
                      const Icon = selectedFrame.icon;
                      return (
                        <>
                          <div className="flex justify-center mb-6">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center text-white shadow-2xl"
                                 style={{ boxShadow: '0 0 40px rgba(251, 191, 36, 0.7), inset 0 0 30px rgba(255, 255, 255, 0.3)' }}>
                              <Icon size={64} />
                            </div>
                          </div>
                          
                          <h2 className="text-4xl font-bold text-center mb-4 text-amber-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {selectedFrame.title}
                          </h2>
                          
                          <div className="text-center mb-6">
                            <p className="text-xl font-semibold text-amber-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              {selectedFrame.issuer}
                            </p>
                            <p className="text-lg text-amber-700 mt-2">
                              {selectedFrame.date}
                            </p>
                          </div>
                          
                          <div className="border-t-2 border-b-2 border-amber-300 py-4 mb-6">
                            <p className="text-center text-gray-700 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              {selectedFrame.description}
                            </p>
                          </div>
                          
                          <div className="flex justify-center gap-4">
                            <motion.a
                              href={selectedFrame.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-bold flex items-center gap-2 shadow-lg"
                              style={{ fontFamily: 'Fredoka, sans-serif' }}
                            >
                              <ExternalLink size={20} />
                              View Award
                            </motion.a>
                            
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedFrame(null)}
                              className="px-8 py-3 bg-gray-600 text-white rounded-full font-bold shadow-lg"
                              style={{ fontFamily: 'Fredoka, sans-serif' }}
                            >
                              Close
                            </motion.button>
                          </div>
                          
                          {/* Official seal */}
                          <div className="flex justify-center mt-8">
                            <motion.div
                              animate={{
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                              className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-yellow-300 text-xs font-bold border-4 border-yellow-500"
                              style={{ boxShadow: '0 0 30px rgba(220, 38, 38, 0.7)' }}
                            >
                              OFFICIAL<br/>WINNER
                            </motion.div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificationsPage;