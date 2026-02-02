import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);

  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Data Structures and Algorithms"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Frontend Development", 
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Postman", "After Effects", "Figma", "Photoshop"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50 relative overflow-hidden" ref={ref}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 text-xl">Technologies I work with to bring ideas to life</p>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-6 ">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={card}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500/50 transition-all duration-200"
                    >
                      <span className="text-white font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning & Growing</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying updated with the latest technologies.
              Currently exploring advanced React patterns, cloud technologies, and DevOps practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
