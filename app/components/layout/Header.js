"use client"

import { useState, useEffect } from "react"

export default function Header({ profile }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-dark-900/95 backdrop-blur-sm border-b border-dark-700"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-primary-400">
                                {profile.name}
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection("experience")}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-primary-400 transition-colors"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-dark-800 border-t border-dark-700">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 transition-colors"
                            >
                                Skills
                            </button>
                            <button
                                onClick={() => scrollToSection("experience")}
                                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 transition-colors"
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 transition-colors"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="block w-full text-left px-3 py-2 text-white hover:text-primary-400 transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                id="hero"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 opacity-80"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=\'60\'%20height=\'60\'%20viewBox=\'0%200%2060%2060\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg%20fill=\'none\'%20fill-rule=\'evenodd\'%3E%3Cg%20fill=\'%239C92AC\'%20fill-opacity=\'0.05\'%3E%3Ccircle%20cx=\'30\'%20cy=\'30\'%20r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                <div className="relative z-10 text-center">
                    <div className="mb-8">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Halo, saya </span>
                            <span className="gradient-text">
                                {profile.name}
                            </span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-primary-400 mb-6 font-mono">
                            {profile.title} {profile.subtitle}
                        </h2>
                        <div className="typing-animation text-lg md:text-xl text-dark-300 max-w-2xl mx-auto">
                            "Masih belajar coding, tapi udah berani bikin
                            portfolio 😅"
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="btn-primary"
                        >
                            Lihat Portfolio
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="btn-secondary"
                        >
                            Hubungi Saya
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-12">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-400 hover:text-primary-400 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-400 hover:text-primary-400 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href={profile.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-400 hover:text-primary-400 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            <ScrollToHeaderButton />
        </>
    )
}

function ScrollToHeaderButton() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToHeader = () => {
        const header = document.getElementById("hero")
        if (header) {
            header.scrollIntoView({ behavior: "smooth" })
        }
    }

    if (!show) return null
    return (
        <button
            onClick={scrollToHeader}
            className="fixed bottom-6 right-6 z-[999] bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg p-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Kembali ke Header"
        >
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
            >
                <path d="M5 15l7-7 7 7" />
            </svg>
        </button>
    )
}
