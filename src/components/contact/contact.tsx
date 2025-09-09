"use client";

import type React from "react";
import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Your message was delivered successfully.",
        duration: 3000,
        variant: "default",
      });
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "We couldn't send your message.",
        duration: 3000,
        variant: "destructive",
      });
    }

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mobileFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: easeOut },
  };

  return (
    <section id="contact" className="py-32 px-6 relative text-white">
      <div className="max-w-6xl lg:pr-20 mx-auto relative z-10">
        <motion.div
          initial={isMobile ? mobileFade.initial : { opacity: 0, y: 30 }}
          whileInView={isMobile ? mobileFade.animate : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={
            isMobile ? mobileFade.transition : { duration: 0.6, ease: easeOut }
          }
        >
          <motion.h2
            className="text-4xl md:text-6xl font-black font-gothicSpatial tracking-tight mb-8 relative group cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            LET&apos;S TALK
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-1 bg-white"
              whileHover={{ width: "150px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-medium font-gothicWide leading-relaxed"
            initial={isMobile ? mobileFade.initial : { opacity: 0, y: 20 }}
            whileInView={isMobile ? mobileFade.animate : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={
              isMobile
                ? mobileFade.transition
                : { duration: 0.6, delay: 0.2, ease: easeOut }
            }
          >
            Have an idea or just want to say hi? Let&apos;s connect.
          </motion.p>

          <motion.form
            className="space-y-8"
            onSubmit={handleSubmit}
            initial={isMobile ? mobileFade.initial : { opacity: 0, y: 20 }}
            whileInView={isMobile ? mobileFade.animate : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={
              isMobile
                ? mobileFade.transition
                : { duration: 0.6, delay: 0.3, ease: easeOut }
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-white focus:outline-none peer"
                  placeholder="Name"
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-400 text-sm font-gothicWide transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Name
                </label>
              </motion.div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-white focus:outline-none peer"
                  placeholder="Email"
                  required
                />
                <label className="absolute left-0 -top-3.5 text-gray-400 text-sm font-gothicWide transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Email
                </label>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-transparent focus:border-white focus:outline-none peer resize-none"
                placeholder="Message"
                required
              />
              <label className="absolute left-0 -top-3.5 text-gray-400 text-sm font-gothicWide transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                Message
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className="group relative px-8 py-4 bg-white text-black font-black font-gothicWide tracking-widest uppercase overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              disabled={isSubmitted}
            >
              <motion.span
                className="absolute inset-0 bg-gray-200"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitted ? "Message Sent!" : "Send Message"}
                {isSubmitted ? "" : <ArrowUpRight size={20} />}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
