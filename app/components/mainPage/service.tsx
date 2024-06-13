// components/ServicesSection.tsx
'use client';
import React from 'react';
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';
import { AiOutlineSketch } from 'react-icons/ai';
import { BiDroplet } from 'react-icons/bi';
import { RiChatNewLine } from 'react-icons/ri';
import Background from '../background';
import { useEffect, useRef } from 'react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServicesSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();


    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')     
          }
    }, [isInView, mainControls])

  // Array of service objects
  const services: Service[] = [
    {
      icon: <AiOutlineSketch size={48} className="text-orange-500 mb-4 mx-auto" />,
      title: 'Custom Designs',
      description: 'Unique and personalized tattoo designs tailored to your preferences.',
    },
    {
        icon: <BiDroplet size={48} className="text-orange-500 mb-4 mx-auto" />,
        title: 'Tattoo Aftercare Tips',
        description: 'Learn essential tips and products to care for your new tattoo and ensure it heals beautifully.',
      },
    {
      icon: <RiChatNewLine size={48} className="text-orange-500 mb-4 mx-auto" />,
      title: 'Consultations for New Ideas',
      description: 'Discuss your tattoo ideas with our skilled artists for creative advice.',
    },
  ];

  return (
    <div 
    ref={ref}
       className="bg-gradient-to-r w-full flex flex-col justify-center items-center  relative from-black via-zinc-900 to-black py-10 px-4 sm:px-6 lg:px-0 text-white"
    >
      <Background />
        <h2  className="text-3xl sm:text-4xl  font-bold mb-8">Our Services</h2>
        <div className="  w-full  lg:h-[20rem] h-content z-30 flex lg:flex-row flex-col justify-center items-center gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{visible: {scale: 1, opacity: 1}}}
              initial={{scale: 0, opacity: 0}}
              animate={mainControls}
              transition={{duration: 1, type: 'spring', stiffness: 100, delay: 0.5 * index}}
              className=" bg-gradient-to-b hover:shadow-md hover:shadow-orange-500 hover:cursor-pointer flex flex-col justify-center items-center from-zinc-900 via-zinc-800 to-zinc-900 lg:w-[20%] w-[85%] h-[15rem] rounded-lg p-3 text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl  font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default ServicesSection;

