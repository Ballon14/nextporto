"use client"

import { useState, useEffect } from "react"
import Card from "../ui/Card"
import Button from "../ui/Button"

export default function ProjectsSection() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then(setProjects)
    }, [])

    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ]
    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              )

    return (
        <section id="projects" className="py-20 bg-dark-900" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Portfolio Projects
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Project-project yang sudah dibuat (meskipun masih
                        sederhana 😅)
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    data-aos="zoom-in"
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                selectedCategory === category
                                    ? "primary"
                                    : "secondary"
                            }
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={index}
                            variant="elevated"
                            className="group overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
                                <div className="text-6xl">🖥️</div>
                            </div>

                            <div className="p-6">
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full mb-3">
                                        ⭐ Featured
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-dark-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-dark-700 text-primary-400 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() =>
                                            window.open(
                                                project.github,
                                                "_blank"
                                            )
                                        }
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </Button>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() =>
                                            window.open(project.live, "_blank")
                                        }
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        Live
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Project Stats */}
                <div className="mt-16" data-aos="fade-up">
                    <Card className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Project Statistics
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-primary-400 mb-2">
                                    {projects.length}
                                </div>
                                <div className="text-dark-300">
                                    Total Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-400 mb-2">
                                    {projects.filter((p) => p.featured).length}
                                </div>
                                <div className="text-dark-300">Featured</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-400 mb-2">
                                    {
                                        new Set(projects.map((p) => p.category))
                                            .size
                                    }
                                </div>
                                <div className="text-dark-300">Categories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary-400 mb-2">
                                    {projects.reduce(
                                        (acc, p) => acc + p.technologies.length,
                                        0
                                    )}
                                </div>
                                <div className="text-dark-300">
                                    Technologies
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
