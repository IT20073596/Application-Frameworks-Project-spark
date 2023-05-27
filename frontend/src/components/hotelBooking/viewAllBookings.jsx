import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewAllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8060/hotelbooking/bookings");
      setBookings(response.data);
    }
    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:8060/hotelbooking/bookings/${id}`);
  //   setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
  // };

  async function handleDelete(element) {
    try {
        await axios
          .delete(`http://localhost:8060/hotelbooking/bookings/delete/${element._id}`)
          .then((res) => {
            if (res.status === 201) {
              alert("Deleted successfully....");
              window.location.reload();
            }
          });
    } catch (error) {
      alert(error);
    }
}


  return (
    <div>
      <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <h1 style={{color: "#2E8B57", textAlign: "center"}}>All Bookings</h1>
      <table style={{borderCollapse: "collapse", width: "100%"}}>
        <thead>
          <tr style={{backgroundColor: "#2E8B57", color: "white"}}>
            <th style={{padding: "10px"}}>Room Name</th>
            <th style={{padding: "10px"}}>Extra Bed</th>
            <th style={{padding: "10px"}}>No. of Persons</th>
            <th style={{padding: "10px"}}>No. of Days</th>
            <th style={{padding: "10px"}}>Booking Person</th>
            <th style={{padding: "10px"}}>Address</th>
            <th style={{padding: "10px"}}>Contact No.</th>
            <th style={{padding: "10px"}}>Price</th>
            <th style={{padding: "10px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} style={{borderBottom: "1px solid #ccc"}}>
              <td style={{padding: "10px"}}>{booking.roomname}</td>
              <td style={{padding: "10px"}}>{booking.extrabed}</td>
              <td style={{padding: "10px"}}>{booking.noofpersons}</td>
              <td style={{padding: "10px"}}>{booking.noofdays}</td>
              <td style={{padding: "10px"}}>{booking.bookingperson}</td>
              <td style={{padding: "10px"}}>{booking.address}</td>
              <td style={{padding: "10px"}}>{booking.contactno}</td>
              <td style={{padding: "10px"}}>{booking.price}</td>
              <td style={{padding: "10px"}}>
              <div>
              <button
  style={{ backgroundColor: "#FF6347", color: "white", padding: "5px", marginRight: "10px", border: 'none', borderRadius: '5px' }}
  onClick={() => handleDelete(booking)}
>
  Delete
</button>

  <Link
    style={{ backgroundColor: "blue", color: "white", padding: "5px", border: 'none', borderRadius: '5px', textDecoration:"none" }}
    to={`/updatead/${booking._id}`}
    className="btn btn-secondary mr-2"
  >
    Update
  </Link>
</div>



              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllBookings;
