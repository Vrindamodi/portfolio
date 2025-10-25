import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Heart, Music, Book, Target, Globe, Gamepad2, Sprout, PawPrint, Puzzle, Trophy } from 'lucide-react';

const AboutPage = () => {
  const [activeItem, setActiveItem] = useState(null);
  
  const studioItems = [
    {
      id: 'computer',
      icon: Laptop,
      title: 'My Coding Journey',
      content: "Discovered my love for coding back in high school, what started as curiosity turned into a passion for crafting interactive, meaningful digital experiences. Now, as an MCA student, I'm building projects that merge creativity with real-world impact.",
      color: 'from-blue-400 to-cyan-400',
      position: { top: '18%', left: '12%' }
    },
    {
      id: 'volunteer',
      icon: Heart,
      title: 'Robin Hood Army Volunteer',
      content: "As a teaching volunteer with the Robin Hood Army, I help redistribute surplus food to those in need and teach kids essential skills. It's where compassion meets action, a reminder that small efforts create big change.",
      color: 'from-red-400 to-pink-400',
      position: { top: '15%', right: '15%' }
    },
    {
      id: 'tech',
      icon: Globe,
      title: 'Tech Explorer',
      content: "I love experimenting with new technologies, frameworks, and tools. From React to Node.js, I dive into anything that can make my projects smarter, faster, and more impactful. Clean, intuitive designs that delight users are my passion.",
      color: 'from-indigo-400 to-blue-500',
      position: { top: '35%', left: '5%' }
    },
    {
      id: 'puzzle',
      icon: Puzzle,
      title: 'Problem Solver',
      content: "Challenges excite me! I enjoy breaking down complex problems into actionable solutions, whether it's debugging tricky code or optimizing workflows. Every puzzle is an opportunity to learn.",
      color: 'from-purple-400 to-pink-500',
      position: { top: '32%', left: '45%' }
    },
    {
      id: 'music',
      icon: Music,
      title: 'Creative Soul',
      content: "Beyond code, I find inspiration in music, art, and storytelling. Creativity keeps me balanced, and often fuels my approach to design and problem-solving.",
      color: 'from-pink-400 to-purple-400',
      position: { top: '28%', right: '8%' }
    },
    {
      id: 'plants',
      icon: Sprout,
      title: 'Plant Enthusiast',
      content: "I find peace and creativity in nurturing plants. Gardening teaches patience, attention to detail, and the joy of watching small things grow into something beautiful,  much like coding projects!",
      color: 'from-green-400 to-emerald-500',
      position: { top: '52%', left: '18%' }
    },
    {
      id: 'trophy',
      icon: Trophy,
      title: 'Achievement Hunter',
      content: "I love setting goals and crushing them! Whether it's completing a challenging project, winning a hackathon, or learning a new skill,  every achievement fuels my drive to do more.",
      color: 'from-yellow-400 to-amber-500',
      position: { top: '48%', left: '45%' }
    },
    {
      id: 'animals',
      icon: PawPrint,
      title: 'Animal Lover',
      content: "Whether it's volunteering at shelters or simply caring for pets, animals inspire empathy, responsibility, and a love for all living beings. They remind me to stay grounded and compassionate.",
      color: 'from-orange-400 to-red-400',
      position: { top: '50%', right: '12%' }
    },
    {
      id: 'fun',
      icon: Gamepad2,
      title: 'Gamification & Fun',
      content: "I enjoy creating small games, interactive apps, or playful experiments, because learning and coding should also be fun!",
      color: 'from-purple-400 to-indigo-500',
      position: { top: '68%', left: '8%' }
    },
    {
      id: 'vision',
      icon: Target,
      title: 'Vision Ahead',
      content: "I aim to become a developer who blends technology with purpose, building solutions that are not just functional, but meaningful and impactful for real people.",
      color: 'from-yellow-400 to-orange-500',
      position: { top: '70%', left: '38%' }
    },
    {
      id: 'book',
      icon: Book,
      title: 'Always Learning',
      content: "Currently in my first year of MCA, diving deep into full-stack development and exploring new frameworks every day. Growth is my constant goal.",
      color: 'from-green-400 to-teal-500',
      position: { top: '68%', right: '10%' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-5xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        💫
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 text-7xl opacity-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⭐
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-7xl font-black text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Welcome to My Studio! ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-700 mb-16 font-semibold"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Click on the floating objects to discover my story!
        </motion.p>

        {/* Floating interactive cards */}
        <div className="relative" style={{ minHeight: '700px' }}>
          {studioItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ 
                  delay: idx * 0.15,
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.5
                }}
                className="absolute cursor-pointer"
                style={{ 
                  top: item.position.top, 
                  left: item.position.left,
                  right: item.position.right
                }}
                whileHover={{ scale: 1.15, rotate: 8, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(item.id)}
              >
                <motion.div
                  className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center text-white border-4 border-white/80`}
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 6, -6, 0]
                  }}
                  transition={{
                    duration: 3.5 + idx * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                  style={{
                    boxShadow: '0 25px 60px rgba(0,0,0,0.2), 0 0 0 2px rgba(255,255,255,0.3)'
                  }}
                >
                  <Icon size={44} strokeWidth={2.5} />
                </motion.div>

                {/* Hover tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-lg opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.title}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="bg-white rounded-3xl p-10 max-w-xl mx-4 shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 30px 80px rgba(0,0,0,0.3)'
              }}
            >
              {studioItems.find(i => i.id === activeItem) && (() => {
                const item = studioItems.find(i => i.id === activeItem);
                const Icon = item.icon;
                return (
                  <>
                    <motion.div 
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center text-white mb-6 mx-auto border-4 border-white`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={48} strokeWidth={2.5} />
                    </motion.div>
                    <h3 className="text-3xl font-black mb-5 text-center text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed text-lg mb-8 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.content}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveItem(null)}
                      className={`w-full py-4 bg-gradient-to-r ${item.color} text-white rounded-2xl font-black text-lg shadow-xl`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Got it! ✨
                    </motion.button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;