import mongoose from "mongoose";

// 1- create Schema
// 2 - models based off of that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true // Created At and updated at
    }
);

const Note = mongoose.model("Note", noteSchema)

export default Note;