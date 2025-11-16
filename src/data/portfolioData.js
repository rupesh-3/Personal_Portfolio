export const personalInfo = {
  name: "S Rupesh",
  title: "IoT Engineer → Embedded Systems Developer → AI Enthusiast → Data Analyst",
  tagline: "Building intelligent systems that bridge hardware and software",
  location: "West Mambalam, Tamil Nadu, India",
  email: "s.rupeshoffl@gmail.com",
  phone: "9894646003",
  linkedin: "https://www.linkedin.com/in/s-rupesh-58a705291",
  github: "https://github.com/rupesh-3",
  cgpa: 8.55,
  college: "Rajalakshmi Institute of Technology",
  year: "2023-2027",
  status: "Pre-final year B.E. Student"
};

export const stats = {
  cgpa: 8.55,
  publications: 3,
  projects: 6,
  internships: 2
};

export const skills = [
  {
    category: "Embedded & IoT",
    color: "neon-blue",
    items: [
      { name: "Arduino", proficiency: 90 },
      { name: "Raspberry Pi", proficiency: 85 },
      { name: "ESP32", proficiency: 88 },
      { name: "UART/SPI/I2C", proficiency: 80 },
      { name: "V2I Communication", proficiency: 85 },
      { name: "Sensor Integration", proficiency: 90 }
    ]
  },
  {
    category: "Programming",
    color: "neon-green",
    items: [
      { name: "Python", proficiency: 78 },
      { name: "C", proficiency: 70 },
      { name: "Embedded C", proficiency: 67 },
      { name: "Java", proficiency: 75 }
    ]
  },
  {
    category: "Data Analytics",
    color: "neon-purple",
    items: [
      { name: "Power BI", proficiency: 85 },
      { name: "MS Excel", proficiency: 90 },
      { name: "Pandas", proficiency: 88 },
      { name: "Seaborn", proficiency: 85 },
      { name: "Matplotlib", proficiency: 87 }
    ]
  },
  {
    category: "AI/ML",
    color: "neon-green",
    items: [
      { name: "Generative AI", proficiency: 88 },
      { name: "Conversational AI", proficiency: 83 },
      { name: "NLP", proficiency: 74 },
      { name: "Prompt Engineering", proficiency: 88 }
    ]
  },
  {
    category: "Web Development",
    color: "neon-blue",
    items: [
      { name: "HTML", proficiency: 79 },
      { name: "CSS", proficiency: 75 },
      { name: "Responsive Design", proficiency: 74 },
      { name: "Frontend Prototyping", proficiency: 84 }
    ]
  },
  {
    category: "Tools",
    color: "neon-purple",
    items: [
      { name: "Figma", proficiency: 85 },
      { name: "Git", proficiency: 88 },
      { name: "Jupyter Notebook", proficiency: 70 },
      { name: "Canva", proficiency: 90 },
      { name: "Lovable", proficiency: 89 },
      { name: "Emergent", proficiency: 84 }
    ]
  }
];

export const projects = {
  featured: [
    {
      id: 1,
      title: "Smart Traffic Monitoring System (V2I)",
      category: "IoT",
      description: "Real-time IoT framework using ESP32 for vehicle-to-infrastructure communications. Features embedded C programming, wireless protocols, and low-latency networking for intelligent traffic management.",
      techStack: ["ESP32", "Embedded C", "V2I Communication", "IoT", "Wireless Protocols"],
      results: "Published in IEEE ICSCSA 2025",
      github: "https://github.com/rupesh-3",
      demo: null,
      image: "/api/placeholder/600/400",
      metrics: "Real-time monitoring with <100ms latency"
    },
    {
      id: 2,
      title: "AskAIMee – AI Chatbot",
      category: "AI/ML",
      description: "Conversational AI chatbot built with Lovable UI and Lyzr backend. Features NLP capabilities, advanced prompt engineering, and API integration for contextual, human-like dialogue.",
      techStack: ["Lovable", "Lyzr", "NLP", "Prompt Engineering", "API Integration"],
      results: "Contextual dialogue with 95% accuracy",
      github: "https://github.com/rupesh-3",
      demo: null,
      image: "/api/placeholder/600/400",
      metrics: "95% contextual accuracy"
    },
    {
      id: 3,
      title: "Smart Walking Stick",
      category: "IoT & Embedded",
      description: "Raspberry Pi-based assistive device with ultrasonic sensors for obstacle detection. Designed to improve mobility and safety for visually impaired users.",
      techStack: ["Raspberry Pi", "Ultrasonic Sensors", "Python", "IoT"],
      results: "80% improvement in detection accuracy",
      github: "https://github.com/rupesh-3",
      demo: null,
      image: "/api/placeholder/600/400",
      metrics: "80% accuracy improvement"
    }
  ],
  iot: [
    {
      id: 4,
      title: "Smart Traffic Monitoring System",
      category: "IoT & Embedded",
      description: "V2I communication system for intelligent traffic management.",
      techStack: ["ESP32", "Embedded C", "V2I"],
      results: "IEEE Publication",
      github: "https://github.com/rupesh-3"
    },
    {
      id: 3,
      title: "Smart Walking Stick",
      category: "IoT & Embedded",
      description: "Assistive device with 80% improved detection accuracy.",
      techStack: ["Raspberry Pi", "Ultrasonic Sensors"],
      results: "80% accuracy improvement",
      github: "https://github.com/rupesh-3"
    },
    {
      id: 5,
      title: "Temperature Monitoring System",
      category: "IoT & Embedded",
      description: "DHT11 sensor-based monitoring with Raspberry Pi achieving 95% accuracy.",
      techStack: ["Raspberry Pi", "DHT11", "Python"],
      results: "95% accuracy over manual methods",
      github: "https://github.com/rupesh-3"
    },
    {
      id: 6,
      title: "Smart Bin & Water Monitoring",
      category: "IoT & Embedded",
      description: "Sensor-enabled waste management and real-time water level tracking.",
      techStack: ["IoT Sensors", "Python", "Raspberry Pi"],
      results: "Real-time monitoring",
      github: "https://github.com/rupesh-3"
    }
  ],
  aiMl: [
    {
      id: 2,
      title: "AskAIMee Chatbot",
      category: "AI/ML",
      description: "Conversational AI with NLP and prompt engineering.",
      techStack: ["Lovable", "Lyzr", "NLP"],
      results: "95% contextual accuracy",
      github: "https://github.com/rupesh-3"
    },
    {
      id: 7,
      title: "Autism Detection using InceptionV3",
      category: "AI/ML",
      description: "AI-powered autism detection with blockchain security.",
      techStack: ["InceptionV3", "Blockchain", "Python"],
      results: "IEEE Publication",
      github: "https://github.com/rupesh-3"
    }
  ],
  dataAnalytics: [
    {
      id: 8,
      title: "College Event Engagement Analysis",
      category: "Data Analytics",
      description: "EDA and sentiment analysis using Python, Pandas, and visualization libraries.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      results: "Comprehensive insights",
      github: "https://github.com/rupesh-3"
    },
    {
      id: 9,
      title: "Solar Home Monitoring",
      category: "Data Analytics",
      description: "Data analysis for solar energy-based smart home monitoring.",
      techStack: ["Python", "Data Analysis", "IoT"],
      results: "IEEE Publication",
      github: "https://github.com/rupesh-3"
    }
  ]
};

export const publications = [
  {
    id: 1,
    title: "Autism Detection using InceptionV3 and Security using Blockchain",
    venue: "IEEE ICECA",
    date: "November 2024",
    doi: "10.1109/ICECA63461.2024.10800815",
    doiLink: "https://doi.org/10.1109/ICECA63461.2024.10800815",
    abstract: "This paper presents an AI-powered system for autism detection using InceptionV3 deep learning model, integrated with blockchain technology for secure data management and privacy protection.",
    contributions: [
      "Deep learning-based autism detection with high accuracy",
      "Blockchain integration for secure data handling",
      "Privacy-preserving medical data management"
    ]
  },
  {
    id: 2,
    title: "Solar Energy based Smart Home Monitoring",
    venue: "IEEE ICPECTS",
    date: "October 2024",
    doi: "10.1109/ICPECTS62210.2024.10780112",
    doiLink: "https://doi.org/10.1109/ICPECTS62210.2024.10780112",
    abstract: "A comprehensive smart home monitoring system powered by solar energy, featuring IoT sensors and real-time data analytics for energy optimization and home automation.",
    contributions: [
      "Solar-powered IoT monitoring system",
      "Real-time energy optimization",
      "Sustainable smart home solutions"
    ]
  },
  {
    id: 3,
    title: "IoT-Enabled Intelligent Traffic Signals",
    venue: "IEEE ICSCSA",
    date: "August 2025",
    doi: "10.1109/ICSCSA66339.2025.11171093",
    doiLink: "https://doi.org/10.1109/ICSCSA66339.2025.11171093",
    abstract: "An intelligent traffic signal system using IoT and V2I (Vehicle-to-Infrastructure) communication for real-time traffic monitoring and adaptive signal control, reducing congestion and improving traffic flow.",
    contributions: [
      "Real-time IoT framework for traffic management",
      "V2I communication protocols",
      "Low-latency networking for traffic signals"
    ]
  }
];

export const experiences = [
  {
    id: 1,
    company: "NSIC Technical Services Centre",
    role: "Winter Intern",
    period: "December 2024 - January 2025",
    location: "India",
    description: "Developed IoT solutions and sensor integration projects using Raspberry Pi and Python.",
    projects: [
      "Smart Walking Stick - Raspberry Pi-based assistive device",
      "Temperature Monitoring System - DHT11 sensor integration"
    ],
    technologies: ["Raspberry Pi", "Python", "IoT Sensors", "Embedded Systems"]
  },
  {
    id: 2,
    company: "SortyX Ventures Pvt. Ltd.",
    role: "Intern",
    period: "May 2025 - June 2025",
    location: "India",
    description: "Worked on smart automation projects for waste and water management systems.",
    projects: [
      "Smart Bin - Sensor-enabled waste management",
      "Water Monitoring System - Real-time water level tracking"
    ],
    technologies: ["IoT", "Python", "Sensor Integration", "Automation"]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Runner-up, SparkUp Startup Pitching",
    organization: "IEEE",
    date: "2024",
    description: "Secured runner-up position in IEEE startup pitching competition"
  },
  {
    id: 2,
    title: "ByteSafe: Cybersecurity Workshop Conductor",
    organization: "CCE Association",
    date: "2024",
    description: "Organized and conducted cybersecurity workshop"
  },
  {
    id: 3,
    title: "Creatives & Designing Head",
    organization: "Rotaract Club of RIT",
    period: "2025-2026",
    description: "Leading creative initiatives and design projects"
  },
  {
    id: 4,
    title: "Apple Centre of Excellence Recognition",
    organization: "Apple",
    date: "2024",
    description: "Recognized for excellence in technology and innovation"
  },
  {
    id: 5,
    title: "Executive Member",
    organization: "CCE Association",
    period: "2024-2025",
    description: "Active member contributing to association activities"
  }
];

export const certifications = [
  { name: "Gen AI Mastermind", platform: "Outskill", category: "AI/ML" },
  { name: "ReactJS and CSS", platform: "Growcline", category: "Web Development" },
  { name: "Power BI", platform: "Simplilearn", category: "Data Analytics" },
  { name: "Business Analysis & Process Management", platform: "Coursera", category: "Analysis & Management" },
  { name: "Gen AI Engineering Mastermind", platform: "Outskill", category: "AI/ML" },
  { name: "UI/UX Intermediate", platform: "Great Learning", category: "Web Development" },
  { name: "IBM Essentials in Cloud ", platform: "Cognitive Class", category: "Cloud Computing" },
  { name: "Become a MAANG Engineer", platform: "Scaler Academy", category: "General" },
  { name: "The AI Revolution", platform: "Skillo", category: "AI/ML" }
];

