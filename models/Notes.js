const mongoose = require("mongoose");
// saves the schema
const Schema = mongoose.Schema;

// creates the new note schema
const  noteSchema = new Schema({
    title: String,
    body: String
});
// creates the modal
const Note = mongoose.model("Note",noteSchema);
// exports the schema
module.exports = Note;
