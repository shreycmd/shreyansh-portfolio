import React from 'react';
import { motion } from 'framer-motion';

function Featurecard({ image, head, para, col }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      className={`bg-white h-[260px] w-[260px] flex flex-col justify-center items-center gap-5 flex-wrap rounded-2xl hover:shadow-2xl hover:shadow-gray-700`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1 }} // Slightly scale up on hover
      transition={{ duration: 0.3 }} // Smooth hover transition
    >
      <img src={image} className="h-[100px] w-[100px]" alt="Feature" />
      <div className='text-center flex-wrap hover:scale-110 duration-300 ease-in-out'>
        <div className="text-lg font-semibold">{head}</div>
        <div className="text-center">{para}</div>
      </div>
    </motion.div>
  );
}

export default Featurecard;
