// Portfolio data - migrated from Laravel MongoDB
export const portfolioData = {
    profile: {
        name: "Iqbal",
        title: "Mahasiswa Gabut",
        subtitle: "yang lagi belajar coding",
        description:
            "Halo! Saya adalah seorang programmer yang masih dalam tahap belajar. Meskipun masih gabut dan sering bingung dengan error, tapi semangat belajar tetap tinggi! 🚀",
        avatar: "/avatar.jpg",
        location: "Indonesia",
        email: "iqbaldev.site@gmail.com",
        github: "https://github.com/Ballon14",
        linkedin: "https://linkedin.com/in/gabut-programmer",
        twitter: "https://twitter.com/gabut_programmer",
    },

    skills: [
        {
            name: "HTML & CSS",
            level: 85,
            category: "Frontend",
            icon: "💻",
        },
        {
            name: "JavaScript",
            level: 75,
            category: "Frontend",
            icon: "⚡",
        },
        {
            name: "React",
            level: 70,
            category: "Frontend",
            icon: "⚛️",
        },
        {
            name: "Next.js",
            level: 65,
            category: "Frontend",
            icon: "🚀",
        },
        {
            name: "PHP",
            level: 60,
            category: "Backend",
            icon: "🐘",
        },
        {
            name: "Laravel",
            level: 55,
            category: "Backend",
            icon: "🔥",
        },
        {
            name: "Node.js",
            level: 50,
            category: "Backend",
            icon: "🟢",
        },
        {
            name: "MongoDB",
            level: 45,
            category: "Database",
            icon: "🍃",
        },
        {
            name: "MySQL",
            level: 40,
            category: "Database",
            icon: "🐬",
        },
        {
            name: "Git",
            level: 70,
            category: "Tools",
            icon: "📚",
        },
    ],

    experiences: [
        {
            title: "Junior Developer",
            company: "Startup Gabut",
            period: "2023 - Sekarang",
            description:
                "Belajar coding sambil ngopi dan bikin error yang kreatif. Fokus pada web development dengan React dan Laravel.",
            technologies: ["React", "Laravel", "JavaScript", "PHP"],
            icon: "💼",
        },
        {
            title: "Freelance Programmer",
            company: "Self Employed",
            period: "2022 - 2023",
            description:
                "Menerima project kecil-kecilan sambil belajar. Kadang sukses, kadang error, tapi tetap semangat!",
            technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            icon: "🆓",
        },
        {
            title: "Student Developer",
            company: "Bootcamp Coding",
            period: "2021 - 2022",
            description:
                "Belajar dasar-dasar programming dari nol. Dari hello world sampai bikin aplikasi sederhana.",
            technologies: ["Python", "JavaScript", "HTML", "CSS"],
            icon: "🎓",
        },
    ],

    projects: [
        {
            title: "Portfolio Website",
            description:
                "Website portfolio dengan tema programmer gabut yang lagi belajar. Dibuat dengan Next.js dan Tailwind CSS.",
            image: "/projects/portfolio.jpg",
            technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/gabut-programmer/portfolio",
            live: "https://portfolio-gabut.vercel.app",
            featured: true,
            category: "Web Development",
        },
        {
            title: "Todo App",
            description:
                "Aplikasi todo sederhana dengan fitur CRUD. Belajar state management dan local storage.",
            image: "/projects/todo.jpg",
            technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
            github: "https://github.com/gabut-programmer/todo-app",
            live: "https://todo-gabut.vercel.app",
            featured: false,
            category: "Web Development",
        },
        {
            title: "Weather App",
            description:
                "Aplikasi cuaca yang mengambil data dari API. Belajar async/await dan API integration.",
            image: "/projects/weather.jpg",
            technologies: ["JavaScript", "API", "CSS", "HTML"],
            github: "https://github.com/gabut-programmer/weather-app",
            live: "https://weather-gabut.vercel.app",
            featured: false,
            category: "Web Development",
        },
        {
            title: "Blog System",
            description:
                "Sistem blog sederhana dengan Laravel. Belajar MVC pattern dan database relationships.",
            image: "/projects/blog.jpg",
            technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            github: "https://github.com/gabut-programmer/blog-system",
            live: "https://blog-gabut.herokuapp.com",
            featured: true,
            category: "Backend Development",
        },
        {
            title: "E-commerce Template",
            description:
                "Template e-commerce responsive dengan HTML dan CSS. Belajar layout dan responsive design.",
            image: "/projects/ecommerce.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
            github: "https://github.com/gabut-programmer/ecommerce-template",
            live: "https://ecommerce-gabut.vercel.app",
            featured: false,
            category: "Frontend Development",
        },
        {
            title: "Chat App",
            description:
                "Aplikasi chat real-time sederhana. Belajar WebSocket dan real-time communication.",
            image: "/projects/chat.jpg",
            technologies: ["Node.js", "Socket.io", "JavaScript", "Express"],
            github: "https://github.com/gabut-programmer/chat-app",
            live: "https://chat-gabut.herokuapp.com",
            featured: true,
            category: "Full Stack",
        },
    ],

    testimonials: [
        {
            name: "Senior Developer",
            role: "Tech Lead",
            company: "Tech Company",
            content:
                "Meskipun masih belajar, semangat dan kreativitasnya luar biasa. Error yang dibuat pun selalu unik! 😄",
            avatar: "/testimonials/senior.jpg",
        },
        {
            name: "Project Manager",
            role: "PM",
            company: "Startup",
            content:
                "Komunikasi bagus, selalu on time, dan hasil kerjanya sesuai ekspektasi. Recommended! 👍",
            avatar: "/testimonials/pm.jpg",
        },
        {
            name: "Fellow Developer",
            role: "Full Stack Developer",
            company: "Freelance",
            content:
                "Teman coding yang asik! Selalu berbagi ilmu dan tidak pelit membantu. Keep learning! 🚀",
            avatar: "/testimonials/fellow.jpg",
        },
    ],

    stats: {
        projects: 15,
        experience: "2+ years",
        clients: 8,
        coffee: "∞ cups", // Programmer gabut selalu butuh kopi! 😅
    },
}
