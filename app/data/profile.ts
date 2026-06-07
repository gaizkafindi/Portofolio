export const profile = {
    name: "Gaizka Findi Satria",
    role: "Editor",
    tagline: "Lulusan Sarjana Komunikasi dengan pengalaman sebagai Editor di Unisi Radio FM yang memiliki keahlian dalam manajemenkonten media sosial dan produksi profil perusahaan. Memiliki kemampuan menulis kreatif dan pemahaman dasar dalam mengelola platform digital. Terbiasa bekerja dengan tenggat waktu ketat dan siap mengaplikasikan keterampilan komunikasi serta kreativitas untuk menghasilkan konten berkualitas yang mendukung strategi digital perusahaan.",
    bio: "Lulusan Sarjana Komunikasi dengan pengalaman sebagai Editor di Unisi Radio FM yang memiliki keahlian dalam manajemenkonten media sosial dan produksi profil perusahaan. Memiliki kemampuan menulis kreatif dan pemahaman dasar dalam mengelola platform digital. Terbiasa bekerja dengan tenggat waktu ketat dan siap mengaplikasikan keterampilan komunikasi serta kreativitas untuk menghasilkan konten berkualitas yang mendukung strategi digital perusahaan.",
    email: "gaizkafindi10@gmail.com",
    location: "Yogyakarta, Indonesia",
    phone: "0882008769746",
    whatsapp: "https://wa.me/62882008769746",
    social: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
    },
    cv: "/Gaizkafindi-CV.pdf",
};

export const skills = [
    {
        category: "Automation Testing",
        items: [
            { name: "Cypress E2E Testing", level: "Expert" },
            { name: "Playwright E2E Testing", level: "Beginner" },
            { name: "Katalon Studio E2E Testing", level: "Beginner" },
            { name: "Test Script Development", level: "Expert" },
            { name: "Test Case Design", level: "Expert" },
        ],
    },
    {
        category: "Performance Testing",
        items: [
            { name: "Grafana k6", level: "Advanced" },
            { name: "Load Testing", level: "Advanced" },
            { name: "Stress Testing", level: "Advanced" },
            { name: "Spike Testing", level: "Advanced" },
        ],
    },
    {
        category: "Testing & QA Methodologies",
        items: [
            { name: "Bug Analysis & RCA", level: "Expert" },
            { name: "Test Plans & Test Cases", level: "Expert" },
            { name: "Functional Testing", level: "Advanced" },
            { name: "API Testing", level: "Advanced" },
        ],
    },
    {
        category: "Technical & Development",
        items: [
            { name: "JavaScript / Node.js", level: "Advanced" },
            { name: "React.js / Next.js", level: "Advanced" },
            { name: "Python", level: "Intermediate" },
            { name: "HTML / CSS", level: "Advanced" },
        ],
    },
    {
        category: "Debugging & Monitoring",
        items: [
            { name: "Browser Network Tools", level: "Advanced" },
            { name: "htop (Server Monitoring)", level: "Advanced" },
            { name: "Performance Analysis", level: "Advanced" },
            { name: "Bottleneck Identification", level: "Advanced" },
        ],
    },
    {
        category: "Quality Standards",
        items: [
            { name: "ISO 9001", level: "Expert" },
            { name: "Internal Auditing", level: "Expert" },
            { name: "CAPA Development", level: "Advanced" },
            { name: "Kaizen / CI", level: "Advanced" },
        ],
    },
    {
        category: "Tools & Version Control",
        items: [
            { name: "Git / GitHub / GitLab", level: "Advanced" },
            { name: "Trello", level: "Advanced" },
            { name: "GMP Standards", level: "Intermediate" },
        ],
    },
];

export const experiences = [
    {
        title: "Automation QA Engineer",
        company: "Golden Digital",
        period: "February 2026 - Present",
        description: "Developing comprehensive test cases and coding test scripts for End-to-End (E2E) testing using the Cypress framework.",
        achievements: [
            "Developed comprehensive test cases and test scripts for E2E testing using Cypress framework",
            "Performed in-depth bug analysis to identify root causes and provided solution recommendations",
            "Established effective communication with IT and business teams to ensure feature alignment",
            "Verified bug fix results ensuring quality standards before production deployment",
        ],
    },
    {
        title: "Quality Assurance Staff (GMP)",
        company: "PT Komitrando Emporio",
        period: "September 2025 - November 2025",
        description: "Conducted internal audits according to GMP standards for fashion bag production, ensuring quality and hygiene compliance.",
        achievements: [
            "Conducted internal audits per GMP standards for fashion bag production processes",
            "Supervised external audit processes from international buyers",
            "Ensured SOP implementation and quality documentation across all production lines",
            "Developed CAPA and Kaizen initiatives to reduce defects and improve efficiency",
        ],
    },
    {
        title: "Quality Assurance & Frontend Developer",
        company: "PT Carakan Sadhana Dirgantara",
        period: "November 2023 - August 2025",
        description: "Developed web interfaces using React.js and Next.js while performing functional and compatibility testing.",
        achievements: [
            "Developed web interfaces using React.js and Next.js",
            "Performed functional and compatibility testing for web applications",
            "Created and executed test cases, recorded bug reports",
            "Optimized application performance and layout according to client needs",
        ],
    },
];

export const projects = [
    {
        title: "AI-Powered Software Testing Assistant",
        description: "AI-powered software testing assistant for analyzing k6 performance test results, generating automated reports, comparing test scenarios, exporting CSV summaries, and visualizing metrics using Python. Future: Local LLM, RAG, and fine-tuning capabilities.",
        tags: ["Python", "k6", "AI/ML", "Performance", "Pandas", "Matplotlib"],
        type: "Performance",
        github: "https://github.com/Gaizka Findi Satriaaria/ai-powered-software-testing-assistant",
        demo: null,
        image: "/projects/response-time-chart.png",
    },
    {
        title: "E2E Automation Testing Suite with Cypress",
        description: "Comprehensive Cypress automation framework for End-to-End testing with custom commands, test case coverage, and integration with CI/CD pipelines for continuous quality assurance.",
        tags: ["Cypress", "E2E Testing", "JavaScript", "Automation"],
        type: "Automation",
        github: "https://github.com/Gaizka Findi Satriaaria/cypress-automation",
        demo: null,
        image: "/projects/cypress.png",
    },
    {
        title: "Playwright E2E Automation Beginner",
        description: "Beginner-level End-to-End automation testing project using Playwright with TypeScript, focusing on test script creation, browser automation, element interaction, and basic test execution for web application quality assurance.",
        tags: ["Playwright", "E2E Testing", "TypeScript", "Automation"],
        type: "Automation",
        github: "https://github.com/Gaizka Findi Satriaaria/playwright-automation",
        demo: null,
        image: "/projects/playwright.png",
    },
    {
        title: "Katalon Studio E2E Automation Beginner",
        description: "Beginner-level End-to-End automation testing project using Katalon Studio, focusing on web test recording, test case creation, object repository management, and automated test execution for web application quality assurance.",
        tags: ["Katalon Studio", "E2E Testing", "No-Code Testing", "Automation"],
        type: "Automation",
        github: "https://github.com/Gaizka Findi Satriaaria/katalon-automation",
        demo: null,
        image: "/projects/katalon.png",
    },
    {
        title: "Performance Testing with Grafana k6",
        description: "Load Testing, Stress Testing, and Spike Testing implementation using Grafana k6 to evaluate backend system stability, scalability, and response performance under concurrent traffic.",
        tags: ["Grafana k6", "Load Testing", "Performance", "Monitoring"],
        type: "Performance",
        github: "https://github.com/Gaizka Findi Satriaaria/k6-performance-testing",
        demo: null,
        image: "/projects/grafana.png",
    },
    {
        title: "Server Performance Monitoring & Analysis",
        description: "Server resource monitoring using htop to identify bottlenecks related to CPU usage, authentication processing, password hashing, and backend concurrency handling.",
        tags: ["htop", "Monitoring", "Performance", "Debugging"],
        type: "Performance",
        github: "https://github.com/Gaizka Findi Satriaaria/server-monitoring",
        demo: null,
        image: "/projects/htop.png",
    },
    {
        title: "API Testing & Bug Analysis",
        description: "Comprehensive API testing using Browser Network Tools, Root Cause Analysis for complex bugs, and bug lifecycle management with detailed reproduction steps.",
        tags: ["API Testing", "Debugging", "RCA", "Quality Assurance"],
        type: "QA",
        github: "https://github.com/Gaizka Findi Satriaaria/api-testing-suite",
        demo: null,
        image: "/projects/postman.png",
    },
    {
        title: "Web Application QA & Frontend Development",
        description: "Frontend development using React.js and Next.js combined with functional and compatibility testing for web applications, ensuring optimal user experience.",
        tags: ["React.js", "Next.js", "QA", "Frontend"],
        type: "Web",
        github: "https://github.com/Gaizka Findi Satriaaria/web-qa-project",
        demo: "https://web-qa-demo.vercel.app",
        image: "/projects/porto.png",
    },
    {
        title: "Quality Management System Implementation",
        description: "Implementation of ISO 9001 quality standards, internal auditing processes, SOP compliance verification, and CAPA development for continuous improvement.",
        tags: ["ISO 9001", "Quality Management", "Auditing", "CAPA"],
        type: "QA",
        github: "https://github.com/Gaizka Findi Satriaaria/qms-implementation",
        demo: null,
        image: "/projects/iso.png",
    },
];

export const certifications = [
    {
        title: "Cypress Test Automation",
        issuer: "Test Automation University",
        date: "2026",
        file: "/sertificate/certificates_TAU-cypress.pdf",
        image: "/sertificate/images/cypress.png",
    },
    {
        title: "Playwright Test Automation",
        issuer: "Test Automation University",
        date: "2026",
        file: "/sertificate/certificates_TAU_Playwright.pdf",
        image: "/sertificate/images/playwright.png",
    },
    {
        title: "Leadership Certificate",
        issuer: "Professional Development",
        date: "2026",
        file: "/sertificate/Leadership_certificate_.pdf",
        image: "/sertificate/images/leadership.png",
    },
    {
        title: "Frontend Web Development with Next.js",
        issuer: "Program Guru Tamu",
        date: "2024",
        file: "/sertificate/Sertifikat_GuruTamu-Gaizka Findi SatriaAria_FEWebDevelopingNextJS.pdf",
        image: "/sertificate/images/frontend.png",
    },
    {
        title: "Game Development with Scratch",
        issuer: "Program Guru Tamu",
        date: "2024",
        file: "/sertificate/Sertifikat_GuruTamu-Gaizka Findi SatriaAria_GameDeveloping.pdf",
        image: "/sertificate/images/scratch.png",
    },
    {
        title: "Virtual Box Linux Ubuntu OS Installation",
        issuer: "Program Guru Tamu",
        date: "2024",
        file: "/sertificate/Sertifikat_GuruTamu-Gaizka Findi SatriaAria_InstalasiOSLinuxUbuntu.pdf",
        image: "/sertificate/images/linux.png",
    },
];

export const testimonials = [
    {
        name: "IT Director",
        role: "Engineering Manager",
        company: "Golden Digital",
        content: "Aria has exceptional attention to detail in finding bugs and providing comprehensive root cause analysis. His Cypress automation framework significantly improved our testing efficiency and product quality.",
        avatar: "/avatars/lead.jpg",
    },
    {
        name: "Product Manager",
        role: "Product Manager",
        company: "PT Carakan Sadhana Dirgantara",
        content: "Outstanding technical skills combined with excellent communication abilities. Aria bridges the gap between technical and business teams effectively, ensuring all features meet quality standards.",
        avatar: "/avatars/pm.jpg",
    },
];