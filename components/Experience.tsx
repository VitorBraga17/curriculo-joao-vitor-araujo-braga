"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Code } from "lucide-react";
import { cvData, Experience as ExperienceType } from "@/app/data/cv-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {cvData.experiences.map((exp: ExperienceType, index: number) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {cvData.freelance.company}
              </h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                {cvData.freelance.position}
              </p>
              <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {cvData.freelance.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {cvData.freelance.period}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Tech Stack:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cvData.freelance.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {cvData.freelance.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {experience.company}
            </h3>
            {experience.isCurrent && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                Current
              </span>
            )}
          </div>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">
            {experience.position}
          </p>
          <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Tech Stack:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {experience.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-blue-600 mt-1">•</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

