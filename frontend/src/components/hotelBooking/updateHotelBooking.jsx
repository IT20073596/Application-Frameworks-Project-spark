import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateHotelBooking = () => {
  const [booking, setBooking] = useState({
    roomname: '',
    extrabed: '',
    noofpersons: '',
    noofdays: '',
    bookingperson: '',
    address: '',
    contactno: '',
    price: ''
  });
  

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8060/hotelbooking/bookings/view/${id}`)
      .then((res) => {
        setBooking({
            roomname: res.data.roomname,
            extrabed: res.data.extrabed,
            noofpersons: res.data.noofpersons,
            noofdays: res.data.noofdays,
            bookingperson: res.data.bookingperson,
            address: res.data.address,
            contactno: res.data.contactno,
            price: res.data.price
        });
      })
      .catch((err) => {
        console.log('Unsucessfully');
      });
  }, [id]);

  const onChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        roomname: booking.roomname,
        extrabed: booking.extrabed,
        noofpersons: booking.noofpersons,
        noofdays: booking.noofdays,
        bookingperson: booking.bookingperson,
        address: booking.address,
        contactno: booking.contactno,
        price: booking.price
    };

    axios
      .put(`http://localhost:8060/hotelbooking/bookings/update/${id}`, data)
      .then((res) => {
        navigate(`/rooms`);
        alert("Updated successfully....");
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "10px" }}>
        <h1 style={{ color: "#00b4db", marginBottom: "30px" }}>Update Booking</h1>
        <form onSubmit={onSubmit}>

        <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Booking Person</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='text'
              name='bookingperson'
              id='bookingperson'
              className="form-control"
              value={booking.bookingperson}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Address</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='text'
              name='address'
              id='address'
              className="form-control"
              value={booking.address}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Contact Number</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='number'
              name='contactno'
              id='contactno'
              className="form-control"
              value={booking.contactno}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Number of Persons</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='text'
              name='noofpersons'
              id='noofpersons'
              className="form-control"
              value={booking.noofpersons}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
  <label style={{ color: "#3f3f3f" }}>Room Name</label>
  <br/>
  <select
    style={{ width: "400px", height: "30px", margin: "10px" }}
    name='roomname'
    id='roomname'
    className="form-control"
    value={booking.roomname}
    onChange={onChange}
    required
  >
    <option value="">Select a room</option>
    <option value="Standard Room">Standard Room</option>
    <option value="Deluxe Room">Deluxe Room</option>
    <option value="Superior Room">Superior Room</option>
    <option value="Executive Suite">Executive Suite</option>
    <option value="Presidential Suite">Presidential Suite</option>
    <option value="Family Room">Family Room</option>
    <option value="Honeymoon Suite">Honeymoon Suite</option>
    <option value="Single Room">Single Room</option>
    <option value="Double Room">Double Room</option>
    <option value="Twin Room">Twin Room</option>
  </select>
</div>
  
          <div className="form-group">
  <label style={{ color: "#3f3f3f" }}>Extra Bed</label>
  <br />
  <select
    style={{ width: "400px", height: "30px", margin: "10px" }}
    name="extrabed"
    id="extrabed"
    className="form-control"
    value={booking.extrabed}
    onChange={onChange}
    required
  >
    <option value="">Select an option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>
  
          <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Number of Days</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='number'
              name='noofdays'
              id='noofdays'
              className="form-control"
              value={booking.noofdays}
              onChange={onChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label style={{ color: "#3f3f3f" }}>Price</label>
            <br/>
            <input
            style={{width:"400px", height:"25px", margin:"10px"}}
              type='number'
              name='price'
              id='price'
              className="form-control"
              value={booking.price}
              onChange={onChange}
              required
            />
          </div>
  
          <div className="d-flex justify-content-center">
          <a href='/rooms'>
    <button style={{width:"100px", height:"25px", margin:"10px", border: 'none', borderRadius: '5px', backgroundColor:"#2196f3", color: "white"}} variant="primary">
      Back
    </button>
  </a>
            <button
              type='submit'
              className="btn btn-primary"
              style={{ width:"100px", height:"25px", margin:"10px", backgroundColor: "#4caf50", border: 'none', borderRadius: '5px', color: "white" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default UpdateHotelBooking;
