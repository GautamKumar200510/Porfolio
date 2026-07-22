import {
  PersonalInfo,
  Internship,
  Project,
  EducationItem,
  Certification,
  Achievement,
  ExpertiseCategory,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Gautam Kumar",
  title: "Full Stack Developer | Computer Science (AI & Analytics)",
  degree: "B.Tech – CSE (AI & Analytics)",
  specialization: "Artificial Intelligence & Analytics",
  college: "MIT School of Computing, MIT-ADT University, Pune",
  cgpa: "8.32 / 10.0",
  email: "gautamkr.71019@gmail.com",
  phone: "+91 9931211603",
  location: "Pune, Maharashtra, India",
  permanentAddress: "Pune, Maharashtra, India",
  linkedIn: "https://linkedin.com/in/gautamkumar",
  github: "https://github.com/gautamkumar",
  leetcode: "https://leetcode.com/u/txODJD3DWj/",
  dob: "2005",
  languages: ["English", "Hindi"],
  summary:
    "Aspiring Full Stack Developer and Computer Science undergraduate specializing in AI & Analytics. Experienced in building end-to-end web applications and AI-powered platforms using Java, React.js, Next.js, Python, and Flask. AWS Cloud Foundations certified with knowledge of cybersecurity, big data, and cloud engineering. Strong analytical thinking, leadership, and business communication skills. CGPA: 8.32/10.",
  bioHeadline:
    "Full Stack Developer & AI Systems Specialist",
  availability: "Available for Full Stack & AI Engineering Roles",
};

export const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Java", level: 92, category: "Languages", featured: true },
      { name: "JavaScript", level: 90, category: "Languages", featured: true },
      { name: "SQL", level: 85, category: "Database", featured: true },
      { name: "React.js", level: 90, category: "Frontend", featured: true },
      { name: "Next.js", level: 88, category: "Frontend", featured: true },
      { name: "Python", level: 86, category: "Languages", featured: true },
      { name: "Flask", level: 82, category: "Backend", featured: true },
      { name: "Node.js", level: 84, category: "Backend", featured: false },
      { name: "Tailwind CSS", level: 92, category: "Frontend", featured: true },
      { name: "REST APIs", level: 88, category: "Backend", featured: true },
      { name: "Git & GitHub", level: 92, category: "DevTools", featured: true },
      { name: "Power BI", level: 84, category: "Analytics", featured: true },
      { name: "AWS", level: 80, category: "Cloud", featured: true },
    ],
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 92, category: "Core CS", featured: true },
      { name: "Data Structures & Algorithms", level: 88, category: "Core CS", featured: true },
      { name: "Database Management Systems (DBMS)", level: 86, category: "Core CS", featured: true },
      { name: "Software Engineering", level: 88, category: "Core CS", featured: true },
      { name: "Workflow Automation", level: 85, category: "Engineering", featured: false },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Analytical Thinking", level: 95, category: "Soft Skills", featured: true },
      { name: "Leadership", level: 90, category: "Soft Skills", featured: true },
      { name: "Problem Solving", level: 92, category: "Soft Skills", featured: true },
      { name: "Team Collaboration", level: 94, category: "Soft Skills", featured: true },
      { name: "Business Communication", level: 90, category: "Soft Skills", featured: true },
      { name: "Time Management", level: 88, category: "Soft Skills", featured: false },
    ],
  },
];

export const internships: Internship[] = [
  {
    id: "innobyte-2025",
    company: "Innobyte",
    role: "Software Developer Intern",
    department: "Software Engineering",
    startDate: "June 2025",
    endDate: "November 2025",
    location: "Pune, India",
    description: [
      "Delivered Java features across 3+ sprint cycles, reducing bug re-occurrence by ~30% through structured code reviews.",
      "Maintained 100% commit traceability via Git/GitHub branching, pull requests, and version control workflows.",
      "Resolved 15+ bugs through systematic debugging, improving application stability and team delivery speed."
    ],
    skills: ["Java", "Git", "GitHub", "Code Review", "Bug Debugging", "Agile Sprints"],
    highlights: [
      "Reduced bug re-occurrence by ~30% through structured code reviews",
      "100% commit traceability across Git & GitHub PR workflows",
      "Resolved 15+ critical bugs improving app stability & team velocity"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "nocode-ml-platform",
    title: "No-Code Visual ML Platform",
    category: "AI / Machine Learning",
    keySkills: ["React.js", "Python", "Flask", "JavaScript", "Artificial Intelligence", "Data Analytics", "Cloud Computing"],
    summary:
      "AI-powered visual platform cutting ML pipeline setup time by ~70% for non-technical users with real-time analytics and 5+ algorithm support.",
    detailedDescription:
      "Built an AI-powered no-code platform that cut ML pipeline setup time by ~70% for non-technical users, supporting 5+ algorithm types. Developed RESTful Flask backend with <2s avg response time; integrated real-time data visualization dashboards. Applied cloud computing and scalable architecture patterns to handle concurrent user sessions effectively.",
    featured: true,
    metrics: [
      "Cut ML setup time by ~70% for non-technical users",
      "<2s average response time on RESTful Flask backend",
      "Supports 5+ ML algorithm types with real-time visual dashboards"
    ],
    liveDemoType: "ml-workflow",
    githubUrl: "https://github.com/gautamkumar"
  },
  {
    id: "bank-management-system",
    title: "Bank Management System – ATM Desktop Application",
    category: "Desktop App / Java",
    keySkills: ["Java", "MySQL", "JDBC", "Java Swing", "OOP", "IntelliJ IDEA"],
    summary:
      "Full desktop ATM simulation with MySQL backend featuring deposit, withdrawal, balance inquiry, PIN changes, and secure JDBC authentication.",
    detailedDescription:
      "Developed a Java Swing desktop ATM simulation with MySQL backend supporting deposit, withdrawal, balance enquiry, PIN change, and mini-statement across a 3-step registration system. Implemented secure PIN-based login and real-time balance validation using JDBC, with a 3-page account registration flow storing user data and transaction history in a MySQL relational database.",
    featured: true,
    metrics: [
      "Full deposit, withdrawal, PIN change & mini-statement flow",
      "Secure PIN-based JDBC authentication with real-time balance validation",
      "3-step user registration & transaction history in MySQL database"
    ],
    liveDemoType: "atm-demo",
    githubUrl: "https://github.com/gautamkumar"
  },
  {
    id: "life-plan-360",
    title: "Life Plan 360° – AI Wealth Management Platform",
    category: "Web App / Fintech",
    keySkills: ["Next.js", "Tailwind CSS", "Supabase", "AI Analytics", "Big Data", "Cloud Engineering"],
    summary:
      "Full-stack AI financial platform reducing manual wealth planning effort by ~60% with predictive analytics and 85%+ recommendation relevance.",
    detailedDescription:
      "Developed full-stack AI financial platform reducing manual planning effort by ~60% through automated goal tracking. Integrated AI-driven predictive analytics achieving 85%+ recommendation relevance for savings, retirement, and investment goals. Leveraged Supabase cloud backend for secure authentication and real-time big data sync across concurrent users.",
    featured: true,
    metrics: [
      "Reduced manual financial planning effort by ~60%",
      "85%+ recommendation relevance for investment & savings goals",
      "Real-time big data sync & secure authentication via Supabase"
    ],
    liveDemoType: "wealth-calculator",
    githubUrl: "https://github.com/gautamkumar"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-ai-ml",
    title: "AI & Machine Learning",
    provider: "Microsoft (Coursera)",
    skills: ["AI", "Machine Learning", "Data Science", "Python"],
    description: "Industry certification covering AI & ML model architecture, machine learning algorithms, and real-world deployment.",
    iconName: "Cpu",
    badgeColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "cert-aws",
    title: "AWS Cloud Foundations",
    provider: "AWS Academy",
    skills: ["AWS", "Cloud Architecture", "Cloud Security", "DevOps"],
    description: "Comprehensive AWS training in cloud computing fundamentals, cloud security, IAM, and scalable cloud infrastructure.",
    iconName: "Cloud",
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    id: "cert-cybersecurity",
    title: "Cybersecurity",
    provider: "Cisco",
    skills: ["Cybersecurity", "Network Security", "Threat Mitigation", "Data Protection"],
    description: "Foundational mastery in enterprise security protocols, network defense strategies, and vulnerability management.",
    iconName: "ShieldCheck",
    badgeColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "cert-power-bi",
    title: "Data Modeling in Power BI",
    provider: "Microsoft",
    skills: ["Power BI", "Data Modeling", "DAX", "Business Intelligence"],
    description: "Specialized certification in DAX calculations, relational database modeling, and executive interactive dashboarding.",
    iconName: "BarChart3",
    badgeColor: "from-yellow-500 to-amber-600"
  },
  {
    id: "cert-adv-java",
    title: "Advanced Java",
    provider: "LearnQuest",
    skills: ["Java", "JDBC", "OOP", "Multithreading", "Collections Framework"],
    description: "Advanced Java certification covering multithreading, collections, JDBC relational database connectivity, and design patterns.",
    iconName: "Code2",
    badgeColor: "from-red-500 to-rose-600"
  }
];

export const educationHistory: EducationItem[] = [
  {
    institution: "MIT School of Computing, MIT-ADT University, Pune",
    degree: "B.Tech – CSE (AI & Analytics)",
    grade: "CGPA: 8.32 / 10.0",
    period: "2023 – 2027",
    boardOrUniv: "MIT-ADT University, Pune",
    highlights: [
      "Specialization in Artificial Intelligence & Big Data Analytics",
      "Maintained 8.32/10 CGPA while executing AI/Full-Stack projects & 5 industry certifications"
    ]
  },
  {
    institution: "B.D College, Patna",
    degree: "12th Standard – BSEB",
    grade: "65.80%",
    period: "2023",
    boardOrUniv: "BSEB Board",
    highlights: ["Senior Secondary Science education"]
  },
  {
    institution: "Destiny International School, Patna",
    degree: "10th Standard – CBSE",
    grade: "80%",
    period: "2021",
    boardOrUniv: "CBSE Board",
    highlights: ["Secondary Education with distinction in Mathematics & Science"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    event: "Smart India Hackathon 2025 Sprint",
    year: "2025",
    description: "Participated in Smart India Hackathon (SIH) 2025, delivering a working prototype within a 24-hour competitive sprint."
  },
  {
    title: "Academic & Industry Excellence",
    event: "Production AI Projects & Certifications",
    year: "2023 – Present",
    description: "Maintained CGPA 8.32/10 while building two production-grade AI/full-stack projects and completing 5 industry certifications."
  }
];

export const hobbies = [
  "Building AI & No-Code Systems",
  "Cloud Engineering & DevOps",
  "Hackathons & Problem Solving"
];

export const bestPromptForGoogleStudio = `Create a world-class, ultra-modern developer portfolio website for Gautam Kumar based on his resume.

DESIGN INSPIRATION:
Combine the design elegance of Apple (glassmorphism, subtle glowing mesh backdrop, refined typography), Vercel (dark/light high-contrast layout, clean borders, crisp mono accents), Framer & Linear (fluid micro-interactions, smooth tab transitions, floating command bar, dark luxury feel), and Stripe/Awwwards-winning showcase sites.

PROFILE CONTENT:
- Name: Gautam Kumar | Full Stack Developer | Computer Science (AI & Analytics)
- Degree: B.Tech – CSE (AI & Analytics) @ MIT School of Computing, MIT-ADT University, Pune | CGPA: 8.32 / 10.0
- Location: Pune, Maharashtra, India
- Email: gautamkr.71019@gmail.com | Phone: +91 9931211603
- LinkedIn: linkedin.com/in/gautamkumar | GitHub: github.com/gautamkumar
- Internship: Software Developer Intern @ Innobyte [June 2025 – November 2025] - Java features across 3+ sprint cycles, reduced bugs ~30%, 100% commit traceability via Git/GitHub.
- Projects:
  1) No-Code Visual ML Platform (React.js, Python, Flask, AI, Data Analytics - cut setup ~70%, <2s Flask response).
  2) Bank Management System – ATM Desktop Application (Java, MySQL, JDBC, Java Swing, OOP - deposit/withdraw/PIN change, 3-step registration).
  3) Life Plan 360° – AI Wealth Management Platform (Next.js, Tailwind CSS, Supabase, AI Analytics - 60% manual reduction, 85%+ relevance).
- Certifications: Microsoft AI & ML (Coursera), AWS Cloud Foundations (AWS Academy), Cybersecurity (Cisco), Data Modeling in Power BI (Microsoft), Advanced Java (LearnQuest).
- Achievements: Smart India Hackathon (SIH) 2025 participant, 8.32 CGPA.`;
