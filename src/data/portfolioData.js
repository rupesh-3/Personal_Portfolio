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

// Skill icon mapping - using Lucide React icon names
export const skillIcons = {
  // Embedded & IoT
  "Arduino": "Cpu",
  "Raspberry Pi": "Server",
  "ESP32": "Radio",
  "UART/SPI/I2C": "Network",
  "V2I Communication": "Car",
  "Sensor Integration": "Activity",

  // Programming
  "Python": "Code",
  "C": "FileCode",
  "Embedded C": "Terminal",
  "Java": "Coffee",

  // Data Analytics
  "Power BI": "BarChart3",
  "MS Excel": "Table",
  "Pandas": "Database",
  "Seaborn": "TrendingUp",
  "Matplotlib": "LineChart",

  // AI/ML
  "Generative AI": "Brain",
  "Conversational AI": "MessageSquare",
  "NLP": "Sparkles",
  "Prompt Engineering": "Wand2",

  // Web Development
  "HTML": "Globe",
  "CSS": "Palette",
  "Responsive Design": "Smartphone",
  "Frontend Prototyping": "Zap",

  // Tools
  "Figma": "PenTool",
  "Git": "GitBranch",
  "Jupyter Notebook": "BookOpen",
  "Canva": "Image",
  "Lovable": "Heart",
  "Emergent": "Rocket"
}

export const skills = [
  {
    category: "Embedded & IoT",
    color: "neon-blue",
    items: [
      { name: "Arduino" },
      { name: "Raspberry Pi" },
      { name: "ESP32" },
      { name: "UART/SPI/I2C" },
      { name: "V2I Communication" },
      { name: "Sensor Integration" }
    ]
  },
  {
    category: "Programming",
    color: "neon-green",
    items: [
      { name: "Python" },
      { name: "C" },
      { name: "Embedded C" },
      { name: "Java" }
    ]
  },
  {
    category: "Data Analytics",
    color: "neon-purple",
    items: [
      { name: "Power BI" },
      { name: "MS Excel" },
      { name: "Pandas" },
      { name: "Seaborn" },
      { name: "Matplotlib" }
    ]
  },
  {
    category: "AI/ML",
    color: "neon-green",
    items: [
      { name: "Generative AI" },
      { name: "Conversational AI" },
      { name: "NLP" },
      { name: "Prompt Engineering" }
    ]
  },
  {
    category: "Web Development",
    color: "neon-blue",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Responsive Design" },
      { name: "Frontend Prototyping" }
    ]
  },
  {
    category: "Tools",
    color: "neon-purple",
    items: [
      { name: "Figma" },
      { name: "Git" },
      { name: "Jupyter Notebook" },
      { name: "Canva" },
      { name: "Lovable" },
      { name: "Emergent" }
    ]
  }
];

export const projects = {
  featured: [
    {
      id: 1,
      title: "Threadly - AI-Powered Conversation Strategist",
      category: "AI/ML",
      description: "Threadly is an intelligent communication assistant that analyzes conversation contexts and generates strategic response options with predicted outcomes. Get AI-driven coaching on how to communicate effectively in any scenario.",
      techStack: ["React", "Node.js", "NLP", "Prompt Engineering", "API Integration"],
      results: "Fully functional AI chat experience",
      github: "https://github.com/rupesh-3/Threadly",
      demo: null,
      image: "/images/projects/threadly.png",
      metrics: "Offers 95% accurate replies with 88% risk-impact scoring."
    },
    {
      id: 2,
      title: "Smart Traffic Monitoring System (V2I)",
      category: "IoT",
      description: "Real-time IoT framework using ESP32 for vehicle-to-infrastructure communications. Features embedded C programming, wireless protocols, and low-latency networking for intelligent traffic management.",
      techStack: ["ESP32", "Embedded C", "V2I Communication", "IoT", "Wireless Protocols"],
      results: "Published in IEEE ICSCSA 2025",
      github: "https://github.com/rupesh-3/route-ahead-navigator",
      demo: null,
      image: "/images/projects/project.png",
      metrics: "Real-time monitoring with <100ms latency"
    },
    {
      id: 3,
      title: "AskAIMee – AI Powered Knowledge Assistant",
      category: "AI/ML",
      description: "Conversational AI chatbot built with Lovable UI and Lyzr backend. Features NLP capabilities, advanced prompt engineering, and API integration for contextual, human-like dialogue.",
      techStack: ["Lovable", "Lyzr", "NLP", "Prompt Engineering", "API Integration"],
      results: "Contextual dialogue with 95% accuracy",
      github: "https://github.com/rupesh-3/AskAIMee",
      demo: null,
      image: "/images/projects/ask-ai-mee.png",
      metrics: "95% contextual accuracy"
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
      image: "/images/projects/project.png",
      github: "https://github.com/rupesh-3/route-ahead-navigator"
    },
    {
      id: 3,
      title: "Smart Walking Stick for Disabled People",
      category: "IoT & Embedded",
      description: "Assistive device with 80% improved detection accuracy.",
      techStack: ["Raspberry Pi", "Ultrasonic Sensors"],
      results: "80% accuracy improvement",
      image: "/images/projects/smart-walking-stick.jpg"
    },
    {
      id: 5,
      title: "Temperature Monitoring System",
      category: "IoT & Embedded",
      description: "DHT11 sensor-based monitoring with Arduino achieving 95% accuracy.",
      techStack: ["Raspberry Pi", "DHT11", "Python"],
      results: "95% accuracy over manual methods",
      image: "/images/projects/tempsystem.jpg"
    },
    {
      id: 6,
      title: "Water Monitoring System",
      category: "IoT & Embedded",
      description: "Sensor-Integrated Real-Time Intelligent Water Level Monitoring for Smart Infrastructure.",
      techStack: ["IoT Sensors", "Python", "Esp32"],
      results: "Real-time monitoring",
      image: "/images/projects/watermonitor.jpg",
    }
  ],
  aiMl: [
    {
      id: 2,
      title: "AskAIMee – AI Powered Knowledge Assistant",
      category: "AI/ML",
      description: "Conversational AI with NLP and prompt engineering.",
      techStack: ["Lovable", "Lyzr", "NLP"],
      results: "95% contextual accuracy",
      image: "/images/projects/ask-ai-mee.png",
      github: "https://github.com/rupesh-3/AskAIMee"
    },
    {
      id: 7,
      title: "Autism Detection using InceptionV3",
      category: "AI/ML",
      description: "AI-powered autism detection with blockchain security.",
      techStack: ["InceptionV3", "Blockchain", "Python"],
      results: "IEEE Publication",
      image: "/images/projects/autism.png"
    },
    {
      id: 8,
      title: "Threadly - AI-Powered Conversation Strategist",
      category: "AI/ML",
      description: "Threadly analyzes conversations and delivers strategic replies with predicted outcomes.",
      techStack: ["React", "Node.js", "NLP", "Prompt Engineering", "API Integration"],
      results: "Fully functional AI chat experience",
      github: "https://github.com/rupesh-3/Threadly",
      image: "/images/projects/threadly.png"
    }
  ],
  dataAnalytics: [
    {
      id: 9,
      title: "College Event Engagement Analysis",
      category: "Data Analytics",
      description: "EDA and sentiment analysis using Python, Pandas, and visualization libraries.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      results: "Comprehensive insights",
      github: "https://github.com/rupesh-3/College_Event_Engagement_Analysis/tree/main",
      image: "/images/projects/data.jpg"
    },
    {
      id: 10,
      title: "Solar-Powered Home Monitoring System",
      category: "Data Analytics",
      description: "Data analysis for solar energy-based smart home monitoring.",
      techStack: ["Python", "Data Analysis", "IoT"],
      results: "IEEE Publication",
      image: "/images/projects/solarsmart.jpg"
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
    title: "Solar Energy based Smart Home Monitoring and Automation using IOT",
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
    title: "IoT-Enabled Intelligent Traffic Signals for Optimizing Smart Cities using V2I Communications",
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
    role: "IoT Intern",
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
    title: "ByteSafe: Cybersecurity Workshop",
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
    organization: "Rajalakshmi Institute of Technology",
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
  { name: "The AI Revolution", platform: "Skillo", category: "AI/ML" },
  { name: "Business Analytics", platform: "HCL Guvi", category: "Analysis & Management" }
];

