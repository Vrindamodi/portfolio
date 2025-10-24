import '@fontsource/pacifico';
import '@fontsource/poppins';
import '@fontsource/quicksand';
import '@fontsource/chewy';        // 'Chewy', cursive
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HerbAvatar from './components/HerbAvatar';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ChatWithHerbPage from './pages/ChatWithHerbPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navbar';
import HerbChatBubble from './components/HerbChatBubble';
import WelcomeScreen from './pages/WelcomePage';

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
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
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
        return <ContactPage setHerbMood={setHerbMood} generateSparkles={generateSparkles} />;
      case 'chat':
        return <ChatWithHerbPage currentPage={currentPage} herbMood={herbMood} setHerbMood={setHerbMood} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage}/>;
    }
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && <WelcomeScreen setShowWelcome={setShowWelcome} herbMessage={herbMessage} generateSparkles={generateSparkles} />}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setHerbMood={setHerbMood}/>
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
          {herbVisible && <HerbChatBubble currentPage={currentPage} herbMood={herbMood} setHerbMood={setHerbMood} setCurrentPage={setCurrentPage} herbMessage={herbMessage} />}
        </>
      )}
    </>
  );
};
export default VrindaPortfolio;
            