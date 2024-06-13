'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Background from '../background';

const Portfolio = () => {
  // Sample data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      image: '/japanese.jpg',
      title: 'Japanese Dragon',
      description: 'A fierce dragon tattoo inspired by Japanese folklore.',
    },
    {
      id: 2,
      image: '/anchor.jpg',
      title: 'Traditional Anchor',
      description: 'Classic sailor tattoo with an anchor design.',
    },
    {
      id: 3,
      image: '/floral-tattoo.jpg',
      title: 'Watercolor Floral',
      description: 'Colorful floral tattoo with watercolor effect.',
    },
    {
      id: 4,
      image: '/loin.jpg',
      title: 'Geometric Lion',
      description: 'Modern geometric lion tattoo design.',
    },
    {
      id: 5,
      image: '/abstract.jpg',
      title: 'Abstract Sleeve',
      description: 'Abstract art sleeve tattoo covering the entire arm.',
    },
    {
      id: 6,
      image: '/flower.jpg',
      title: 'Butterfly and Flowers',
      description: 'Delicate tattoo combining butterflies and flowers.',
    },
  ];

  return (
    <div className="bg-gradient-to-br w-[95%] mb-10 relative rounded-xl border-2 border-slate-800 from-[#FF4301] via-orange-600  to-[#FF4301]  py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* <Background /> */}
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{scale: 0, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 1, stiffness: 80, type: 'spring', delay: 0.65 *  i}}
              className="rounded-lg hover:cursor-pointer overflow-hidden shadow-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
              <div className="p-4 bg-gradient-to-tr from-black to-zinc-600">
                <h3 className="text-xl bg-gradient-to-br from-orange-300 to-orange-600 bg-clip-text text-transparent font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

