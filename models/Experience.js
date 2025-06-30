import mongoose from "mongoose"

const experienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            trim: true,
        },
        period: {
            start: {
                type: String,
                required: true,
            },
            end: {
                type: String,
                default: "Present",
            },
        },
        description: {
            type: String,
            required: true,
        },
        technologies: [
            {
                type: String,
                trim: true,
            },
        ],
        achievements: [
            {
                type: String,
                trim: true,
            },
        ],
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Experience ||
    mongoose.model("Experience", experienceSchema)
