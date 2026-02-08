import { motion } from "framer-motion";
import DecryptedText from "../components/ui/DecryptedText";
import SpotlightCard from "../components/ui/SpotlightCard";
import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const Home = () => {
  const githubUsername = "ArilDani"; 

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Figma",
    "Framer Motion",
  ];

  const projects = [
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive dashboard for visualizing with real-time data updates.",
      tags: ["Shiny","Python"],
      color: "rgba(139, 92, 246, 0.15)",
    },
    {
      title: "Immersive Web Portfolio",
      description:
        "portfolio website featuring interactive elements and smooth transitions.",
      tags: ["Next.js", "Figma"],
      color: "rgba(59, 130, 246, 0.15)",
    },
    {
      title: "Mobile App Design",
      description:
        "A sleek and user-friendly mobile app design prototype created using Figma.",
      tags: ["Figma"],
      color: "rgba(16, 185, 129, 0.15)"
    },
    {
      title: "E-commerce Platform",
      description:
        "Scalable online store solution with headless CMS integration and stripe payments.",
      tags: ["Next.js", "Shopify", "Stripe"],
      color: "rgba(236, 72, 153, 0.15)",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center pt-20">
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-purple-400 font-mono mb-4 tracking-wider">
            HELLO, I AM A
          </h2>
          <div className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 leading-none">
            <DecryptedText
              text="CREATIVE"
              animateOn="view"
              revealDirection="start"
              speed={100}
              parentClassName="block text-white"
              className=""
            />
            <DecryptedText
              text="DEVELOPER"
              animateOn="view"
              revealDirection="end"
              speed={100}
              parentClassName="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              className=""
            />
          </div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Crafting digital experiences where design meets technology.
            Specializing in building exceptional, high-quality websites and
            applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors mx-auto"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Work <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-purple-500 block"></span>
              About Me
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hi, I’m Arutia.I’m a UI/UX-focused Frontend Developer who’s passionate about crafting clean, intuitive, and visually engaging digital experiences. I believe good design isn’t just about looks—it’s about clarity, usability, and creating interfaces that feel effortless to use.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With a strong background in UI/UX design and frontend development, I translate ideas and user needs into functional, responsive, and modern interfaces. From wireframes and design systems to polished frontend implementations, I make sure every detail aligns with both user experience and business goals.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-6 text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full text-sm border border-zinc-700 hover:border-purple-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3">
          <span className="w-12 h-1 bg-purple-500 block"></span>
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 h-full flex flex-col justify-between group cursor-pointer"
              spotlightColor={project.color}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-800 rounded-xl">
                    <Github size={24} className="text-white" />
                  </div>
                  <ExternalLink
                    size={24}
                    className="text-gray-500 group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 md:py-32">
        <h3 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3">
          <span className="w-12 h-1 bg-purple-500 block"></span>
          Open Source Activity
        </h3>

        <div className="flex flex-col gap-8 items-center w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div className="text-gray-400">Repositories</div>
            </motion.a>

            <motion.a
              href={`https://github.com/${githubUsername}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Projects</div>
            </motion.a>

            <motion.a
              href={`https://github.com/${githubUsername}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 text-center hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-pink-400 mb-2">
                Active
              </div>
              <div className="text-gray-400">Open Source</div>
            </motion.a>
          </div>

          {/* GitHub Contributions Embed */}
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 w-full overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">
              GitHub Contributions
            </h4>
            <div className="flex justify-center min-h-64 overflow-x-auto">
              <GitHubCalendar
                username={githubUsername}
                colorScheme="dark"
                fontSize={14}
                blockSize={12}
                blockMargin={4}
                theme={{
                  dark: ["#0e1117", "#161b22", "#0d3922", "#0f6d2e", "#00c026"],
                }}
              />
            </div>
          </motion.div>

          {/* Skills & Tech */}
          <motion.div
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">
              Featured Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Python",
                "PostgreSQL",
                "Docker",
              ].map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/50 hover:border-purple-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Direct GitHub Link */}
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            View Full GitHub Profile →
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 mb-20">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h3>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
            Have a project in mind? I'm always open to discussing new
            opportunities and creative ideas.
          </p>

          <motion.a
            href="arildani60@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
