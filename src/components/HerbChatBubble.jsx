  import React from 'react';
  import { motion } from 'framer-motion';
  import HerbAvatar from './HerbAvatar';

  const HerbChatBubble = ({ currentPage, herbMood, setHerbMood, setCurrentPage, herbMessage }) => {
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

  export default HerbChatBubble;