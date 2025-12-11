// ============================================
// PORTFOLIO DATA - Edit your details here!
// ============================================

export const DATA = {
  personal: {
    name: "Naveen Balaji K",
    tagline: "Electronics & Instrumentation Engineer | Full-Stack Developer",
    shortBio: "Passionate about bridging hardware and software to create impactful solutions.",
    avatar: "/pic.JPG",
    resume: "/resume.pdf",
  },

  contact: {
    email: "naveenbalaji@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "Tamil Nadu, India",
  },

  socials: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    twitter: "https://twitter.com/your-handle",
    reddit: "https://reddit.com/u/your-username",
  },

  about: {
    story: `I'm Naveen Balaji, an Electronics and Instrumentation Engineering student at Kongu Engineering College with a deep passion for both hardware systems and software development. My journey began with a curiosity about how things work—from circuit boards to code compilers.

    What excites me most is the intersection of hardware and software. Whether I'm programming PLCs for industrial automation or building responsive web applications with React, I thrive on solving real-world problems through technology.

    I believe in the power of teamwork and continuous learning. My project "Safe Drive" exemplifies this—combining IoT sensors, embedded systems, and communication protocols to create a life-saving accident detection system that won first prize at a national paper presentation.

    Currently seeking internship opportunities where I can contribute my diverse skill set, learn from experienced professionals, and grow as an engineer. Let's build something meaningful together!`,
  },

  skills: {
    hardware: [
      { name: "PLC Programming", level: 85 },
      { name: "SCADA Systems", level: 80 },
      { name: "LabVIEW", level: 75 },
      { name: "IoT & Embedded Systems", level: 85 },
      { name: "AutoCAD Electrical", level: 70 },
      { name: "EPlan", level: 65 },
      { name: "Proteus Simulation", level: 80 },
      { name: "Keil μVision", level: 75 },
    ],
    software: [
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C Programming", level: 80 },
      { name: "React (Frontend)", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Safe Drive",
      category: "hardware",
      description: "Accident detection and prevention system that detects accidents and sends current location and passenger details to guardian, control room, and nearby hospital.",
      longDescription: "An innovative IoT-based safety system using accelerometer sensors, GPS modules, and GSM communication to detect vehicle accidents in real-time and automatically alert emergency contacts with precise location data.",
      techStack: ["Arduino", "IoT Sensors", "GPS Module", "GSM Module", "Embedded C"],
      image: "/project-safedrive.svg",
      repoUrl: "https://github.com/your-username/safe-drive",
      liveUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: "News Aggregator",
      category: "software",
      description: "Responsive news platform integrating multiple APIs for real-time articles with search, category filters, and personalization options.",
      longDescription: "Built a modern news aggregation platform that pulls from multiple news APIs, featuring intelligent search, category-based filtering, user preferences stored locally, and a clean, accessible UI designed for readability.",
      techStack: ["React", "Axios", "News API", "localStorage", "CSS Modules"],
      image: "/project-news.svg",
      repoUrl: "https://github.com/your-username/news-aggregator",
      liveUrl: "https://your-news-app.netlify.app",
      featured: true,
    },
  ],

  education: [
    {
      degree: "B.E. Electronics and Instrumentation Engineering",
      institution: "Kongu Engineering College",
      location: "Erode, Tamil Nadu",
      duration: "2022 - 2026 (Expected)",
      grade: "CGPA: 7.57 (till 4th Semester)",
      current: true,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sri Sankara Matric and Higher Secondary School",
      location: "Tamil Nadu",
      duration: "2020 - 2022",
      grade: "84.6%",
      current: false,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Sri Sankara Matric and Higher Secondary School",
      location: "Tamil Nadu",
      duration: "2019 - 2020",
      grade: "84.6%",
      current: false,
    },
  ],

  achievements: [
    {
      title: "1st Prize — Paper Presentation",
      event: "Accident Detection and Prevention System",
      organizer: "Institution of Engineers India (IEI)",
      venue: "Puducherry Technological University",
      year: "2024",
      description: "Presented innovative research on IoT-based accident detection systems, demonstrating real-time alert mechanisms and emergency response integration.",
    },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Naveen Balaji K. All rights reserved.`,
    tagline: "Built with ❤️ and React",
  },
};

export type PortfolioData = typeof DATA;
