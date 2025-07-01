// Test script dengan data yang sama seperti di lib/data.js
// Jalankan dengan: node test-with-data.js

const testDataFromLib = [
    {
        title: "Junior Developer",
        company: "Startup Gabut",
        period: "2023 - Sekarang", // String format seperti di data.js
        description:
            "Belajar coding sambil ngopi dan bikin error yang kreatif. Fokus pada web development dengan React dan Laravel.",
        technologies: ["React", "Laravel", "JavaScript", "PHP"],
        icon: "💼",
    },
    {
        title: "Freelance Programmer",
        company: "Self Employed",
        period: "2022 - 2023", // String format
        description:
            "Menerima project kecil-kecilan sambil belajar. Kadang sukses, kadang error, tapi tetap semangat!",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        icon: "🆓",
    },
    {
        title: "Student Developer",
        company: "Bootcamp Coding",
        period: "2021 - 2022", // String format
        description:
            "Belajar dasar-dasar programming dari nol. Dari hello world sampai bikin aplikasi sederhana.",
        technologies: ["Python", "JavaScript", "HTML", "CSS"],
        icon: "🎓",
    },
]

async function testWithDataFromLib() {
    const baseURL = "http://localhost:3000/api"

    console.log("🧪 Testing API dengan data dari lib/data.js...\n")

    for (let i = 0; i < testDataFromLib.length; i++) {
        const data = testDataFromLib[i]
        console.log(`${i + 1}. Testing: ${data.title} at ${data.company}`)
        console.log("Data:", JSON.stringify(data, null, 2))

        try {
            const response = await fetch(`${baseURL}/experiences`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok) {
                console.log("✅ Success:", result._id)
                console.log("Period after save:", result.period) // Check how period was saved
            } else {
                console.log("❌ Failed:", result)
            }
        } catch (error) {
            console.log("❌ Error:", error.message)
        }

        console.log("\n" + "-".repeat(50) + "\n")
    }

    // Test GET to see all experiences
    console.log("📋 Testing GET /api/experiences...")
    try {
        const getResponse = await fetch(`${baseURL}/experiences`)
        if (getResponse.ok) {
            const experiences = await getResponse.json()
            console.log(
                "✅ GET successful:",
                experiences.length,
                "experiences found"
            )
            experiences.forEach((exp, index) => {
                console.log(`${index + 1}. ${exp.title} - Period:`, exp.period)
            })
        } else {
            const error = await getResponse.json()
            console.log("❌ GET failed:", error)
        }
    } catch (error) {
        console.log("❌ GET error:", error.message)
    }
}

// Jalankan test
if (require.main === module) {
    testWithDataFromLib()
}

module.exports = { testWithDataFromLib }
