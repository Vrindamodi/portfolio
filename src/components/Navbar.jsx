import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Star, Code2, Briefcase, Award, Mail, MessageCircle, Sparkles } from 'lucide-react';  
  const Navigation = ({setCurrentPage, setHerbMood, currentPage}) => {
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

  export default Navigation;