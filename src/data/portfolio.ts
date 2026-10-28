export const portfolio = {
  name: "Md Tameem Rahman",
  role: "Machine Learning & Full-Stack Developer",
  tagline:
    "CSE graduate from RUET building privacy-preserving AI systems and full-stack web apps.",
  about: [
    "I'm a Computer Science & Engineering graduate from Rajshahi University of Engineering & Technology (RUET). My work sits at the intersection of machine learning, security, and web development.",
    "My thesis focuses on privacy-preserving federated intrusion detection: training models across distributed networks without sharing raw traffic data. I've also built a dual-branch CNN for image forgery detection and worked with LLMs during my industrial attachment at Chorcha EdTech.",
    "Alongside research, I build full-stack apps with Next.js and MongoDB, and I've held leadership roles at RUET and in my alumni community.",
  ],
  focus: ["AI Engineer", "Data Analysis", "LLM Applications", "Full-Stack Web Development"],
  location: "Rajshahi, Bangladesh",
  email: "tameemrahman700@gmail.com",
  phone: "+880 1710-768700",
  socials: {
    github: "https://github.com/TameemTR",
    linkedin: "https://linkedin.com/in/tameem-rahman-437558347",
  },
  cvFile: "/Tameem_Rahman_CV.pdf",

  education: [
    {
      school: "Rajshahi University of Engineering & Technology",
      degree: "BSc in Computer Science & Engineering",
      period: "Mar 2022 – Aug 2026",
    },
    {
      school: "New Govt. Degree College, Rajshahi",
      degree: "Higher Secondary Certificate (HSC), Science",
      period: "2018 – 2020",
    },
    {
      school: "Govt. Laboratory High School, Rajshahi",
      degree: "Secondary School Certificate (SSC), Science",
      period: "2010 – 2018",
    },
  ],

  skills: [
    { group: "Programming Languages", items: ["C", "C++", "Python", "JavaScript"] },
    { group: "ML / DL", items: ["Scikit-learn", "OpenCV", "PyTorch", "TensorFlow", "Optuna"] },
    { group: "LLM / AI", items: ["LangChain", "LangGraph", "LangSmith", "Ollama", "RAG", "MCP"] },
    { group: "ML Deployment & APIs", items: ["FastAPI", "Streamlit"] },
    { group: "Web Development", items: ["HTML", "CSS", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
    { group: "Tools", items: ["Git", "GitHub", "Linux", "Firebase"] },
  ],

  experience: [
    {
      role: "Industrial Attachment Trainee",
      company: "Chorcha EdTech Ltd., Rajshahi",
      period: "Mar 2025 – Apr 2025",
      points: [
        "Developed LLM-based MCQ validation and doubt-solving systems.",
        "Built a scalable geolocation solution for identifying Bangladesh's administrative divisions from coordinates.",
        "Gained experience in prompt engineering, LLM application development, and structured data processing.",
      ],
      tech: ["Python", "LLMs", "Prompt Engineering", "Geospatial Data Processing"],
    },
  ],

  projects: [
    {
      title: "Privacy-Preserving Federated Intrusion Detection",
      type: "Thesis",
      period: "Oct 2025 – Aug 2026",
      description:
        "CNN-based network intrusion detection models trained across distributed clients without sharing raw traffic data. Selective parameter sharing addresses concept shift across heterogeneous networks.",
      highlights: ["93.23% accuracy", "0.9689 AUC-ROC"],
      tech: ["Federated Learning", "CNN", "PyTorch", "NIDS"],
      github: "",
      live: "",
    },
    {
      title: "Image Forgery Detection",
      type: "Research",
      period: "Jul 2025 – Mar 2026",
      description:
        "Dual-branch CNN combining a pretrained ResNet18 RGB stream with a noise-residual branch to capture both semantic and low-level forensic artifacts. Evaluated cross-dataset generalization on CASIAv1, Columbia, Coverage, and IMD2020.",
      highlights: ["98.9% accuracy", "0.999 AUC-ROC (in-domain)"],
      tech: ["PyTorch", "ResNet18", "OpenCV", "Computer Vision"],
      github: "",
      live: "",
    },
    {
      title: "Car Doctor Pro",
      type: "Full-Stack Project",
      period: "Oct 2024 – Jan 2025",
      description:
        "Auto servicing booking platform with live search filtering, multi-provider authentication (Google/GitHub OAuth), protected routes via Edge Middleware, and full booking CRUD.",
      highlights: [],
      tech: ["Next.js 14", "React", "MongoDB Atlas", "NextAuth.js", "Tailwind CSS", "DaisyUI"],
      github: "",
      live: "",
    },
    {
      title: "Diabetes Prediction App",
      type: "ML Project",
      period: "Jan 2025 – Feb 2025",
      description:
        "End-to-end app that predicts diabetes risk from patient health data with real-time inference and secure user authentication using SQLite and password hashing.",
      highlights: [],
      tech: ["Streamlit", "Scikit-learn", "TensorFlow", "SQLite", "Joblib"],
      github: "",
      live: "",
    },
  ],

  // Placeholder: we'll fill these in once you collect your certificates
  certificates: [
    {
      title: "Certificate title",
      issuer: "Issuer name",
      date: "Month Year",
      category: "AI/ML",
      image: "/certificates/example.png",
      link: "",
    },
  ],

  leadership: [
    { role: "Joint Secretary", org: "Rajshahi City Association, RUET", period: "Jul 2025 – Jul 2026" },
    { role: "Organizing Secretary", org: "RUET Computing Society", period: "Dec 2025 – Aug 2026" },
    { role: "Treasurer", org: "Lab'18 Alumni Association, Rajshahi Govt. Laboratory High School", period: "Jun 2022 – Present" },
  ],
};