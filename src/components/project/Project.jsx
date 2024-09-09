import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./project.scss";

const projectVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const projects = [
    {
      title: "Project One",
      description: "Description for project one.",
      techStack: "React, Node.js, MongoDB",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      techStack: "Vue, Express, MySQL",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      techStack: "Angular, Django, PostgreSQL",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Project Four",
      description: "Description for project four.",
      techStack: "Svelte, Flask, SQLite",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
  ];

  return (
    <motion.div
      className="projects"
      variants={projectVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <h2 className="heading">Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">{project.techStack}</p>
            <button>View Project</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
