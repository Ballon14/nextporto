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
            type: mongoose.Schema.Types.Mixed, // Allow both string and object
            required: true,
            validate: {
                validator: function (value) {
                    // Allow string format
                    if (typeof value === "string") {
                        return value.trim().length > 0
                    }
                    // Allow object format with start
                    if (typeof value === "object" && value !== null) {
                        return value.start && typeof value.start === "string"
                    }
                    return false
                },
                message:
                    "Period must be a string or object with start property",
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
        icon: {
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

// Pre-save middleware to normalize period format
experienceSchema.pre("save", function (next) {
    // If period is string, convert to object format
    if (typeof this.period === "string") {
        this.period = {
            start: this.period,
            end: "Present",
        }
    }
    next()
})

export default mongoose.models.Experience ||
    mongoose.model("Experience", experienceSchema)
