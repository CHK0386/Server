import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomDetailSchema = new Schema(
    {
        Id: {
            type: String,
            unique: true,
            required: true,
        },
        PhongId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'rooms',
            required: true,
        },
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("roomdetails", RoomDetailSchema);