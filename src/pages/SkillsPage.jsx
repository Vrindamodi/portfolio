import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsPage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const skills = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', position: { x: 15, y: 25 } },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', position: { x: 35, y: 15 } },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', position: { x: 55, y: 20 } },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', position: { x: 75, y: 30 } },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', position: { x: 25, y: 45 } },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', position: { x: 45, y: 50 } },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', position: { x: 65, y: 45 } },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', position: { x: 85, y: 55 } },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', position: { x: 20, y: 65 } },
    { name: 'MS SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', position: { x: 40, y: 70 } },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', position: { x: 60, y: 75 } },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', position: { x: 80, y: 65 } }
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 7],
    [0, 4], [4, 5], [5, 6], [6, 7],
    [4, 8], [8, 9], [9, 10], [10, 11], [11, 7],
    [5, 9], [6, 10], [3, 11]
  ];

  return (
    <div className="min-h-screen relative pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900" />
      
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)', top: '5%', left: '5%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-12 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)', top: '40%', right: '5%' }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)', bottom: '5%', left: '40%' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </div>

      {Array.from({ length: 500 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2.5 + 0.5}px`,
            height: `${Math.random() * 2.5 + 0.5}px`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 1.5 + Math.random() * 2.5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold text-center mb-4"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            background: 'linear-gradient(to right, #ffffff, #e0e0e0, #c0c0c0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.5)'
          }}
        >
          My Skill Constellation 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-300 mb-16"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
          }}
        >
        Each silver star represents a skill in my cosmic journey
        </motion.p>

        <div className="relative w-full h-[600px]">
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {connections.map((connection, idx) => {
              const [start, end] = connection;
              const startSkill = skills[start];
              const endSkill = skills[end];
              
              return (
                <motion.line
                  key={idx}
                  x1={`${startSkill.position.x}%`}
                  y1={`${startSkill.position.y}%`}
                  x2={`${endSkill.position.x}%`}
                  y2={`${endSkill.position.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  style={{
                    strokeLinecap: "round",
                    filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))"
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    pathLength: { duration: 2, delay: idx * 0.1 },
                    opacity: { duration: 2.5, repeat: Infinity, delay: idx * 0.2 }
                  }}
                />
              );
            })}
          </svg>

          {connections.map((connection, connIdx) => {
            const [start, end] = connection;
            const startSkill = skills[start];
            const endSkill = skills[end];
            
            return Array.from({ length: 4 }).map((_, starIdx) => {
              const progress = (starIdx + 1) / 5;
              const x = startSkill.position.x + (endSkill.position.x - startSkill.position.x) * progress;
              const y = startSkill.position.y + (endSkill.position.y - startSkill.position.y) * progress;
              
              return (
                <motion.div
                  key={`${connIdx}-${starIdx}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: '4px',
                    height: '4px',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 6px rgba(255, 255, 255, 0.9)',
                    zIndex: 2
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: connIdx * 0.3 + starIdx * 0.5
                  }}
                />
              );
            });
          })}

          {skills.map((skill, idx) => {
            const isSelected = selectedSkill?.name === skill.name;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="absolute cursor-pointer"
                style={{
                  left: `${skill.position.x}%`,
                  top: `${skill.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isSelected ? 20 : 10
                }}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                whileHover={{ scale: 1.4 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(224, 224, 224, 0.6) 30%, rgba(192, 192, 192, 0.3) 50%, transparent 70%)',
                    width: '160px',
                    height: '160px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2
                  }}
                />

                <motion.div
                  className="relative flex items-center justify-center"
                  style={{ width: '100px', height: '100px' }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="100" height="100" viewBox="0 0 100 100" className="absolute">
                    <defs>
                      <radialGradient id={`starGradient${idx}`}>
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="30%" stopColor="#f0f0f0" />
                        <stop offset="60%" stopColor="#d0d0d0" />
                        <stop offset="100%" stopColor="#b0b0b0" />
                      </radialGradient>
                      <filter id={`starGlow${idx}`}>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <polygon
                      points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40"
                      fill={`url(#starGradient${idx})`}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      filter={`url(#starGlow${idx})`}
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))"
                      }}
                    />
                  </svg>

                  <motion.div
                    className="relative z-10"
                    style={{
                      width: '35px',
                      height: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    animate={{
                      rotate: [0, -360]
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="object-contain"
                      style={{ 
                        width: '28px',
                        height: '28px',
                        filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 4px rgba(0, 0, 0, 0.5))'
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center"
                >
                  <p className="text-white font-bold text-sm tracking-wide" style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 2px 10px rgba(0,0,0,0.8)'
                  }}>
                    {skill.name}
                  </p>
                </motion.div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-lg rounded-2xl p-6 border-2 border-silver-400 shadow-2xl min-w-[250px]"
                      style={{ 
                        borderColor: '#c0c0c0',
                        boxShadow: '0 0 30px rgba(192, 192, 192, 0.6), 0 10px 50px rgba(0, 0, 0, 0.8)'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="text-center">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-16 h-16 object-contain mx-auto mb-3"
                          style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' }}
                        />
                        <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {skill.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Mastered through various projects and continuous learning
                        </p>
                        <button
                          onClick={() => setSelectedSkill(null)}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          Close ✕
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;