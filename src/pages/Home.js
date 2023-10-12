import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TwoCards from "../components/TwoCards";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, Link } from "react";
import Typewriter from "typewriter-effect";
import "../css/home.css";
import sports from "../images/sports.jpg";
import chess from "../images/chess.jpg";
import marathon from "../images/marathon.jpg";

import FlipCard from "../components/FlipCard";
import StoryCard from "../components/StoryCard";
import styles from "../css/home.module.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  });

  return (
    <div class="body">
      <div
        style={{
          fontSize: "50px",
          paddingTop: "40px",
          textAlign: "center",
          // fontStyle: "oblique",
          fontWeight: "500",
          letterSpacing: ".1em",
          animation:
            "typing 3.5s steps(30, end), blink-caret .75s step-end infinite",
          fontFamily: "monospace",
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(300)
              .typeString("Connect")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Learn")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Share")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Mapty - Where everything happens")
              .start();
          }}
        />
      </div>

      <div style={{ paddingTop: "80px" }}>
        <div
          style={{
            backgroundImage:
              "https://secure.meetupstatic.com/next/images/blobs/green-blob.svg",
            opacity: "1",
          }}
        >
          <TwoCards
            h1="Welcome to Mapty"
            p="Our vision for MAPTY is a one place platform for pursue all of your hobbies. Make new friends, meetup
                    with people who share your hobbies and explore the world your way. we hope you make the most of our
                    website and make exciting and unforgettable memories. How do we make this possible you ask?"
            h2="Your destination for an eventfull life."
            link="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=640"
            a="Meet out team!"
            buttxt="Get Started!"
          />
        </div>
      </div>

      <div className="container px-50px">
        <div className={styles.cont}>
          <div
            data-aos="fade-right"
            className="col-12 col-md-4"
            style={{ diplay: "flex", alignItems: "center" }}
          >
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256"
              h2="Pursue your hobbies"
              p="Find what you enjoy most, meet others who love it, make new friends. Live your life restrictionless!"
              className={styles.cardflip}
            />
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            className="col-12 col-md-4"
          >
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256"
              h2="Create your event"
              p="The best thing about MAPTY is that you are no longer a side character living in someone else's world. Create your own events and live your life to the fullest."
            />
          </div>

          <div data-aos="fade-left" className="col-12 col-md-4">
            <FlipCard
              src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256 "
              h2="Friends"
              p="Too shy to attend events on your own? dont worry we also have support joining events with friends or
                meetup with strangers add as friends and there you go... having a blast with your new buddies at events
                that you all enjoy."
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        className="container mainbox"
        style={{ padding: "50px" }}
      >
        <div className="row">
          <div data-aos="fade-right" className="col-12 col-md-6 subbox1">
            <h3 style={{ textAlign: "center" }}>Search for events</h3>
            <form>
              <div className="row">
                <div
                  style={{ padding: "20px" }}
                  className="form-group col-lg-6 col-sm-12"
                >
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div
                  style={{ padding: "20px" }}
                  className="form-group col-lg-6 col-sm-12"
                >
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-75 submit-button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 subbox2">
            <h3 className="texts" style={{ fontSize: "25px" }}>
              Most popular hobbies on our platform
            </h3>
            <div className="col">
              <div className="row">
                <div className="bottons">
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-right"
                  >
                    Cricket
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-left"
                  >
                    Mixer
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-right"
                  >
                    Party
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-left"
                  >
                    Arts gathering
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-right"
                  >
                    Hangouts
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary button"
                    data-aos="fade-left"
                  >
                    Basketball
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "50px" }}>
        <div class="container text-center" style={{ padding: "50px" }}>
          <h1 style={{ padding: "50px" }}>Some popular MAPTY stories</h1>
          <div class="row g-3">
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="3000"
              class="col-12 col-md-4"
            >
              <StoryCard
                h5="IIITS Sports fest"
                src={sports}
                p="The lastest sports fest held in IIIT sri city was posted as an event on mapty. An
                    increase in attendense of this event compared to its predecessors has been observed therefore not only
                    has it increased the events popularity, it has also taken part in making the fest easily organizable."
              />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="3000"
              class="col-12 col-md-4"
            >
              <StoryCard
                h5="Hyderabad runners marathon"
                src={marathon}
                p="Another popular event that MAPTY has taken a crucial role in making it a sucess is
                the 10k marathon that took place in hyderabad. Drawing a few hundred participants and many more
                spectators and supporters the event was also shared heavily on social media. This is a prime example of
                how our team wants MAPTY to be utilised"
              />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="3000"
              class="col-12 col-md-4"
            >
              <StoryCard
                h5="Mumbai Chess championship"
                src={chess}
                p="One of the most popular events MAPTY was a part of was the tata steel chess masters
                tournament that waS held in Mumbai. Although the affect MAPTY has brought to an event of this scale is
                probably not huge, we take pride in tha fact that MAPTY has achieved such results in the few months it
                has been up."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: "40px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "700px", width: "100px" }}
              src="https://c1.wallpaperflare.com/preview/8/498/513/still-items-things-paint.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Share Your Creativity</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              style={{ height: "700px", width: "100px" }}
              src="https://c1.wallpaperflare.com/preview/287/573/247/vintage-old-camera-canon.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Capture your Creativity</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "700px", width: "100px" }}
              src="https://c1.wallpaperflare.com/preview/652/531/737/wood-aerial-background-beverage.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Let it inspire others</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
