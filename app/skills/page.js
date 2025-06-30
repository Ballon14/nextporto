import { portfolioData } from "../../lib/data"
import SkillsSection from "../components/sections/SkillsSection"

export const metadata = {
    title: "Skills",
    description: "Daftar skill dan teknologi yang dikuasai programmer gabut.",
}

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-dark-900">
            <SkillsSection skills={portfolioData.skills} />
        </div>
    )
}
