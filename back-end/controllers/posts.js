import express from 'express';
import mongoose from 'mongoose';

import PostPelanggan from '../models/postPelanggan.js';

const router = express.Router;

export const getPosts = async (req, res) => {
    try {
        const postPelanggan = await PostPelanggan.find();

        res.status(200).json(postPelanggan);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const postPelanggan = await PostPelanggan.findById(_id);

        res.status(200).json(postPelanggan);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = req.body;

    const newPostPelanggan = new PostPelanggan({ ...post, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newPostPelanggan.save();
        res.status(201).json(newPostPelanggan);
        console.log(newPostPelanggan);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { namaPelanggan, creator, merkMotor, plat, noPelanggan, noSlot, statusKendaraan, namaPencuci, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, namaPelanggan, merkMotor, plat, noPelanggan, noSlot, statusKendaraan, namaPencuci, selectedFile, _id: id };

    await PostPelanggan.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostPelanggan.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;