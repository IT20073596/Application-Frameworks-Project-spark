import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Rooms = () => {
  const [rooms] = useState([
    { id: 1, name: 'Room 1', capacity: 4, isAvailable: true },
    { id: 2, name: 'Room 2', capacity: 2, isAvailable: false },
    { id: 3, name: 'Room 3', capacity: 6, isAvailable: true },
    { id: 4, name: 'Room 4', capacity: 3, isAvailable: true },
    { id: 5, name: 'Room 5', capacity: 3, isAvailable: true },
    { id: 6, name: 'Room 6', capacity: 3, isAvailable: true },
    { id: 7, name: 'Room 7', capacity: 3, isAvailable: true },
    { id: 8, name: 'Room 8', capacity: 3, isAvailable: true },
    { id: 9, name: 'Room 9', capacity: 3, isAvailable: true },
    { id: 10, name: 'Room 10', capacity: 3, isAvailable: true },
  ]);
  
  const [searchText, setSearchText] = useState('');

  const filteredRooms = rooms.filter((room) => {
    return room.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '20px' }}>
      <a href='/rooms' style={{ color: '#FF5733', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Rooms</a>
      <a href='/addhotelbooking' style={{ color: '#FFA500', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Booking</a>
      <a href='/allusers' style={{ color: '#008080', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>View All Users</a>
      <a href='/allbooking' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>All Bookings</a>
      <a href='/feedbackList' style={{ color: '#8B0000', textDecoration: 'none', marginRight: '20px', fontSize: '20px' }}>Feedbacks</a>
      <h1 style={{ color: '#FFA500', marginTop: '40px', marginBottom: '20px' }}>Rooms</h1>
      <input type="text" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{ padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '20px', fontSize: '18px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredRooms.map((room) => (
          <div key={room.id} style={{ margin: '10px', border: '1px solid black', padding: '10px', minWidth: '200px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ color: '#8B0000', marginBottom: '10px' }}>{room.name}</h3>
            <p style={{ color: '#696969', marginBottom: '10px' }}>{room.description}</p>
            <p style={{ color: '#008080', marginBottom: '10px' }}>Capacity: {room.capacity}</p>
            <a href = '/addhotelbooking'><Button style={{ backgroundColor: '#008080', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '10px' }}>Booking</Button></a>
          </div>
        ))}
      </div>
    </div>
);

};

export default Rooms;
