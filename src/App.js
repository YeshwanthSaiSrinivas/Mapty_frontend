import "./App.css";
import { Routes, Route } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/Contactus";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import ParticularEvent from "./pages/ParticularEvent";
import AdminPortal from "./pages/AdminPortal";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/events/:eventid" element={<ParticularEvent />} />
        <Route path="/adminportal" element={<AdminPortal />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
