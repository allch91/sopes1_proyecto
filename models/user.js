const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    alias : {type: String, unique: true, lowercase: true},
    name : String
})

module.exports = mongoose.model('User', UserSchema)