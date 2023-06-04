const mongoose = require('mongoose')
const { Schema } = mongoose

const responseSchema = new mongoose.Schema({
    timeStamp: {
        type: String,
        required: [true, "A date is required."]
    },
    status: {
        type: Array,
        required: [true, "status list is required."]
    },
    type: {
        type: String,
        required: [true, "A type is required."]
    }, 
    satisfaction: {
        type: Number,
        required: [true, "A number is required."],
        min: [1, "The minimum satisfaction is 1."],
        max: [5, "The maximum satisfaction is 5."]
    },
    problem: {
        type: Array,
        required: [true, "Problem list is required."]
    },
    importance: {
        type: Array,
        required: [true, "Importance list is required."]
    },
    rent: {
        type: String,
        required: [true, "The rent is required."]
    }, 
    reason: {
        type: String,
        required: [true, "The reason is required."]
    },
    people: {
        type: Number,
        required: [true, "A number is required."],
        min: [1, "The minimum satisfaction is 1."],
        max: [999, "The maximum satisfaction is 999."]
    },
    age: {
        type: String,
        required: [true, "The age range is required."]
    },
    income: {
        type: String,
        required: [true, "The income range is required."]
    },
    comment: {
        type: String
    }
})

const Response = mongoose.model('responses', responseSchema)

module.exports = Response
