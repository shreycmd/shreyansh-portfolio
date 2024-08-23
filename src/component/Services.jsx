import React from "react";
import fe from "../assets/frontend.png";
import be from "../assets/backend.jpeg";
import clapi from "../assets/clapi.png";
import figma from "../assets/figma.png";
import Featurecard from "./Featurecard";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

let info = [
  {
    img: "/src/assets/frontend.png",
    head: "Frontend Development",
    para: "Crafting sleek, responsive, and modern web applications",
    color: "orange-300",
  },
  {
    img: "/src/assets/backend.jpeg",
    head: "Backend Development",
    para: "Building scalable and efficient backend systems for seamless integration",
    color: "purple-300",
  },
  {
    img: "/src/assets/clapi.png",
    head: "API Integration",
    para: "Implementing robust APIs to enhance dynamic functionalities",
    color: "blue-300",
  },
  {
    img: "/src/assets/figma.png",
    head: "Design To Code",
    para: "Transforming Figma designs into pixel-perfect React components",
    color: "red-300",
  },
];

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when it comes into view
    threshold: 0.2,     // Trigger when 20% of the component is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
    id="work"
      ref={ref} 
      className="bg-gray-200 relative"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="text-center text-5xl text-purple-950 font-bold ">
        What I Do?
      </div>
      <div className="mt-10 flex gap-3 justify-evenly">
        {info.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Featurecard
              image={item.img}
              head={item.head}
              para={item.para}
              col={item.color}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
      <a href="mailto:shrey03505@gmail.com">
        <motion.button 
          className="border-2 bg-slate-400 px-3 py-2 rounded-xl mt-4 hover:scale-110 hover:underline "
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          Contact Me
        </motion.button>
        </a>
      </div>
    </motion.div>
  );
}

export default Services;
