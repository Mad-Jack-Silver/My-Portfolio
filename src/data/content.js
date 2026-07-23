export const profile = {
  name: "Syed Hussain Abbas Rizvi",
  role: "Aspiring ML Engineer — Machine Learning & Deep Learning",
  tagline:
    "Computer Science graduate building real, end-to-end ML and deep learning projects — regression, classification, clustering, and CNN-based image classification with model deployment.",
  location: "Rawalpindi, Pakistan",
  email: "abbashussain6742@gmail.com",
  github: "https://github.com/Mad-Jack-Silver",
  linkedin: "https://www.linkedin.com/in/syed-hussain-abbas-rizvi",
  resumeUrl: "https://drive.google.com/file/d/13uquHeb7N4UmbPJWI8SaSRRq3Uhk7tDi/view?usp=sharing",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate with hands-on experience building end-to-end machine learning and deep learning projects, from regression and classification to CNN-based image classification with real model deployment. I work mainly in Python, Scikit-learn, PyTorch, and Pandas, with a focus on modular, production-quality code and unit testing over one-off notebooks.",
    "Alongside the technical work, I bring 3+ years of professional experience in operations, data management, and client-facing roles — which means I combine technical ability with real project ownership and communication, not just coursework.",
    "Currently expanding into Natural Language Processing (NLP) as the next step after computer vision.",
  ],
  path: [
    { label: "Foundation", detail: "Notebook-style Python ML (Titanic-dataset level)" },
    { label: "Machine Learning", detail: "Regression, classification, clustering — 3 full projects" },
    { label: "Deep Learning", detail: "CNNs, transfer learning, Grad-CAM explainability" },
    { label: "Now: NLP", detail: "Expanding into Natural Language Processing" },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Modern Languages (NUML), Rawalpindi",
    year: "2022 – 2026",
    detail: "CGPA 3.55 / 4.0",
  },
  certifications: [
    "AI, Machine Learning & Deep Learning — NAVTTC, Government of Pakistan",
    "PFTP Front-end Development Certificate",
  ],
  honors: [
    "Recipient, Prime Minister's Youth Laptop Scheme (2023) — Government of Pakistan",
    "Finalist, PakCrypt Competition (2025)",
    "Participant, NUMLogic Inter-University Competitions (2024–2025)",
  ],
};

export const experience = [
  {
    title: "Executive Assistant to CEO",
    org: "Regal Publications — Rawalpindi, Pakistan",
    period: "Jan 2025 – Present",
    points: [
      "Manage the CEO's daily operations and strategic priorities, improving workflow efficiency.",
      "Maintain and analyze the company sales database (200+ client records) in Excel to support business development.",
      "Design and execute email marketing campaigns using targeted client segmentation.",
      "Draft business contracts and prepare documentation for executive review, ensuring legal compliance.",
    ],
  },
  {
    title: "Data Verification & Customer Support Representative",
    org: "North American Directory Services — Rawalpindi, Pakistan",
    period: "Jun 2023 – Dec 2024",
    points: [
      "Extracted and verified business data from 500+ hotel and restaurant websites.",
      "Conducted 50+ daily outbound calls for data gathering and verification, building strong client relationships.",
      "Updated and maintained internal databases with real-time information.",
    ],
  },
  {
    title: "Database Coordinator & Customer Support Representative",
    org: "North American Directory Services — Rawalpindi, Pakistan",
    period: "Oct 2019 – Feb 2022",
    points: [
      "Managed database updates for 300+ hotel properties across America.",
      "Coordinated proof reviews and quality checks.",
      "Scheduled regional deliveries of printed directories, ensuring 99% on-time distribution.",
    ],
  },
];

export const skills = {
  "Programming Languages": ["Python", "C++", "Java", "C#"],
  "Machine Learning & AI": [
    "Regression", "Classification", "Clustering", "CNNs",
    "Transfer Learning (ResNet18)", "Grad-CAM", "NLP (in progress)",
  ],
  "Frameworks & Libraries": ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "Streamlit"],
  "Web": ["HTML", "CSS", "JavaScript"],
  "Tools & Platforms": ["Git/GitHub", "SQL", "Unity (C#)", "ARCore", "Firebase", "Excel"],
};

export const projects = [
  {
    title: "Plant Disease Classifier",
    type: "Deep Learning",
    summary:
      "CNN-based image classifier (ResNet18, transfer learning) on the PlantVillage dataset — 38 classes, ~54,000 images.",
    details:
      "Implemented Grad-CAM visualization to interpret predictions and highlight disease-affected leaf regions. Delivered as modular, production-quality code with unit tests and a live Streamlit demo.",
    tags: ["Python", "PyTorch", "ResNet18", "Grad-CAM", "Streamlit"],
    githubUrl: "https://github.com/Mad-Jack-Silver/Plant-Diieseas-Classfier-CNN",
    demoUrl: "",
  },
  {
    title: "House Price Prediction System",
    type: "Machine Learning",
    summary: "Regression pipeline predicting property prices — R² of 0.920 on held-out data.",
    details:
      "Applied feature engineering and cross-validation for reliable performance estimates. Compared Random Forest and Gradient Boosting with hyperparameter tuning to select the best model. Deployed as an interactive Streamlit app for real-time predictions.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Mad-Jack-Silver/House-Price-Prediction-System",
  },
  {
    title: "Customer Churn Prediction System",
    type: "Machine Learning",
    summary: "Classification model for churn risk — 74.3% accuracy, 51.0% precision, 77.7% recall.",
    details:
      "Used stratified k-fold cross-validation for robust evaluation. Engineered features from customer behavior data and applied ensemble methods to improve predictive accuracy. Built a Streamlit interface for real-time churn risk scoring.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Mad-Jack-Silver/Customer-Churn-Prediction-System",
  },
  {
    title: "Customer Segmentation Analysis",
    type: "Machine Learning",
    summary: "RFM analysis + K-Means clustering to segment customers into actionable groups.",
    details:
      "Engineered behavioral features from transaction data to identify high-value customer segments. Built an interactive dashboard to visualize segment characteristics and support business decisions.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/Mad-Jack-Silver/Customer-Segmentation-RFM-Kmeans",
  },
];

export const certifications = [
  {
    title: "AI, Machine Learning & Deep Learning",
    issuer: "NAVTTC, Government of Pakistan",
    date: "July 2024",
    image: "/certificates/navttc-ai-ml.jpg",
    note: "Program completion shown via candidate portal — formal certificate to follow",
  },
  {
    title: "Front-End Development",
    issuer: "PFTP — Professional Freelancing Training Program",
    date: "Oct 2024",
    credentialId: "B19004186",
    image: "/certificates/pftp-frontend.jpg",
  },
];

export const featuredProject = {
  title: "GoGuide",
  subtitle: "AR Indoor Mall Navigation System",
  type: "Featured — Final Year Project",
  summary:
    "AR-based indoor mall navigation Android app for Safa Gold Mall, Islamabad, built with a team using Unity, ARCore, and Flutter.",
  details:
    "Unity + ARCore power the 3D mall model and AR navigation; Flutter handles the app layer (login/signup, building directory, help & support). Designed an interactive UI with a mini-map, shop selection, and real-time AR directional markers. Integrated Firebase for cloud-based map storage, authentication, and deployment. Presented at NUML's Open House exhibition.",
  tags: ["Unity", "C#", "ARCore", "Flutter", "Android", "Firebase"],
  githubUrl: "TODO", // add your GoGuide repo URL here
  demoUrl: "",
};
