import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    namaPegawai: String,
    usia: String,
    noPegawai: Number,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const PostPegawai = mongoose.model('PostPegawai', postSchema);

export default PostPegawai;