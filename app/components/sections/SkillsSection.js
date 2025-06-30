"use client"

import { useState, useEffect } from "react"

export default function SkillsSection() {
    const [skills, setSkills] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        fetch("/api/skills")
            .then((res) => res.json())
            .then(setSkills)
    }, [])

    const categories = [
        "All",
        ...new Set(skills.map((skill) => skill.category)),
    ]
    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory)

    return (
        <section id="skills" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Teknologi yang sudah dipelajari (meskipun masih dalam
                        tahap belajar 😅)
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                selectedCategory === category
                                    ? "bg-primary-600 text-white"
                                    : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="card p-6 flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                {skill.name}
                            </h3>
                            <div className="text-primary-400 text-sm mb-2">
                                {skill.category}
                            </div>
                            <div className="text-dark-300 mb-4">
                                {skill.description}
                            </div>
                            <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
                                <div
                                    className="bg-primary-400 h-2 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <div className="text-xs text-dark-400">
                                Level: {skill.level}%
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning Status */}
                <div className="mt-16 text-center">
                    <div className="card max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Status Belajar Saat Ini
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                                <div className="text-2xl mb-2">📚</div>
                                <div className="font-medium text-white">
                                    Sedang Belajar
                                </div>
                                <div className="text-dark-300">
                                    Next.js & React
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🎯</div>
                                <div className="font-medium text-white">
                                    Target
                                </div>
                                <div className="text-dark-300">
                                    Full Stack Developer
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🚀</div>
                                <div className="font-medium text-white">
                                    Motivasi
                                </div>
                                <div className="text-dark-300">
                                    Keep Learning!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
