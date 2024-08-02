import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import JsonLd from './components/JsonLd.jsx';
import { PostHogProvider} from 'posthog-js/react' 

const options = {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  
}
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rohan Mathew Alex",
  "email": "rohanmathewalex6674@gmail.com",
  "telephone": "+1 519-781-3765",
  "url": "https://rohanmathewalex.vercel.app/",
  "sameAs": [
    "https://www.linkedin.com/in/rohanmathewalex/",
    "https://github.com/rohanmathewalex",
    "https://medium.com/@rohanmathewalex"
  ],
  "jobTitle": "Full-Stack Developer",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Conestoga College"
  },
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Dine Direct",
      "sameAs": "https://dinelink-url.com"
    },
    {
      "@type": "Organization",
      "name": "MEDIAGOD",
      "sameAs": "https://www.mediagod.in/"
    },
    {
      "@type": "Organization",
      "name": "T3 Adventz",
      "sameAs": "https://t3adventz.com/"
    },
    {
      "@type": "Organization",
      "name": "Headstarter",
      "sameAs": "https://headstarter.co/"
    }
  ],
  "hasOccupation": [
    {
      "@type": "Person",
      "jobTitle": "Full Stack Developer & Project Lead",
      "startDate": "2022-11",
      "endDate": "2023-04",
      "name": "Dine Direct",
      "description": "Led full-stack development projects using Node.js and React.js, delivering 20+ RESTful APIs and frontend features."
    },
    {
      "@type": "Person",
      "jobTitle": "Web Developer",
      "startDate": "2021-11",
      "endDate": "2022-12",
      "name": "MEDIAGOD",
      "description": "Developed and maintained 25+ responsive web applications using React.js, HTML, CSS, and TypeScript."
    },
    {
      "@type": "Person",
      "jobTitle": "Junior Web Developer",
      "startDate": "2020-07",
      "endDate": "2021-08",
      "name": "T3 Adventz",
      "description": "Assisted in designing and developing web applications using React.js, ensuring seamless integration and performance."
    },
    {
      "@type": "Person",
      "jobTitle": "AI Software Engineering Fellow",
      "startDate": "2024-07",
      "endDate": "2024-08",
      "name": "Headstarter",
      "description": "Participated in the Headstarter AI Software Engineering Fellowship program, building AI 4 projects and contributing to team-based projects. Final goal to generate $1000 in revenue / 1000 users in waiting list."
    }
  ],
  "mainEntityOfPage": {
    "@type": "WebSite",
    "name": "Rohan Mathew Alex Portfolio",
    "url": "https://rohanmathewalex.vercel.app/"
  }
};




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={import.meta.env.VITE_POSTHOG_API_KEY}
      options={options}
    >
    </PostHogProvider>
    <JsonLd data={structuredData} />
    <App />
  </React.StrictMode>,
)
