import React from "react";
import "../css/footer.css";
import image1 from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <footer class="footer-section">
      <div class="container-footer">
        <div class="footer-cta pt-4 pb-5"></div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <img
                      src={image1}
                      style={{
                        height: "25%",
                        width: "25%",
                        borderRadius: "5000px",
                      }}
                      class="img-fluid"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div class="footer-text">
                  <p>
                    MAPTY is a website designed to get better and better
                    everyday. keep supporting us by sharing this platform as
                    much as possible.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-2 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul className="footer">
                  {!isLoggedIn && (
                    <div>
                      <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                          Home
                        </Link>
                      </li>
                      {/* <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/ourteam">Our Team</Link></li> */}
                      <li>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                          Sign up
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/adminportal"
                          style={{ textDecoration: "none" }}
                        >
                          Admin Portal
                        </Link>
                      </li>
                    </div>
                  )}

                  {isLoggedIn && (
                    <div>
                      <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/userprofile"
                          style={{ textDecoration: "none" }}
                        >
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/events" style={{ textDecoration: "none" }}>
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/adminportal"
                          style={{ textDecoration: "none" }}
                        >
                          Admin Portal
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-2 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3 style={{ textAlign: "center" }}>Company</h3>
                </div>
                <ul>
                  <div>
                    <li>
                      <Link to="/aboutus" style={{ textDecoration: "none" }}>
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactus" style={{ textDecoration: "none" }}>
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link to="/ourteam" style={{ textDecoration: "none" }}>
                        Teams
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
