import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            About <span className="text-purple-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Java Developer with a fresh perspective on 
                modern web development. My journey began with a fascination for creating 
                digital experiences that bridge the gap between functionality and beauty.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Specializing in Java backend development and modern frontend frameworks 
                like React, I bring ideas to life with clean, efficient code. My expertise 
                in Tailwind CSS helps me create responsive, visually appealing interfaces 
                that users love.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This portfolio itself showcases my skills with Three.js and React Three Fiber, 
                demonstrating my ability to create immersive 3D web experiences that push 
                the boundaries of traditional web development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Coffee className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">What I Do</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Full Stack Java Development</li>
                  <li>• Modern React Applications</li>
                  <li>• Responsive UI/UX Design</li>
                  <li>• 3D Web Experiences</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-green-500/10 p-6 rounded-xl border border-blue-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">What I Love</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Problem Solving</li>
                  <li>• Learning New Technologies</li>
                  <li>• Creating Beautiful Interfaces</li>
                  <li>• Collaborative Development</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 p-6 rounded-xl border border-green-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">My Goal</h3>
                </div>
                <p className="text-gray-300">
                  To contribute to innovative projects that make a positive impact 
                  while continuously growing as a developer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;