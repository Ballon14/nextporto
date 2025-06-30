"use client"

import { useState, useEffect } from "react"
import Card from "../ui/Card"

export default function ExperienceSection() {
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetch("/api/experiences")
            .then((res) => res.json())
            .then(setExperiences)
    }, [])

    return (
        <section
            id="experience"
            className="py-20 bg-dark-800"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pengalaman & Journey
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Perjalanan belajar coding dari awal sampai sekarang
                        (masih dalam proses 😅)
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Timeline Line */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-8 top-16 w-0.5 h-16 bg-dark-600"></div>
                            )}

                            <div className="flex items-start space-x-6">
                                {/* Timeline Dot */}
                                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-2xl">
                                    {experience.icon}
                                </div>

                                {/* Content */}
                                <Card className="flex-1 p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {experience.title}
                                            </h3>
                                            <p className="text-primary-400 font-medium">
                                                {experience.company}
                                            </p>
                                        </div>
                                        <div className="text-sm text-dark-400 mt-2 md:mt-0">
                                            {typeof experience.period ===
                                                "object" &&
                                            experience.period !== null
                                                ? `${experience.period.start} - ${experience.period.end}`
                                                : experience.period || ""}
                                        </div>
                                    </div>

                                    <p className="text-dark-300 mb-4 leading-relaxed">
                                        {experience.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-dark-700 text-primary-400 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Learning Journey Summary */}
                <div className="mt-16" data-aos="fade-up">
                    <Card className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Learning Journey Summary
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-4xl mb-4">🎯</div>
                                <h4 className="text-lg font-bold text-white mb-2">
                                    Goal
                                </h4>
                                <p className="text-dark-300">
                                    Menjadi Full Stack Developer yang handal dan
                                    bisa bikin aplikasi yang berguna
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">📚</div>
                                <h4 className="text-lg font-bold text-white mb-2">
                                    Learning Method
                                </h4>
                                <p className="text-dark-300">
                                    Belajar sambil praktek, bikin project, dan
                                    banyak googling 😄
                                </p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">🚀</div>
                                <h4 className="text-lg font-bold text-white mb-2">
                                    Next Steps
                                </h4>
                                <p className="text-dark-300">
                                    Fokus pada React, Next.js, dan backend
                                    development
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
