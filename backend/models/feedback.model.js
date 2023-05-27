const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    placeId: {
        type: 'String',
        required: true
    }
})

const Feedbacks = mongoose.model('Feedbacks', feedbackSchema)
module.exports = Feedbacks;