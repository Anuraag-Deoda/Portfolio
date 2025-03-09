
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatarr,
  flaskIcon,
  djangoIcon,
  dockerIcon,
  sqlIcon,
  aiIcon,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatarr,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "I’m Anuraag, a Full Stack Developer with a passion for building seamless digital experiences. Based in Aurangabad, I specialize in React, Flask, Django, Docker, and AI-driven applications.",

    "Though I took an unconventional path as a second-year dropout, my curiosity and drive led me to develop AI-powered chatbots, Ed-Tech solutions, and automation tools that solve real-world problems.",

    "Beyond coding, I enjoy writing, playing chess, and exploring new technologies. I thrive in collaborative teams and love working on projects that challenge me to grow.",

    "Your visit to my portfolio means a lot—let’s build something amazing together! 🚀"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Chess Engine',
    description: 'An interactive and functional chess engine that uses Stockfish to determine the situation and suggest moves. It is built using Python.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/Anuraag-Deoda/Chess-Project-using-Python',
  },
  {
    name: 'Netflix clone',
    description: 'Built a fuhll stack netflix clone application using Nextjs, Typescript and Tailwindcss. Also used Mongodb to store the user credentials and etc.',
    image: memoryGame,
    source_code_link: 'https://github.com/Anuraag-Deoda/Netflix',
  },
  {
    name: 'StackOverflow with Integrated Chatbot',
    description: 'A completely functional full stack clone of StackOverflow with a chatbot that uses the GPT 3.5 turbo model to fetch the answers.',
    image: calculator,
    source_code_link: 'https://github.com/Anuraag-Deoda/StackOverflow',
  },
];

const memoji = {
  image: [avatarr],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for structuring web pages and ensuring accessibility for all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
      'I excel at using CSS and Tailwind CSS to create responsive and visually engaging web layouts that enhance user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
      'I have extensive experience in JavaScript, utilizing it to build interactive and dynamic web applications.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am proficient in React and Next.js, specializing in building scalable front-end applications with reusable components and efficient state management.',
  },
  {
    id: 'node',
    title: 'Node.js',
    icon: nodeIcon,
    description:
      'I have expertise in Node.js for backend development, handling REST APIs, authentication, and database interactions for full-stack applications.',
  },
  {
    id: 'python',
    title: 'Python',
    icon: pyIcon,
    description:
      'With extensive Python experience, I have developed AI-driven chatbots, automation scripts, and backend services using Flask and Django.',
  },
  {
    id: 'flask',
    title: 'Flask',
    icon: flaskIcon,
    description:
      'I am proficient in Flask, using it to build and deploy efficient backend APIs for various applications, including AI-powered chatbots.',
  },
  {
    id: 'django',
    title: 'Django',
    icon: djangoIcon,
    description:
      'I have hands-on experience in Django, developing robust and scalable backend applications with integrated authentication and database management.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I have experience working with AWS services such as EC2, RDS, and S3 for cloud-based deployment and scalable infrastructure management.',
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: dockerIcon,
    description:
      'I am skilled in Docker for containerizing applications, optimizing deployments, and managing microservices efficiently.',
  },
  {
    id: 'sql',
    title: 'SQL',
    icon: sqlIcon,
    description:
      'I have strong proficiency in SQL, managing relational databases and optimizing queries for efficient data handling.',
  },
  {
    id: 'nlp',
    title: 'AI & NLP',
    icon: aiIcon,
    description:
      'I have experience with AI, NLP, and LangChain, building intelligent chatbots and AI-driven applications.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
      'I am proficient in Git for version control, collaborating on projects, and managing code repositories effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I use GitHub for code collaboration, issue tracking, and open-source contributions, showcasing my work efficiently.',
  }
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
