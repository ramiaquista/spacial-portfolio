"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Inter, Roboto_Slab } from "next/font/google";
import { projects, skills, testimonials } from "./data";
import StarField from "./components/StarField";
import profileImage from "./profile-img-2.png";
import CustomTypingEffect from "./components/CustomTypingEffect";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      className={`${inter.className} min-h-screen bg-black text-gray-300 transition-colors duration-300 relative overflow-hidden`}
    >
      <StarField />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {!isMobile && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-70 bg-black shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <h1
              className={`${robotoSlab.className} text-2xl font-bold text-white mb-4 sm:mb-0`}
            >
              Ramiro Aquistapace
            </h1>
            <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4">
              <a
                href="#about"
                className="text-gray-400 hover:text-white px-2 py-1"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white px-2 py-1"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white px-2 py-1"
              >
                Projects
              </a>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-white px-2 py-1"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white px-2 py-1"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      )}

      <div className="container mx-auto px-4 py-24 text-gray-300 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Image
            src={profileImage}
            alt="Ramiro Aquistapace"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4 border-4 border-gray-700"
          />
          <h1
            className={`${robotoSlab.className} text-4xl sm:text-5xl font-extrabold mb-4 text-white`}
          >
            Ramiro Aquistapace
          </h1>
          <CustomTypingEffect
            texts={["Senior Software Engineer"]}
            className="text-xl sm:text-2xl font-light mb-4 text-gray-400"
          />
          <a
            href="/your-resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          id="about"
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <h2
            className={`${robotoSlab.className} text-3xl font-bold mb-6 text-white`}
          >
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            I'm a Senior Software Engineer with a passion for building scalable
            and secure web applications. I have a strong background in
            developing and maintaining web applications using modern
            technologies.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          id="skills"
          className="mb-16 max-w-3xl mx-auto"
        >
          <h2
            className={`${robotoSlab.className} text-3xl font-bold mb-6 text-center text-white`}
          >
            Skills
          </h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-gray-800">
                      {skill.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-200">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
                  <motion.div
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-600"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          id="projects"
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2
            className={`${robotoSlab.className} text-3xl font-bold mb-6 text-center text-white`}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          id="testimonials"
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2
            className={`${robotoSlab.className} text-3xl font-bold mb-6 text-center text-white`}
          >
            Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          id="contact"
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className={`${robotoSlab.className} text-3xl font-bold mb-6 text-white`}
          >
            Contact Me
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-2 flex items-center justify-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:your.email@example.com"
                className="text-blue-400 hover:underline"
              >
                your.email@example.com
              </a>
            </p>
            <p className="mb-2 flex items-center justify-center">
              <FaLinkedin className="mr-2" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
            <p className="flex items-center justify-center">
              <FaGithub className="mr-2" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/yourusername
              </a>
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
