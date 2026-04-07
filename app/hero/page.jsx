"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Premium Dental Clinic Interior"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-8"
          >
            Healthy Smile <br />
            <span className="italic font-light text-stone-200">
              Start Here.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-lg leading-relaxed mb-10 md:mb-12"
          >
            We provide modern dental care in a comfortable and friendly
            environment. Your smile is our priority.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center"
          >
            {/* Primary Button */}
            <motion.div
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="/appointment"
                className="font-sans px-8 sm:px-10 py-4 sm:py-5 bg-stone-100 text-slate-900 text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-white transition-all duration-300 shadow-2xl rounded-md"
              >
                Book an appointment
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="/gallery"
                className="group flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2 hover:border-white transition-all duration-500"
              >
                explore Our services
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;