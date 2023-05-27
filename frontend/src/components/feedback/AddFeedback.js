import React, { useState } from "react";
import axios from 'axios'
import "./feedback.css";
import ReactStars from "react-rating-stars-component";
import { successMsg, errorMsg } from "./common/ResponseMsgs";
import { useNavigate } from "react-router-dom";

export default function AddFeedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rate, setRate] = useState(0);
  const [placeId, setPlaceId] = useState(1);
  const user = JSON.parse(localStorage.getItem("user")) || null
  const navigate = useNavigate()
  const userId = user ? user._id : null;

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

  const submitFeedback = () => {
    const passData = {
        name: name,
        feedback: feedback,
        rating: rate,
        placeId: placeId,
        userId: userId
    }
    
    axios.post("http://localhost:8060/feedbacks/addFeedback", passData).then(res => {
        successMsg('Successfully Created').then(res => {
          navigate(-1)
        })
    }).catch(err => {
        errorMsg('Failed to create')
    })
  }

  return (
    <>
      <div className="blue-bg">
        <div className="content-div">
          <div className="title">Add Feedback</div>

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
