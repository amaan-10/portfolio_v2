"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenai,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiWebpack,
  SiVite,
  SiEslint,
  SiVercel,
  SiNetlify,
  SiCloudflare,
  SiDigitalocean,
  SiFramer,
  SiBootstrap,
  SiFastapi,
  SiPostman,
  SiCplusplus,
  SiFlask,
  SiGooglegemini,
} from "react-icons/si";

const techStack = [
  // Frontend
  { label: "React", category: "Frontend", link: "https://reactjs.org/" },
  { label: "Next.js", category: "Frontend", link: "https://nextjs.org/" },
  {
    label: "TypeScript",
    category: "Frontend",
    link: "https://www.typescriptlang.org/",
  },
  {
    label: "JavaScript",
    category: "Frontend",
    link: "https://www.javascript.com/",
  },
  {
    label: "Tailwind CSS",
    category: "Frontend",
    link: "https://tailwindcss.com/",
  },
  {
    label: "Bootstrap",
    category: "Frontend",
    link: "https://getbootstrap.com/",
  },
  {
    label: "Framer Motion",
    category: "Frontend",
    link: "https://www.framer.com/motion/",
  },

  // Backend
  { label: "Node.js", category: "Backend", link: "https://nodejs.org/" },
  { label: "Express", category: "Backend", link: "https://expressjs.com/" },
  {
    label: "FastAPI",
    category: "Backend",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    label: "Flask",
    category: "Backend",
    link: "https://flask.palletsprojects.com/",
  },
  {
    label: "PostgreSQL",
    category: "Backend",
    link: "https://www.postgresql.org/",
  },
  { label: "MongoDB", category: "Backend", link: "https://www.mongodb.com/" },

  // Tools
  { label: "Git", category: "Tools", link: "https://git-scm.com/" },
  { label: "Postman", category: "Tools", link: "https://www.postman.com/" },
  { label: "Webpack", category: "Tools", link: "https://webpack.js.org/" },
  { label: "ESLint", category: "Tools", link: "https://eslint.org/" },

  // Hosting
  { label: "Vercel", category: "Hosting", link: "https://vercel.com/" },
  { label: "OpenAI", category: "AI/ML", link: "https://openai.com/" },
  { label: "Gemini-AI", category: "AI/ML", link: "https://ai.google/gemini/" },

  // Programming Languages
  { label: "Python", category: "Languages", link: "https://www.python.org/" },
  { label: "C++", category: "Languages", link: "https://isocpp.org/" },
];

const iconMap: Record<string, React.ReactElement> = {
  React: <FaReact className="h-5 w-5" />,
  "Next.js": <SiNextdotjs className="h-5 w-5" />,
  "Node.js": <FaNodeJs className="h-5 w-5" />,
  Python: <SiPython className="h-5 w-5" />,
  JavaScript: <SiJavascript className="h-5 w-5" />,
  TypeScript: <SiTypescript className="h-5 w-5" />,
  FastAPI: <SiFastapi className="h-5 w-5" />,
  Flask: <SiFlask className="h-5 w-5" />,
  PostgreSQL: <SiPostgresql className="h-5 w-5" />,
  MongoDB: <SiMongodb className="h-5 w-5" />,
  Express: <SiExpress className="h-5 w-5" />,
  Postman: <SiPostman className="h-5 w-5" />,
  "Tailwind CSS": <SiTailwindcss className="h-5 w-5" />,
  Bootstrap: <SiBootstrap className="h-5 w-5" />,
  "Framer Motion": <SiFramer className="h-5 w-5" />,
  Git: <FaGitAlt className="h-5 w-5" />,
  Webpack: <SiWebpack className="h-5 w-5" />,
  Vite: <SiVite className="h-5 w-5" />,
  ESLint: <SiEslint className="h-5 w-5" />,
  Figma: <FaFigma className="h-5 w-5" />,
  Vercel: <SiVercel className="h-5 w-5" />,
  Netlify: <SiNetlify className="h-5 w-5" />,
  Cloudflare: <SiCloudflare className="h-5 w-5" />,
  "Digital Ocean": <SiDigitalocean className="h-5 w-5" />,
  OpenAI: <SiOpenai className="h-5 w-5" />,
  "Gemini-AI": <SiGooglegemini className="h-5 w-5" />,
  "C++": <SiCplusplus className="h-5 w-5" />,
};

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px", amount: 0.2 });

  return (
    <section id="tools" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            TECH STACK
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.a
                key={tech.label}
                href={tech.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{
                  scale: 1.05,
                  transition: { delay: 0.2, duration: 0.1 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { delay: 0.2, duration: 0.1 },
                }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:border-gray-300 bg-transparent hover:bg-gray-50/50 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="transition-colors duration-300 text-gray-600 group-hover:text-gray-900">
                    {iconMap[tech.label] || (
                      <span className="h-5 w-5 bg-gray-300 rounded" />
                    )}
                  </div>
                  <span className="text-sm font-medium leading-relaxed transition-colors duration-300 text-gray-700 group-hover:text-gray-900">
                    {tech.label}
                  </span>
                </div>

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
