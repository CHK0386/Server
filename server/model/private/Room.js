import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
    {
        Id: {
            type: String,
            unique: true,
            required: true,
        },
        Status: {
            type: String,
            enum: ['Available', 'Full'],
            required: true,
        },
        Slot: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("rooms", RoomSchema);