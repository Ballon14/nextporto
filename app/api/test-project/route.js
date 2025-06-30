import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Project from "../../../models/Project"

export async function GET() {
    try {
        await connectDB()
        const project = new Project({
            title: "Testing Project",
            description: "Project untuk testing",
            image: "",
            technologies: ["React", "MongoDB"],
            githubUrl: "https://github.com/test/project",
            liveUrl: "https://testproject.com",
            category: "Web App",
            featured: false,
        })
        await project.save()
        return NextResponse.json({ success: true, project })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
