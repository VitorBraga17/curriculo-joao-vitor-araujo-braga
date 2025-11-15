"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { cvData } from "@/app/data/cv-data";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">{cvData.name}</h3>
          <p className="text-slate-400 mb-6">{cvData.title}</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href={`mailto:${cvData.email}`}
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`tel:${cvData.phone}`}
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={cvData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={cvData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="text-center text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} João Vitor de Araújo Braga. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

