import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import Experience from "../../../models/Experience"

export async function GET() {
    try {
        console.log("Testing experience creation...")
        await connectDB()

        // Test data minimal
        const testData = {
            title: "Test Experience",
            company: "Test Company",
            description: "Test description",
            period: {
                start: "2023-01",
                end: "Present",
            },
        }

        console.log("Test data:", testData)

        const experience = new Experience(testData)
        await experience.save()

        console.log("Test experience created:", experience._id)
        return NextResponse.json({
            success: true,
            message: "Test experience created successfully",
            experience,
        })
    } catch (error) {
        console.error("Test experience error:", error)
        return NextResponse.json(
            {
                error: error.message,
                stack: error.stack,
            },
            { status: 500 }
        )
    }
}

export async function POST(request) {
    try {
        console.log("POST test-experience - Request received")

        if (!request.body) {
            return NextResponse.json(
                { error: "No request body" },
                { status: 400 }
            )
        }

        await connectDB()
        const body = await request.json()
        console.log("POST test-experience - Body:", body)

        const experience = new Experience(body)
        await experience.save()

        return NextResponse.json({
            success: true,
            experience,
        })
    } catch (error) {
        console.error("POST test-experience error:", error)
        return NextResponse.json(
            {
                error: error.message,
                details: error.stack,
            },
            { status: 500 }
        )
    }
}
