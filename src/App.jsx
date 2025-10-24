import '@fontsource/pacifico';
import '@fontsource/poppins';
import '@fontsource/quicksand';
import '@fontsource/chewy';        // 'Chewy', cursive
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles,  Book, Zap, MapPin, Download, Mail, Github, Linkedin, Twitter, Instagram, Code2, Award, Briefcase, User, MessageCircle, Home, Star, Heart, Coffee, Music, Database, Server, Cloud, Layout, Terminal, Package, Send, Trophy, Calendar, ExternalLink, Laptop } from 'lucide-react';
import HerbAvatar from './components/HerbAvatar';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';

const VrindaPortfolio = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [herbVisible, setHerbVisible] = useState(false);
  const [herbMessage, setHerbMessage] = useState("Hi, I'm Herb — your AI Assistant. Welcome to Vrinda's Portfolio!");
  const [herbMood, setHerbMood] = useState('happy');
  const [sparkles, setSparkles] = useState([]);

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
    const [isTyping, setIsTyping] = useState(false);

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
            