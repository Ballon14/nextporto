"use client"

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "./components/layout/Header"
import AboutSection from "./components/sections/AboutSection"
import SkillsSection from "./components/sections/SkillsSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/layout/Footer"

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [skills, setSkills] = useState([])
    const [experiences, setExperiences] = useState([])
    const [projects, setProjects] = useState([])

    const profile = {
        name: "Iqbal",
        title: "Mahasiswa Gabut",
        email: "iqbaldev.site@gmail.com",
        phone: "081515630448",
        location: "Indonesia",
        github: "https://github.com/Ballon14",
        // tambahkan field lain sesuai kebutuhan komponen
    }

    const stats = {
        projects: projects.length,
        experiences: experiences.length,
        // tambahkan stat lain jika perlu
    }

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 80,
            easing: "ease-in-out-cubic",
        })
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        // Fetch data from API
        fetch("/api/skills")
            .then((res) => res.json())
            .then(setSkills)
        fetch("/api/experiences")
            .then((res) => res.json())
            .then(setExperiences)
        fetch("/api/projects")
            .then((res) => res.json())
            .then(setProjects)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-4xl mb-4">💻</div>
                    <div className="text-xl font-mono text-primary-400">
                        Loading Portfolio...
                    </div>
                    <div className="text-sm text-dark-400 mt-2">
                        Programmer gabut sedang menyiapkan portfolio... 😅
                    </div>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-dark-900">
            {/* Main Content */}
            <Header profile={profile} />
            <AboutSection profile={profile} stats={stats} />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection profile={profile} />
            <Footer profile={profile} />
        </main>
    )
}
