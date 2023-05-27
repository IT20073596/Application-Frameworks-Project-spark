const mongoose = require("mongoose");

const hotelbookingSchema = new mongoose.Schema({
  // roomid: {
  //   type: String,
  //   required: true,
  // },
  roomname: {
    type: String,
    required: true,
  },
  extrabed: {
    type: String,
    required: true,
  },
  noofpersons: {
    type: String,
    required: true,
  },
  noofdays: {
    type: String,
    required: true,
  },
  bookingperson: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {   
    type: Date, 
    default: Date.now() 
  }
});

const hotelbookings = new mongoose.model("hotelbookings", hotelbookingSchema);

module.exports = hotelbookings;
// setRoomID
// setRoomName
// setExtraBed
// setNoOfPersons
// setNoOfDays
// setBookingPerson