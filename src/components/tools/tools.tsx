"use client";

import { motion } from "framer-motion";

const toolCategories = [
  {
    category: "Frontend",
    tools: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "React", link: "https://reactjs.org/" },
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Tailwind", link: "https://tailwindcss.com/" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "RESTful API", link: "https://restfulapi.net/" },
      { name: "Fast API", link: "https://fastapi.tiangolo.com/" },
    ],
  },
  {
    category: "Languages",
    tools: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Python", link: "https://www.python.org/" },
      { name: "C++", link: "https://isocpp.org/" },
    ],
  },
  {
    category: "Tools",
    tools: [
      { name: "Git", link: "https://git-scm.com/" },
      { name: "Postman", link: "https://www.postman.com/" },
      { name: "VS Code", link: "https://code.visualstudio.com/" },
      { name: "Webpack", link: "https://webpack.js.org/" },
      { name: "ESLint", link: "https://eslint.org/" },
      { name: "Vercel", link: "https://vercel.com/" },
    ],
  },
  {
    category: "Databases",
    tools: [
      { name: "MySQL", link: "https://www.mysql.com/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
    ],
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-black tracking-tight mb-16 text-center relative group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          TOOLS I USE
          <motion.span
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-black"
            whileHover={{ width: "150px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.h3
                className="text-xl font-black tracking-wider uppercase border-b-2 border-black pb-2"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                {category.category}
              </motion.h3>
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + toolIndex * 0.03,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium group-hover:text-black group-hover:font-bold transition-all duration-200 underline underline-offset-4 decoration-transparent hover:decoration-black"
                    >
                      {tool.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
