import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Skill from "../../../models/Skill"

export async function GET() {
    try {
        await connectDB()
        // Data hardcoded
        const skill = new Skill({
            name: "Testing Skill",
            category: "Frontend",
            level: 80,
            icon: "🧪",
            color: "#000000",
            description: "Skill untuk testing",
        })
        await skill.save()
        return NextResponse.json({ success: true, skill })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
