import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Project from "../../../models/Project"

// GET - Mengambil semua projects
export async function GET() {
    try {
        await connectDB()
        const projects = await Project.find().sort({ order: 1, createdAt: -1 })
        return NextResponse.json(projects)
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch projects" },
            { status: 500 }
        )
    }
}

// POST - Membuat project baru
export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()
        // Validasi minimal
        if (!body.title || !body.description || !body.category) {
            return NextResponse.json(
                { error: "Field title, description, dan category wajib diisi" },
                { status: 400 }
            )
        }
        // Pastikan technologies array
        let technologies = body.technologies
        if (typeof technologies === "string") {
            technologies = technologies
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
        }
        // Pastikan featured boolean
        let featured = body.featured
        if (typeof featured === "string") {
            featured = featured === "true"
        }
        // Default image jika tidak diisi
        let image = body.image || ""
        const project = new Project({
            ...body,
            technologies,
            featured,
            image,
        })
        await project.save()
        return NextResponse.json(project, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Failed to create project" },
            { status: 500 }
        )
    }
}
