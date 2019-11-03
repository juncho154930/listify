import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
    created_at: { type: Date, default: Date.now }
})