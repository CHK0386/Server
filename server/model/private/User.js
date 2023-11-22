import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
    {

        Type: {
            type: String,
            enum: ['admin', 'student'],
            required: true,
        },
        HoTen: {
            type: String,
            required: true,
        },
        MSSV: {
            type: String,
            default: null,
            // Kiểm tra nếu Type là admin thì giá trị là null
            required: function() {
                return this.Type !== 'admin';
            },
        },
        CMND: {
            type: String,
            required: true,
        },
        GioiTinh: {
            type: String,
            required: true,
        },
        Truong: {
            type: String,
            default: null,
            // Kiểm tra nếu Type là admin thì giá trị là null
            required: function() {
                return this.Type !== 'admin';
            },
        },
        NganHang: {
            type: String,
            default: null,
            // Kiểm tra nếu Type là admin thì giá trị là null
            required: function() {
                return this.Type !== 'admin';
            },
        },
        
    },
    { timestamps: true }
)

export default mongoose.model("users", UserSchema);
