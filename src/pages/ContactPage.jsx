//   import React, { useState } from 'react';
//   import { Mail, Github, Linkedin, Twitter, Instagram,  Send, ExternalLink } from 'lucide-react';
//   import { motion, AnimatePresence } from 'framer-motion';

//   const ContactPage = ({setHerbMood, generateSparkles}) => {
//     const [messageSent, setMessageSent] = useState(false);
//     const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setMessageSent(true);
//       setHerbMood('excited');
//       generateSparkles();
      
//       setTimeout(() => {
//         setMessageSent(false);
//         setContactForm({ name: '', email: '', message: '' });
//         setHerbMood('happy');
//       }, 3000);
//     };

//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24 pb-16 px-4 relative overflow-hidden">
//         {/* Animated grid background */}
//         <div className="absolute inset-0 opacity-20">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
//               style={{ top: `${i * 5}%`, width: '100%' }}
//               animate={{
//                 opacity: [0.1, 0.5, 0.1]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: i * 0.1
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-6xl font-bold text-center mb-4 text-white"
//             style={{ fontFamily: 'Space Grotesk, sans-serif' }}
//           >
//             Let's Connect! 🚀
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center text-xl text-purple-200 mb-16"
//             style={{ fontFamily: 'DM Sans, sans-serif' }}
//           >
//             Ready to build something amazing together?
//           </motion.p>

//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             {/* Terminal-style contact form */}
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="bg-gray-800/50 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 overflow-hidden shadow-2xl"
//             >
//               {/* Terminal header */}
//               <div className="bg-gray-900/80 px-6 py-4 border-b border-purple-500/30 flex items-center gap-2">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <span className="ml-4 text-purple-300 font-mono text-sm">vrinda@portfolio:~$ contact</span>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="p-8">
//                 <div className="mb-6">
//                   <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Your Name:</label>
//                   <input
//                     type="text"
//                     value={contactForm.name}
//                     onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                     className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Email Address:</label>
//                   <input
//                     type="email"
//                     value={contactForm.email}
//                     onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//                     className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Message:</label>
//                   <textarea
//                     value={contactForm.message}
//                     onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                     className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono h-32 resize-none"
//                     placeholder="Let's collaborate..."
//                     required
//                   />
//                 </div>

//                 <AnimatePresence>
//                   {messageSent && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0 }}
//                       className="mb-4 p-4 bg-green-500/20 border-2 border-green-500 rounded-xl"
//                     >
//                       <p className="text-green-300 font-mono text-sm flex items-center gap-2">
//                         ✓ Message sent successfully! I'll get back to you soon! 🎉
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <motion.button
//                   whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl"
//                   style={{ fontFamily: 'Fredoka, sans-serif' }}
//                 >
//                   <Send size={20} />
//                   Send Message
//                 </motion.button>

//                 <p className="text-purple-300/50 text-xs mt-4 font-mono text-center">
//                   Press Enter or click Send to submit
//                 </p>
//               </form>
//             </motion.div>

//             {/* Social Links Section */}
//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-6"
//             >
//               <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 p-8 shadow-2xl">
//                 <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
//                   Find Me Online 🌐
//                 </h3>


//              <div className="space-y-4">
//   {[
//     { icon: Github, label: 'GitHub', handle: '@vrinda', color: 'from-gray-600 to-gray-800', link: '#', type: 'icon' },
//     { icon: Linkedin, label: 'LinkedIn', handle: '/in/vrinda', color: 'from-blue-600 to-blue-800', link: '#', type: 'icon' },
//     { icon: Twitter, label: 'Twitter', handle: '@vrinda_dev', color: 'from-sky-400 to-blue-500', link: '#', type: 'icon' },
//     { icon: Instagram, label: 'Instagram', handle: '@vrinda.codes', color: 'from-pink-500 to-purple-600', link: '#', type: 'icon' },
//     { icon: Mail, label: 'Email', handle: 'vrinda@example.com', color: 'from-red-500 to-orange-500', link: 'mailto:', type: 'icon' },
//     { 
//       label: 'CodeChef', 
//       handle: 'vrinda_cc', 
//       color: 'from-amber-600 to-orange-700', 
//       link: '#',
//       type: 'svg',
//       svg: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <path d="M11.5 0C5.159 0 0 5.159 0 11.5S5.159 23 11.5 23 23 17.841 23 11.5 17.841 0 11.5 0zm0 21.626c-5.578 0-10.126-4.548-10.126-10.126S5.922 1.374 11.5 1.374s10.126 4.548 10.126 10.126-4.548 10.126-10.126 10.126zm4.84-12.089c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm-9.68 0c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm8.853 4.393c-.684 1.857-2.481 3.179-4.513 3.179s-3.829-1.322-4.513-3.179c-.158-.426-.632-.642-1.058-.484-.426.158-.642.632-.484 1.058.842 2.285 3.057 3.92 6.055 3.92s5.213-1.635 6.055-3.92c.158-.426-.058-.9-.484-1.058-.426-.158-.9.058-1.058.484z"/>
//         </svg>
//       )
//     },
//     { 
//       label: 'LeetCode', 
//       handle: 'vrinda_lc', 
//       color: 'from-yellow-500 to-orange-600', 
//       link: '#',
//       type: 'svg',
//       svg: (
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//           <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
//         </svg>
//       )
//     }
//   ].map((social, idx) => {
//     const Icon = social.icon;
//     return (
//       <motion.a
//         key={social.label}
//         href={social.link}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5 + idx * 0.1 }}
//         whileHover={{ scale: 1.05, x: 10 }}
//         whileTap={{ scale: 0.95 }}
//         className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer group"
//       >
//         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
//           {social.type === 'icon' ? <Icon size={24} /> : social.svg}
//         </div>
//         <div className="flex-grow">
//           <p className="text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
//             {social.label}
//           </p>
//           <p className="text-purple-300 text-sm font-mono">{social.handle}</p>
//         </div>
//         <ExternalLink size={20} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//       </motion.a>
//     );
//   })}
// </div>
// </div>

//               {/* Quick Info Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl border-2 border-purple-500/30 p-6 shadow-2xl"
//               >
//                 <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
//                   💼 Open for Opportunities!
//                 </h4>
//                 <p className="text-purple-200 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
//                   I'm currently looking for internships and freelance projects. If you have an exciting opportunity or just want to chat about tech, feel free to reach out!
//                 </p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default ContactPage;


import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = ({setHerbMood, generateSparkles}) => {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      // Send notification to you (template_5zftn8d)
      const result1 = await emailjs.send(
        '291096', // Service ID
        'template_5zftn8d', // Template ID for receiving messages
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
          email: 'vrindamodi21@gmail.com', // This matches {{email}} in your template
        },
        'yleobQsBFqZY_picg' // Public key
      );

      // Send auto-response to the sender (template_coxifpo)
      const result2 = await emailjs.send(
        '291096', // Service ID
        'template_coxifpo', // Template ID for auto-response
        {
          from_email: contactForm.email, // This matches {{from_email}} in your template
          from_name: contactForm.name,
        },
        'yleobQsBFqZY_picg' // Public key
      );

      setMessageSent(true);
      if (setHerbMood) setHerbMood('excited');
      if (generateSparkles) generateSparkles();
      
      setTimeout(() => {
        setMessageSent(false);
        setContactForm({ name: '', email: '', message: '' });
        if (setHerbMood) setHerbMood('happy');
      }, 5000);

    } catch (err) {
      console.error('Failed to send email:', err);
      setError(`Failed to send message: ${err.text || err.message || 'Unknown error'}. Please try again or email me directly.`);
    } finally {
      setSending(false);
    }
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
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-purple-300 mb-2 font-mono text-sm">{'> '} Your Name:</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full bg-gray-900/50 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none font-mono"
                  placeholder="John Doe"
                  required
                  disabled={sending}
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
                  disabled={sending}
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
                  disabled={sending}
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
                      ✓ Message sent successfully! Check your email for a confirmation. I'll get back to you soon! 🎉
                    </p>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-xl"
                  >
                    <p className="text-red-300 font-mono text-sm">
                      ✗ {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: sending ? 1 : 1.02, boxShadow: sending ? "none" : "0 0 30px rgba(168, 85, 247, 0.6)" }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                type="button"
                onClick={handleSubmit}
                disabled={sending}
                className={`w-full py-4 ${sending ? 'bg-gray-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl transition-all`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-purple-300/50 text-xs mt-4 font-mono text-center">
                You'll receive an auto-reply confirming your message
              </p>
            </div>
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
                  { 
                    icon: Github, 
                    label: 'GitHub', 
                    handle: '@Vrindamodi', 
                    color: 'from-gray-600 to-gray-800', 
                    link: 'https://github.com/Vrindamodi', 
                    type: 'icon' 
                  },
                  { 
                    icon: Linkedin, 
                    label: 'LinkedIn', 
                    handle: '/in/vrindamodii', 
                    color: 'from-blue-600 to-blue-800', 
                    link: 'https://www.linkedin.com/in/vrindamodii', 
                    type: 'icon' 
                  },
                  { 
                    type: 'svg',
                    label: 'X (Twitter)', 
                    handle: '@Vrindamodii', 
                    color: 'from-gray-800 to-black', 
                    link: 'https://x.com/Vrindamodii',
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )
                  },
                  { 
                    icon: Instagram, 
                    label: 'Instagram', 
                    handle: '@vrindamodi_', 
                    color: 'from-pink-500 to-purple-600', 
                    link: 'https://www.instagram.com/vrindamodi_/', 
                    type: 'icon' 
                  },
                  { 
                    icon: Mail, 
                    label: 'Email', 
                    handle: 'vrindamodi21@gmail.com', 
                    color: 'from-red-500 to-orange-500', 
                    link: 'mailto:vrindamodi21@gmail.com', 
                    type: 'icon' 
                  },
                  { 
                    label: 'CodeChef', 
                    handle: 'vrindamodi', 
                    color: 'from-amber-600 to-orange-700', 
                    link: 'https://www.codechef.com/users/vrindamodi',
                    type: 'svg',
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.5 0C5.159 0 0 5.159 0 11.5S5.159 23 11.5 23 23 17.841 23 11.5 17.841 0 11.5 0zm0 21.626c-5.578 0-10.126-4.548-10.126-10.126S5.922 1.374 11.5 1.374s10.126 4.548 10.126 10.126-4.548 10.126-10.126 10.126zm4.84-12.089c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm-9.68 0c-.684 0-1.237.553-1.237 1.237s.553 1.237 1.237 1.237 1.237-.553 1.237-1.237-.553-1.237-1.237-1.237zm8.853 4.393c-.684 1.857-2.481 3.179-4.513 3.179s-3.829-1.322-4.513-3.179c-.158-.426-.632-.642-1.058-.484-.426.158-.642.632-.484 1.058.842 2.285 3.057 3.92 6.055 3.92s5.213-1.635 6.055-3.92c.158-.426-.058-.9-.484-1.058-.426-.158-.9.058-1.058.484z"/>
                      </svg>
                    )
                  },
                  { 
                    label: 'LeetCode', 
                    handle: 'vrindamodi21', 
                    color: 'from-yellow-500 to-orange-600', 
                    link: 'https://leetcode.com/u/vrindamodi21/',
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
                      target="_blank"
                      rel="noopener noreferrer"
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

export default ContactPage;