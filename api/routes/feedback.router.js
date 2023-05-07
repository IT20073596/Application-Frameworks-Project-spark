import express from 'express'
const  router = express.Router()

import { addFeedback, viewFeedbacks, viewAllFeedbacks, deleteFeedback, editFeedback, getFeedbackById } from '../controllers/feedback.controller.js'

router.post('/addFeedback', addFeedback);
router.post('/viewFeedbacks', viewFeedbacks)
router.get('/viewAllFeedbacks', viewAllFeedbacks)
router.post('/deleteFeedback', deleteFeedback)
router.post("/updateFeedback", editFeedback)
router.post("/getFeedbackByid", getFeedbackById)

export default router;