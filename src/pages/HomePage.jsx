import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';  
  
const HomePage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-24 pb-16 px-4 relative overflow-hidden">
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
            Hi, I'm Vrinda! 👋
          </motion.h2>
          
          <motion.p
            className="text-2xl text-gray-700 mb-6 font-bold"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & MCA Student
          </motion.p>
          
          <motion.div
            className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p>
              I turn ideas into beautiful, interactive web experiences. Skilled in <span className="font-semibold text-purple-600">Java, SpringBoot, Python, Django, React, Node.js</span>, and modern web tools, I craft clean, efficient code with a touch of creativity.
            </p>
            <p>
              Currently pursuing my MCA, I thrive on learning, building, and solving challenges, whether it's a sleek front-end, a robust back-end, or an entire full-stack solution.
            </p>
            <p>
              Beyond coding, I draw inspiration from music, nature, and volunteering, bringing curiosity and creativity to everything I do.
            </p>
            <p className="font-semibold text-purple-600">
              Let's create something amazing together! ✨
            </p>
          </motion.div>
          
          <motion.div
            className="flex gap-4 flex-wrap"
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
        {[
          { 
            icon: Github, 
            label: 'GitHub', 
            color: 'from-gray-700 to-gray-900', 
            type: 'icon',
            link: 'https://github.com/Vrindamodi',
            username: 'Vrindamodi'
          },
          { 
            icon: Linkedin, 
            label: 'LinkedIn', 
            color: 'from-blue-600 to-blue-800', 
            type: 'icon',
            link: 'https://www.linkedin.com/in/vrindamodii',
            username: 'Vrindamodi'
          },
          { 
            label: 'X', 
            color: 'from-black to-gray-800', 
            type: 'svg',
            link: 'https://x.com/Vrindamodii',
            username: 'Vrindamodii',
            svg: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            )
          },
          { 
            icon: Instagram, 
            label: 'Instagram', 
            color: 'from-pink-500 to-purple-600', 
            type: 'icon',
            link: 'https://www.instagram.com/vrindamodi_/',
            username: 'vrindamodi_'
          },
          { 
            icon: Mail, 
            label: 'Email', 
            color: 'from-red-500 to-orange-500', 
            type: 'icon',
            link: 'mailto:vrindamodi21@gmail.com',
            username: 'vrindamodi21@gmail.com'
          },
          { 
            label: 'CodeChef', 
            color: 'from-amber-600 to-orange-700', 
            type: 'svg',
            link: 'https://www.codechef.com/users/vrindamodi',
            username: 'vrindamodi',
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
            link: 'https://leetcode.com/u/vrindamodi21/',
            username: 'vrindamodi21',
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
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.1 }}
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg cursor-pointer group relative`}
              title={social.label}
            >
              {social.type === 'icon' ? <Icon size={24} /> : social.svg}
              
              {/* Tooltip on hover */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.username}
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  </div>
);

export default HomePage;