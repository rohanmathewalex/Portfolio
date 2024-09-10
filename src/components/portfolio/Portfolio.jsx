import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Featured Project Component for SlateMind
const FeaturedWork = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="featured" ref={ref}>
      <div className="progress">
        <h1>Featured Work: SlateMind</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      <motion.div className="content" style={{ y }}>
        <div className="image-container">
          <img
            src="https://via.placeholder.com/600" // Replace with actual SlateMind image
            alt="SlateMind Screenshot"
          />
        </div>

        <div className="text-container">
          <h2>Problem</h2>
          <p>
            Students often struggle with organizing study materials effectively, leading to inefficient studying and difficulty in retaining information. Traditional methods of studying can be time-consuming and lack personalization.
          </p>

          <h2>Solution</h2>
          <p>
            SlateMind is an AI-powered platform designed to enhance study efficiency and engagement by offering innovative tools for personalized learning.
          </p>
          
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Chat with File</strong>: Upload study materials, and SlateMind can answer questions or summarize content in real-time. Using LangChain and OpenAI, the platform helps students break down complex materials, making studying more interactive and engaging.</li>
            
            <li><strong>Join Study Groups</strong>: Connect with peers studying similar subjects. SlateMind fosters collaboration by allowing students to form or join study groups, discuss materials, and share resources, making the learning process more social and supportive.</li>
            
            <li><strong>Flashcards Generation</strong>: Automatically create flashcards from uploaded documents, helping students focus on key concepts and improve memorization. This feature transforms study materials into a more manageable format, perfect for quick reviews.</li>
          </ul>

          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-card">
              <p>React.js</p>
            </div>
            <div className="tech-card">
              <p>Node.js</p>
            </div>
            <div className="tech-card">
              <p>OpenAI (GPT)</p>
            </div>
            <div className="tech-card">
              <p>LangChain</p>
            </div>
            <div className="tech-card">
              <p>MongoDB</p>
            </div>
            <div className="tech-card">
              <p>Material-UI</p>
            </div>
          </div>

          <div className="links">
            <a
              href="https://slatemindai.com/" // Replace with your actual SlateMind landing page URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Visit Landing Page</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedWork;
