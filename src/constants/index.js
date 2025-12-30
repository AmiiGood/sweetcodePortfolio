const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const experiences = [
  {
    id: 1,
    company: "Sweet Code",
    position: "Fullstack Developer",
    period: "Sep 2024 - Nov 2024",
    location: "León, Guanajuato",
    description: [
      "Developed custom web interfaces for multiple clients",
      "Implemented scalable solutions with Angular and Node.js",
    ],
    technologies: ["Angular", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    company: "Itsmart Solutions",
    position: "Frontend Developer",
    period: "Apr 2024 - Aug 2024",
    location: "León, Guanajuato",
    description: [
      "Built ERP systems using Angular and TypeScript",
      "Developed BGW and Geolocator (geolocation tools)",
      "Integrated external APIs and services",
    ],
    technologies: ["Angular", "TypeScript", "APIs", "Git"],
  },
];

const additionalSkills = [
  "Proactivo en mantenerme actualizado con las últimas tecnologías web y mejores prácticas de desarrollo",
  "Experiencia con herramientas de control de versiones como Git y metodologías ágiles",
  "Capacidad de trabajo en equipo y comunicación efectiva",
  "Nativo en Español e Inglés con certificación TOEFL B2",
];

const education = [
  {
    id: 1,
    institution: "Universidad Tecnológica de León",
    degree: "Técnico Superior Universitario",
    field:
      "Tecnologías de la Información - Desarrollo de Software Multiplataforma",
    period: "Graduado en Agosto 2024",
    location: "León, Guanajuato",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Compose"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Deno", ".NET"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/AmiiGood",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://www.instagram.com/alexiiss.ts/#",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  experiences,
  education,
  additionalSkills,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Spotify Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[25vh] left-40", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Spotify Clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Spotify Clone is a sleek and modern platform designed for listening to music.",
            "Instead of a simple music player, it delivers an immersive experience with bold visuals, interactive playlists, and smooth navigation.",
            "Think of it like walking into a flagship Spotify store—but right from your phone or laptop.",
            "It's built with Astro and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "spotify.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://spotify-clone-beta-lovat-70.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "spotify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Koari",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-50",
      windowPosition: "top-[30vh] left-300",
      children: [
        {
          id: 1,
          name: "Koari.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Buy any game with Koari, the ecommerce platform tailored for gamers.",
            "Instead of navigating complex sites, Koari offers a streamlined experience focused on gaming needs—easy browsing, secure checkout, and personalized recommendations.",
            "Think of it like having a dedicated gaming store in your pocket, ready to deliver the latest titles and deals straight to you.",
            "It's built with React.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "koari.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://burguir-front.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "koari.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Sweet Core",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[3vh] left-200",
      children: [
        {
          id: 1,
          name: "Sweet Core.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "For Pc´s lovers: Sweet Core is a ecommerce app designed for ordering components, accesories, and full builds.",
            "Instead of navigating complex sites, Sweet Core offers a streamlined experience focused on PC needs—easy browsing, secure checkout, and personalized recommendations.",
            "Think of it like having a dedicated PC store in your pocket, ready to deliver the latest gear straight to you.",
            "It’s built with React and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "sweetcore.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sweetcore.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "sweetcore.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/confrence-me.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpg",
      description: [
        "Hey! I’m Alexis 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed:)",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      href: "/your/resume/CV_AlexisAlvarez.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.webp",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
