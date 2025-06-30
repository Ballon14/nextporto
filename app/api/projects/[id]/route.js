import { NextResponse } from "next/server"
import connectDB from "../../../../lib/mongodb"
import Project from "../../../../models/Project"

// GET - Mengambil project berdasarkan ID
export async function GET(request, { params }) {
    try {
        await connectDB()
        const project = await Project.findById(params.id)

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch project" },
            { status: 500 }
        )
    }
}

// PUT - Update project berdasarkan ID
export async function PUT(request, { params }) {
    try {
        await connectDB()
        const body = await request.json()

        const project = await Project.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        })

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update project" },
            { status: 500 }
        )
    }
}

// DELETE - Hapus project berdasarkan ID
export async function DELETE(request, { params }) {
    try {
        await connectDB()
        const project = await Project.findByIdAndDelete(params.id)

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ message: "Project deleted successfully" })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete project" },
            { status: 500 }
        )
    }
}
