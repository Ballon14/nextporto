import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Experience from "../../../models/Experience"

// GET - Mengambil semua experiences
export async function GET() {
    try {
        await connectDB()
        const experiences = await Experience.find().sort({
            order: 1,
            createdAt: -1,
        })
        return NextResponse.json(experiences)
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch experiences" },
            { status: 500 }
        )
    }
}

// POST - Membuat experience baru
export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()
        // Validasi minimal
        if (!body.title || !body.company || !body.description) {
            return NextResponse.json(
                { error: "Field title, company, dan description wajib diisi" },
                { status: 400 }
            )
        }
        // Pastikan technologies dan achievements array
        let technologies = body.technologies
        if (typeof technologies === "string") {
            technologies = technologies
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
        }
        let achievements = body.achievements
        if (typeof achievements === "string") {
            achievements = achievements
                .split(",")
                .map((a) => a.trim())
                .filter(Boolean)
        }
        const experience = new Experience({
            ...body,
            technologies,
            achievements,
        })
        await experience.save()
        return NextResponse.json(experience, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Failed to create experience" },
            { status: 500 }
        )
    }
}
