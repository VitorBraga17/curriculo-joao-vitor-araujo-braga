"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { cvData } from "@/app/data/cv-data";

export default function Languages() {
  return (
    <section id="languages" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvData.languages.map((lang, index) => (
            <motion.div
              key={index}
              className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <LanguagesIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {lang.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {lang.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

