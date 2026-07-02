import {
  BarChart3,
  Database,
  Code2,
  Brain,
  Users,
  LineChart,
  Activity,
  PieChart,
  LayoutDashboard,
  Sparkles,
  Lightbulb,
  MessageSquare,
  GitBranch,
  TrendingUp,
} from 'lucide-react';

export const profile = {
  name: 'Priya Tanu Sawant',
  roles: [
    'Aspiring Data Analyst',
    'Power BI Developer',
    'Python Enthusiast',
    'Data Storyteller',
  ],
  tagline:
    'Transforming raw data into meaningful business insights through analytics, visualization, and machine learning.',
  intro:
    'Motivated and detail-oriented Computer Engineering student with skills in Data Analytics, Power BI, SQL, Python, and Data Visualization. Experienced in developing interactive dashboards and analytical solutions to transform data into meaningful business insights. Seeking an opportunity to apply analytical and problem-solving skills in a Data Analyst role.',
  location: 'Maharashtra, India',
  email: 'priyasawant7094@gmail.com',
  phone: '9075707303',
  linkedin: 'https://www.linkedin.com/in/priya-sawant-149b10358',
  github: 'https://github.com/priyasawant7094-lang',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: 3, suffix: '+', label: 'Projects Completed' },
  { value: 5, suffix: '+', label: 'Technical Skills' },
  { value: null, label: 'Data Analytics Enthusiast' },
  { value: null, label: 'Continuous Learner' },
];

export const aboutPoints = [
  'Computer Engineering student',
  'Aspiring Data Analyst',
  'Fresher',
  'Passionate about Business Intelligence',
  'Interested in Data Visualization',
  'Interested in Machine Learning',
  'Interested in solving business problems through data',
];

export const interests = [
  'Data Analytics',
  'Data Visualization',
  'Business Intelligence',
  'Power BI',
  'SQL',
  'Python',
  'Machine Learning',
  'Continuous Learning',
];

export type Skill = { name: string; level: number };
export type SkillGroup = {
  title: string;
  icon: typeof BarChart3;
  accent: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Code2,
    accent: 'from-blue-500 to-blue-700',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    title: 'Visualization & Tools',
    icon: LayoutDashboard,
    accent: 'from-sky-500 to-blue-600',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'Microsoft Excel', level: 90 },
      { name: 'Tableau', level: 75 },
      { name: 'MySQL', level: 78 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 85 },
    ],
  },
  {
    title: 'Core Analytics',
    icon: BarChart3,
    accent: 'from-indigo-500 to-blue-700',
    skills: [
      { name: 'Data Cleaning', level: 86 },
      { name: 'Data Visualization', level: 88 },
      { name: 'Dashboard Development', level: 87 },
      { name: 'Business Intelligence', level: 83 },
      { name: 'Data Analysis', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    accent: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Critical Thinking', level: 88 },
      { name: 'Communication', level: 86 },
      { name: 'Teamwork', level: 90 },
      { name: 'Continuous Learning', level: 95 },
    ],
  },
];

export const skillIcons: Record<string, typeof BarChart3> = {
  Python: Code2,
  SQL: Database,
  'Power BI': LayoutDashboard,
  'Microsoft Excel': PieChart,
  Tableau: BarChart3,
  MySQL: Database,
  GitHub: GitBranch,
  'VS Code': Code2,
  'Data Cleaning': Sparkles,
  'Data Visualization': LineChart,
  'Dashboard Development': LayoutDashboard,
  'Business Intelligence': TrendingUp,
  'Data Analysis': BarChart3,
  'Problem Solving': Lightbulb,
  'Critical Thinking': GitBranch,
  Communication: MessageSquare,
  Teamwork: Users,
  'Continuous Learning': Activity,
};

export type Project = {
  id: string;
  title: string;
  category: 'Data Visualization' | 'Machine Learning';
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights?: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'mental-health',
    title: 'Mental Health Detection & Classification Using Deep Learning',
    category: 'Machine Learning',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Developed a multimodal deep learning system for detecting and classifying mental health conditions using text, speech, and facial expression data. Combined CNN and LSTM architectures to improve prediction accuracy.',
    technologies: ['Python', 'CNN', 'LSTM', 'Deep Learning'],
    features: [
      'Multimodal learning',
      'Text analysis',
      'Speech analysis',
      'Facial expression recognition',
      'Mental health classification',
    ],
    highlights: [
      'Depression',
      'Anxiety',
      'Stress',
      'Happy',
      'Sad',
      'Angry',
      'Neutral',
    ],
    github: 'https://github.com/priyasawant7094-lang',
  },
  {
    id: 'hospital-dashboard',
    title: 'Smart Hospital Dashboard',
    category: 'Data Visualization',
    image:
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Created an interactive healthcare dashboard to analyze patient demographics, wait times, and referral trends. Developed KPI reports and visualizations to support data-driven decision-making.',
    technologies: ['Power BI', 'Excel'],
    features: [
      'Patient Demographics',
      'Wait Time Analysis',
      'Referral Trends',
      'Department Performance',
      'KPI Cards',
      'Interactive Filters',
      'Data-driven Decision Making',
    ],
    github: 'https://github.com/priyasawant7094-lang',
  },
  {
    id: 'superstore-sales',
    title: 'Superstore Sales Dashboard',
    category: 'Data Visualization',
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Built an interactive sales dashboard to analyze revenue, profit, and customer trends. Generated actionable business insights through data visualization and performance analysis.',
    technologies: ['Power BI', 'Excel'],
    features: [
      'Revenue Analysis',
      'Profit Analysis',
      'Customer Trends',
      'Sales Performance',
      'Regional Breakdown',
      'Interactive Charts',
      'KPI Cards',
    ],
    github: 'https://github.com/priyasawant7094-lang',
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    institution: "SSPM's College of Engineering, Kankavli",
    period: '2022 – 2026',
    cgpa: '7.15',
    description:
      'Building a strong foundation in computer science, programming, data structures, algorithms, database management, and data analytics. Developing proficiency in Python, SQL, Power BI, and machine learning. Completed projects in deep learning, business intelligence, and data visualization.',
    status: 'Pursuing',
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  file: string;
  color: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    file: '/certificates/Priya_Sawant_591726.pdf',
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM Cognitive Class',
    file: '/certificates/IBM_PY0101EN_Certificate___Cognitive_Class.pdf',
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    file: '/certificates/Microsoft_Learn.pdf',
    color: 'from-slate-600 to-slate-800',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata Forage',
    file: '/certificates/python1.pdf',
    color: 'from-indigo-500 to-blue-700',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    file: '/certificates/Microsoft_Learn.pdf',
    color: 'from-cyan-500 to-blue-600',
  },
];

export const achievements = [
  'Developed multiple Power BI dashboards using real-world datasets.',
  'Applied SQL and Power BI to derive business insights from raw data.',
  'Completed industry-recognized certifications in Data Analytics, Python, Cybersecurity, and Data Visualization.',
  'Strong understanding of data analysis, reporting, and dashboard development.',
];

export const resumeSummary =
  'Motivated and detail-oriented Computer Engineering student with skills in Data Analytics, Power BI, SQL, Python, and Data Visualization. Experienced in developing interactive dashboards and analytical solutions to transform data into meaningful business insights. Seeking an opportunity to apply analytical and problem-solving skills in a Data Analyst role.';
