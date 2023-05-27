const express = require("express");
const router = express.Router();
const HotelBooking = require("../../models/hotelbookingManagement/hotelbooking.model");


router.post("/add/new", async (req, res) => {
    const { roomname, extrabed, noofpersons, noofdays, bookingperson, address, contactno, price } = req.body;
  
    if (!roomname || !extrabed || !noofpersons|| !noofdays|| !bookingperson|| !address|| !contactno|| !price) {
      res.status(422).json("Please enter all data");
      return 0;
    } else {
      try {
        const addhotelbooking = new HotelBooking({
            roomname: req.body.roomname,
            extrabed: req.body.extrabed,
            noofpersons: req.body.noofpersons,
            noofdays: req.body.noofdays,
            bookingperson: req.body.bookingperson,
            address: req.body.address,
            contactno: req.body.contactno,
            price: req.body.price,
        });
  
        await addhotelbooking.save();
        res.status(201).json(addhotelbooking);
      } catch (error) {
        console.log("Error", error);
        res.status(422).json(error);
      }
    }
  });

  router.get("/bookings/view/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const adindividual = await HotelBooking
        .findById({ _id: id });
      res.status(201).json(adindividual);
    } catch (error) {
      res.status(422).json(error);
    }
  });

  // Get all hotel bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await HotelBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/bookings/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletead = await HotelBooking.findByIdAndDelete(id);
    res.status(201).json(deletead);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.put("/bookings/update/:id", async (req, res) => {
  const { roomname, extrabed, noofpersons, noofdays, bookingperson, address, contactno, price } = req.body;
  if (
    !roomname || !extrabed || !noofpersons|| !noofdays|| !bookingperson|| !address|| !contactno|| !price
  ) {
    res.status(422).json("Please enter all data");
    return 0;
  }
  try {
    const { id } = req.params;

    const updatead1 = await HotelBooking.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatead1);
  } catch (error) {
    res.status(422).json(error);
  }
});

  module.exports = router;