const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    commentedAt:{
        type: Date,
        default: Date.now,

    },
})

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minLength: 5,
    },
    content: {
        type: String,
        required: true,
        minLength: 50,
    },
    author: {
        type: String,
    },
    tags: {
        type: [String],
    },
    category: {
        type: String,
        Default: 'General',
    },
    likes: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    comment: commentSchema,

})
const Blog = mongoose.model('Blog', blogSchema);

module.export = Blog;