import type { Metadata } from "next";
import {ProjectsMap} from "@/app/types";

export function sortedProjects(limit?: number) {
    return Object.entries(projects)
        .sort(([, a], [, b]) => {
            if (!a.dt_end && !b.dt_end) return b.dt_start.getTime() - a.dt_start.getTime()
            if (!a.dt_end) return -1
            if (!b.dt_end) return 1
            const byEnd = b.dt_end.getTime() - a.dt_end.getTime()
            return byEnd !== 0 ? byEnd : b.dt_start.getTime() - a.dt_start.getTime()
        })
        .slice(0, limit)
}

export function projectMetadata(slug: string): Metadata {
    const project = projects[slug]
    return {
        title: `${project.name} | eCatlin`,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            url: `https://www.ecatlin.com/projects/${slug}`,
            type: "article",
        },
        twitter: {
            card: "summary",
            title: project.name,
            description: project.description,
        },
    }
}

export const projects: ProjectsMap = {
    "cashback-python": {
        name: "Cashback",
        description: "Popular ladder cashback site. Users need to complete tasks on 10 levels to cash out their earnings.",
        colour: "oklab(0.7 -0.1 0.03)",
        dt_start: new Date('2025-04-03'),
        tech: [
            {name: "Python", stackType: "backend", primary: true},
            {name: "Flask", description: "Python web framework", stackType: "backend"},
            {name: "Jinja2", stackType: "frontend"},
            {name: "HTML", stackType: "frontend"},
            {name: "SCSS", stackType: "frontend"},
            {name: "CSS", stackType: "frontend"},
            {name: "Javascript", stackType: "frontend", primary: true},
            {name: "PostgreSQL", stackType: "backend", primary: true},
            {name: "npm", description: "Package manager", stackType: "infrastructure"},
            {name: "Node 18", stackType: "infrastructure"},
            {name: "Poetry", description: "Python Package manager", stackType: "infrastructure"},
            {name: "Flyway", description: "DB migrations", stackType: "infrastructure"},
            {name: "Git", description: "Version Control", stackType: "infrastructure"},
            {name: "GitHub", description: "Cloud Version Control", stackType: "infrastructure"},
            {name: "GitHub Actions", description: "Deployment", stackType: "infrastructure"},
            {name: "Ansible", description: "Deployment", stackType: "infrastructure"},
            {name: "pyTest", description: "Backend Testing", stackType: "backend"},
            {name: "Playwright", description: "Frontend Testing", stackType: "frontend"},
            {name: "Webpack", description: "JS bundler", stackType: "infrastructure"},
            {name: "Ruff", description: "Linter", stackType: "backend"},
            {name: "Bootstrap", description: "CSS utilities", stackType: "frontend"},
            {name: "Font Awesome", description: "Icons", stackType: "frontend"},
            {name: "Swiper", description: "JS Carousels", stackType: "frontend"},
            {name: "Bulma", description: "CSS utilities (used in admin)", stackType: "frontend"},
        ],
        sidebar: [
            { href: "#what-is-cashback", label: "What is Cashback.co.uk" },
            { href: "#optimal-images", label: "Optimal images" },
            { href: "#container-based-card-layout", label: "Container based Card layout" },
            { href: "#blurred-background-card-images", label: "Blurred background card images" },
            { href: "#admin-changelog", label: "Admin Changelog" },
            { href: "#tech-stack", label: "Tech Stack" },
        ],
    },
    "custard": {
        name: "Custard",
        description: "Sweet modern site where users earn cashback for taking offers. Especially multi event games. Also has an app...",
        colour: "oklab(0.78 0.05 0.16)",
        dt_start: new Date('2024-03-18'),
        tech: [
            {name: "Python", stackType: "backend", primary: true},
            {name: "Flask", description: "Web framework", stackType: "backend"},
            {name: "Jinja2", stackType: "frontend"},
            {name: "Javascript", stackType: "frontend", primary: true},
            {name: "HTML", stackType: "frontend"},
            {name: "SCSS", stackType: "frontend"},
            {name: "CSS", stackType: "frontend"},
            {name: "PostgreSQL", stackType: "backend", primary: true},
            {name: "npm", stackType: "infrastructure"},
            {name: "Node 18", stackType: "backend"},
            {name: "Poetry", description: "Python Package manager", stackType: "backend"},
            {name: "Flyway", description: "DB migrations", stackType: "backend"},
            {name: "Git", description: "Version Control", stackType: "infrastructure"},
            {name: "GitHub", description: "Cloud Version Control", stackType: "infrastructure"},
            {name: "GitHub Actions", stackType: "infrastructure"},
            {name: "Ansible", stackType: "infrastructure"},
            {name: "pyTest", description: "Backend Testing", stackType: "backend"},
            {name: "Playwright", description: "Frontend Testing", stackType: "frontend"},
            {name: "Webpack", stackType: "frontend"},
            {name: "Ruff", description: "Linter", stackType: "backend"},
            {name: "Bootstrap", description: "CSS utilities", stackType: "frontend"},
            {name: "Font Awesome", stackType: "tools"},
            {name: "Swiper", stackType: "frontend", description: "JS Carousels"},
            {name: "Bulma", stackType: "frontend", description: "CSS utilities (used in admin)"},
        ],
        sidebar: [
            { href: "#what-is-it", label: "What is it?" },
            { href: "#accessible-keyboard-navigation", label: "Accessible Keyboard Navigation" },
            { href: "#savings-calculator", label: "Savings Calculator" },
            { href: "#admin-changelog", label: "Admin Changelog" },
            { href: "#tech-stack", label: "Tech Stack" },
        ],
    },
    "custard-app": {
        name: "Custard App",
        description: "Gives you money back from buying gift cards for use online and in-store",
        colour: "oklab(0.78 0.05 0.16)",
        dt_start: new Date('2024-07-02'),
        tech: [
            {name: "React Native", stackType: "frontend", primary: true},
            {name: "Expo", stackType: "backend", primary: true},
            {name: "Figma", stackType: "tools"},
            {name: "Jest", description: "Testing", stackType: "tools"},
            {name: "Maestro", stackType: "tools"},
            {name: "TypeScript", stackType: "frontend", primary: true},
            {name: "npm", stackType: "infrastructure"},
            {name: "Sentry", stackType: "tools"},
            {name: "API", stackType: "backend"},
            {name: "Stripe", stackType: "backend"},
            {name: "TrueLayer", stackType: "backend"},
            {name: "React Query", stackType: "frontend"},
            {name: "OneSignal", stackType: "frontend"},
        ],
        sidebar: [
            { href: "#what-is-it", label: "What is it?" },
            { href: "#savings-calculator", label: "Savings Calculator" },
            { href: "#tech-stack", label: "Tech Stack" },
        ],
    },
    "ohmydosh": {
        name: "OhMyDosh",
        description: "A fun site, where users could earn dosh by taking offers. Never reached the lofty heights of Custard or Cashback.",
        colour: "oklab(0.62 0.22 0.06)",
        dt_start: new Date('2023-06-27'),
        dt_end: new Date('2025-03-06'),
        tech: [
            {name: "React", stackType: "frontend", primary: true},
            {name: "Next.js", stackType: "frontend", primary: true},
            {name: "TypeScript", stackType: "frontend", primary: true},
            {name: "JavaScript", stackType: "frontend"},
            {name: "HTML", stackType: "frontend"},
            {name: "SCSS", stackType: "frontend"},
            {name: "CSS", stackType: "frontend"},
            {name: "PHP", stackType: "backend", primary: true},
            {name: "MySQL", stackType: "backend", primary: true},
            {name: "Docker", stackType: "infrastructure"},
            {name: "Kubernetes", stackType: "infrastructure", primary: true},
            {name: "npm", stackType: "infrastructure"},
            {name: "Node", stackType: "backend"},
            {name: "Git", description: "Version Control", stackType: "infrastructure"},
            {name: "GitHub", description: "Cloud Version Control", stackType: "infrastructure"},
            {name: "GitHub Actions", stackType: "infrastructure"},
            {name: "Tailwind", stackType: "frontend", primary: true},
            {name: "Font Awesome", stackType: "tools"},
            {name: "Swiper", stackType: "frontend", description: "JS Carousels"},
        ],
        sidebar: [
            { href: "#what-was-it", label: "What was OhMyDosh?" },
            { href: "#improved-relaunch", label: "Improved Relaunch" },
            { href: "#tech-stack", label: "Tech Stack" },
        ],
    },
    "cashback-php": {
        name: "Cashback (2022)",
        description: "The same as Cashback that we know and love, but running on a different Tech Stack",
        colour: "oklab(0.7 -0.1 0.03)",
        dt_start: new Date('2022-06-27'),
        dt_end: new Date('2025-01-14'),
        tech: [
            {name: "React", stackType: "frontend", primary: true},
            {name: "JavaScript", stackType: "frontend"},
            {name: "HTML", stackType: "frontend"},
            {name: "SCSS", stackType: "frontend"},
            {name: "CSS", stackType: "frontend"},
            {name: "PHP", stackType: "backend", primary: true},
            {name: "MySQL", stackType: "backend", primary: true},
            {name: "Docker", stackType: "infrastructure"},
            {name: "Kubernetes", stackType: "infrastructure", primary: true},
            {name: "yarn", stackType: "infrastructure"},
            {name: "Node", stackType: "backend"},
            {name: "Git", description: "Version Control", stackType: "infrastructure"},
            {name: "GitHub", description: "Cloud Version Control", stackType: "infrastructure"},
            {name: "GitHub Actions", stackType: "infrastructure"},
            {name: "Font Awesome", stackType: "tools"},
        ],
        sidebar: [
            { href: "#what-is-cashback", label: "What is Cashback.co.uk" },
            { href: "#kubernetes-stack", label: "Kubernetes Stack" },
            { href: "#tech-stack", label: "Tech Stack" },
        ],
    },
    "travel-rates": {
        name: "Travel Rates",
        description: "Find out how much your money can buy you, using this Awesome App for Android and iPhone",
        colour: "oklab(0.61 0.25 -0.02)",
        dt_start: new Date('2023-03-20'),
        tech: [
            {name: "React Native", stackType: "frontend", primary: true},
            {name: "Expo", stackType: "backend", primary: true},
            {name: "API", stackType: "frontend"},
            {name: "Google AdMob", stackType: "frontend"},
            {name: "npm", stackType: "infrastructure"},
        ],
        sidebar: [
            { href: "#what-is-it", label: "What is the Travel Rates App?" },
            { href: "#tech-stack", label: "Tech Stack" },
        ]
    },
    "tickit-cards": {
        name: "TickIt Cards",
        description: "Remember your forgotten gift cards with notifications from this free App",
        colour: "oklab(0.82 0.03 0.17)",
        dt_start: new Date('2025-05-07'),
        tech: [
            {name: "React Native", stackType: "frontend", primary: true},
            {name: "Expo", stackType: "backend", primary: true},
            {name: "TypeScript", stackType: "backend"},
            {name: "Tailwind", stackType: "frontend"},
            {name: "Google AdMob", stackType: "frontend"},
            {name: "npm", stackType: "infrastructure"},
        ],
        sidebar: [
            { href: "#what-is-it", label: "What is TickIt Cards?"},
            { href: "#tech-stack", label: "Tech Stack" },
        ]
    }
}