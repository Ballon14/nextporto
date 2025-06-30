"use client"

import { useState } from "react"

export default function Skills({ skills }) {
    const [selectedCategory, setSelectedCategory] = useState("All")

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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="card group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <span className="text-3xl mr-3">
                                        {skill.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {skill.name}
                                        </h3>
                                        <p className="text-sm text-primary-400">
                                            {skill.category}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-2">
                                <div className="flex justify-between text-sm text-dark-300 mb-1">
                                    <span>Level</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-dark-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Skill Description */}
                            <div className="text-sm text-dark-300">
                                {skill.level >= 80 &&
                                    "Expert Level - Sudah mahir! 🚀"}
                                {skill.level >= 60 &&
                                    skill.level < 80 &&
                                    "Advanced - Lumayan bisa! 💪"}
                                {skill.level >= 40 &&
                                    skill.level < 60 &&
                                    "Intermediate - Masih belajar! 📚"}
                                {skill.level < 40 &&
                                    "Beginner - Baru mulai! 🌱"}
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
