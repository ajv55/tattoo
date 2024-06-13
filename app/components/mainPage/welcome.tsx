'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from './portfolio';


const WelcomeSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col gap-4 mt-8 items-center justify-center h-content bg-slate-950 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/hero.jpg)' }}
    >
      <div className="text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-tr from-orange-600 via-orange-400 to-orange-800 bg-clip-text text-transparent"
        >
          Welcome to My Tattoo Portfolio
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl text-gray-500"
        >
          Discover my unique tattoo designs and artistry.
        </motion.p>
      </div>
      <Portfolio />
    </section>
  );
};

export default WelcomeSection;
