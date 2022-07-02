import mongoose from "mongoose";

const pelangganSchema = ({
    name: String,
    creator: String,
    namaPelanggan: String,
    merkMotor: String,
    plat: String,
    noPelanggan: String,
    noSlot: Number,
    statusKendaraan: String,
    namaPencuci: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const PostPelanggan = mongoose.model('PostPelanggan', pelangganSchema);

export default PostPelanggan;