import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./feedback.css";
import ReactStars from "react-rating-stars-component";
import { successMsg, errorMsg } from "./common/ResponseMsgs";
import { useLocation, useNavigate } from 'react-router-dom'

export default function EditFeedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const location = useLocation()
  const [rate, setRate] = useState(location.state.rating);
  const navigate = useNavigate()

  const id = location.state.id;

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const nameChanged = (newName) => {
    setName(newName);
  };

  const feedbackChanged = (newFeedback) => {
    setFeedback(newFeedback);
  };

  const refreshForm = () => {
    setName('')
    setFeedback('')
    setRate(0)
  }

  const getFeedbackInfo = () => {
    axios.post("http://localhost:8060/feedbacks/getFeedbackByid", { id: id }).then(res => {
        const feedback = res.data;
        setName(feedback.name)
        setFeedback(feedback.feedback)
        // setRate(feedback.rating)
    }).catch(err => {
        errorMsg('Error retrieving data')
    })
  }

  const submitFeedback = () => {
    const passData = {
        id: id,
        name: name,
        feedback: feedback,
        rating: rate
    }

    axios.post("http://localhost:8060/feedbacks/updateFeedback", passData).then(res => {
        successMsg('Successfully Updated').then(res => {
          navigate(-1)
        })
    }).catch(err => {
        errorMsg('Failed to update')
    })
  }

  useEffect(() => {
    getFeedbackInfo()
  }, [])

  return (
    <>
      <div className="blue-bg">
        <div className="content-div">
          <div className="title">Edit Feedback</div>

          <div className="input-div">
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              aria-label="Name"
              value={name}
              onChange={(e) => {
                nameChanged(e.target.value);
              }}
            />
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave your feedback here"
              id="floatingTextarea"
              style={{ height: "100px" }}
              value={feedback}
              onChange={(e) => {
                feedbackChanged(e.target.value);
              }}
            ></textarea>
            <label for="floatingTextarea">Your feedback</label>
          </div>

          <div className="center-div">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              activeColor="#ffd700"
              isHalf
              value={rate}
            />
          </div>

          <div className="center-div">
            <button type="button" class="btn submit-btn" onClick={submitFeedback}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
