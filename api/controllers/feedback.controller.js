import asyncHandler from "express-async-handler";
import Feedbacks from "../models/feedback.model.js";

// Add feedbacks for a place
const addFeedback = asyncHandler(async (req,res) => {
    console.log(req);
    const { name, feedback, rating, placeId } = req.body;

    const feedbackObj = new Feedbacks({
        name, feedback, rating, placeId
    })

    try {
        feedbackObj.save().then(() => {
            res.status(201).json(feedbackObj);
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
    } catch {
        res.status(400);
    }
})

// View feedbacks for a place
const viewFeedbacks = asyncHandler(async (req, res) => {
    const { placeId } = req.body;

    const feedbacks = await Feedbacks.find({ "placeId": placeId })
    res.json(feedbacks)
})

// View all feedbacks
const viewAllFeedbacks = asyncHandler(async (req, res) => {
    const { placeId } = req.body;

    const feedbacks = await Feedbacks.find({})
    res.json(feedbacks)
})

// Delete feedback by id
const deleteFeedback = asyncHandler(async (req, res) => {
    const { id } = req.body;
    console.log(id);
    const feedback = await Feedbacks.deleteOne({ _id: id })
    res.json({
        status: 200
    })

})

// Edit feedback by id
const editFeedback = asyncHandler(async (req,res) => {
    const { id, name, feedback, rating } = req.body

    const filter = { _id: id }
    const update = {
        name, feedback, rating
    }

    const feed = await Feedbacks.findOneAndUpdate(filter, update)
    res.json(feed)
})

const getFeedbackById = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const feedback = await Feedbacks.findOne({ _id: id })
    res.json(feedback)
})

export { addFeedback, viewFeedbacks, viewAllFeedbacks, deleteFeedback, editFeedback, getFeedbackById }