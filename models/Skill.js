import mongoose from "mongoose"

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["Frontend", "Backend", "Database", "Tools", "Other"],
        },
        level: {
            type: Number,
            required: true,
            min: 1,
            max: 100,
        },
        icon: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Skill || mongoose.model("Skill", skillSchema)
