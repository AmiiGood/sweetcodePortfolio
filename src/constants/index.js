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
    company: "Foam Creations México",
    position: "Fullstack Developer",
    period: "Jun 2025 — Present",
    current: true,
    location: "León, Guanajuato",
    initials: "FC",
    accent: "#0d9488",
    gradient: "linear-gradient(135deg, #34c759, #0d9488)",
    description: [
      "Built and integrated DBX Extralight, the defect reporting and tracking system used daily by the assembly and quality teams.",
      "Developed the Crocs validation system: PO matching plus generation and delivery of color QR codes.",
      "Develop and maintain scalable frontend and backend solutions with React and Node.js for internal manufacturing tools.",
    ],
    technologies: ["React", "Node.js", "JavaScript"],
  },
  {
    id: 2,
    company: "Sweet Code",
    position: "Fullstack Developer",
    period: "Sep 2024 — Apr 2025",
    location: "León, Guanajuato",
    initials: "SC",
    accent: "#f4656b",
    gradient: "linear-gradient(135deg, #ff866b, #f4656b)",
    description: [
      "Developed and maintained user interfaces for multiple client projects, adapting to each client's specific needs.",
      "Implemented scalable frontend and backend solutions with Angular and Node.js.",
      "Helped optimize web application performance, improving load times and user experience.",
    ],
    technologies: ["Angular", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    company: "Itsmart Solutions México",
    position: "Frontend Developer",
    period: "Feb 2024 — Aug 2024",
    location: "León, Guanajuato",
    initials: "IS",
    accent: "#5e5ce6",
    gradient: "linear-gradient(135deg, #007aff, #5e5ce6)",
    description: [
      "Built responsive web interfaces with Angular and TypeScript for enterprise ERP systems.",
      "Implemented geolocation and mapping features for BGW, a geographic web search engine.",
      "Contributed to Geolocator, an address geocoding tool that improves the accuracy of geographic points.",
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
    degree: "Engineering in Software Development and Management",
    period: "Apr 2026",
    location: "León, Gto",
  },
  {
    id: 2,
    institution: "Universidad Tecnológica de León",
    degree: "Associate Degree in Multiplatform Software Development",
    period: "Aug 2024",
    location: "León, Gto",
  },
  {
    id: 3,
    institution: "Oxford International Education Group",
    degree: "Global Competencies & Academic English B2",
    period: "Jun 2015",
    location: "Oxford, UK",
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
    icon: "/icons/instagram.svg",
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
    // ▶ Neura
    {
      id: 5,
      name: "Neura",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[25vh] left-40",
      children: [
        {
          id: 1,
          name: "Neura.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Neura is a knowledge-focused web app designed for developers to organize technical notes, patterns, and concepts in a clean, structured way.",
            "Instead of jumping between docs and external resources, Neura lets you keep everything in one place—complete with diagrams, code examples, and clear explanations.",
            "It also includes an AI-powered chat that allows you to ask questions directly based on your own notes, turning your knowledge base into an interactive assistant.",
            "Built with modern web technologies, Neura is fast, intuitive, and optimized for learning, reference, and daily developer workflows.",
          ],
        },
        {
          id: 2,
          name: "neura.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://neura-orcin.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github",
          icon: "/icons/github-dark.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AmiiGood/Neura-frontend",
          position: "top-44 right-20",
        },
        {
          id: 4,
          name: "neura.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-neura.png",
        },
      ],
    },

    // ▶ F1 API
    {
      id: 7,
      name: "F1 API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-45",
      windowPosition: "top-[3vh] left-200",
      children: [
        {
          id: 1,
          name: "F1 API.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "F1 API is a free, developer-friendly Formula 1 API with historical data from 1950 to the present.",
            "It was built for learners: clean slug IDs, no authentication required, interactive docs, and content available in English and Spanish.",
            "Query world champions, driver career stats, race results, or even legendary rivalries like Senna vs Prost—no API keys, no sign-up, just fetch.",
            "Live at f1api.sweetcode.app with its own assets CDN, built with TypeScript.",
          ],
        },
        {
          id: 2,
          name: "f1api.sweetcode.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://f1api.sweetcode.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github",
          icon: "/icons/github-dark.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AmiiGood/f1-api",
          position: "top-44 right-20",
        },
        {
          id: 4,
          name: "f1api.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-f1api.png",
        },
      ],
    },

    // ▶ Sweet Core
    {
      id: 9,
      name: "Sweet Core",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-85",
      windowPosition: "top-[20vh] left-150",
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
          name: "sweetcore.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sweetcore.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github",
          icon: "/icons/github-dark.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AmiiGood/SweetCore",
          position: "top-44 right-20",
        },
        {
          id: 4,
          name: "sweetcore.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-sweetcore.png",
        },
      ],
    },

    // ▶ Viby
    {
      id: 10,
      name: "Viby",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[15vh] left-250",
      children: [
        {
          id: 1,
          name: "Viby.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Viby is an ad-free Android music player with a carefully crafted look, built for enjoying your local library.",
            "It has everything a modern player needs: queue, true shuffle, favorites, an equalizer, a draggable full-screen Now Playing screen, and lock-screen controls with cover art.",
            "It also downloads new music from within the app—tagged with metadata and cover art via MusicBrainz—and recommends new tracks based on your library.",
            "There's even an optional offline voice assistant: say “Hey Viby” and control playback hands-free. Built with Kotlin, Jetpack Compose, and Media3/ExoPlayer.",
          ],
        },
        {
          id: 4,
          name: "viby.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-viby.png",
        },
      ],
    },

    // ▶ Crocs Landing
    {
      id: 11,
      name: "Crocs Landing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-45",
      windowPosition: "top-[10vh] left-350",
      children: [
        {
          id: 1,
          name: "Crocs Landing.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A bold, animated landing page concept for Crocs, focused on strong visuals and smooth scroll-driven motion.",
            "Every section is designed to feel alive—product shots, colors, and typography working together like a real brand campaign.",
            "It's the kind of page you scroll twice: once for the product, once just to watch the animations again.",
            "Built with Next.js, TypeScript, and Tailwind, deployed on Vercel.",
          ],
        },
        {
          id: 2,
          name: "crocs.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://crocs-landing.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github",
          icon: "/icons/github-dark.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AmiiGood/crocs-landing",
          position: "top-44 right-20",
        },
        {
          id: 4,
          name: "crocs.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-crocs.png",
        },
      ],
    },

    // ▶ Coca-Cola Zero Landing
    {
      id: 12,
      name: "Coca-Cola Zero",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-85",
      windowPosition: "top-[12vh] left-80",
      children: [
        {
          id: 1,
          name: "Coca-Cola Zero.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An animated landing page concept for Coca-Cola Zero, built around bold product imagery and high-impact motion.",
            "The page leans into the brand's identity—deep blacks, sharp reds, and smooth transitions that make the product the absolute protagonist.",
            "It's a frontend showcase piece: scroll animations, micro-interactions, and pixel-level attention to detail.",
            "Built with Next.js, TypeScript, and Tailwind, deployed on Vercel.",
          ],
        },
        {
          id: 2,
          name: "cocacola.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://coca-cola-zero-landing.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github",
          icon: "/icons/github-dark.svg",
          kind: "file",
          fileType: "url",
          href: "https://github.com/AmiiGood/coca-cola-zero-landing",
          position: "top-44 right-20",
        },
        {
          id: 4,
          name: "cocacola.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-cocacola.png",
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
      href: "/files/CV_AlexisAlvarez.pdf",
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
