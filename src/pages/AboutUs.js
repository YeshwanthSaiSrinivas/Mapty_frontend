import React from "react";
import TwoCards from "../components/TwoCards";
import FlipCard from "../components/FlipCard";
import location from "../images/location.png";
import paris from "../images/paris.jpg";
// import aboutus from "../images/aboutus.jpg";
import AboutUsCard from "../components/AboutUsCard";


function Aus() {
  return (
    <div>
      <TwoCards
        h1="ABOUT US"
        h2="Event Organiser platform"
        buttxt="Share Event"
        link="https://media.istockphoto.com/vectors/group-of-programmers-work-together-vector-id623897990"
        p="This is a map based event sharing platform on a website. Here you can share the events planned or
                        to be planned in the map by sharing the event location by pinning the location.Here you can also
                        chat with your friends. This is the platform which you can interact and connect with lot of
                        users. There is a membership plans for the users.Build your community
                        Easy hosting tools
                        Host safe events
                        We’ll help you grow
                        Connect with other people who are curious about the things you love.
                        Chat with members and manage your attendance.
                        Easy-to-use features for indicating whether events will be outdoors, have mask or vaccination
                        requirements, & more.
                        Our platform will keep promoting your group throughout its network to get more people
                        interested."
      />

      <div className="container px-50px">
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <AboutUsCard
              src={location}
              h2="Share event location"
              p="On this platform you can share the event location which enables your friends to join"
              button="Share event location"
              fronttext="Share location"
            />
          </div>

          <div data-aos-duration="2000" className="col-12 col-md-3">
            <AboutUsCard
              src={paris}
              h2="Explore locations"
              p="Visit a museum, try new food, go hiking, hit up a brewery tour, or just go meet new people"
              button="Explore City"
              fronttext="Explore"
            />
          </div>

          <div className="col-12 col-md-3">
            <AboutUsCard
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxHAny0zpdTbsmXOXQVFDaYQgBV9Z_XLw0Yt01cq1P_Tj4D7CD4-MgRrthKQlxaqnGak&usqp=CAU"
              h2="Built in chat box"
              p="This feature enables chatting with your friends, collegues and share events through it."
              button="Message Friends"
              fronttext="Chat"
            />
          </div>
          <div className="col-12 col-md-3 pb-5">
            <AboutUsCard
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-gM9hXeaiJS-NwNMbX4NzbgOezhsXGjgN_6GnHdMwfFvSeztPXEODddd7_tlifb9WVo&usqp=CAU"
              h2="Live streaming"
              p="Subcribers can live stream and also can watch the event."
              button="Go Live"
              fronttext="Go Live"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aus;
