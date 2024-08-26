import React from 'react';
import Projectcard from './Projectcard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import eatease from "../assets/eatease.png"
import todo from "../assets/todo.jpeg"
import hotstar from "../assets/hotstar.png"
import  flip from "../assets/flip.png"

let projects = [
  {
    img: eatease,
    head: "EatEase",
    para: "A user-friendly food ordering app designed for a seamless experience. Easily browse, customize your order, and enjoy a smooth checkout process—all with an intuitive interface."
  },
  {
    img: todo,
    head: "Todo App",
    para: "A simple and intuitive to-do app designed to help you organize tasks efficiently. Easily add, prioritize, and manage your to-do list with a clean and user-friendly interface."
  },
  {
    img:hotstar,
    head: "Hotstar Clone",
    para: "A frontend-only Hotstar clone that replicates the streaming platform's user interface. Experience seamless browsing through categories, featured content, and visually appealing design—all built with modern web technologies."
  },
  {
    img: flip,
    head: "Card Crisp",
    para: "A flashcard web app featuring flip functionality for an interactive learning experience. Easily create, view, and flip through cards to reveal answers, enhancing your study sessions with a sleek and responsive design."
  },
];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when it comes into view
    threshold: 0.40,     // Trigger when 20% of the component is visible
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
    id='projects'
      ref={ref} 
      className='bg-slate-200 '
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 className='text-5xl text-center pt-5'>Projects</h1>
      <div className='mt-10 grid-cols-1 md:flex gap-2 justify-around pb-5'>
        {projects.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Projectcard 
              image={item.img} 
              head={item.head} 
              para={item.para} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
