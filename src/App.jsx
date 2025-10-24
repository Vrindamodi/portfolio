import '@fontsource/pacifico';
import '@fontsource/poppins';
import '@fontsource/quicksand';
import '@fontsource/chewy';        // 'Chewy', cursive
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles,  Book, Zap, MapPin, Download, Mail, Github, Linkedin, Twitter, Instagram, Code2, Award, Briefcase, User, MessageCircle, Home, Star, Heart, Coffee, Music, Database, Server, Cloud, Layout, Terminal, Package, Send, Trophy, Calendar, ExternalLink, Laptop } from 'lucide-react';

const VrindaPortfolio = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [herbVisible, setHerbVisible] = useState(false);
  const [herbMessage, setHerbMessage] = useState("Hi, I'm Herb — your AI Assistant. Welcome to Vrinda's Portfolio!");
  const [herbMood, setHerbMood] = useState('happy');
  const [sparkles, setSparkles] = useState([]);

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!showWelcome) {
      setTimeout(() => setHerbVisible(true), 500);
    }
  }, [showWelcome]);

  const generateSparkles = () => {
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 2 + 1
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 3000);
  };

  
const HerbAvatar = ({ mood = 'happy', size = 'normal' }) => {
  const scale = size === 'large' ? 1.3 : 0.85;
  const width = 110 * scale;
  const height = 110 * scale;
  
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className="relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 110 110"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        <defs>
          {/* Main body gradient - pale yellow to light green */}
          <radialGradient id="body-fill">
            <stop offset="0%" stopColor="#f7fee7" />
            <stop offset="40%" stopColor="#ecfccb" />
            <stop offset="100%" stopColor="#d9f99d" />
          </radialGradient>
          
          {/* Dark outer leaves */}
          <linearGradient id="dark-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          
          {/* Medium green leaves */}
          <linearGradient id="med-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          
          {/* Light green leaves */}
          <linearGradient id="light-leaves" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
        
        {/* Dark outer ruffled leaves - the border */}
        <path
          d="M 55 15 
             C 50 13, 48 10, 47 8 
             C 46 10, 44 12, 40 13
             C 36 14, 32 13, 28 14
             C 24 15, 21 17, 18 20
             C 16 23, 14 27, 13 31
             C 12 35, 12 39, 12 43
             C 12 47, 13 51, 14 55
             C 15 59, 17 63, 19 66
             C 21 69, 24 72, 27 74
             C 30 76, 34 77, 38 78
             C 42 79, 46 79, 50 78
             C 52 77, 54 76, 56 74
             C 55 76, 53 78, 50 80
             C 47 82, 43 83, 39 84
             C 36 85, 33 86, 30 88
             C 28 90, 27 92, 28 95
             C 29 97, 31 98, 34 98
             C 37 98, 40 97, 43 96
             C 46 95, 49 94, 52 93
             C 55 92, 58 92, 61 93
             C 64 94, 67 95, 70 96
             C 73 97, 76 98, 79 98
             C 82 98, 84 97, 85 95
             C 86 92, 85 90, 83 88
             C 80 86, 77 85, 74 84
             C 70 83, 66 82, 63 80
             C 60 78, 58 76, 57 74
             C 59 76, 61 77, 63 78
             C 67 79, 71 79, 75 78
             C 79 77, 83 76, 86 74
             C 89 72, 92 69, 94 66
             C 96 63, 98 59, 99 55
             C 100 51, 101 47, 101 43
             C 101 39, 101 35, 100 31
             C 99 27, 97 23, 95 20
             C 92 17, 89 15, 85 14
             C 81 13, 77 14, 73 13
             C 69 12, 67 10, 66 8
             C 65 10, 63 13, 60 15
             Z"
          fill="url(#dark-leaves)"
          stroke="#0f5a2e"
          strokeWidth="1.5"
        />
        
        {/* Medium green layer */}
        <ellipse
          cx="55"
          cy="50"
          rx="38"
          ry="40"
          fill="url(#med-leaves)"
        />
        
        {/* Light green wavy inner leaves */}
        <path
          d="M 55 20
             C 50 22, 46 24, 42 27
             C 38 30, 35 34, 33 38
             C 31 42, 30 46, 30 50
             C 30 54, 31 58, 33 62
             C 35 66, 38 70, 42 73
             C 46 76, 50 78, 55 78
             C 60 78, 64 76, 68 73
             C 72 70, 75 66, 77 62
             C 79 58, 80 54, 80 50
             C 80 46, 79 42, 77 38
             C 75 34, 72 30, 68 27
             C 64 24, 60 22, 55 20
             Z"
          fill="url(#light-leaves)"
        />
        
        {/* Main pale body with radial gradient */}
        <ellipse
          cx="55"
          cy="50"
          rx="30"
          ry="32"
          fill="url(#body-fill)"
        />
        
        {/* Radial highlight lines from center */}
        <path d="M 55 25 L 55 48" stroke="#bef264" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
        <path d="M 55 48 L 45 32" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 65 32" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 38 40" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 72 40" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 35 52" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        <path d="M 55 48 L 75 52" stroke="#bef264" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
        
        {/* Bottom stem part */}
        <path
          d="M 48 75 
             C 46 77, 44 80, 43 83
             C 42 86, 42 89, 43 92
             C 44 95, 46 97, 49 98
             C 52 99, 55 99, 58 99
             C 61 99, 64 98, 66 96
             C 68 94, 69 91, 69 88
             C 69 85, 68 82, 66 79
             C 64 76, 62 74, 60 73
             L 48 75
             Z"
          fill="#a3e635"
          stroke="#84cc16"
          strokeWidth="1"
        />
        
        {/* Stem shading */}
        <ellipse
          cx="55"
          cy="85"
          rx="8"
          ry="10"
          fill="#84cc16"
          opacity="0.3"
        />
        

        {/* Face - Left eye */}
<motion.g
  animate={{
    scaleY: [1, 0.1, 1, 1, 1, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    times: [0, 0.05, 0.1, 0.15, 0.9, 1],
    repeatDelay: 2
  }}
  style={{ transformOrigin: '46px 48px' }}
>
  <ellipse
    cx="46"
    cy="48"
    rx="4"
    ry="5.5"
    fill="white"
  />
  <ellipse
    cx="46"
    cy="49"
    rx="2.5"
    ry="3.5"
    fill="#1e293b"
  />
  <ellipse
    cx="46.8"
    cy="47.5"
    rx="1"
    ry="1.3"
    fill="white"
  />
</motion.g>

{/* Face - Right eye */}
<motion.g
  animate={{
    scaleY: [1, 0.1, 1, 1, 1, 1]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    times: [0, 0.05, 0.1, 0.15, 0.9, 1],
    repeatDelay: 2
  }}
  style={{ transformOrigin: '64px 48px' }}
>
  <ellipse
    cx="64"
    cy="48"
    rx="4"
    ry="5.5"
    fill="white"
  />
  <ellipse
    cx="64"
    cy="49"
    rx="2.5"
    ry="3.5"
    fill="#1e293b"
  />
  <ellipse
    cx="64.8"
    cy="47.5"
    rx="1"
    ry="1.3"
    fill="white"
  />
</motion.g>
        
        {/* Mouth */}
        {mood === 'happy' && (
          <path
            d="M 48 58 Q 55 62, 62 58"
            stroke="#16a34a"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        )}
        
        {mood === 'excited' && (
          <circle cx="55" cy="60" r="5" fill="#16a34a" />
        )}
        
        {mood === 'thinking' && (
          <ellipse cx="55" cy="59" rx="5" ry="2.5" fill="#16a34a" />
        )}
        
        {/* Blush */}
        <ellipse
          cx="38"
          cy="54"
          rx="3.5"
          ry="2.5"
          fill="#fda4af"
          opacity="0.6"
        />
        <ellipse
          cx="72"
          cy="54"
          rx="3.5"
          ry="2.5"
          fill="#fda4af"
          opacity="0.6"
        />
      </svg>
      
      {mood === 'excited' && (
        <>
          <div className="absolute animate-pulse" style={{
            top: '5px',
            right: '5px',
            fontSize: size === 'large' ? '22px' : '16px'
          }}>
            ✨
          </div>
          <div className="absolute animate-pulse" style={{
            bottom: '15px',
            left: '5px',
            fontSize: size === 'large' ? '22px' : '16px',
            animationDelay: '0.4s'
          }}>
            💚
          </div>
        </>
      )}
    </div>
  );
};

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-green-700 mb-3">
            Herb 🥬
          </h1>
          <p className="text-xl text-green-600">
            Your cute lettuce AI assistant
          </p>
        </div>
        
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">Different Sizes</h2>
          <div className="flex gap-20 items-end justify-center">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block">
                <HerbAvatar mood="happy" size="normal" />
              </div>
              <p className="mt-4 font-semibold text-gray-700">Normal</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-8 inline-block">
                <HerbAvatar mood="happy" size="large" />
              </div>
              <p className="mt-4 font-semibold text-gray-700">Large</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">Herb's Personality</h2>
          <div className="flex gap-16 items-end justify-center flex-wrap">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block mb-3">
                <HerbAvatar mood="happy" size="large" />
              </div>
              <p className="font-bold text-green-700 text-lg">Happy</p>
              <p className="text-sm text-gray-500">Ready to help! 😊</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block mb-3">
                <HerbAvatar mood="excited" size="large" />
              </div>
              <p className="font-bold text-green-700 text-lg">Excited</p>
              <p className="text-sm text-gray-500">Great idea! 🎉</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block mb-3">
                <HerbAvatar mood="thinking" size="large" />
              </div>
              <p className="font-bold text-green-700 text-lg">Thinking</p>
              <p className="text-sm text-gray-500">Hmm... 🤔</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300">
          <h3 className="font-bold text-green-800 mb-3">📝 Usage</h3>
          <code className="block bg-white p-4 rounded-lg text-sm font-mono text-green-700">
            &lt;HerbAvatar mood="happy" size="large" /&gt;
          </code>
        </div>
      </div>
    </div>
  );
};


const WelcomeScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            y: [0, -10, 0]
          }}
          transition={{ 
            scale: { type: "spring", duration: 0.8 },
            rotate: { type: "spring", duration: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            <HerbAvatar mood="excited" size="large" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-4"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 40px rgba(106, 27, 154, 0.08)'
          }}
        >
          <motion.h1 
            className="text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Chewy', cursive",
              color: '#6A1B9A',
              textShadow: '0 2px 8px rgba(106, 27, 154, 0.2)'
            }}
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {herbMessage}
          </motion.h1>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(106, 27, 154, 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowWelcome(false);
              generateSparkles();
            }}
            className="mt-6 px-10 py-4 text-white rounded-full font-semibold text-lg shadow-lg w-full"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.3px'
            }}
          >
            Let's Explore! ✨
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
  const HerbChatBubble = () => {
    const herbQuips = {
      home: "Need help? I'm here! 💜",
      about: "Vrinda's story is inspiring!",
      skills: "Look at all those stars! ⭐",
      projects: "These projects are amazing!",
      experience: "What a journey!",
      certifications: "So many achievements!",
      contact: "Let's connect! 📧",
      chat: "Finally, we can talk! 😊"
    };

    return (
      <motion.div
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
          onHoverStart={() => {
            setHerbMood('excited');
          }}
          onHoverEnd={() => setHerbMood('happy')}
          onClick={() => setCurrentPage('chat')}
        >
          <motion.div
            className="bg-white rounded-full p-4 shadow-2xl cursor-pointer border-4 border-purple-300"
            whileHover={{ y: -5 }}
          >
            <HerbAvatar mood={herbMood} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-full right-0 mb-4 mr-4 bg-white rounded-2xl p-3 shadow-xl max-w-xs"
          >
            <p className="text-sm font-medium text-gray-700">{herbQuips[currentPage] || herbMessage}</p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const Navigation = () => {
    const navItems = [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'skills', label: 'Skills', icon: Star },
      { id: 'projects', label: 'Projects', icon: Code2 },
      { id: 'experience', label: 'Experience', icon: Briefcase },
      { id: 'certifications', label: 'Awards', icon: Award },
      { id: 'contact', label: 'Contact', icon: Mail },
      { id: 'chat', label: 'Chat with Herb', icon: MessageCircle }
    ];

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-lg z-30 border-b-2 border-purple-200"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <Sparkles className="text-purple-500" size={28} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                VRINDA
              </h1>
            </motion.div>
            
            <div className="flex gap-2 overflow-x-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setHerbMood('excited');
                      setTimeout(() => setHerbMood('happy'), 1000);
                    }}
                    className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                    }`}
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    <Icon size={16} />
                    <span className="hidden md:inline">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    );
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-24 pb-16 px-4 relative overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: sparkle.duration }}
          className="absolute text-yellow-400 pointer-events-none"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%`, fontSize: sparkle.size }}
        >
          ✨
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Hi, I'm Vrinda! 
            </motion.h2>
            
            <motion.p
              className="text-2xl text-gray-700 mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer & MCA Student
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I craft beautiful, interactive web experiences with a passion for clean code and creative design. 
              Currently pursuing my MCA and building amazing things with React, Node.js, and a sprinkle of magic! ✨
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-xl flex items-center gap-2"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl border-2 border-purple-300"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white">
                <div className="text-8xl">👩‍💻</div>
              </div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-300 rounded-full opacity-60 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-300 rounded-full opacity-60 blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center gap-6 flex-wrap"
        >
          {/* {[
            { icon: Github, label: 'GitHub', color: 'from-gray-700 to-gray-900' },
            { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
            { icon: Twitter, label: 'Twitter', color: 'from-sky-400 to-blue-500' },
            { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600' },
            { icon: Mail, label: 'Email', color: 'from-red-500 to-orange-500' },
            { icon: Code2, label: 'CodeChef', color: 'from-amber-600 to-orange-700' },
            { icon: Code2, label: 'LeetCode', color: 'from-yellow-500 to-orange-600' }
          ].map((social, idx) => {
            const Icon = social.icon; */}
{[
  { icon: Github, label: 'GitHub', color: 'from-gray-700 to-gray-900', type: 'icon' },
  { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800', type: 'icon' },
  { icon: Twitter, label: 'Twitter', color: 'from-sky-400 to-blue-500', type: 'icon' },
  { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600', type: 'icon' },
  { icon: Mail, label: 'Email', color: 'from-red-500 to-orange-500', type: 'icon' },
  { 
    label: 'CodeChef', 
    color: 'from-amber-600 to-orange-700', 
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.5 0C5.159 0 0 5.159 0 11.5S5.159 23 11.5 23 23 17.841 23 11.5 17.841 0 11.5 0zm0 21.626c-5.578 0-10.126-4.548-10.126-10.126S5.922 1.374 11.5 1.374s10.126 4.548 10.126 10.126-4.548 10.126-10.126 10.126zm4.84-12.089c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm-9.68 0c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm8.853 4.393c-.684 1.857-2.481 3.179-4.513 3.179s-3.829-1.322-4.513-3.179c-.158-.426-.632-.642-1.058-.484-.426.158-.642.632-.484 1.058.842 2.285 3.057 3.92 6.055 3.92s5.213-1.635 6.055-3.92c.158-.426-.058-.9-.484-1.058-.426-.158-.9.058-1.058.484z"/>
      </svg>
    )
  },
  { 
    label: 'LeetCode', 
    color: 'from-yellow-500 to-orange-600', 
    type: 'svg',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    )
  }
].map((social, idx) => {
  const Icon = social.icon;
  return (
    <motion.a
      key={social.label}
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + idx * 0.1 }}
      className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg cursor-pointer`}
      title={social.label}
    >
      {social.type === 'icon' ? <Icon size={24} /> : social.svg}
    </motion.a>
  );
})}
        </motion.div>
      </div>
    </div>
  );


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
  
  const ProjectsPage = () => {
    const projects = [
      {
        id: 1,
        title: 'AI-Powered Task Manager',
        description: 'A smart task management app with AI suggestions and priority optimization',
        tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
        color: 'from-purple-400 to-pink-500',
        icon: Zap
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
        tech: ['Angular', 'Django', 'MySQL', 'AWS'],
        color: 'from-blue-400 to-cyan-500',
        icon: Package
      },
      {
        id: 3,
        title: 'Social Media Analytics',
        description: 'Real-time social media analytics dashboard with data visualization',
        tech: ['React', 'Python', 'MongoDB', 'D3.js'],
        color: 'from-orange-400 to-red-500',
        icon: Database
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            My Projects 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-xl text-gray-700 mb-16"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Click on any card to flip and see details!
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              const [isFlipped, setIsFlipped] = useState(false);

              return (
                <motion.div
                  key={project.id}
                  initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{ delay: idx * 0.2, type: "spring" }}
                  className="perspective-1000"
                >
                  <motion.div
                    className="relative h-96 cursor-pointer"
                    onClick={() => setIsFlipped(!isFlipped)}
                    whileHover={{ scale: 1.05 }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} p-8 shadow-2xl border-4 border-white`}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex flex-col items-center justify-center h-full text-white">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Icon size={80} />
                        </motion.div>
                        <h3 className="text-3xl font-bold mt-6 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {project.title}
                        </h3>
                        <p className="text-lg mt-4 text-center opacity-90">Click to learn more!</p>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 rounded-3xl bg-white p-8 shadow-2xl border-4 border-purple-300"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {project.description}
                          </p>
                          <div className="mb-4">
                            <h4 className="font-bold text-gray-700 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              Tech Stack:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color}`}
                                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-3 bg-gradient-to-r ${project.color} text-white rounded-full font-bold`}
                          style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                          View Project →
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };


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

  const CertificationsPage = () => {
    const [selectedFrame, setSelectedFrame] = useState(null);
    
    const achievements = [
      {
        id: 1,
        title: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: '2024',
        description: 'Professional certification in cloud development and deployment',
        icon: Cloud,
        size: 'large',
        position: { row: 1, col: 1 }
      },
      {
        id: 2,
        title: 'React Advanced Certification',
        issuer: 'Meta',
        date: '2023',
        description: 'Advanced React patterns, performance optimization, and best practices',
        icon: Layout,
        size: 'medium',
        position: { row: 1, col: 2 }
      },
      {
        id: 3,
        title: 'CodeChef 4-Star',
        issuer: 'CodeChef',
        date: '2023',
        description: 'Achieved 4-star rating through competitive programming',
        icon: Trophy,
        size: 'small',
        position: { row: 1, col: 3 }
      },
      {
        id: 4,
        title: 'Full Stack Development',
        issuer: 'Coursera',
        date: '2022',
        description: 'Comprehensive full-stack web development certification',
        icon: Code2,
        size: 'medium',
        position: { row: 2, col: 1 }
      },
      {
        id: 5,
        title: 'LeetCode Top 10%',
        issuer: 'LeetCode',
        date: '2023',
        description: 'Ranked in top 10% globally for problem solving',
        icon: Zap,
        size: 'large',
        position: { row: 2, col: 2 }
      },
      {
        id: 6,
        title: 'Best Project Award',
        issuer: 'College Tech Fest',
        date: '2023',
        description: 'Won first prize for innovative AI-powered application',
        icon: Award,
        size: 'small',
        position: { row: 2, col: 3 }
      }
    ];

    const getFrameSize = (size) => {
      switch(size) {
        case 'large': return 'col-span-2 row-span-2';
        case 'medium': return 'col-span-2 row-span-1';
        case 'small': return 'col-span-1 row-span-1';
        default: return 'col-span-1 row-span-1';
      }
    };

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

          {/* Gallery Wall */}
          <div className="grid grid-cols-4 gap-6 auto-rows-[200px] mb-8">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              const isSelected = selectedFrame?.id === achievement.id;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: idx * 0.15, type: "spring", duration: 0.8 }}
                  className={`${getFrameSize(achievement.size)} cursor-pointer group`}
                  onClick={() => setSelectedFrame(isSelected ? null : achievement)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative h-full p-1 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 rounded-lg shadow-2xl">
                    {/* Ornate frame border */}
                    <div className="absolute inset-0 rounded-lg border-8 border-double border-amber-600/50" 
                         style={{ 
                           boxShadow: 'inset 0 0 20px rgba(217, 119, 6, 0.3), 0 8px 32px rgba(0,0,0,0.4)'
                         }} 
                    />
                    
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-2 rounded bg-gradient-to-br from-amber-100 to-yellow-50 shadow-inner" />
                    
                    {/* Certificate content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded m-2">
                      {/* Decorative corner elements */}
                      <div className="absolute top-2 left-2 text-amber-600 opacity-40">◈</div>
                      <div className="absolute top-2 right-2 text-amber-600 opacity-40">◈</div>
                      <div className="absolute bottom-2 left-2 text-amber-600 opacity-40">◈</div>
                      <div className="absolute bottom-2 right-2 text-amber-600 opacity-40">◈</div>
                      
                      {/* Icon with gold shimmer */}
                      <motion.div
                        className="relative mb-4"
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
                          className={`${achievement.size === 'large' ? 'w-24 h-24' : achievement.size === 'medium' ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 flex items-center justify-center text-white shadow-xl relative`}
                          style={{
                            boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <Icon size={achievement.size === 'large' ? 40 : achievement.size === 'medium' ? 28 : 20} />
                          
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
                        className={`${achievement.size === 'large' ? 'text-2xl' : achievement.size === 'medium' ? 'text-lg' : 'text-base'} font-bold text-center mb-2 text-amber-900`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {achievement.title}
                      </h3>
                      
                      {achievement.size !== 'small' && (
                        <>
                          <p className="text-center text-sm font-semibold text-amber-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {achievement.issuer}
                          </p>
                          <p className="text-center text-xs text-amber-600 mt-1">
                            {achievement.date}
                          </p>
                        </>
                      )}
                      
                      {/* Royal seal at bottom for large frames */}
                      {achievement.size === 'large' && (
                        <motion.div
                          className="mt-4"
                          animate={{
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-yellow-300 text-xs font-bold border-4 border-yellow-500"
                               style={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)' }}>
                            CERTIFIED
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-end justify-center pb-4">
                        <span className="text-white font-bold text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                          Click for Details
                        </span>
                      </div>
                    </div>
                    
                    {/* Frame lighting effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(251, 191, 36, 0.3)',
                          '0 0 40px rgba(251, 191, 36, 0.5)',
                          '0 0 20px rgba(251, 191, 36, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.5
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
                      <div className="absolute top-4 left-4 text-3xl text-amber-600 opacity-40">❋</div>
                      <div className="absolute top-4 right-4 text-3xl text-amber-600 opacity-40">❋</div>
                      <div className="absolute bottom-4 left-4 text-3xl text-amber-600 opacity-40">❋</div>
                      <div className="absolute bottom-4 right-4 text-3xl text-amber-600 opacity-40">❋</div>
                      
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
                                Awarded in {selectedFrame.date}
                              </p>
                            </div>
                            
                            <div className="border-t-2 border-b-2 border-amber-300 py-4 mb-6">
                              <p className="text-center text-gray-700 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {selectedFrame.description}
                              </p>
                            </div>
                            
                            <div className="flex justify-center gap-4">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-bold flex items-center gap-2 shadow-lg"
                                style={{ fontFamily: 'Fredoka, sans-serif' }}
                              >
                                <ExternalLink size={20} />
                                View Certificate
                              </motion.button>
                              
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
                                OFFICIAL<br/>CERTIFIED
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

  const ContactPage = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessageSent(true);
      setHerbMood('excited');
      generateSparkles();
      
      setTimeout(() => {
        setMessageSent(false);
        setContactForm({ name: '', email: '', message: '' });
        setHerbMood('happy');
      }, 3000);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
              style={{ top: `${i * 5}%`, width: '100%' }}
              animate={{
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold text-center mb-4 text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's Connect! 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-xl text-purple-200 mb-16"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Ready to build something amazing together?
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Terminal-style contact form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 overflow-hidden shadow-2xl"
            >
              {/* Terminal header */}
              <div className="bg-gray-900/80 px-6 py-4 border-b border-purple-500/30 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-purple-300 font-mono text-sm">vrinda@portfolio:~$ contact</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="mb-6">
                  <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Your Name:</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Email Address:</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Message:</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono h-32 resize-none"
                    placeholder="Let's collaborate..."
                    required
                  />
                </div>

                <AnimatePresence>
                  {messageSent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-4 p-4 bg-green-500/20 border-2 border-green-500 rounded-xl"
                    >
                      <p className="text-green-300 font-mono text-sm flex items-center gap-2">
                        ✓ Message sent successfully! I'll get back to you soon! 🎉
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                <p className="text-purple-300/50 text-xs mt-4 font-mono text-center">
                  Press Enter or click Send to submit
                </p>
              </form>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Find Me Online 🌐
                </h3>


             <div className="space-y-4">
  {[
    { icon: Github, label: 'GitHub', handle: '@vrinda', color: 'from-gray-600 to-gray-800', link: '#', type: 'icon' },
    { icon: Linkedin, label: 'LinkedIn', handle: '/in/vrinda', color: 'from-blue-600 to-blue-800', link: '#', type: 'icon' },
    { icon: Twitter, label: 'Twitter', handle: '@vrinda_dev', color: 'from-sky-400 to-blue-500', link: '#', type: 'icon' },
    { icon: Instagram, label: 'Instagram', handle: '@vrinda.codes', color: 'from-pink-500 to-purple-600', link: '#', type: 'icon' },
    { icon: Mail, label: 'Email', handle: 'vrinda@example.com', color: 'from-red-500 to-orange-500', link: 'mailto:', type: 'icon' },
    { 
      label: 'CodeChef', 
      handle: 'vrinda_cc', 
      color: 'from-amber-600 to-orange-700', 
      link: '#',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.5 0C5.159 0 0 5.159 0 11.5S5.159 23 11.5 23 23 17.841 23 11.5 17.841 0 11.5 0zm0 21.626c-5.578 0-10.126-4.548-10.126-10.126S5.922 1.374 11.5 1.374s10.126 4.548 10.126 10.126-4.548 10.126-10.126 10.126zm4.84-12.089c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm-9.68 0c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm8.853 4.393c-.684 1.857-2.481 3.179-4.513 3.179s-3.829-1.322-4.513-3.179c-.158-.426-.632-.642-1.058-.484-.426.158-.642.632-.484 1.058.842 2.285 3.057 3.92 6.055 3.92s5.213-1.635 6.055-3.92c.158-.426-.058-.9-.484-1.058-.426-.158-.9.058-1.058.484z"/>
        </svg>
      )
    },
    { 
      label: 'LeetCode', 
      handle: 'vrinda_lc', 
      color: 'from-yellow-500 to-orange-600', 
      link: '#',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      )
    }
  ].map((social, idx) => {
    const Icon = social.icon;
    return (
      <motion.a
        key={social.label}
        href={social.link}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + idx * 0.1 }}
        whileHover={{ scale: 1.05, x: 10 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer group"
      >
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
          {social.type === 'icon' ? <Icon size={24} /> : social.svg}
        </div>
        <div className="flex-grow">
          <p className="text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {social.label}
          </p>
          <p className="text-purple-300 text-sm font-mono">{social.handle}</p>
        </div>
        <ExternalLink size={20} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    );
  })}
</div>
</div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 p-6 shadow-2xl"
              >
                <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  💼 Open for Opportunities!
                </h4>
                <p className="text-purple-200 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  I'm currently looking for internships and freelance projects. If you have an exciting opportunity or just want to chat about tech, feel free to reach out!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const ChatWithHerbPage = () => {

    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

      useEffect(() => {
    if (currentPage === 'chat' && chatMessages.length === 0) {
      setChatMessages([
        { sender: 'herb', text: "Hey there! I'm Herb, Vrinda's AI assistant! Ask me anything about her work, skills, or just chat! 💜" }
      ]);
    }
  }, [currentPage, chatMessages.length]);

      const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);

    const responses = {
      skills: "Vrinda is skilled in JavaScript, Python, Java, React, Angular, Node.js, Django, and various databases! She's a full-stack powerhouse! 💪",
      projects: "She's built some amazing stuff! AI task managers, e-commerce platforms, and analytics dashboards. Want to know more about a specific one?",
      experience: "Vrinda is currently in her first year of MCA and has been coding since high school. She's passionate about creating beautiful web experiences!",
      contact: "You can reach Vrinda through the contact form, or connect on LinkedIn, GitHub, or any of her social media! She'd love to hear from you! 📧",
      hello: "Hey! Great to chat with you! What would you like to know about Vrinda? 😊",
      hi: "Hello there! I'm here to help! Ask me about Vrinda's skills, projects, or anything else!",
      coffee: "Oh yes! Vrinda runs on coffee! ☕ It's her coding fuel. Can't write great code without it!",
      mca: "She's in her first year of MCA (Master of Computer Applications) and absolutely loving it! Learning new things every day! 📚",
      default: "That's a great question! Vrinda is passionate about full-stack development and loves creating interactive experiences. Want to know something specific about her skills or projects?"
    };

    setTimeout(() => {
      setIsTyping(false);
      const input = chatInput.toLowerCase();
      let response = responses.default;

      if (input.includes('skill') || input.includes('tech')) response = responses.skills;
      else if (input.includes('project')) response = responses.projects;
      else if (input.includes('experience') || input.includes('work')) response = responses.experience;
      else if (input.includes('contact') || input.includes('reach')) response = responses.contact;
      else if (input.includes('hello') || input.includes('hey')) response = responses.hello;
      else if (input.includes('hi')) response = responses.hi;
      else if (input.includes('coffee')) response = responses.coffee;
      else if (input.includes('mca') || input.includes('study')) response = responses.mca;

      setChatMessages(prev => [...prev, { sender: 'herb', text: response }]);
      setHerbMood('excited');
      setTimeout(() => setHerbMood('happy'), 1000);
    }, 1000 + Math.random() * 1000);
  };
  
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [chatMessages]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <HerbAvatar mood={herbMood} size="large" />
            </div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Chat with Herb! 💬
            </h1>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ask me anything about Vrinda's work, skills, or just have a friendly chat!
            </p>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-grow bg-white/80 backdrop-blur-lg rounded-3xl border-4 border-purple-300 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring" }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.sender === 'herb' && (
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10">
                          <HerbAvatar mood="happy" />
                        </div>
                      </div>
                    )}
                    <div
                      className={`rounded-2xl p-4 ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800'
                      }`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        U
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10">
                      <HerbAvatar mood="thinking" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleChatSubmit} className="border-t-2 border-purple-200 p-4 bg-white/50">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-grow px-6 py-4 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none text-gray-800 bg-white"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-xl flex items-center gap-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  <Send size={20} />
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Quick suggestions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex gap-2 flex-wrap justify-center"
          >
            {['Tell me about skills', 'What projects?', 'Experience?', 'Contact info?'].map((suggestion, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setChatInput(suggestion);
                }}
                className="px-4 py-2 bg-white/80 rounded-full text-sm text-purple-700 font-medium border-2 border-purple-300 hover:bg-purple-100 transition-colors"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {suggestion}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'contact':
        return <ContactPage />;
      case 'chat':
        return <ChatWithHerbPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && <WelcomeScreen />}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navigation />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
          {herbVisible && <HerbChatBubble />}
        </>
      )}
    </>
  );
};
export default VrindaPortfolio;
            