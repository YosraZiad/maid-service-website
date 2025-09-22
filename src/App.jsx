import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Nationalities from './components/Nationalities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // إعداد متغيرات الأنيميشن العامة
  const fadeSlide = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="App">
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={0}>
        <Header />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={1}>
        <Hero />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={2}>
        <About />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={3}>
        <Services />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={4}>
        <Nationalities />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={5}>
        <Contact />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeSlide} custom={6}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
