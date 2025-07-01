// Test script untuk API Experience
// Jalankan dengan: node test-experience-api.js

const testExperience = {
    title: "Software Developer",
    company: "Tech Company",
    location: "Jakarta, Indonesia",
    period: {
        start: "2023-01",
        end: "Present",
    },
    description: "Mengembangkan aplikasi web menggunakan React dan Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    achievements: [
        "Meningkatkan performa aplikasi sebesar 40%",
        "Mengimplementasikan fitur real-time chat",
    ],
    order: 1,
}

async function testExperienceAPI() {
    const baseURL = "http://localhost:3000/api"

    try {
        // Test POST
        console.log("Testing POST /api/experiences...")
        const postResponse = await fetch(`${baseURL}/experiences`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testExperience),
        })

        if (postResponse.ok) {
            const createdExperience = await postResponse.json()
            console.log(
                "✅ Experience created successfully:",
                createdExperience._id
            )
        } else {
            const error = await postResponse.json()
            console.log("❌ POST failed:", error)
        }

        // Test GET
        console.log("\nTesting GET /api/experiences...")
        const getResponse = await fetch(`${baseURL}/experiences`)

        if (getResponse.ok) {
            const experiences = await getResponse.json()
            console.log(
                "✅ Experiences fetched successfully:",
                experiences.length,
                "experiences found"
            )
        } else {
            const error = await getResponse.json()
            console.log("❌ GET failed:", error)
        }
    } catch (error) {
        console.error("❌ Test failed:", error.message)
    }
}

// Jalankan test jika file dijalankan langsung
if (require.main === module) {
    testExperienceAPI()
}

module.exports = { testExperienceAPI }
