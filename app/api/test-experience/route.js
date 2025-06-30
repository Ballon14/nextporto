import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Experience from "../../../models/Experience"

export async function GET() {
    try {
        await connectDB()
        const experience = new Experience({
            title: "Testing Experience",
            company: "Test Company",
            location: "Jakarta",
            period: { start: "2023", end: "2024" },
            description: "Pengalaman untuk testing",
            technologies: ["React", "Node.js"],
            achievements: ["Achievement 1", "Achievement 2"],
        })
        await experience.save()
        return NextResponse.json({ success: true, experience })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
