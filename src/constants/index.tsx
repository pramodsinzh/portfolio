/**
 * @copyright 2025 pramod_singh
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  NavLinksType,
  ProjectTypes,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Twitter,
  User,
  Linkedin,
  Github,
} from 'lucide-react';

const navLinks: NavLinksType[] = [
  { name: 'Home', link: '#hero', icon: <Home /> },
  {
    name: 'Projects',
    link: '#projects',
    icon: <Briefcase />,
  },
  { name: 'About', link: '#about', icon: <User /> },
  {
    name: 'Services',
    link: '#services',
    icon: <Settings />,
  },
  { name: 'Resume', link: '#resume', icon: <FileText /> },
  {
    name: 'Reviews',
    link: '#testimonials',
    icon: <MessageCircle />,
  },
  { name: 'Contact', link: '#contact', icon: <Mail /> },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/pramodsnz',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/pramod_sinzh',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://x.com/pramodsnz01',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: '/#',
  },
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/pramodsinzh',
  },
];

const projectData: ProjectTypes[] = [
  {
    title: "Blogify",
    description:
       "A modern full-stack blogging platform where only admins can create, publish, and manage blogs, while users can freely read posts and leave comments. Built with a focus on performance, clean UI, and scalable architecture.",
    image: "/images/blogify.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    // link: "#",
    github: "https://github.com/pramodsinzh/Blogify",
  },

  {
    title: "CMS for e-Commerce Platform",
    description:
      "A full-featured cms for e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/images/cms-ecommerce.png",
    tags: ["React", "Typescript", "NodeJS", "Next.js", "Tailwind"],
    // link: "#",
    github: "#",
  },
  {
    title: "RESTful Backend API",
    description:
      "A scalable backend application built using Node.js, Express, and MongoDB, providing secure RESTful APIs with full CRUD functionality, data validation, and efficient database operations. Designed for performance, maintainability, and real-world use cases.",
    image: "/images/backend.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Mongoose"
    ],
    // link: "#",
    github: "https://github.com/Broadway-Mern-Team/api-50/tree/pramod",
  },
  {
    title: "Password Manager",
    description:
      "A dual-version password management application featuring both a client-side localStorage implementation and a full-stack MongoDB-powered solution. Designed to securely store, manage, and sync passwords with a modern UI, responsive design, and smooth user experience.",
    image: "/images/password-manager.png",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "localStorage"
    ],
    // link: "#",
    github: "https://github.com/pramodsinzh/Password-Manager",
  },

  {
    title: "Todo App",
    description:
      "A clean and minimal Todo application built with React and Vite, featuring task creation, editing, deletion, completion tracking, and pinning important todos. Designed for productivity with a smooth UI and persistent localStorage support.",
    image: "/images/todo.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "localStorage",
      "UUID"
    ],
    // link: "#",
    github: "https://github.com/pramodsinzh/TodoList-App-React-",
  },
  {
    title: "Spotify Clone - Music app",
    description:
      "A modern music streaming app inspired by Spotify, featuring playlists, search, playback controls, and a responsive, dynamic UI.",
    image: "/images/music-app.png",
    tags: ["JavaScript", "HTML", "CSS"],
    // link: "#",
    github: "https://github.com/pramodsinzh/spotifyclone",
  }

];

const education: ExperienceType[] = [
  {
    year: '2019 – 2020',
    title: '+2 Science',
    institute: 'Himalayan White House International College',
    desc: 'Studied physics, chemistry, and mathematics with a strong emphasis on problem-solving and analytical skills.',
  },
  {
    year: '2021 – 2025',
    title: 'Bachelor of Information Technology',
    institute: 'Purbanchal University | Aryan College',
    desc: 'Focused on software development, web technologies, and database management systems.',
  },
  {
    year: '2025 - Present',
    title: 'MERN Stack Development Course',
    institute: 'Broadway Infosys',
    desc: 'Currently enrolled in a comprehensive MERN stack development course, learning to build full-stack applications with MongoDB, Express.js, React, and Node.js.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024 – 2025',
    title: 'Web Developement Basics',
    institute: 'Youtube / Self Learning',
    desc: 'Gained foundational knowledge in HTML, CSS, and JavaScript through online tutorials and projects.',
  },
  {
    year: '2025 – Present',
    title: 'MERN Stack Development Course',
    institute: 'Broadway Infosys',
    desc: 'Currently enrolled in a comprehensive MERN stack development course, learning to build full-stack applications with MongoDB, Express.js, React, and Node.js.',
  },
];

const tools: ToolsType[] = [

  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },

  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },

  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },

  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },

  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },

  {
    label: 'Postman',
    imgSrc: '/images/tools/postman.svg',
  },

  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },

  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'Github',
    imgSrc: '/images/tools/github.svg',
  },

];

const services: ServiceType[] = [
  {
    title: 'Web Development',
    desc: 'Building fast, responsive, and SEO-friendly websites using React, Next.js, Tailwind CSS, and modern web standards.',
    // projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive interfaces with a focus on usability, accessibility, and smooth user experience.',
    // projects: '58 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Brand Identity',
    desc: 'Creating simple and consistent visual identities through thoughtful typography, color systems, and layout design.',
    // projects: '58 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Full-Stack Development',
    desc: 'Developing complete web applications with secure REST APIs, and databases using the MERN stack.',
    // projects: '58 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];


const statsData: StatsType[] = [
  {
    number: '10+',
    label: 'Projects Built',
  },
  {
    number: '2+',
    label: 'Years of Learning & Practice',
  },
  {
    number: '5+',
    label: 'Technologies Used',
  },
];


const testimonials: TestimonialsType[] = [
  {
    name: 'Project Teammate',
    role: 'College Project Collaborator',
    image: ' ',
    text: 'Working together on multiple projects, Pramod consistently showed strong problem-solving skills and a solid understanding of both frontend and backend development. He was reliable, detail-oriented, and always open to learning new technologies.',
    link: '#',
  },
  {
    name: 'Training Mentor',
    role: 'MERN Stack Instructor',
    image: ' ',
    text: 'Pramod demonstrated great dedication during his MERN stack training. He quickly grasped core concepts, wrote clean code, and actively participated in building real-world projects. His learning mindset sets him apart.',
    link: '#',
  },
  {
    name: 'Peer Developer',
    role: 'Frontend Developer',
    image: ' ',
    text: 'Collaborating with Pramod was smooth and productive. He communicates clearly, understands UI/UX principles well, and delivers features on time. A dependable developer with strong technical fundamentals.',
    link: '#',
  },
];


export {
  socialLinks,
  projectData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};