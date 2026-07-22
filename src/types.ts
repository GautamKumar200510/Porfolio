export interface PersonalInfo {
  name: string;
  title: string;
  degree: string;
  specialization: string;
  college: string;
  cgpa: string;
  email: string;
  phone: string;
  location: string;
  permanentAddress: string;
  linkedIn: string;
  github: string;
  leetcode?: string;
  dob: string;
  languages: string[];
  summary: string;
  bioHeadline: string;
  availability: string;
}

export interface ExpertiseCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-100
    category: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface Internship {
  id: string;
  company: string;
  parentCompany?: string;
  role: string;
  department: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  skills: string[];
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'AI / Machine Learning' | 'Web App / Fintech' | 'Desktop App / Java' | 'Analytics';
  keySkills: string[];
  summary: string;
  detailedDescription: string;
  featured: boolean;
  metrics: string[];
  liveDemoType?: 'ml-workflow' | 'wealth-calculator' | 'atm-demo';
  githubUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  stream?: string;
  grade: string;
  period: string;
  boardOrUniv: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  skills: string[];
  description: string;
  iconName: string;
  badgeColor: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
}
