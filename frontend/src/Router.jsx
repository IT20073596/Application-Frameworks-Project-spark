import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHotelBooking from "./components/hotelBooking/addHotelBooking";
import Rooms from "./components/hotelBooking/Rooms";
import Login from "./components/user/login";
import Register from "./components/user/register";
import ViewAllBookings from "./components/hotelBooking/viewAllBookings";
import UpdateHotelBooking from "./components/hotelBooking/updateHotelBooking";
import AllUsers from "./components/user/allUsers";
import Logout from "./components/user/logout";


function Router() {
  return (
    <BrowserRouter>
    <Logout/>
        <Routes>
              <Route exact path="/rooms" element={<Rooms />} />
              <Route path="/addhotelbooking" element={<AddHotelBooking/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/allusers" element={<AllUsers/>}/>
              <Route path="/allbooking" element={<ViewAllBookings/>}/>
              <Route path="/updatead/:id" element={<UpdateHotelBooking/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
