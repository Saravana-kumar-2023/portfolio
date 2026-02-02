import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code } from "lucide-react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15 + 8;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 600);
          return 100;
        }
        return next;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center overflow-hidden"
      >
        {/* Glow orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-[-10%] left-[-10%]"
          animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-[-10%] right-[-10%]"
          animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-2xl"
        >
          {/* Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <div className="w-16 h-16 mx-auto border border-purple-400/30 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-purple-400" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Saravana Kumar
          </motion.h1>

          <p className="text-gray-400 mb-6">
            Crafting immersive web experiences
          </p>

          {/* Progress */}
          <div className="w-64 mx-auto">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Booting system</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>
          </div>

          {/* Pulse dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
