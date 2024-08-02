import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I focus on delivering innovative tech solutions 
          <br /> and driving software excellence
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Tailored</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Tech Needs.
          </h1>
          <button>How I Approach Projects?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Plan</h2>
          <p>
          I begin by deeply understanding your goals and defining clear, actionable requirements. This phase includes thorough research and planning to ensure alignment with your vision.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Build</h2>
          <p>
          Using cutting-edge technologies and best practices, I develop robust and scalable solutions tailored to your needs. My focus is on creating a product that meets your requirements and exceeds expectations.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Test</h2>
          <p>
          Comprehensive testing is conducted to ensure functionality, performance, and reliability. I use a variety of testing methods to identify and resolve any issues before launch.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ship</h2>
          <p>
          The final product is delivered on time and with a smooth transition to deployment. I provide support to ensure a successful launch and assist with any post-launch needs.
          </p>
          <button>Go</button>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
