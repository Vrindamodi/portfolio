import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Package, Database } from 'lucide-react';
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

  export default ProjectsPage;