"use client";

import { motion } from "framer-motion";
import { cvData } from "@/app/data/cv-data";

export default function Summary() {
  return (
    <motion.section
      id="summary"
      className="py-20 px-4 bg-white dark:bg-slate-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-slate-800 dark:text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Summary
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cvData.summary}
        </motion.p>
      </div>
    </motion.section>
  );
}

