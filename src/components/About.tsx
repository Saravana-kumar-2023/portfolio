import { motion } from "framer-motion";
import profile from "/Picture.png";
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-transparent text-white relative z-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.85 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.85 }}
          viewport={{ once: false, amount: 0.3 }}   // 👈 animate EVERY time
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full 
                          bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profile}
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-500/30 -z-10" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          viewport={{ once: false, amount: 0.3 }}   // 👈 re-animate on revisit
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
          className="space-y-6 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Java Developer who loves creating
            modern, animated, and immersive web experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I work with Java, Spring Boot, React, and Tailwind CSS to build
            clean, scalable, and responsive applications.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This portfolio demonstrates my ability to blend UI, animations,
            and 3D graphics using Three.js and React Three Fiber.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
              React Specialist
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              Java Backend
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
