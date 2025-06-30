import mongoose from "mongoose"

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
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
        githubUrl: {
            type: String,
            trim: true,
        },
        liveUrl: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["Web App", "Mobile App", "Desktop App", "API", "Other"],
        },
        featured: {
            type: Boolean,
            default: false,
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

export default mongoose.models.Project ||
    mongoose.model("Project", projectSchema)
