'use client';
import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Background from '../background';
import style from '@/app/styles.module.css'

const CallToAction = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div
    ref={ref}
      className="bg-gradient-to-r  relative flex flex-col justify-center items-center  h-[23rem] from-black via-zinc-900 to-black py-24 px-4 sm:px-6 lg:px-8 text-center text-white"
    >
        <Background />
     
        <motion.h2
        variants={{visible: { y: 0, opacity: 1 }}}
          initial={{ y: 100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500"
        >
          Schedule Your Consultation
        </motion.h2>
        <motion.p
        variants={{visible: { y: 0, opacity: 1}}}
          initial={{ y: 100, opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mb-8"
        >
          Thanks for visiting our website. We&#39;re excited to help you bring your tattoo ideas to life.
        </motion.p>
        <Link
          href="/contact" // Update this to your actual booking/contact page URL
          className="inline-block z-30  hover:cursor-pointer px-6 py-3 text-lg font-semibold bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
        >
          Schedule Your Consultation
        </Link>
    </div>
  );
};

export default CallToAction;
