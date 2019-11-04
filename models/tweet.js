const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
    text : String,
    created : {type: Date, default: Date.now},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Tweet', TweetSchema)