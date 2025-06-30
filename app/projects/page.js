import { portfolioData } from "../../lib/data"
import ProjectsSection from "../components/sections/ProjectsSection"

export const metadata = {
    title: "Projects",
    description: "Kumpulan project portfolio programmer gabut.",
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-dark-900">
            <ProjectsSection projects={portfolioData.projects} />
        </div>
    )
}
