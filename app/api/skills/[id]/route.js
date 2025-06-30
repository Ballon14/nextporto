import { NextResponse } from "next/server"
import connectDB from "../../../../lib/mongodb"
import Skill from "../../../../models/Skill"

// GET - Mengambil skill berdasarkan ID
export async function GET(request, { params }) {
    try {
        await connectDB()
        const skill = await Skill.findById(params.id)

        if (!skill) {
            return NextResponse.json(
                { error: "Skill not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(skill)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch skill" },
            { status: 500 }
        )
    }
}

// PUT - Update skill berdasarkan ID
export async function PUT(request, { params }) {
    try {
        await connectDB()
        const body = await request.json()

        const skill = await Skill.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        })

        if (!skill) {
            return NextResponse.json(
                { error: "Skill not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(skill)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update skill" },
            { status: 500 }
        )
    }
}

// DELETE - Hapus skill berdasarkan ID
export async function DELETE(request, { params }) {
    try {
        await connectDB()
        const skill = await Skill.findByIdAndDelete(params.id)

        if (!skill) {
            return NextResponse.json(
                { error: "Skill not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ message: "Skill deleted successfully" })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete skill" },
            { status: 500 }
        )
    }
}
