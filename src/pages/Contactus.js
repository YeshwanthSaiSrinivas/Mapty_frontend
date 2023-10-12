import { useState } from "react";
import "../css/Contactus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { showNotification } from "@mantine/notifications";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [issue, setIssue] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      showNotification({
        title: "Error",
        message: "Fill all the fields",
        color: "red",
        autoClose: 5000,
      });
      return;
    }
    if (email.indexOf("@") < 0) {
      // setAlert({
      //   message: "Invalid email",
      //   type: "error",
      // });
      showNotification({
        title: "Error",
        message: "Enter a Valid Email",
        color: "red",
        autoClose: 5000,
      });
      return;
    }
  };
  return (
    <div className="main">
      <div className="text">
        <h1 className="heading">Contact Us</h1>
        <p>
          Fill out our contact form to get in touch with us. we will respond to
          your message as soon as possible. Please check the 'reporting an
          issue' box to report any issue you have faced with the website.
          <br />
          We hope you didn't have too much trouble. Please leave feedback of how
          your experience visiting our website was. Any queries regarding the
          website are more than welcome.
        </p>
        <p>
          <strong>
            <em>Details given will never be shared with anyone</em>
          </strong>
        </p>
      </div>
      <div className="details">
        <h2 className="alt-heaing">Contact Form</h2>
        <br />
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Email </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
            <label className="form-check-label" for="exampleCheck1">
              Reporting an issue
            </label>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
