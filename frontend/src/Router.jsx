import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddHotelBooking from "./components/hotelBooking/addHotelBooking";
import Rooms from "./components/hotelBooking/Rooms";
import Login from "./components/user/login";
import Register from "./components/user/register";
import ViewAllBookings from "./components/hotelBooking/viewAllBookings";
import UpdateHotelBooking from "./components/hotelBooking/updateHotelBooking";
import AllUsers from "./components/user/allUsers";
import Logout from "./components/user/logout";
import EditUser from "./components/user/editUser";
import AddFeedback from '../src/components/feedback/AddFeedback'
import EditFeedback from "../src/components/feedback/EditFeedback";
import FeedbackList from "../src/components/feedback/FeedbackList";

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
              <Route path="/editUser" element={<EditUser/>}/>
              <Route path="/updatead/:id" element={<UpdateHotelBooking/>}/>
              <Route path="/addFeedback" element={<AddFeedback/>} />
              <Route path="/editFeedback" element={<EditFeedback/>} />
              <Route path="/feedbackList" element={<FeedbackList/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
