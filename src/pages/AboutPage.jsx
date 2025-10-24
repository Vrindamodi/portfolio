import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Heart, Music, Sparkles, Book } from 'lucide-react';

const AboutPage = () => {
    const [activeItem, setActiveItem] = useState(null);
  const studioItems = [
  {
    id: 'computer',
    icon: Laptop,
    title: 'My Coding Journey',
    content: "Started coding in high school and fell in love with creating digital experiences. Now I'm pursuing my MCA and building projects that make a difference!",
    color: 'from-blue-400 to-cyan-400',
    position: { top: '25%', left: '15%' }
  },
  {
    id: 'volunteer',
    icon: Heart,
    title: 'Robin Hood Army Volunteer',
    content: "Teaching volunteer at Robin Hood Army, distributing leftover food from restaurants and events to the hungry. Passionate about reducing both starvation and food wastage!",
    color: 'from-red-400 to-pink-400',
    position: { top: '20%', left: '70%' }
  },
  {
    id: 'music',
    icon: Music,
    title: 'Creative Side',
    content: "When I'm not coding, you'll find me exploring music, art, and all things creative. Balance is key!",
    color: 'from-pink-400 to-purple-400',
    position: { top: '55%', left: '20%' }
  },
  {
    id: 'passion',
    icon: Sparkles,
    title: 'What I Love',
    content: "I love building things that people enjoy using. User experience and beautiful design are my top priorities!",
    color: 'from-purple-400 to-indigo-400',
    position: { top: '50%', left: '75%' }
  },
  {
    id: 'book',
    icon: Book,
    title: 'Always Learning',
    content: "Currently in my first year of MCA, constantly learning new technologies and improving my craft every single day!",
    color: 'from-green-400 to-teal-400',
    position: { top: '35%', left: '45%' }
  }
];

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Welcome to My Studio! 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-xl text-gray-700 mb-20"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Click on the floating objects to learn more about me!
          </motion.p>

          {/* Floating cards directly on the page */}
          <div className="relative" style={{ minHeight: '600px' }}>
            {studioItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="absolute cursor-pointer"
                  style={{ top: item.position.top, left: item.position.left }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  onClick={() => setActiveItem(item.id)}
                >
                  <motion.div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center text-white border-4 border-white/50`}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)'
                    }}
                  >
                    <Icon size={40} />
                  </motion.div>
                </motion.div>
              );
            })}

            <AnimatePresence>
              {activeItem && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
                  onClick={() => setActiveItem(null)}
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 50 }}
                    className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {studioItems.find(i => i.id === activeItem) && (() => {
                      const item = studioItems.find(i => i.id === activeItem);
                      const Icon = item.icon;
                      return (
                        <>
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                            <Icon size={40} />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {item.content}
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveItem(null)}
                            className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold shadow-lg"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                          >
                            Got it! âœ¨
                          </motion.button>
                        </>
                      );
                    })()}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };

  export default AboutPage;