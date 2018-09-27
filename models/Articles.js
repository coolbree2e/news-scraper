const mongoose = require("mongoose");
// saves the schema
const Schema = mongoose.Schema;

// creates new user Schema
const articleSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    link:{
        type: String,
        required: true,
        unique: true,
    },
    summary:{
        type: String,
        required:true,
        unique: true
    },
    note:{
        type: Schema.Types.ObjectId,
        ref: "note"
    }
});
// creates the modal
const Article = mongoose.model("Article",articleSchema);

module.exports = Article;