import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    certificateId: {
        type: String,
        unique: true,
        required: true
    },
    issuedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("certificate", certificateSchema);
