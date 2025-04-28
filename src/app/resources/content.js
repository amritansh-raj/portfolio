import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Amritansh",
  lastName: "Raj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front-End Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/amritansh-raj",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amritansh-raj-864960256/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/amritansh_raj21",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:amritansh.raj21@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-End Developer and Devops Engineer</>,
  subline: (
    <>
      I'm Amritansh, a Front-End Developer and DevOps Engineer at{" "}
      <InlineCode>Team ERP</InlineCode>, where I build seamless interfaces and
      scalable systems.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/amritansh-raj",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Amritansh is a developer and engineer passionate about crafting seamless
        digital experiences and building scalable infrastructure. His work
        bridges user-centric front-end design with the robustness of modern
        DevOps practices.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Team ERP",
        timeframe: "May 2023 - Present",
        role: "Software Developer Intern",
        achievements: [
          <>
            Contributed to TEAM ERP@KIET, a student-led in-house ERP system,
            enhancing key modules like Marks Monitoring, Hostel Management, and
            Academics.
          </>,
          <>
            Developed and maintained features for modules including Report
            Generation, Controller of Examination, and Accounts, improving
            system reliability and usability.
          </>,
          <>
            Gained practical experience during an internship at TEAM ERP,
            working across development, testing, and deployment of real-world
            ERP solutions.
          </>,
        ],
        images: [
          {
            src: "/images/work/erp.png",
            alt: "Student Portal",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/hrms.png",
            alt: "HRMS",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Zeniamobile",
        timeframe: "Jan 2025 – March 2025",
        role: "React Developer - Trainee - Intern - Full-time",
        achievements: [
          <>
            Developed a web application using React for the frontend and
            integrated it with backend APIs.
          </>,
          <>
            Deployed the application on Vercel for frontend hosting and also
            used AWS EC2 instance for same.
          </>,
          <>
            Gained hands-on experience with cloud deployments, version control,
            and responsive UI development.
          </>,
        ],
        images: [
          {
            src: "/images/work/zenia.png",
            alt: "Biotronik",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "KIET Group of Institutions",
        description: <>Pursuing major in Computer Science.</>,
      },
    ],
  },
  languages: {
    display: true,
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "JavaScript",
      },
      {
        name: "TypeScript",
        icon: "TypeScript",
      },
      {
        name: "Python",
        icon: "Python",
      },
      {
        name: "C++",
        icon: "C++",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "React.js",
        description: (
          <>
            Building fast, scalable front-end applications with React,
            TypeScript, and modern libraries.
          </>
        ),
        images: [
          {
            src: "/images/projects/portal.png",
            alt: "Student Portal",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/epoque.png",
            alt: "Epoque'25",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building next-gen fullstack apps with Next.js, API Routes, Server
            Actions, and Supabase.
          </>
        ),
        images: [
          {
            src: "/images/projects/ieee.png",
            alt: "IEEE-R-10 Codethon",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/rann.png",
            alt: "Rann",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>
            Rapidly building responsive and accessible UIs using Tailwind CSS
            and utility-first workflows.
          </>
        ),
        images: [],
      },
      {
        title: "Docker",
        description: (
          <>
            Containerizing applications and managing development environments
            with Docker and Docker Compose.
          </>
        ),
        images: [],
      },
      {
        title: "CI/CD",
        description: (
          <>
            Automating deployments and workflows using GitHub Actions,
            Cloudflare Tunnels, and DevContainers.
          </>
        ),
        images: [],
      },

      {
        title: "DevOps Tools",
        description: (
          <>
            Working with Linux servers, SSH configurations, and setting up
            scalable backend infrastructure.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
