import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const AnimatedSphere = () => (
  <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
    <Sphere args={[1, 64, 64]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        distort={0.2}
        speed={1}
        roughness={0}
      />
    </Sphere>
  </Float>
);

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const container = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeInOut', staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const scrollToNext = () => {
    const about = document.querySelector('#about');
    about?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      {/* 3D BG */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Saravana Kumar
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Java Developer passionate about creating innovative web experiences with modern technologies like React, SpringBoot, and JavaScript
        </motion.p>

        <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1-ti0RxkSaM8-pH0f1mocCU5Ku2JSvo9D/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Download resume
            </motion.a>
          </motion.div>

        <motion.div variants={item} className="flex justify-center space-x-6">
          <a href="https://github.com/Saravana-kumar-2023" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin />
          </a>
          <a href="mailto:saravanakumar092003@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Mail />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
