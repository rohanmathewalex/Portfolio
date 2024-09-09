import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./experience.scss";

const experienceData = [
    {
      title: "Software Engineer",
      company: "SlateMind AI",
      duration: "Aug 2024 – Present",
      icon: "🧠",
      responsibilities: [
        "Built and deployed an AI-powered platform using OpenAI and Langchain, transforming complex study materials into flashcards, improving content retention by 35%.",
        "Designed and implemented adaptive study plans, optimizing learning paths for users and reducing study time by 20%.",
        "Developed a 'Chat with File' feature, enabling users to upload documents and receive AI-generated insights, increasing user engagement by 40%.",
        "Achieved 99.9% uptime with a scalable infrastructure, leveraging Firebase and Vercel for continuous deployment."
      ],
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter AI",
      duration: "Jul 2024 – Present",
      icon: "💻",
      responsibilities: [
        "Led the development of scalable applications using Node.js, Next.js, and MongoDB, improving overall response accuracy by 35%.",
        "Implemented micro frontends for better modularity, enhancing ease of integration by 25% across platforms.",
        "Optimized deployment pipelines using Google Cloud Platform (GCP), Docker, and Terraform, improving deployment efficiency by 30%.",
        "Reduced feature delivery time by 20% through CI/CD implementation with GitHub Actions."
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Dine Direct",
      duration: "Nov 2022 – Apr 2023",
      icon: "🍴",
      responsibilities: [
        "Built over 20 RESTful APIs using Node.js and Express.js, efficiently handling 10,000+ daily requests and reducing response times by 50% through caching and load balancing techniques.",
        "Designed modular and reusable React components using TypeScript, improving system performance by 25% and user engagement by 20%.",
        "Architected a cloud infrastructure on AWS (EC2, S3), achieving 99.9% uptime while reducing operational costs by 30% through automation."
      ],
    },
    {
      title: "Web Developer",
      company: "Mediagod",
      duration: "Nov 2021 – Dec 2022",
      icon: "🌐",
      responsibilities: [
        "Developed 25+ client websites using React.js, HTML, and TypeScript, increasing web traffic by 40% through optimized SEO practices and responsive designs.",
        "Integrated client websites with third-party services like payment gateways (e.g., Stripe), automating manual workflows and improving user experiences by 30%.",
        "Worked with cross-functional teams to meet project requirements, ensuring on-time delivery and meeting client satisfaction goals."
      ],
    },
    {
      title: "Junior Web Developer",
      company: "T3 Adventz",
      duration: "Jul 2020 – Aug 2021",
      icon: "🖥️",
      responsibilities: [
        "Spearheaded Full Stack development projects using React.js and Node.js, delivering responsive web applications that enhanced user experiences.",
        "Designed reusable CSS templates and improved frontend aesthetics, resulting in a 25% boost in user satisfaction and website performance.",
        "Collaborated with senior developers to implement RESTful APIs, reducing backend processing times by 20% through efficient database querying."
      ],
    },
  ];

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <div className="experience" ref={ref}>
      <h2 className="section-title">My Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <span>{item.duration}</span>
              <ul>
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

