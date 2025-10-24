import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import HerbAvatar from '../components/HerbAvatar.jsx';

const ChatWithHerbPage = ({currentPage, herbMood, setHerbMood}) => {

    console.info("Rendering ChatWithHerbPage with currentPage:", currentPage);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

      useEffect(() => {
    if (currentPage === 'chat' && chatMessages.length === 0) {
      setChatMessages([
        { sender: 'herb', text: "Hey there! I'm Herb, Vrinda's AI assistant! Ask me anything about her work, skills, or just chat! 💜" }
      ]);
    }
  }, [ currentPage, chatMessages.length]);

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

  export default ChatWithHerbPage;