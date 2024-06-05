const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    likeCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model('Like', likeSchema)