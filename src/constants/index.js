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
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Experience",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
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
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Fastify", "NestJS", ".NET"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"],
  },
  {
    category: "Desktop",
    items: ["Electron", "Python", "PyQt6"],
  },
  {
    category: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "React Native"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "Docker", "Vite", "Zod"],
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
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: "https://www.linkedin.com/in/amiigood",
  },
  {
    id: 2,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#5e5ce6",
    link: "mailto:amiigood3009@gmail.com",
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

// Archivos que se repiten en cada carpeta de proyecto del Finder
const projectTxt = (name, description) => ({
  id: 1,
  name: `${name}.txt`,
  icon: "/images/txt.png",
  kind: "file",
  fileType: "txt",
  position: "top-5 left-10",
  description,
});

const projectLink = (name, href) => ({
  id: 2,
  name,
  icon: "/images/safari.png",
  kind: "file",
  fileType: "url",
  href,
  position: "top-10 right-20",
});

const projectGithub = (repo) => ({
  id: 3,
  name: "github",
  icon: "/icons/github-dark.svg",
  kind: "file",
  fileType: "url",
  href: `https://github.com/AmiiGood/${repo}`,
  position: "top-44 right-20",
});

const projectImage = (name, imageUrl) => ({
  id: 4,
  name,
  icon: "/images/image.png",
  kind: "file",
  fileType: "img",
  position: "top-52 right-80",
  imageUrl,
});

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Labelix
    {
      id: 13,
      name: "Labelix",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] right-36",
      children: [
        projectTxt("Labelix", [
          "Labelix is a label designer and print server for Zebra thermal printers, built for a manufacturing floor.",
          "Admins design labels in a visual editor and bind their fields to article data (UPC, SKU, size, color). Operators only pick a design, an article and a quantity, then print.",
          "Designs are rendered to monochrome images and sent to the printer as ZPL over TCP. Every print job is logged through the API, and the desktop clients never touch the database directly.",
          "Built with Electron, React, TypeScript and Konva on the desktop, and Fastify, JWT and PostgreSQL on the server.",
        ]),
        projectGithub("labelix-frontend"),
      ],
    },

    // ▶ nexTicket
    {
      id: 14,
      name: "nexTicket",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-45",
      windowPosition: "top-[5vh] right-6",
      children: [
        projectTxt("nexTicket", [
          "nexTicket is a help desk system for companies: tickets, departments, categories and agent teams in one place.",
          "It has three roles (admin, agent and client), public comments and internal notes, attachments with image preview, and a full change history for each ticket.",
          "SLAs are calculated automatically using business hours, and notifications go out both in-app and by email.",
          "Built with React, Tailwind, React Query and Zustand on the frontend, and Node.js, Express and PostgreSQL on the backend.",
        ]),
        projectGithub("nexTicket"),
      ],
    },

    // ▶ Nutriva
    {
      id: 15,
      name: "Nutriva",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-85",
      windowPosition: "top-[19vh] right-36",
      children: [
        projectTxt("Nutriva", [
          "Nutriva is a clinical platform for nutritionists to run their practice without paper or spreadsheets.",
          "It covers patient records, consultations with body measurements, a meal plan builder that calculates macros per meal, reusable templates, and an appointment calendar.",
          "Plans can be printed or exported as PDF, and a dashboard shows the day at a glance.",
          "Built with Next.js, React, Tailwind and shadcn/ui, with Supabase (PostgreSQL and row-level security) for auth and data.",
        ]),
        projectGithub("Nutriva"),
        projectImage("nutriva.png", "/images/project-nutriva.webp"),
      ],
    },

    // ▶ Lumi
    {
      id: 16,
      name: "Lumi",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-44 left-5",
      windowPosition: "top-[19vh] right-6",
      children: [
        projectTxt("Lumi", [
          "Lumi is a manga, comic and book reader for Android. Local, private, free and without ads.",
          "It reads CBZ, CBR, EPUB and PDF, scans the folder you choose and groups volumes into series automatically.",
          "It has three reading modes (paged, vertical webtoon and reflowable EPUB) and works fully offline: no accounts and no telemetry.",
          "Open source under GPL-3.0. Built with Kotlin, Jetpack Compose, Hilt, Room and Material 3.",
        ]),
        projectLink("releases", "https://github.com/AmiiGood/Lumi/releases/latest"),
        projectGithub("Lumi"),
        projectImage("lumi.png", "/images/project-lumi.webp"),
      ],
    },

    // ▶ Viby
    {
      id: 10,
      name: "Viby",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-44 left-45",
      windowPosition: "top-[33vh] right-36",
      children: [
        projectTxt("Viby", [
          "Viby is an ad-free Android music player with a carefully crafted look, built for enjoying your local library.",
          "It has everything a modern player needs: queue, true shuffle, favorites, an equalizer, a draggable full-screen Now Playing screen, and lock-screen controls with cover art.",
          "It also downloads new music from within the app—tagged with metadata and cover art via MusicBrainz—and recommends new tracks based on your library.",
          "There's even an optional offline voice assistant: say “Hey Viby” and control playback hands-free. Built with Kotlin, Jetpack Compose, and Media3/ExoPlayer.",
        ]),
        projectImage("viby.png", "/images/project-viby.webp"),
      ],
    },

    // ▶ auto-subtitulos
    {
      id: 17,
      name: "auto-subtitulos",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-44 left-85",
      windowPosition: "top-[33vh] right-6",
      children: [
        projectTxt("auto-subtitulos", [
          "auto-subtitulos generates Spanish subtitles for English shows and movies, locally and for free, on your own GPU.",
          "It extracts the dialogue track, transcribes it with Whisper large-v3 in short chunks cut at silences, and translates it with a local LLM through Ollama.",
          "Before translating, it looks up the show on TVmaze and Wikipedia so character names and official Spanish terms come out right.",
          "Each .srt is saved next to its video, so players like Jellyfin, Plex or VLC pick it up automatically. Built with Python.",
        ]),
        projectGithub("auto-subtitulos"),
      ],
    },

    // ▶ F1 API
    {
      id: 7,
      name: "F1 API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-78 left-5",
      windowPosition: "top-[47vh] right-36",
      children: [
        projectTxt("F1 API", [
          "F1 API is a free, developer-friendly Formula 1 API with historical data from 1950 to the present.",
          "It was built for learners: clean slug IDs, no authentication required, interactive docs, and content available in English and Spanish.",
          "Query world champions, driver career stats, race results, or even legendary rivalries like Senna vs Prost—no API keys, no sign-up, just fetch.",
          "Live at f1api.sweetcode.app with its own assets CDN, built with TypeScript.",
        ]),
        projectLink("f1api.sweetcode.app", "https://f1api.sweetcode.app"),
        projectGithub("f1-api"),
        projectImage("f1api.png", "/images/project-f1api.webp"),
      ],
    },

    // ▶ Neura
    {
      id: 5,
      name: "Neura",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-78 left-45",
      windowPosition: "top-[47vh] right-6",
      children: [
        projectTxt("Neura", [
          "Neura is a knowledge-focused web app designed for developers to organize technical notes, patterns, and concepts in a clean, structured way.",
          "Instead of jumping between docs and external resources, Neura lets you keep everything in one place—complete with diagrams, code examples, and clear explanations.",
          "It also includes an AI-powered chat that allows you to ask questions directly based on your own notes, turning your knowledge base into an interactive assistant.",
          "Built with modern web technologies, Neura is fast, intuitive, and optimized for learning, reference, and daily developer workflows.",
        ]),
        projectLink("neura.app", "https://neura-orcin.vercel.app/"),
        projectGithub("Neura-frontend"),
        projectImage("neura.png", "/images/project-neura.webp"),
      ],
    },

    // ▶ Sweet Core
    {
      id: 9,
      name: "Sweet Core",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-78 left-85",
      windowPosition: "top-[61vh] right-36",
      children: [
        projectTxt("Sweet Core", [
          "Sweet Core is an e-commerce app for PC lovers: components, accessories and full builds.",
          "Instead of navigating complex sites, Sweet Core offers a streamlined experience focused on PC needs—easy browsing, secure checkout, and personalized recommendations.",
          "Think of it like having a dedicated PC store in your pocket, ready to deliver the latest gear straight to you.",
          "It’s built with React and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
        ]),
        projectLink("sweetcore.app", "https://sweetcore.vercel.app/"),
        projectGithub("SweetCore"),
        projectImage("sweetcore.png", "/images/project-sweetcore.webp"),
      ],
    },

    // ▶ Crocs Landing
    {
      id: 11,
      name: "Crocs Landing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 left-5",
      windowPosition: "top-[61vh] right-6",
      children: [
        projectTxt("Crocs Landing", [
          "A bold, animated landing page concept for Crocs, focused on strong visuals and smooth scroll-driven motion.",
          "Every section is designed to feel alive—product shots, colors, and typography working together like a real brand campaign.",
          "It's the kind of page you scroll twice: once for the product, once just to watch the animations again.",
          "Built with Next.js, TypeScript, and Tailwind, deployed on Vercel.",
        ]),
        projectLink("crocs.app", "https://crocs-landing.vercel.app/"),
        projectGithub("crocs-landing"),
        projectImage("crocs.png", "/images/project-crocs.webp"),
      ],
    },

    // ▶ Coca-Cola Zero Landing
    {
      id: 12,
      name: "Coca-Cola Zero",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-112 left-45",
      windowPosition: "top-[75vh] right-36",
      children: [
        projectTxt("Coca-Cola Zero", [
          "An animated landing page concept for Coca-Cola Zero, built around bold product imagery and high-impact motion.",
          "The page leans into the brand's identity—deep blacks, sharp reds, and smooth transitions that make the product the absolute protagonist.",
          "It's a frontend showcase piece: scroll animations, micro-interactions, and pixel-level attention to detail.",
          "Built with Next.js, TypeScript, and Tailwind, deployed on Vercel.",
        ]),
        projectLink("cocacola.app", "https://coca-cola-zero-landing.vercel.app/"),
        projectGithub("coca-cola-zero-landing"),
        projectImage("cocacola.png", "/images/project-cocacola.webp"),
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
      imageUrl: "/images/conference-me.webp",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "About me",
      image: "/images/me.jpg",
      description: [
        "I'm Alexis, a full-stack developer from León, Guanajuato.",
        "At Foam Creations México I build the internal software a manufacturing plant runs on: defect tracking for assembly and quality, PO validation with color QR codes for Crocs, label printing for Zebra printers, and production dashboards.",
        "I usually own the whole thing: the PostgreSQL schema, the Node API, the React screens, and sometimes a desktop or Android app on top.",
        "Outside work I build tools I actually use: an Android manga reader, a music player, and a script that subtitles my video library on my own GPU.",
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
