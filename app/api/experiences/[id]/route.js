import { NextResponse } from "next/server"
import connectDB from "../../../../lib/mongodb"
import Experience from "../../../../models/Experience"

// GET - Mengambil experience berdasarkan ID
export async function GET(request, { params }) {
    try {
        await connectDB()
        const experience = await Experience.findById(params.id)

        if (!experience) {
            return NextResponse.json(
                { error: "Experience not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(experience)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch experience" },
            { status: 500 }
        )
    }
}

// PUT - Update experience berdasarkan ID
export async function PUT(request, { params }) {
    try {
        await connectDB()
        const body = await request.json()

        const experience = await Experience.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        })

        if (!experience) {
            return NextResponse.json(
                { error: "Experience not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(experience)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update experience" },
            { status: 500 }
        )
    }
}

// DELETE - Hapus experience berdasarkan ID
export async function DELETE(request, { params }) {
    try {
        await connectDB()
        const experience = await Experience.findByIdAndDelete(params.id)

        if (!experience) {
            return NextResponse.json(
                { error: "Experience not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ message: "Experience deleted successfully" })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete experience" },
            { status: 500 }
        )
    }
}
