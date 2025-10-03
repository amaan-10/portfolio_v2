/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const projects = [
  {
    id: 1,
    title: "Nyāyik",
    description:
      "A legal AI agent for personalized legal advice and document generation.",
    fullDescription:
      "Nyayik is an AI-powered legal advisory platform built with TypeScript, Next.js, Tailwind CSS, MongoDB, Pinecone for vector search, Gemini-AI and LangChain. It uses LLMs with RAG (Retrieval-Augmented Generation) to deliver instant legal answers, summarize laws, and provide context-aware case recommendations. Featuring a secure Node.js + MongoDB backend with encrypted session management, it supports text, document, and case ID inputs for rapid legal document parsing and summarization, reducing research time by 50%.",
    tech: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Pinecone",
      "Gemini-AI",
      "LangChain",
    ],
    frontendTech: ["TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    backendTech: ["REST API", "MongoDB", "Gemini-AI", "LangChain", "Pinecone"],
    githubLink: "https://github.com/amaan-10/ai-legal-agent",
    liveLink: "https://nyayik.vercel.app",
    screenshots: ["/images/nyayik-image.png"],
    year: "2025",
    category: "Full Stack w/ AI(RAG)",
    ai: true,
  },
  {
    id: 2,
    title: "SARA.mov",
    description: "Search Analysis Recommend Application for Movies.",
    fullDescription:
      "Built an interactive movie recommendation website using Next.js, Tailwind CSS, Framer Motion, and Python-based machine learning. Leveraged clustering algorithms in Jupyter Notebooks for personalized suggestions, integrated SQL-based Supabase for authentication and data management, and crafted smooth UI animations for a seamless user experience. Combined frontend fluidity with backend intelligence to deliver accurate, engaging movie recommendations.",
    tech: [
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Tailwind",
      "Machine Learning",
      "Python",
      "SQL",
      "Supabase",
    ],
    frontendTech: ["TypeScript", "Next.js", "Framer Motion", "Tailwind"],
    backendTech: ["Machine Learning", "Python", "REST API", "SQL", "Supabase"],
    githubLink: "https://github.com/sara-mov/frontend",
    liveLink: "https://sara-mov.vercel.app/",
    screenshots: ["/images/sara-mov-image.png"],
    year: "2024-25",
    category: "Full Stack w/ ML",
    ai: true,
  },

  {
    id: 3,
    title: "SpendLess",
    description:
      "A finance platform with real-time insights, smart expense sharing, and gamified savings to boost financial habits and engagement.",
    fullDescription:
      "Built SpendLess, a smart finance management platform using TypeScript, Next.js, and MongoDB, enabling users to track budgets, categorize expenses, and gain investment insights through interactive visuals. Integrated real-time stock data via Finnhub API and developed Split It Up for effortless expense sharing. Designed an engaging custom dashboard that boosted user engagement by 35%, and introduced gamified savings challenges with goals, streaks, rewards, and a social leaderboard to drive motivation and retention.",
    tech: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
    frontendTech: ["TypeScript", "Next.js", "Tailwind"],
    backendTech: ["Next.js", "Clerk", "REST API", "MongoDB"],
    githubLink: "https://github.com/amaan-10/finance-manager",
    liveLink: "https://spend-less.vercel.app/",
    screenshots: ["/images/spend-less-image.png"],
    year: "2024",
    category: "Full Stack",
    ai: false,
  },
  {
    id: 4,
    title: "DePayment",
    description:
      "A Decentralized Payment Platform. Built a secure, real-time payment gateway with wallet features.",
    fullDescription:
      "Developed a secure, real-time payment gateway with digital wallet support for peer and merchant transactions. Engineered low-latency APIs using Python Flask and MongoDB, enabling instant wallet actions and reducing transaction lag by 35%. Designed a responsive React + Tailwind UI that boosted task efficiency by 40% and simplified QR payments. Integrated AES encryption and token-based auth to ensure 100% secure and reliable operations.",
    tech: ["TypeScript", "Python", "Next.js", "Flask", "Tailwind", "MongoDB"],
    frontendTech: ["TypeScript", "Next.js", "Tailwind"],
    backendTech: ["Python", "Flask", "REST API", "MongoDB"],
    githubLink: "https://github.com/amaan-10/decentralized-payment-gateway",
    liveLink: "https://depayment.vercel.app/",
    screenshots: ["/images/depay-image.png"],
    year: "2025",
    category: "Full Stack",
    ai: false,
  },
  {
    id: 5,
    title: "EmployMee",
    description:
      "A smart MERN job portal with real-time tracking, AI job matching, and a responsive UI to streamline the hiring process.",
    fullDescription:
      "Built Employ Me, a MERN stack job portal that bridges job seekers and recruiters through a secure, intuitive interface. Implemented real-time job application tracking, recruiter job postings, and AI-driven job recommendations using MongoDB aggregation. Designed a mobile-responsive UI with React, Bootstrap, and Python integrations, increasing job search efficiency by 40% through smart automation and user-centric design.",
    tech: [
      "JavaScript",
      "React",
      "Express",
      "Node.js",
      "Python",
      "Fast API",
      "MongoDB",
    ],
    frontendTech: ["JavaScript", "React", "CSS", "Bootstrap"],
    backendTech: ["Express", "Node.js", "Python", "Fast API", "MongoDB"],
    githubLink: "https://github.com/amaan-10/job-portal",
    liveLink: "https://employ-mee.vercel.app/",
    screenshots: ["/images/employ-mee-image.png"],
    year: "2023",
    category: "MERN stack w/ ML",
    ai: true,
  },
  {
    id: 6,
    title: "RannNeeti",
    description: "A DSA quest learning platform with interactive challenges.",
    fullDescription:
      "Developed RannNeeti, a DSA learning platform using Next.js, and MongoDB, offering interactive coding challenges and real-time progress tracking. Implemented a user-friendly interface with Tailwind CSS and integrated a custom-built REST API for seamless data management. Enhanced user engagement by 50% through gamified learning experiences and real-time feedback mechanisms.",
    tech: ["TypeScript", "Next.js", "Tailwind", "MongoDB"],
    frontendTech: ["TypeScript", "Next.js", "Tailwind"],
    backendTech: ["REST API", "MongoDB"],
    githubLink: "https://github.com/amaan-10/dsa-quest",
    liveLink: "https://rannneeti.vercel.app/",
    screenshots: ["/images/rannneeti-image.png"],
    year: "2025",
    category: "Full Stack",
    ai: false,
  },
  {
    id: 7,
    title: "CuraLink",
    description:
      "A secure healthcare platform with RBAC, smart scheduling, and automated insights to enhance patient-doctor collaboration.",
    fullDescription:
      "Built CuraLink, a secure, cloud-based healthcare platform using Next.js, TypeScript, Tailwind CSS, and Appwrite to streamline patient-doctor interactions. Reduced scheduling conflicts by 30% through efficient appointment workflows. Implemented robust RBAC for complete data privacy compliance and integrated an admin-managed records system that delivers automated health insights for better patient care.",
    tech: ["TypeScript", "Next.js", "Tailwind", "Appwrite", "SMTP"],
    frontendTech: ["TypeScript", "Next.js", "Tailwind"],
    backendTech: ["REST API", "Appwrite", "SMTP"],
    githubLink: "https://github.com/amaan-10/patient-management",
    liveLink: "https://curalink-appointments.vercel.app/",
    screenshots: ["/images/curalink-image.png"],
    year: "2024",
    category: "Full Stack",
    ai: false,
  },
  {
    id: 8,
    title: "Quiz Website",
    description:
      "A full-stack quiz website for creating, solving, and tracking quizzes, blending fun with education for all age groups.",
    fullDescription:
      "Built an interactive and user-friendly quiz website using HTML, CSS, JavaScript, Node.js, and MongoDB, offering a fun and educational experience for users of all ages. Enabled users to create, store, and solve quizzes with real-time result tracking. The platform combines simplicity with engagement to support learning through play.",
    tech: ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB"],
    frontendTech: ["HTML", "CSS", "JavaScript"],
    backendTech: ["NodeJS", "MongoDB"],
    githubLink: "https://github.com/amaan-10/quiz-website",
    liveLink: "https://quiz-website-purple.vercel.app/",
    screenshots: ["/images/quiz-website-image.png"],
    year: "2022",
    category: "Frontend w/ Backend",
    ai: false,
  },
];

const Projects = ({ showAll = false }) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const handleProjectClick = (
    project: (typeof projects)[0],
    event: React.MouseEvent
  ) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelectedProject(project);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <TooltipProvider>
        {showAll && (
          <motion.a
            href="/"
            className="absolute left-4 z-50 sm:left-16 top-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 267 209"
              width="70"
              height="54"
            >
              <path
                d="M0 0 C4.91619094 4.34694778 6.58629013 11.31975621 7.25 17.625 C6.875 20.0625 6.875 20.0625 4.875 22.0625 C2.87890625 22.08203125 2.87890625 22.08203125 0.875 21.0625 C-0.28515625 18.26171875 -0.28515625 18.26171875 -1.1875 14.75 C-2.681382 8.89785895 -2.681382 8.89785895 -6.125 4.0625 C-9.88701117 3.39369801 -11.73438805 3.85905628 -15.125 5.625 C-25.97119953 14.43753712 -31.13569025 26.87931729 -32.69140625 40.58984375 C-33.26059309 46.76580846 -33.30891919 52.9266158 -33.3125 59.125 C-33.33086914 60.80432617 -33.33086914 60.80432617 -33.34960938 62.51757812 C-33.36506454 71.30126489 -32.09029026 78.80204856 -29.125 87.0625 C-26.70232914 87.11417527 -26.70232914 87.11417527 -24.125 86.0625 C-21.48622503 80.91252442 -20.18249897 75.70065508 -19 70.0625 C-18.83113281 69.29421875 -18.66226563 68.5259375 -18.48828125 67.734375 C-16.52242752 58.632627 -15.87915314 49.83146727 -15.78320312 40.53710938 C-15.57246656 33.67101791 -15.57246656 33.67101791 -13.21484375 30.46484375 C-8.34628423 27.19790381 -1.80530794 27.41721702 3.875 28.0625 C7.71650278 29.84605486 9.3970919 30.86192757 10.97094727 34.81567383 C11.86424892 38.02388845 12.41470204 41.08560382 12.83984375 44.38671875 C13.00033203 45.58103516 13.16082031 46.77535156 13.32617188 48.00585938 C13.64783103 50.48224733 13.96816523 52.95880778 14.28710938 55.43554688 C15.5336302 64.6876118 17.2996974 73.4145623 20.875 82.0625 C21.535 82.0625 22.195 82.0625 22.875 82.0625 C24.63212452 76.24356558 26.37715658 70.42113383 28.11425781 64.59619141 C28.73983547 62.51267249 29.37968153 60.43344294 30.0234375 58.35546875 C32.38997394 50.52696622 34.00495359 42.65886912 35.39306641 34.60766602 C37.51451217 22.6389293 37.51451217 22.6389293 39.875 18.0625 C40.865 17.7325 41.855 17.4025 42.875 17.0625 C43.17975369 25.49966238 42.39824391 33.19502172 40.625 41.4375 C40.39611084 42.53312256 40.16722168 43.62874512 39.93139648 44.75756836 C31.81447602 82.89380664 31.81447602 82.89380664 20.4375 94.5625 C17.08816217 96.523088 15.71443545 96.80085297 11.875 96.0625 C0.71220857 91.49778975 -3.73748637 79.58935815 -8.125 69.1875 C-8.80145244 67.48301787 -9.47217336 65.77616992 -10.125 64.0625 C-10.27533691 64.59617187 -10.42567383 65.12984375 -10.58056641 65.6796875 C-16.4349913 86.1414114 -16.4349913 86.1414114 -24.4375 93.0625 C-30.45574768 95.30184797 -36.45559561 94.52795902 -42.28125 92.03125 C-49.17821677 88.40742 -53.55565364 82.74898694 -55.99609375 75.46118164 C-57.99017065 67.88717647 -58.55348459 60.87522174 -58.4375 53.0625 C-58.44072266 51.97710937 -58.44394531 50.89171875 -58.44726562 49.7734375 C-58.32994781 31.89846808 -53.97069308 15.56454186 -41 2.6875 C-30.46893372 -6.12349212 -11.59962212 -7.19176571 0 0 Z "
                fill="#FFFFFF"
                transform="translate(83.125,68.9375)"
              />
              <path
                d="M0 0 C3.6397462 2.1042951 5.66214832 3.49322248 8 7 C9.02462191 11.97193584 8.87526091 16.30519771 6.52734375 20.8515625 C1.46034591 28.00378609 -4.67048739 35.11365826 -12 40 C-12.99 40 -13.98 40 -15 40 C-14.61375277 31.61843511 -12.4744657 23.98734511 -10 16 C-17.49530515 17.07075788 -21.40779701 20.01879734 -26 26 C-30.5736343 33.17184782 -32.42222947 38.56596627 -32 47 C-31.40574219 47.12528076 -30.81148437 47.25056152 -30.19921875 47.37963867 C-27.46242564 47.96620835 -24.73147338 48.57665649 -22 49.1875 C-21.06542969 49.38408203 -20.13085938 49.58066406 -19.16796875 49.78320312 C-12.0392939 51.4033565 -6.19059983 53.70135197 -1.0390625 59.02734375 C1.03363086 62.9623443 0.83584689 66.70651312 0 71 C-6.77367642 85.58638285 -21.79717149 97.20467259 -36.46875 103.2890625 C-42.16180238 104.88803709 -46.33399568 103.90872963 -51.4375 101.125 C-54 99 -54 99 -56 96 C-56 95.01 -56 94.02 -56 93 C-54.741875 92.649375 -53.48375 92.29875 -52.1875 91.9375 C-43.16321565 88.86839861 -36.02405607 83.28878979 -29.0625 76.9375 C-28.24700684 76.19608765 -28.24700684 76.19608765 -27.41503906 75.43969727 C-24.00958939 72.23528583 -21.45485929 68.98101278 -19 65 C-20.26714844 64.84144531 -21.53429687 64.68289062 -22.83984375 64.51953125 C-34.7631992 62.91507854 -43.89162006 61.38591253 -51.90625 51.74609375 C-55.27511006 46.3679493 -54.72509388 38.66848347 -53.5390625 32.66796875 C-49.21313717 18.54509489 -40.17422714 6.25927858 -28 -2 C-20.35238301 -5.82380849 -7.79702101 -2.34523191 0 0 Z "
                fill="#FFFFFF"
                transform="translate(188,42)"
              />
              <path
                d="M0 0 C3.5 1.8125 3.5 1.8125 6 4 C6.53625 4.42023438 7.0725 4.84046875 7.625 5.2734375 C10.15272612 8.44745723 9.51521516 12.15024033 9.42578125 16.04296875 C8.78617646 20.4849947 7.32881108 22.05825998 4 25 C-0.67580872 28.11720581 -5.54118637 27.97221615 -11 27 C-14.33394661 24.60879859 -16.18897578 21.62204844 -18 18 C-18.67513222 13.37380989 -19.01050387 8.96057893 -16.82421875 4.71875 C-12.1289695 -0.74970258 -6.87660795 -1.32761058 0 0 Z "
                fill="#FFFFFF"
                transform="translate(234,104)"
              />
              <path
                d="M0 0 C0.66 0 1.32 0 2 0 C2.30475971 8.43732907 1.52269848 16.13230441 -0.25 24.375 C-0.47743896 25.46699707 -0.70487793 26.55899414 -0.93920898 27.68408203 C-3.43711185 39.447045 -6.68888234 50.76357631 -11 62 C-12.65 61.67 -14.3 61.34 -16 61 C-15.41992504 58.62416105 -14.83674064 56.2491964 -14.25 53.875 C-14.06953125 53.14434326 -13.8890625 52.41368652 -13.703125 51.66088867 C-12.58125868 47.17196262 -11.34306965 42.74143207 -10 38.3125 C-7.99648247 31.47696959 -6.6913122 24.56276512 -5.48242188 17.54614258 C-2.88129112 2.88129112 -2.88129112 2.88129112 0 0 Z "
                fill="#FFFFFF"
                transform="translate(124,86)"
              />
            </svg>
          </motion.a>
        )}

        <section id="projects" className="py-32 px-6 relative ">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              className="text-4xl md:text-6xl font-black font-gothicSpatial tracking-tight mb-16 relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              PROJECT WORK
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-1 bg-white"
                whileHover={{ width: "200px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.h2>

            <div className="space-y-12">
              {displayedProjects.map((project, index) => (
                <motion.div
                  onClick={(e) => handleProjectClick(project, e)}
                  key={project.id}
                  className="group border-b border-gray-300 pb-12 last:border-b-0 relative cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 10 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3 group">
                        <motion.h3
                          className="text-2xl md:text-4xl font-black font-gothicWide group-hover:text-gray-300 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        {project.ai && (
                          <Tooltip>
                            <TooltipTrigger>
                              <span className="text-xs font-medium">
                                <svg
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="512"
                                  height="512"
                                  viewBox="0 0 512 512"
                                  className="inline-block align-middle h-7 w-7"
                                >
                                  <path
                                    d="M0 0 C0.66 0 1.32 0 2 0 C2.13462646 0.91773193 2.13462646 0.91773193 2.27197266 1.85400391 C9.13408279 47.75237695 25.65475774 91.61952695 55 128 C55.45052734 128.56477051 55.90105469 129.12954102 56.36523438 129.71142578 C67.39854296 143.46279396 79.77051088 155.58697501 94 166 C95.04671875 166.76828125 96.0934375 167.5365625 97.171875 168.328125 C123.74924506 187.2364032 153.31760818 199.48534449 185 207 C185 207.66 185 208.32 185 209 C184.35264893 209.17015625 183.70529785 209.3403125 183.03833008 209.515625 C148.8158044 218.59254566 116.61424519 231.37458791 89 254 C88.47631836 254.42216797 87.95263672 254.84433594 87.41308594 255.27929688 C74.22880732 265.9259821 62.37442263 277.65153311 52.27490234 291.28076172 C51.0372902 292.94971322 49.77946181 294.60177553 48.51953125 296.25390625 C22.92720594 330.363455 6.83233034 373.73514065 2 416 C1.34 416 0.68 416 0 416 C-0.13462646 415.08226807 -0.13462646 415.08226807 -0.27197266 414.14599609 C-9.65138438 351.41022975 -38.49059533 290.08058976 -90.23681641 251.32324219 C-91.91269686 250.06551966 -93.57149506 248.7876937 -95.23046875 247.5078125 C-120.70820969 228.22164332 -152.01568617 216.05032291 -183 209 C-183 208.34 -183 207.68 -183 207 C-182.35264893 206.82984375 -181.70529785 206.6596875 -181.03833008 206.484375 C-146.81864141 197.4082068 -114.60970648 184.62803136 -87 162 C-86.47100098 161.57251465 -85.94200195 161.1450293 -85.39697266 160.70458984 C-73.00068343 150.66631063 -61.72905108 139.66999446 -52 127 C-51.5963623 126.48872559 -51.19272461 125.97745117 -50.77685547 125.45068359 C-22.86784215 90.00847111 -5.11794442 44.76291688 0 0 Z "
                                    fill="#2196f3"
                                    transform="translate(207,16)"
                                  />
                                  <path
                                    d="M0 0 C0.66 0 1.32 0 2 0 C2.20753906 1.22332031 2.41507812 2.44664062 2.62890625 3.70703125 C7.40734628 30.42455766 17.94206447 52.695564 36 73 C36.70898438 73.79921875 37.41796875 74.5984375 38.1484375 75.421875 C56.05372011 94.30930391 80.24321898 104.65642573 105 111 C105 111.66 105 112.32 105 113 C104.19502075 113.2019397 104.19502075 113.2019397 103.3737793 113.40795898 C67.10052163 122.68519412 37.87226054 142.40530475 18.3815918 174.79174805 C9.45708199 190.23586739 4.96605746 206.51684144 2 224 C1.34 224 0.68 224 0 224 C-0.20753906 222.77667969 -0.41507812 221.55335938 -0.62890625 220.29296875 C-5.40734628 193.57544234 -15.94206447 171.304436 -34 151 C-34.70898438 150.20078125 -35.41796875 149.4015625 -36.1484375 148.578125 C-54.05372011 129.69069609 -78.24321898 119.34357427 -103 113 C-103 112.34 -103 111.68 -103 111 C-102.19502075 110.7980603 -102.19502075 110.7980603 -101.3737793 110.59204102 C-76.78104321 104.30221182 -56.96877509 93.86966638 -38 77 C-37.34386719 76.42894531 -36.68773437 75.85789062 -36.01171875 75.26953125 C-15.00285497 55.76488206 -4.66569906 27.50154291 0 0 Z "
                                    fill="#7e57c2"
                                    transform="translate(383,272)"
                                  />
                                </svg>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-gothicWide font-medium">
                                AI Integration
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                        {/* <span className="text-sm text-gray-300 font-medium font-gothicWide">
                          {project.year}
                        </span> */}
                        <div className="hidden mr-5 overflow-hidden md:block">
                          {isHovered && (
                            <motion.svg
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              initial={{
                                opacity: 0,
                                x: "-80%",
                                y: "80%",
                                rotate: -90,
                              }}
                              animate={{
                                opacity: [1],
                                x: ["-80%", "80%"],
                                y: ["80%", "-80%"],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                              }}
                              className="group-hover:block hidden"
                              fill="none"
                              stroke="var(--token-21001bb2-95fc-4899-93cf-7cca6736a1a2, rgb(250, 250, 247))"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <line x1="7" y1="7" x2="17" y2="17"></line>
                              <polyline points="17 7 17 17 7 17"></polyline>
                            </motion.svg>
                          )}
                        </div>
                      </div>
                      <p className="text-lg text-gray-300 mb-4 font-gothicWide font-medium leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-gothicWide font-medium bg-black border border-gray-300 hover:bg-black hover:text-white transition-colors cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showAll && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ x: 10 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                <div id="container">
                  <Link href="/projects">
                    <button className="learn-more">
                      <span
                        className="circle !bg-transparent"
                        aria-hidden="true"
                      >
                        <span className="icon2 arrow" />
                      </span>
                      <span className="button-text !text-[#66B2FF] font-gothicWide font-medium">
                        Show More
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Full Screen Project Detail with Circular Animation */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Circular Expanding Background */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{
                  clipPath: `circle(0px at ${clickPosition.x}px ${clickPosition.y}px)`,
                }}
                animate={{
                  clipPath: `circle(${
                    Math.max(window.innerWidth, window.innerHeight) * 1.5
                  }px at ${clickPosition.x}px ${clickPosition.y}px)`,
                }}
                exit={{
                  clipPath: `circle(0px at ${clickPosition.x}px ${clickPosition.y}px)`,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Content */}
              <motion.div
                className="relative z-10 h-full overflow-y-auto text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="fixed top-8 right-8 z-20 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={32} />
                </motion.button>

                {/* External Link Button */}
                <motion.a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed top-8 right-24 z-20 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink size={28} />
                </motion.a>

                <div className="mx-auto pt-24 sm:pt-0 px-8 py-20 md:py-16">
                  {/* Project Title */}
                  <motion.h1
                    className="text-5xl sm:text-6xl md:text-8xl font-black font-gothicSpatial tracking-tight mb-16 text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {selectedProject.title}
                  </motion.h1>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Description Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="mb-8">
                        <h2 className="text-base font-black font-gothicWide tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-700 pb-2">
                          DESCRIPTION
                        </h2>
                        <p className="text-base font-medium font-gothicWide md:text-lg leading-relaxed text-gray-300">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                    </motion.div>

                    {/* Technologies Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="mb-8">
                        <h2 className="text-sm font-black font-gothicWide tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-700 pb-2">
                          TECHNOLOGIES
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <span className="text-white font-black font-gothicWide">
                              Frontend:{" "}
                            </span>
                            <span className="text-gray-300 font-medium font-gothicWide">
                              {selectedProject.frontendTech.join(", ")}
                            </span>
                          </div>
                          <div>
                            <span className="text-white font-black font-gothicWide">
                              Backend:{" "}
                            </span>
                            <span className="text-gray-300 font-medium font-gothicWide">
                              {selectedProject.backendTech.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Screenshot */}
                  <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <div className="relative rounded-lg overflow-hidden border border-gray-700">
                      <Image
                        src={
                          selectedProject.screenshots[0] || "/placeholder.svg"
                        }
                        alt={`${selectedProject.title} interface`}
                        width={800}
                        height={600}
                        quality={100}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm sm:text-base font-gothicWide font-black gap-3 px-8 py-4 bg-white text-black tracking-wider uppercase hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      View Live
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm sm:text-base font-gothicWide font-black gap-3 px-8 py-4 border-2 border-white text-white tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </>
  );
};

export default Projects;
