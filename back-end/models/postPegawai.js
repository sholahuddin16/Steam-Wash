import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    namaPegawai: String,
    name: String,
    creator: String,
    usia: String,
    noPegawai: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const PostPegawai = mongoose.model('PostPegawai', postSchema);

export default PostPegawai;