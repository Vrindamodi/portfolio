import React from 'react';
import { motion } from 'framer-motion';
import HerbAvatar from '../components/HerbAvatar.jsx';
const WelcomeScreen = ({herbMessage, setShowWelcome, generateSparkles}) => (
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

  export default WelcomeScreen;