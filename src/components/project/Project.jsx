import React, { useState } from "react";
import { motion } from "framer-motion";
import "./project.scss";

// Import the icons
import chatgptIcon from "../../assets/icons/chatgpt.png";
import reactIcon from "../../assets/icons/react.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import pythonIcon from "../../assets/icons/Python.png";
import jsIcon from "../../assets/icons/js.png";



const Projects = () => {
  const [activeTab, setActiveTab] = useState("AI Projects");

  const projectsData = {
    "AI Projects": [
      {
        title: "SupportSynth",
        description: "SupportSynth is an AI-powered chat application designed to enhance customer support interactions. ",
        technologies: [chatgptIcon, reactIcon, nodejsIcon],
        githubLink: "https://github.com/rohanmathewalex/Supportsynth",
        linkedinLink: "https://www.linkedin.com/posts/rohanmathewalex_ai-chatbot-webdevelopment-activity-7229175052250861569-NHYz?utm_source=share&utm_medium=member_desktop",
        image: "slatemind.png",
      },
      {
        title: "RateMyProfessor AI",
        description:
          "AI-powered professor recommendation system using Pinecone and GPT-4.",
        technologies: [chatgptIcon, reactIcon, pythonIcon],
        githubLink: "https://github.com/rohanmathewalex/rmp-ai",
        linkedinLink: "https://linkedin.com/in/rohanmathewalex",
        image: "rmp-ai.png",
      },
      {
        title: "Flash Mind AI",
        description:
          "FlashMind is an AI-powered SaaS application designed to help users generate flashcards from any text, study efficiently, and keep track of their learning progress.",
        technologies: [chatgptIcon, reactIcon, pythonIcon],
        githubLink: "https://github.com/rohanmathewalex/flashcards-ai",
        linkedinLink: "https://www.linkedin.com/in/rohanmathewalex/",
        image: "rmp-ai.png",
      },
      {
        title: "Pantry Tracker",
        description:
          "AI-powered application that helps you manage your pantry items and find recipe recommendations based on the ingredients you have.",
        technologies: [chatgptIcon, reactIcon, pythonIcon],
        githubLink: "https://github.com/rohanmathewalex/pantry-tracker",
        linkedinLink: "https://www.linkedin.com/in/rohanmathewalex/",
        image: "rmp-ai.png",
      },
    ],
    "Other Projects": [
      {
        title: "TaskLink",
        description:
          "A project management app built with React, GraphQL, Node.js, and MongoDB.",
        technologies: [reactIcon, nodejsIcon, jsIcon],
        githubLink: "https://github.com/rohanmathewalex/tasklink",
        image: "tasklink.png",
      },
      {
        title: "Household Haven",
        description:
          "Microservices architecture for managing household items and services.",
        technologies: [nodejsIcon, reactIcon, jsIcon],
        githubLink: "https://github.com/rohanmathewalex/household-haven",
        image: "household-haven.png",
      },
    ],
  };

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="tabs">
        <button
          className={activeTab === "AI Projects" ? "active" : ""}
          onClick={() => setActiveTab("AI Projects")}
        >
          AI Projects
        </button>
        <button
          className={activeTab === "Other Projects" ? "active" : ""}
          onClick={() => setActiveTab("Other Projects")}
        >
          Other Projects
        </button>
      </div>
      
      <div className="project-cards">
        {projectsData[activeTab].map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-icons">
              {project.technologies.map((icon, idx) => (
                <span key={idx} className="tech-icon">
                  <img src={icon} alt="Technology Icon" />
                </span>
              ))}
            </div>
            <div className="links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button>View on GitHub</button>
              </a>
              {activeTab === "AI Projects" && (
                <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer">
                  <button>View on LinkedIn</button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
