import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from 'react-bootstrap';


const AddHotelBooking = (props) => {
  // const [roomid, setRoomID] = useState("");
  const [roomname, setRoomName] = useState("");
  const [extrabed, setExtraBed] = useState("");
  const [noofpersons, setNoOfPersons] = useState("");
  const [noofdays, setNoOfDays] = useState("");
  const [bookingperson, setBookingPerson] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactNo] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const bookinghotel = async (e) => {
    e.preventDefault();
    try {
      const HotelBookingData = {
        // roomid,
        roomname,
        extrabed,
        noofpersons,
        noofdays,
        bookingperson,
        address,
        contactno,
        price
      };

      // Validation for contact no and price

const isValidContactNo = (contactNo) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(contactNo);
  };
  
  const isValidPrice = (price) => {
  return parseFloat(price) >= 0;
  };

  if (!isValidContactNo(contactno)) {
    alert("Please enter a valid 10 digit contact no.");
    return;
  }

  if (!isValidPrice(price)) {
    alert("Please enter a valid price.");
    return;
  }

      

      const result = await axios.post(
        "http://localhost:8060/hotelbooking/add/new",
        HotelBookingData
      );
      if (result?.status === 201) {
        alert("Booking Successfully");
        resetForm();
        navigate("/rooms");
        window.location.reload();
      }
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
      alert(err?.response?.data?.errorMessage);
    }
  };

  const resetForm = () => {
    // setRoomID("");
    setRoomName("");
    setExtraBed("");
    setNoOfPersons("");
    setNoOfDays("");
    setBookingPerson("");
    setAddress("");
    setContactNo("");
    setPrice("");
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <a href='/feedbackList' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Feedbacks</a>
      <h1 style={{ color: "#2c3e50" }}>Booking Room</h1>
      <Form onSubmit={bookinghotel}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>Booking Person</Form.Label>
          <br/>
          <Form.Control
          style={{width:"400px", height:"25px", margin:"10px"}}
            type="text"
            placeholder="Enter your name"
            required
            value={bookingperson}
            onChange={(e) => setBookingPerson(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>Address</Form.Label>
          <br/>
          <Form.Control
          style={{width:"400px", height:"25px", margin:"10px"}}
            type="text"
            placeholder="Enter your address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>Contact No</Form.Label>
          <br/>
          <InputGroup>
            <Form.Control
            style={{width:"400px", height:"25px", margin:"10px"}}
              type="tel"
              placeholder="Enter your phone number"
              required
              value={contactno}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>No Of Persons</Form.Label>
          <br/>
          <Form.Control
          style={{width:"400px", height:"25px", margin:"10px"}}
            type="number"
            min="1"
            placeholder="Enter no of persons"
            required
            value={noofpersons}
            onChange={(e) => setNoOfPersons(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
  <Form.Label style={{ color: "#2c3e50" }}>Room Name</Form.Label>
  <br/>
  <Form.Select
    style={{width:"400px", height:"34px", margin:"10px"}}
    value={roomname}
    onChange={(e) => setRoomName(e.target.value)}
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
  </Form.Select>
</Form.Group>
  
        <Form.Group className="mb-3">
  <Form.Label style={{ color: "#2c3e50" }}>Extra Bed</Form.Label>
  <br/>
  <Form.Select
    style={{width:"400px", height:"34px", margin:"10px"}}
    value={extrabed}
    onChange={(e) => setExtraBed(e.target.value)}
    required
  >
    <option value="">Select an option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </Form.Select>
</Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>No Of Days</Form.Label>
          <br/>
          <Form.Control
          style={{width:"400px", height:"25px", margin:"10px"}}
            type="number"
            min="1"
            placeholder="Enter no of days"
            required
            value={noofdays}
            onChange={(e) => setNoOfDays(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "#2c3e50" }}>Price (Rs.)</Form.Label>
          <br/>
          <InputGroup>
            <Form.Control
            style={{width:"400px", height:"25px", margin:"10px"}}
              type="number"
              min="1"
              placeholder="Enter price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
  
          <div className="d-flex justify-content-between">
    <Button style={{width:"100px", height:"25px", margin:"10px", backgroundColor:"#f44336", color: "white", border: 'none', borderRadius: '5px'}} variant="secondary" onClick={resetForm}>
      Reset
    </Button>
    <a href='/rooms'>
      <Button style={{width:"100px", height:"25px", margin:"10px", backgroundColor:"#2196f3", color: "white", border: 'none', borderRadius: '5px'}} variant="primary">
        Back
      </Button>
    </a>
    <Button style={{width:"100px", height:"25px", margin:"10px", backgroundColor:"#4caf50", color: "white", border: 'none', borderRadius: '5px'}} variant="primary" type="submit">
      Submit
    </Button>
  </div>
        </Form>
      </div>
  );
};

export default AddHotelBooking;
