import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Star } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-25% 0px" }); // animate in/out

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      field: "Computer Science Engineering",
      institution: "J.P. College of Engineering",
      location: "Tenkasi, Tamil Nadu",
      duration: "2021 - 2025",
      grade: "8.14 CGPA",
      description: "Specialized in software development, data structures, algorithms, and web technologies. Completed projects in Java, React, and database management.",
      highlights: [
        "Core Java Programming",
        "Web Development with React",
        "Database Management Systems",
        "Software Engineering Principles"
      ],
      achievements: [
        "First price for Paper Presentation in Sysmposium",
        "Presented a paper at the International conference in my college",
        "Presented my Project at the ISTE-organized Project Expo in PSR Campus"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      field: "Computer Science",
      institution: "MDT Hindu College Higher Secondary School",
      location: "Tamil Nadu",
      duration: "2019 - 2021",
      grade: "83.33%",
      description: "Focused on mathematics, physics, chemistry, and computer science fundamentals. Built strong analytical and problem-solving skills.",
      highlights: [
        "Programming Fundamentals",
        "Mathematics & Problem solving",
        "Computer Applications",
        "Logical Thinking"
      ],
      achievements: [
        "Involving in sports activities",
        "Good in Mathematics"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      field: "General Studies",
      institution: "MDT Hindu College Higher Secondary School",
      location: "Tamil Nadu",
      duration: "2018 - 2019",
      grade: "82.2%",
      description: "Completed foundational education with excellent performance in mathematics and science subjects.",
      highlights: [
        "Strong Academic Foundation",
        "Mathematics Excellence",
        "Science & Technology"
      ],
      achievements: [
        "Invloving Sport Activites",
        "Zonal Basket Ball Player",
        "Mathematics Topper Award"
      ]
    }
  ];

  // ===== Framer Motion Variants =====
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.4, staggerChildren: 0.3, ease: "easeInOut" } 
    }
  };

  const cardVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      scale: 0.9
    }),
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  const timelineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Neon background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#8b5cf6' : '#ff00ff'
              }40, transparent)`,
              boxShadow: `0 0 10px ${
                index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#8b5cf6' : '#ff00ff'
              }40`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={titleVariants} className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">Education</span>
          </motion.h2>
          <motion.p variants={titleVariants} className="text-xl text-gray-400 text-center mb-16">
            Academic journey that shaped my technical foundation
          </motion.p>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 rounded-full origin-top"
              style={{
                height: '100%',
                background: 'linear-gradient(to bottom, #00ffff, #8b5cf6, #ff00ff)',
                boxShadow: '0 0 20px #00ffff, 0 0 40px #8b5cf6, 0 0 60px #ff00ff',
                filter: 'blur(0.5px)',
              }}
            />

            <div className="space-y-16">
              {educationData.map((edu, index) => {
                const direction = index % 2 === 0 ? "left" : "right";
                const color = index % 3 === 0 ? '#00ffff' : index % 3 === 1 ? '#8b5cf6' : '#ff00ff';
                return (
                  <motion.div
                    key={edu.id}
                    custom={direction}
                    variants={cardVariants}
                    className={`relative flex items-center ${direction === "left" ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      variants={dotVariants}
                      className="absolute left-[calc(8%-0.20cm)] md:left-[calc(50%-0.25cm)] transform -translate-x-1/2 z-20"
                    >
                      <div
                        className="w-6 h-6 rounded-full border-2 relative"
                        style={{
                          background: `radial-gradient(circle, ${color}, transparent)`,
                          borderColor: color,
                          boxShadow: `0 0 20px ${color}, inset 0 0 10px ${color}40`,
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.4, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-1 rounded-full"
                          style={{ background: color }}
                        />
                      </div>
                    </motion.div>

                    {/* Education Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${direction === "left" ? 'md:mr-12' : 'md:ml-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="relative bg-gradient-to-br from-gray-800/90 to-gray-700/90 p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm"
                        style={{ borderColor: `${color}40`, boxShadow: `0 0 30px ${color}20` }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 relative z-10">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg relative" style={{ background: `${color}20`, boxShadow: `0 0 15px ${color}30` }}>
                              <GraduationCap className="h-6 w-6" style={{ color: color, filter: `drop-shadow(0 0 5px ${color})` }} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                              <p className="font-semibold" style={{ color: color, textShadow: `0 0 10px ${color}40` }}>{edu.field}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 px-3 py-1 rounded-full relative" style={{ background: '#10b98120', border: '1px solid #10b98140', boxShadow: '0 0 15px #10b98130' }}>
                            <Award className="h-4 w-4 text-green-400" style={{ filter: 'drop-shadow(0 0 3px #10b981)' }} />
                            <span className="text-green-400 font-semibold text-sm" style={{ textShadow: '0 0 5px #10b98140' }}>{edu.grade}</span>
                          </div>
                        </div>

                        {/* Institution & Duration */}
                        <div className="space-y-2 mb-4 relative z-10">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <BookOpen className="h-4 w-4 text-blue-400" style={{ filter: 'drop-shadow(0 0 3px #3b82f6)' }} />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <MapPin className="h-4 w-4 text-red-400" style={{ filter: 'drop-shadow(0 0 3px #ef4444)' }} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Calendar className="h-4 w-4 text-green-400" style={{ filter: 'drop-shadow(0 0 3px #10b981)' }} />
                            <span>{edu.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed relative z-10">{edu.description}</p>

                        {/* Highlights */}
                        <div className="mb-4 relative z-10">
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Star className="h-4 w-4 mr-2 text-yellow-400" style={{ filter: 'drop-shadow(0 0 3px #fbbf24)' }} />
                            Key Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />
                                <span className="text-gray-300 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="relative z-10">
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Trophy className="h-4 w-4 mr-2 text-yellow-400" style={{ filter: 'drop-shadow(0 0 3px #fbbf24)' }} />
                            Achievements
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full" style={{ background: '#fbbf24', boxShadow: '0 0 5px #fbbf24' }} />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={titleVariants} className="mt-16 text-center">
            <div className="relative p-6 rounded-xl border backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, #8b5cf620, #00ffff10)', borderColor: '#8b5cf640', boxShadow: '0 0 30px #8b5cf620' }}>
              <div className="absolute inset-0 rounded-xl opacity-30 pointer-events-none" style={{ background: 'linear-gradient(45deg, #8b5cf620, transparent, #00ffff20)', filter: 'blur(1px)' }} />
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready for the Next Chapter</h3>
              <p className="text-gray-300 text-lg relative z-10">With a solid educational foundation and passion for continuous learning, I'm excited to contribute to innovative projects and grow as a developer.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
