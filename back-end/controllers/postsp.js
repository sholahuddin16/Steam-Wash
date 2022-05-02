import express from 'express';
import mongoose from 'mongoose';

import PostPegawai from '../models/postPegawai.js';

const router = express.Router();

export const getPostsp = async (req, res) => {
    try {
        const postPegawai = await PostPegawai.find();

        res.status(200).json(postPegawai);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostp = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const postPegawai = await PostPegawai.findById(_id);

        res.status(200).json(postPegawai);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPostp = async (req, res) => {
    const { namaPegawai, usia, noPegawai, selectedFile } = req.body;

    const newPostPegawai = new PostPegawai({ namaPegawai, usia, noPegawai, selectedFile })

    try {
        await newPostPegawai.save();
        res.status(201).json(newPostPegawai);
        console.log(newPostPegawai)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePostp = async (req, res) => {
    const { id } = req.params;
    const { namaPegawai, usia, noPegawai, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPostp = { namaPegawai, usia, noPegawai, selectedFile, _id: id };

    await PostPegawai.findByIdAndUpdate(id, updatedPostp, { new: true });

    res.json(updatedPostp);
    console.log(updatedPostp);
}

export const deletePostp = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostPegawai.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;