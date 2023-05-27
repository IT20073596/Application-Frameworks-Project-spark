const express = require("express");
const  router = express.Router()

const funcs = require('../controllers/feedback.controller.js')

router.post('/addFeedback', funcs.addFeedback);
router.post('/viewFeedbacks', funcs.viewFeedbacks)
router.get('/viewAllFeedbacks', funcs.viewAllFeedbacks)
router.post('/deleteFeedback', funcs.deleteFeedback)
router.post("/updateFeedback", funcs.editFeedback)
router.post("/getFeedbackByid", funcs.getFeedbackById)

module.exports = router;