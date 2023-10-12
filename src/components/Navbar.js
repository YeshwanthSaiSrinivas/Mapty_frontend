import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      {" "}
      <nav
        class="navbar navbar-expand-lg navbar-light position"
        style={{ backgroundColor: "#4774a1", padding: "10px" }}
      >
        <div class="nav-logo">
          <Link to="/">
            <img
              src={Logo}
              class="img-fluid"
              alt="logo"
              style={{ marginLeft: "15px" }}
            />
          </Link>
        </div>
        <Link class="navbar-brand" style={{ paddingLeft: "20px" }} to="/">
          Mapty
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mg-lg-0 pt-1">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                <b style={{color:"white", fontWeight:"600"}}>Home<span class="sr-only"></span></b>
              </Link>
            </li>
            <li class="nav-item">
              {isLoggedIn && (
                <Link to="/events" class="nav-link">
                  <b style={{color:"white" , fontWeight:"600"}}>Events</b>
                </Link>
              )}
              {!isLoggedIn && (
                <Link to="/login" class="nav-link">
                  <b style={{color:"white", fontWeight:"600"}}>Login</b>
                </Link>
              )}
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="aboutus">
                <b style={{color:"white" , fontWeight:"600"}}>About us</b>
              </Link>
            </li>

            <li class="nav-item">
              {isLoggedIn && (
                <Link class="nav-link" to="contactus">
                  <b style={{color:"white", fontWeight:"600"}}>Contact us</b>
                </Link>
              )}
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="ourteam">
                <b style={{color:"white", fontWeight:"600"}}>Our team</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
