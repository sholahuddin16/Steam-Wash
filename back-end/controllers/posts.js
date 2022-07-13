import express from 'express';
import mongoose from 'mongoose';

import PostPelanggan from '../models/postPelanggan.js';

const router = express.Router;

export const getPosts = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 9;
        const startIndex = (Number(page) -1) * LIMIT; //awal mulai index page
        const total = await PostPelanggan.countDocuments({});

        const posts = await PostPelanggan.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPage: Math.ceil(total / LIMIT) });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery } = req.query

    try {
        const namaPelanggan =  new RegExp(searchQuery, "i");

        const posts = await PostPelanggan.find({ $or: [ { namaPelanggan }] });

        res.json({ data: posts });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostPelanggan.findById(id);

        res.status(200).json(post);
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