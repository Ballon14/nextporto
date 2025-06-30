import { portfolioData } from "../../lib/data"
import AboutSection from "../components/sections/AboutSection"

export const metadata = {
    title: "About",
    description: "Tentang programmer gabut yang sedang belajar coding.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-dark-900">
            <AboutSection
                profile={portfolioData.profile}
                stats={portfolioData.stats}
            />
        </div>
    )
}
