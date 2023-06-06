const mongoose = require('mongoose')
const { Schema } = mongoose

const persoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A first name is required.'],
        minlength: [1, 'Minimum length for the first name is 1 character.']
    },
    lastName: {
        type: String,
        required: [true, 'A last name is required.'],
        minlength: [1, 'Minimum length for the last name is 1 character.']
    },
    email: {
        type: String,
        required: [true, 'An email is required.']
    },
    age: {
        type: Number,
        required: [true, 'An age is required.'],
        min: [15, 'Minimum age is 15'],
        max: [120, 'Maximum age is 120']
    },
    address: {
        type: String
    },
    purpose: {
        type: String,
        required: [true, 'A purpose is required.']
    },
    bio: {
        type: String
    }
})

const Perso = mongoose.model('perso', persoSchema)

module.exports = Perso