import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./feedback.css";
import ReactStars from "react-rating-stars-component";
import { successMsg, errorMsg } from "./common/ResponseMsgs";
import { useNavigate } from 'react-router-dom'
import deleteIcon from '../../static/images/feedback-delete-icon.png';
import editIcon from '../../static/images/feedback-edit-icon.png'

export default function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([])
    const isDeleteAvailable = window.localStorage.getItem("userType") == 1;
    const userId = window.localStorage.getItem("userId")
    const navigate = useNavigate()
    console.log(feedbacks);


    const getAllFeedbacks = () => {
        axios.get("http://localhost:9000/feedbacks/viewAllFeedbacks").then(res => {
            setFeedbacks(res.data)
        }).catch(err => {
            errorMsg('Error retriving data')
        })
    }

    const openEditPage = (id) => {
        console.log(id);
        navigate("/editFeedback", { state: id })
    }

    const deleteFeedback = (id) => {
        axios.post("http://localhost:9000/feedbacks/deleteFeedback", { id: id }).then(res => {
            successMsg('Successfully deleted')
            getAllFeedbacks()
        }).then(err => {
            errorMsg('Error deleting')
        })
    }

    const isEditEnabled = (id) => {
        return id === userId
    }

    useEffect(() => {
        getAllFeedbacks()
    }, [])

    return (
        <>
            <div className="background">
                <div className="list-div">
                    <div className="title">All Feedbacks</div>

                    { feedbacks.map(function(item) {
                        return <div className="list-item">
                            <div className="row m-0">
                                <div className="col col-9">
                                    <div className="list-name">
                                        { item.name }
                                    </div>
                                    <div>
                                        { item.feedback }
                                    </div>
                                    <div>
                                    <ReactStars
                                        count={5}
                                        size={30}
                                        activeColor="#ffd700"
                                        isHalf
                                        edit={false}
                                        value={item.rating}
                                    />
                                    </div>
                                </div>
                                <div className="col col-3">
                        	        <div className="row m-0" style={{ height: "100%" }}>
                                        <div className="col-6">
                                            <div className="icon-area">
                                                { isDeleteAvailable && <img src={deleteIcon} className="icon" onClick={() => deleteFeedback(item._id)}/> }
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="icon-area">
                                                { isEditEnabled(item.userId) && <img src={editIcon} className="icon" onClick={() => openEditPage(item._id)}/> }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) }

                </div>
            </div>
        </>
    )
}
