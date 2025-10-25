import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
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

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    const currentChatInput = chatInput;
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch('https://herb-be.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: currentChatInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Assuming the API returns a JSON object with a 'response' key
      const herbResponse = { sender: 'herb', text: data.response };
      
      setChatMessages(prev => [...prev, herbResponse]);
      setHerbMood('excited');
      setTimeout(() => setHerbMood('happy'), 1000);

    } catch (error) {
      console.error('Error fetching chat response:', error);
      const errorMessage = { sender: 'herb', text: "Sorry, I'm having a little trouble connecting. Please try again in a moment! 🔌" };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
      scrollToBottom();
    }, [chatMessages]);

    return (
      <div className="h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto h-full flex flex-col w-full">
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
                  <div className={`flex items-start gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.sender === 'herb' && (
                      <div className="flex-shrink-0">
                        <div className="">
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
                    <div className="">
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