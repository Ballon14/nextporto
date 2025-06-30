import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Skill from "../../../models/Skill"

// GET - Mengambil semua skills
export async function GET() {
    try {
        await connectDB()
        const skills = await Skill.find().sort({ order: 1, createdAt: -1 })
        return NextResponse.json(skills)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch skills" },
            { status: 500 }
        )
    }
}

// POST - Membuat skill baru
export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()

        const skill = new Skill(body)
        await skill.save()

        return NextResponse.json(skill, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create skill" },
            { status: 500 }
        )
    }
}
