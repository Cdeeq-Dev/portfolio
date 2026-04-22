export const personalInfo = {
  name: "C-DEEQ",
  title: "Full Stack Developer",
  bio: [
    "I'm a passionate full-stack developer with over 5 years of experience building web applications. I love creating user-friendly interfaces and robust backend systems.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities."
  ],
  interests: ["Web Development", "Open Source", "Hiking", "Photography"],
  socialLinks: {
    github: "https://github.com/cdeeq-dev",
    linkedin: "https://linkedin.com/in/abubakar-bello-sdk",
    twitter: "https://twitter.com/##"
  },
  email: "abubakarbellosdk@gmail.com",
  location: "Kano State NSRW",
  yearsExperience: 2,
  projectsShipped: 20,
  happyClients: 25
};

export const skills = {
  frontend: ["React", "CSS", "HTML"],
  backend: ["Node.js", ],
  tools: ["Git", "Docker",]
};

export const skillProficiency = {
  "React": 90,
  "CSS": 95,
  "HTML": 99,
  "Node.js": 88,
  "Docker": 70,
};

export const projects = [
  {
    id: 1,
    title: "To-Do List App",
    description: "A simple task management app where users can add, delete, and mark tasks as complete. Data is saved to localStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "✅",
    gradient: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
    liveLink: "https://cdeeq-dev.github.io/todo-list",
    githubLink: "https://github.com/cdeeq-dev/todo-list"
  },
  {
    id: 2,
    title: "Simple Calculator",
    description: "A basic calculator app that performs addition, subtraction, multiplication, and division operations with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🧮",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    liveLink: "https://cdeeq-dev.github.io/calculator",
    githubLink: "https://github.com/cdeeq-dev/calculator"
  },
  {
    id: 3,
    title: "Quote Generator",
    description: "Display random inspirational quotes with a button click. Fetches data from a free Quote API with copy to clipboard feature.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    category: "frontend",
    emoji: "💡",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    liveLink: "https://cdeeq-dev.github.io/quote-generator",
    githubLink: "https://github.com/cdeeq-dev/quote-generator"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Search for any city and display current weather conditions using the OpenWeather API. Shows temperature, humidity, and wind speed.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    category: "frontend",
    emoji: "🌤️",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    liveLink: "https://cdeeq-dev.github.io/weather-app",
    githubLink: "https://github.com/cdeeq-dev/weather-app"
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Track your expenses with add, delete, and category filtering features. Uses localStorage to persist data between sessions.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "💰",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    liveLink: "https://cdeeq-dev.github.io/expense-tracker",
    githubLink: "https://github.com/cdeeq-dev/expense-tracker"
  },
  {
    id: 6,
    title: "Rock Paper Scissors Game",
    description: "Interactive game where you play against the computer. Keeps score and displays results with a fun, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🎮",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    liveLink: "https://cdeeq-dev.github.io/rock-paper-scissors",
    githubLink: "https://github.com/cdeeq-dev/rock-paper-scissors"
  }
];

export const experience = [
  {
    id: 1,
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of web applications, mentoring junior developers, and implementing best practices.",
    current: true
  },
  {
    id: 2,
    company: "Startup Inc",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client projects, improved performance by 40%, and implemented CI/CD pipelines.",
    current: false
  },
  {
    id: 3,
    company: "Agency LLC",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Created responsive websites and web applications for various clients using modern JavaScript frameworks.",
    current: false
  }
];

export const contactInfo = {
  intro: "Let's work together! I'm always open to discussing new opportunities and interesting projects.",
  resumeLink: "https://example.com/resume.pdf"
};