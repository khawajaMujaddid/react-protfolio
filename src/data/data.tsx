import {
  AcademicCapIcon,
  CalendarIcon,
  // DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mujaddid Mahmood',
  description: 'Portfolio website of Mujaddid Mahmood',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mujaddid Mahmood.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pakistan based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Euphoria XR LLC</strong> helping build a modern web applications, Server
        Architect.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me coding and coming up with new{' '}
        <strong className="text-stone-100"> solutions</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Landmarks</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I am a senior web developer with over 5 years of experience in Ruby on Rails, React, and Node.js. I specialize in building robust and scalable web applications, integrating them with other systems, and optimizing them for speed and scalability. I have excellent problem-solving, communication, and collaboration skills, and I follow agile development methodologies to deliver projects on time `,
  aboutItems: [
    {label: 'Location', text: 'Pakistan', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Interests', text: 'Motorcycles, Coding, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'Lahore Garrison University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Euphoria XR LLC', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Urdu',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Ruby on Rails',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'web3 pandas',
    description: 'A software company profilio website',
    url: 'https://web3pandas.com/',
    image: porfolioImage1,
  },
  {
    title: 'Interapp',
    description: 'An app for AR/VR experience',
    url: 'https://www.start.interappusa.com/',
    image: porfolioImage2,
  },
  {
    title: 'PersonCare',
    description: 'An platform for patients and medical professionals to interact',
    url: 'https://www.person.care/',
    image: porfolioImage3,
  },
  {
    title: 'Staffity',
    description: 'To track employment history of employees for one organization to another',
    url: 'https://staging.staffity.io/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015-2019',
    location: 'COMSATS Institute of Information Technology',
    title: 'BASc',
    content: <p>Bachelor of Applied Science (BASc), Computer science</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2021 - Present',
    location: 'Freelance Developer',
    title: 'Full Stack Developer',
    content: (
      <p>
        Working as an independent Full Stack Developer using Ruby on Rails, React JS, Node JS, Express, and Next JS.
      </p>
    ),
  },
  {
    date: 'October 2018 - July 2021',
    location: 'Euphora XR LLC',
    title: 'Sr. Ruby on Rails & React Developer',
    content: (
      <p>
        Worked as a Senior Ruby on Rails & React Developer. Led a team of developers and trained new interns which
        helped me tremendously in honing my skills.
      </p>
    ),
  },
  {
    date: 'May 2017 - August 2018',
    location: 'Gexton IT',
    title: 'Ruby on Rails Developer',
    content: <p>Worked as a Ruby on Rails & React developer.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Hassan Ali',
      text: 'Mujaddid is a very talented individual, he is really committed and focused about his work. He is the person I would trust to build my project.',
    },
    {
      name: 'Sheroz Irfan',
      text: 'Mujaddid al Mghrbi is a highly skilled and reliable Ruby on Rails developer. They delivered efficient and maintainable code for our project and had great communication throughout. I would definitely recommend them',
    },
    {
      name: 'Will brown',
      text: 'Mujaddid is a skilled and reliable full-stack developer with expertise in Ruby on Rails, React, and Node. They consistently delivered high-quality code that was performant and scalable. Working with them was seamless, and I highly recommend them for your next project.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me incase of any query about your project',
  items: [
    {
      type: ContactType.Email,
      text: 'Mujaddid Mahmood',
      href: 'mailto:kh.mujaddid36@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'Mujaddid Mahmood',
      href: 'https://github.com/khawajaMujaddid',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [{label: 'Github', Icon: GithubIcon, href: 'https://github.com/khawajaMujaddid'}];
