import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./feedback.css";
import ReactStars from "react-rating-stars-component";
import { successMsg, errorMsg } from "./common/ResponseMsgs";
import { useLocation, useNavigate } from 'react-router-dom'
import deleteIcon from '../../static/images/feedback-delete-icon.png';
import editIcon from '../../static/images/feedback-edit-icon.png'

export default function FeedbackList(props) {
    const [feedbacks, setFeedbacks] = useState([])
    const isDeleteAvailable = window.localStorage.getItem("userType") == 1;
    const userId = window.localStorage.getItem("userId")
    const navigate = useNavigate()
    const isAdminUser = localStorage.getItem("logged")

    const isTrimmed = props.trim;

    console.log(typeof isAdminUser);

    const getAllFeedbacks = () => {
        axios.get("http://localhost:8060/feedbacks/viewAllFeedbacks").then(res => {
            setFeedbacks(res.data)
        }).catch(err => {
            errorMsg('Error retriving data')
        })
    }

    const openEditPage = (id, rating) => {
        console.log(id);
        navigate("/editFeedback", { state: {
            id, rating
        } })
    }

    const openAddPage = () => {
        navigate('/addFeedback')
    }

    const deleteFeedback = (id) => {
        axios.post("http://localhost:8060/feedbacks/deleteFeedback", { id: id }).then(res => {
            successMsg('Successfully deleted')
            getAllFeedbacks()
        }).then(err => {
            successMsg('Successfully deleted')
            getAllFeedbacks()
        })
    }

    const isEditEnabled = (id) => {
        // return id === userId
        return isAdminUser;
    }

    useEffect(() => {
        getAllFeedbacks()
    }, [])

    return (
        <>
            {/* <div className="background"> */}
            {/* { !isTrimmed &&
                <Navbar /> }
            { !isTrimmed &&
                <Header /> } */}
                  <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <a href='/feedbackList' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Feedbacks</a>
            { !isTrimmed &&
                <div style={{ height: '50px' }}></div> }
            <div className="background">
                <div className="list-div">
                    { !isTrimmed &&
                        <div className="row m-0">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="title">All Feedbacks</div>
                            </div>
                            <div className="col-3">
                            <button type="button" class="btn submit-btn" onClick={openAddPage}>
                                Add new Feedback
                            </button>
                            </div>
                        </div>
                    }

                    {/* Trimmed to 3 */}
                    { isTrimmed && feedbacks.slice(0,3).map(function(item) {
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
                        	        {/* <div className="row m-0" style={{ height: "100%" }}>
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    }) }

                    {/* Not trimmed to 3 */}
                    { !isTrimmed && feedbacks.map(function(item) {
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
                                                { isAdminUser && <img src={deleteIcon} className="icon" onClick={() => deleteFeedback(item._id)}/> }
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="icon-area">
                                                { isEditEnabled(item.userId) && <img src={editIcon} className="icon" onClick={() => openEditPage(item._id, item.rating)}/> }
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
