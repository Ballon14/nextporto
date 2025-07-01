// Debug script untuk API Experience
// Jalankan dengan: node debug-experience.js

const testCases = [
    {
        name: "Minimal Data",
        data: {
            title: "Test Job",
            company: "Test Company",
            description: "Test description",
            period: {
                start: "2023-01",
                end: "Present",
            },
        },
    },
    {
        name: "Full Data",
        data: {
            title: "Software Developer",
            company: "Tech Company",
            location: "Jakarta, Indonesia",
            period: {
                start: "2023-01",
                end: "Present",
            },
            description:
                "Mengembangkan aplikasi web menggunakan React dan Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            achievements: ["Meningkatkan performa 40%"],
            order: 1,
        },
    },
]

async function debugExperienceAPI() {
    const baseURL = "http://localhost:3000/api"

    console.log("🔍 Debugging Experience API...\n")

    // Test 1: Test endpoint
    console.log("1. Testing /api/test-experience (GET)...")
    try {
        const testResponse = await fetch(`${baseURL}/test-experience`)
        if (testResponse.ok) {
            const result = await testResponse.json()
            console.log("✅ Test endpoint works:", result.message)
        } else {
            const error = await testResponse.json()
            console.log("❌ Test endpoint failed:", error)
        }
    } catch (error) {
        console.log("❌ Test endpoint error:", error.message)
    }

    console.log("\n" + "=".repeat(50) + "\n")

    // Test 2: Test cases
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i]
        console.log(`${i + 2}. Testing: ${testCase.name}`)
        console.log("Data:", JSON.stringify(testCase.data, null, 2))

        try {
            const response = await fetch(`${baseURL}/experiences`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(testCase.data),
            })

            const result = await response.json()

            if (response.ok) {
                console.log("✅ Success:", result._id)
            } else {
                console.log("❌ Failed:", result)
            }
        } catch (error) {
            console.log("❌ Error:", error.message)
        }

        console.log("\n" + "-".repeat(30) + "\n")
    }

    // Test 3: GET all experiences
    console.log(`${testCases.length + 2}. Testing GET /api/experiences...`)
    try {
        const getResponse = await fetch(`${baseURL}/experiences`)
        if (getResponse.ok) {
            const experiences = await getResponse.json()
            console.log(
                "✅ GET successful:",
                experiences.length,
                "experiences found"
            )
        } else {
            const error = await getResponse.json()
            console.log("❌ GET failed:", error)
        }
    } catch (error) {
        console.log("❌ GET error:", error.message)
    }
}

// Jalankan debug
if (require.main === module) {
    debugExperienceAPI()
}

module.exports = { debugExperienceAPI }
