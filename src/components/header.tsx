"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";

const panelVariants: Variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.2,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

// const sections = ["hero", "about", "projects", "tools", "contact"];

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // const [scrollSection, setScrollSection] = useState("");
  // const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     sections.forEach((id) => {
  //       sectionRefs.current[id] = document.getElementById(id);
  //     });

  //     const refsSnapshot = { ...sectionRefs.current };

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           const id = entry.target.id;
  //           if (entry.isIntersecting) {
  //             setScrollSection(id);
  //           }
  //         });
  //       },
  //       {
  //         root: null,
  //         rootMargin: "0px",
  //         threshold: 0.6,
  //       }
  //     );

  //     sections.forEach((id) => {
  //       const el = refsSnapshot[id];
  //       if (el) observer.observe(el);
  //     });

  //     return () => {
  //       sections.forEach((id) => {
  //         const el = refsSnapshot[id];
  //         if (el) observer.unobserve(el);
  //       });
  //     };
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="px-8 lg:px-16 pt-8">
          <div className="flex justify-end items-center">
            <motion.button
              // className={`p-2 ${
              //   scrollSection === "contact" || scrollSection === "hero"
              //     ? "text-white"
              //     : "text-black"
              // }`}
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="text-black" size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-30 h-full px-10 py-10"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Menu Layout */}
            <div className="flex flex-col-reverse gap-10 md:gap-0 h-[80%] space-y-8 md:space-y-0 md:mt-12 md:mx-40 md:flex-row md:items-center md:justify-between">
              {/* Social Links */}
              <div className="space-y-4 text-left flex flex-col items-start justify-center">
                <p className="text-xl md:text-2xl font-light font-gothicStandard text-gray-500">
                  Social
                </p>
                {[
                  { name: "GitHub", href: "https://github.com/amaan-10" },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/in/10-amaan",
                  },
                  { name: "Twitter", href: "https://twitter.com/" },
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="text-2xl md:text-3xl text-black font-medium font-gothicStandard hover:underline hover:cursor-pointer"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={index}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Navigation Links */}
              <div className="space-y-5 text-left flex flex-col items-start justify-center">
                <p className="text-xl md:text-2xl font-light font-gothicStandard text-gray-500">
                  Menu
                </p>
                {["About", "Projects", "Tools", "Contact"].map((item, i) => (
                  <motion.button
                    key={item}
                    className="text-3xl md:text-4xl text-black font-medium font-gothicWide hover:cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={i + 3}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", ""))
                    }
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-left mt-5">
              <p className="text-md text-gray-500 font-light font-gothicStandard">Get in touch</p>
              <motion.a
                href="mailto:amaanshaikh.gg@gmail.com"
                className="text-md font-medium font-gothicWide text-black hover:underline"
              >
                amaanshaikh.gg@gmail.com
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
