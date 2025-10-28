import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    joTitle: {
        type: String,
    },
    gender: {
        type: String
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User