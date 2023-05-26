import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function FeedbackHeader() {
  const navigate = useNavigate();

  const openAllFeedbacks = () => {
    navigate("/feedbackList", { trim: false });
  };

  return (
    <>
      <div className="row" style={{ width: '1024px' }}>
        <div className="col-6 p-0">
          <h1 className="homeTitle">Feedbacks</h1>
        </div>
        <div className="col-6">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={openAllFeedbacks}
          >
            All
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}
