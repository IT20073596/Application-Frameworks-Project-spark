import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../feedback/feedback.css";

export default function EditUser() {
    // const user = localStorage.getItem("user")
    const userId = localStorage.getItem("userId")
  const [name, setName] = useState(localStorage.getItem("name"));
  const [age, setAge] = useState(localStorage.getItem("age"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const nameChanged = (value) => {
    setName(value)
  }

  const ageChanged = (value) => {
    setAge(value)
  }

  const emailChanged = (value) => {
    setEmail(value)
  }

  async function editUser() {
    console.log('hjeieue')
    const userObj = { name, age, email }
    try {
        await axios
          .delete(`http://localhost:8060/users/user/update/${userId}`, { data: userObj })
          .then((res) => {
            if (res.status === 201) {
              alert("Updated successfully....");
            //   window.location.reload();
            }
          });
    } catch (error) {
      alert(error);
    }
}

  return (
    <>
      <div className="blue-bg">
        <div className="content-div">
          <div className="title">Edit User</div>

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

          <div className="input-div">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Age"
              aria-label="Name"
              value={age}
              onChange={(e) => {
                ageChanged(e.target.value);
              }}
            />
          </div>

          <div className="input-div">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              aria-label="Name"
              value={email}
              onChange={(e) => {
                emailChanged(e.target.value);
              }}
            />
          </div>

          <div className="center-div">
            <button type="button" class="btn submit-btn" onClick={editUser}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
