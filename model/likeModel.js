const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    likeCount: {
       postId: mongoose.Schema.Types.ObjectId
    }
}, {timestamps: true})

module.exports = mongoose.model('Like', likeSchema)