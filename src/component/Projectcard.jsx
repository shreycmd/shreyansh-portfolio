import React from 'react';
import { motion } from 'framer-motion';

function Projectcard({ image, para, head }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      className={`mt-5 bg-white h-[250px] md:h-[300px] w-full md:w-[300px] flex break-words flex-col justify-center items-center gap-5 flex-wrap rounded-2xl hover:shadow-2xl hover:shadow-gray-700`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }} // Slightly scale up on hover
      transition={{ duration: 0.3 }} // Smooth hover transition
    >
      <img src={image} className="h-[100px] w-[100px] hover:scale-110 duration-300 ease-in-out" alt="Feature" />
      <div className='text-center flex-wrap'>
        <div className="text-lg font-semibold">{head}</div>
        <div className="text-center text-sm">{para}</div>
      </div>
    </motion.div>
  );
}

export default Projectcard;
