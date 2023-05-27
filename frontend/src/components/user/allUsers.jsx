import React, { useState, useEffect } from "react";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8060/users/allusers");
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{backgroundColor: "#f5f5f5", padding: "20px"}}>
      <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <a href='/feedbackList' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Feedbacks</a>
      <h1 style={{color: "#1E90FF", textAlign: "center"}}>All Users</h1>
      <table style={{borderCollapse: "collapse", width: "100%"}}>
        <thead>
          <tr style={{backgroundColor: "#1E90FF", color: "white"}}>
            <th style={{padding: "10px"}}>Name</th>
            <th style={{padding: "10px"}}>Age</th>
            <th style={{padding: "10px"}}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} style={{borderBottom: "1px solid #ccc"}}>
              <td style={{padding: "10px"}}>{user.name}</td>
              <td style={{padding: "10px"}}>{user.age}</td>
              <td style={{padding: "10px"}}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
