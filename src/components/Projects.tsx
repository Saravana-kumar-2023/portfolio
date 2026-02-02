import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Code, Calendar, Cpu, Users, Airplay } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // observe continuously

  const projects = [
    {
      id: 1,
      title: "TECHCRUZ'25",
      subtitle: "College Symposium Platform",
      description: "A comprehensive web platform developed for our college's annual technical symposium. Features event registration, participant management, real-time updates, and interactive dashboards for organizers and participants.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Event Registration System",
        "Event Details",
        "Participant Management",
        "Responsive Design",
        "Payment Integration"
      ],
      status: "Completed",
      year: "2025",
      category: "Web Development",
      gradient: "from-purple-500 to-pink-500",
      icon: Calendar,
      sourceLink: "",
      liveLink: "https://jpcoe.ac.in/techcruz/Pages/home.html"
    },
    {
      id: 2,
      title: "AI-Based WebRTC Learning Platform",
      subtitle: "Interactive Learning Experience",
      description: "An innovative e-learning platform that allows students to learn and teach collaboratively, including live transcription and AI-assisted features.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "WebRTC", "AI/ML APIs"],
      features: [
        "AI-Powered Learning Paths",
        "Real-time Video Communication",
        "Student Collaboration",
        "Interactive Environment",
        "Peer Learning Sessions using WebRTC",
        "Live Transcription Notes"
      ],
      status: "Completed",
      year: "2025",
      category: "AI & Education",
      gradient: "from-blue-500 to-cyan-500",
      icon: Cpu,
      sourceLink: "https://github.com/Saravana-kumar-2023/AI-Based-WebRTC-Learning-Platform",
      liveLink: ""
    },
    {
      id: 3,
      title: "My own Portfolio",
      subtitle: "A website tells about me and my skills",
      description: "A portfolio showcasing skills, education, and projects with contact functionality.",
      technologies: ["React-vite.js", "Node.js", "Express.js", "Three.js", "Tailwind CSS", "Framer-motion"],
      features: [
        "Responsive website",
        "Displays my skills & projects",
        "Contact through the form",
        "3D objects integration"
      ],
      status: "Completed",
      year: "2025",
      category: "Portfolio",
      gradient: "from-blue-500 to-cyan-500",
      icon: Airplay,
      sourceLink: "https://github.com/Saravana-kumar-2023/Portfolio",
      liveLink: "https://saravana-kumar-2023.github.io/Portfolio/"
    },
    {
      id: 4,
      title: "Student Management System",
      subtitle: "CRUD-based student record management",
      description: "Full-stack application for managing student records with a responsive UI and REST API integration.",
      technologies: ["React JS", "Java Spring Boot", "RESTful APIs", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Responsive interface",
        "Add, update, view, delete records",
        "REST API backend",
        "Secure database operations"
      ],
      status: "Completed",
      year: "2025",
      category: "CRUD Project",
      gradient: "from-blue-500 to-cyan-500",
      icon: Airplay,
      sourceLink: "",
      liveLink: ""
    }
  ];

  // Container variant for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Smooth scroll-in/out animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: "easeIn" } }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          >
            My <span className="text-purple-400">Projects</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-400 text-center mb-16"
          >
            Showcasing my journey through innovative web development projects
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="exit"
                whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-purple-400 font-semibold">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-2 text-purple-400" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-600">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Project</span>
                  </motion.a>
                  <motion.a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 border border-purple-400 text-purple-400 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-400 hover:text-white transition-all duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={cardVariants} className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">More Projects Coming Soon!</h3>
              <p className="text-gray-300 mb-4">I'm constantly working on new projects and exploring innovative technologies.</p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <Users className="h-5 w-5" />
                <span>Let's Collaborate</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
