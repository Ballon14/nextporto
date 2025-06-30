import { portfolioData } from "../../lib/data"
import ExperienceSection from "../components/sections/ExperienceSection"

export const metadata = {
    title: "Experience",
    description: "Pengalaman kerja dan perjalanan belajar programmer gabut.",
}

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-dark-900">
            <ExperienceSection experiences={portfolioData.experiences} />
        </div>
    )
}
