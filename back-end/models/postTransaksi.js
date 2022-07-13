import mongoose from "mongoose";

const transaksiSchema = ({
    namaPegawai: String,
    jumlahPelayanan: String,
    kurunWaktu: String,
})

const PostTransaksi = mongoose.model('PostTransaksi', transaksiSchema);

export default PostTransaksi;