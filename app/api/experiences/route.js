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
        console.error("GET /api/experiences error:", error)
        return NextResponse.json(
            { error: "Failed to fetch experiences", details: error.message },
            { status: 500 }
        )
    }
}

// POST - Membuat experience baru
export async function POST(request) {
    try {
        console.log("POST /api/experiences - Request received")

        // Validate request
        if (!request.body) {
            console.log("POST /api/experiences - No request body")
            return NextResponse.json(
                { error: "Request body is required" },
                { status: 400 }
            )
        }

        await connectDB()
        const body = await request.json()
        console.log(
            "POST /api/experiences - Request body:",
            JSON.stringify(body, null, 2)
        )

        // Jika period tidak ada, isi default
        let period = body.period
        if (!period) {
            period = "2023 - Sekarang"
        }
        // Pastikan period selalu object {start, end}
        if (typeof period === "string") {
            period = { start: period, end: "Present" }
        }
        if (typeof period === "object" && !period.end) {
            period.end = "Present"
        }

        // Validasi field wajib
        const validationErrors = []
        if (!body.title || body.title.trim() === "") {
            validationErrors.push("title is required")
        }
        if (!body.company || body.company.trim() === "") {
            validationErrors.push("company is required")
        }
        if (!body.description || body.description.trim() === "") {
            validationErrors.push("description is required")
        }
        if (!period || !period.start || period.start.trim() === "") {
            validationErrors.push("period.start is required")
        }
        if (validationErrors.length > 0) {
            console.log(
                "POST /api/experiences - Validation errors:",
                validationErrors
            )
            return NextResponse.json(
                { error: "Validation failed", details: validationErrors },
                { status: 400 }
            )
        }

        // Process technologies array
        let technologies = []
        if (body.technologies) {
            if (Array.isArray(body.technologies)) {
                technologies = body.technologies.filter(
                    (tech) => tech && tech.trim()
                )
            } else if (typeof body.technologies === "string") {
                technologies = body.technologies
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
            }
        }

        // Process achievements array
        let achievements = []
        if (body.achievements) {
            if (Array.isArray(body.achievements)) {
                achievements = body.achievements.filter(
                    (achievement) => achievement && achievement.trim()
                )
            } else if (typeof body.achievements === "string") {
                achievements = body.achievements
                    .split(",")
                    .map((a) => a.trim())
                    .filter(Boolean)
            }
        }

        // Create experience object with proper structure
        const experienceData = {
            title: body.title.trim(),
            company: body.company.trim(),
            description: body.description.trim(),
            location: body.location ? body.location.trim() : "",
            period: period, // Sudah dijamin object
            technologies,
            achievements,
            icon: body.icon || "",
            order: body.order || 0,
        }

        console.log(
            "POST /api/experiences - Creating experience with data:",
            JSON.stringify(experienceData, null, 2)
        )

        const experience = new Experience(experienceData)
        await experience.save()

        console.log(
            "POST /api/experiences - Experience created successfully:",
            experience._id
        )
        return NextResponse.json(experience, { status: 201 })
    } catch (error) {
        console.error("POST /api/experiences error:", error)

        // Handle specific MongoDB errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            )
            console.log(
                "POST /api/experiences - MongoDB validation errors:",
                validationErrors
            )
            return NextResponse.json(
                { error: "Validation failed", details: validationErrors },
                { status: 400 }
            )
        }

        if (error.code === 11000) {
            console.log("POST /api/experiences - Duplicate key error")
            return NextResponse.json(
                {
                    error: "Experience with this title and company already exists",
                },
                { status: 409 }
            )
        }

        return NextResponse.json(
            { error: "Failed to create experience", details: error.message },
            { status: 500 }
        )
    }
}
