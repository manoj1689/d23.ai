"use client";
import React from "react";
import { motion } from "framer-motion";

function Demo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section className="container mx-auto py-12 px-4">
        <div className="text-center text-xl lg:text-2xl font-semibold text-[#333333]">
          Ready to improve your debate skills?
        </div>

        {/* Animated Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-md lg:text-lg font-light text-white">
              Start Debating Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-md lg:text-lg font-light text-white">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
}

export default Demo;

