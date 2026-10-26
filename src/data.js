// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Ken Gerard M. Aguilar',
  roles: ['Data Analyst', 'Frontend Developer', 'Machine Learning Developer'],
  tagline:
    'I turn messy data into clear dashboards, automate the boring workflows, and build responsive websites with React.',
  email: 'kengm.aguilar@gmail.com',
  github: 'https://github.com/kgmaguilar',
  linkedin: 'https://linkedin.com/in/ken-aguilar-906ba7337',
  about: [
    'I hold a BS in Computer Science from the University of Santo Tomas with a specialization in Data Science.',
    'At DHL Express Philippines I design interactive Power BI dashboards with advanced DAX and automate Excel workflows with Power Automate. Before that, I built the official Quantum Review Center website as its frontend developer.',
    'My research explores a hybrid ELM-SVM model for predicting diabetes subtypes from genetic markers and lifestyle data.',
  ],
}

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = sections.map((s) => s.id)

export const skills = [
  {
    title: 'Programming Languages',
    icon: '</>',
    items: ['Java', 'Python', 'HTML', 'CSS', 'SQL', 'JavaScript'],
  },
  {
    title: 'Technologies',
    icon: '{ }',
    items: ['React', 'PostgreSQL / MySQL', 'Power Apps', 'Node.js', 'Flutter'],
  },
  {
    title: 'Tools & Libraries',
    icon: '⚙',
    items: ['Git', 'GitHub', 'NPM', 'Scikit-Learn', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
  },
]

export const experience = [
  {
    company: 'DHL Express Philippines',
    role: 'Data Analyst Intern',
    team: 'First Choice Team',
    location: 'Makati City, NCR',
    period: 'Feb 2026 – Jun 2026',
    bullets: [
      'Designed and optimized interactive Power BI dashboards for the First Choice Team, using advanced DAX measures to streamline complex analytics workflows.',
      'Automated manual Excel data extraction and transformation with Power Automate, ensuring real-time reporting accuracy.',
      "Worked closely with the team's Senior Data Analysts and other interns to deliver comprehensive, appealing, and functional dashboards and automated workflows.",
    ],
    tags: ['Power BI', 'DAX', 'Power Automate', 'Excel'],
  },
  {
    company: 'Quantum Review Center',
    role: 'Frontend Developer',
    team: 'Quantum Review Center Website',
    location: '',
    period: 'May 2024 – Aug 2024',
    bullets: [
      'Developed the official Quantum Review Center website as the Frontend Developer.',
      'Coordinated with the Project Manager, UI/UX Designer, and Backend Developer on their preferences for the interface.',
      'Ensured a smooth and responsive website for the users.',
    ],
    tags: ['HTML', 'React', 'Tailwind CSS'],
  },
]

export const research = {
  title: 'Hybrid ELM-SVM Model for Predicting Diabetes Subtypes',
  subtitle: 'Using Genetic Markers and Lifestyle Data',
  role: 'Machine Learning Developer',
  period: 'Jan 2025 – Dec 2025',
  bullets: [
    'Hybridized and trained two machine learning models to improve classification accuracy and reduce training time for diabetes subtype identification.',
    'Implemented data preprocessing and optimization techniques to enhance model performance.',
  ],
  tags: ['Python', 'Scikit-Learn', 'ELM', 'SVM', 'Machine Learning'],
}

export const education = {
  school: 'University of Santo Tomas',
  location: 'Manila, NCR',
  degree: 'Bachelor of Science in Computer Science',
  period: 'August 2022 – June 2026',
  specialization: 'Data Science, Computer Science',
  coursework: [
    'Machine Learning',
    'Intelligent Systems',
    'Data Structures & Algorithms',
    'Information Management',
    'Computer Programming',
    'Web Development',
    'Application Development',
    'Data Analysis & Visualization',
  ],
}
