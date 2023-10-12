import { useState } from "react";
import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";

import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import styles from "../css/login.module.css";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";
import { showNotification } from "@mantine/notifications";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { promiseInProgress } = usePromiseTracker();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    const options = {
      url: "https://mapty-server.onrender.com/api/user/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    };
    return await axios(options);
  };

  const promiseHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showNotification({
        title: "Error",
        message: "Please fill all the fields",
        color: "red",
        autoClose: 5000,
        style: { textTransform: "capitalize" },
      });
      return;
    }
    if (email.indexOf("@") < 0) {
      showNotification({
        title: "Error",
        message: "Email is not valid",
        color: "red",
        autoClose: 5000,
        style: { textTransform: "capitalize" },
      });
      return;
    }
    try {
      const res = await trackPromise(submitHandler());
      if (res.data.status === "success") {
        dispatch(
          authActions.login({
            id: res.data.data.user._id,
            username: res.data.data.user.username,
          })
        );
        navigate("/events", { replace: true });
      }
    } catch (err) {
      showNotification({
        title: "Error",
        message: err.message,
        color: "red",
        autoClose: 5000,
        style: { textTransform: "capitalize" },
      });
    }
  };

  return (
    <div className={styles.doby}>
      <>
        <div className={styles.page}>
          <div className={styles.container}>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "2rem",
                fontWeight: "bold",
                paddingTop: "50px",
              }}
            >
              Login
            </h1>
            <h3
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "18px",
                opacity: "0.8",
              }}
            >
              Share our platform with your friends!
            </h3>

            <div className={styles.box1}>
              <form
                action="#"
                className={styles.form}
                onSubmit={promiseHandler}
              >
                <input
                  className={styles.details}
                  type="email"
                  name="username"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.details}
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <button type="submit" className={styles["login-btn"]}>
                  Login
                </button>
              </form>
              <div className={styles.copy}>
                <button className={styles["login-btn"]}>
                  <Link to="/signup" className={styles["signup-link"]}>
                    Create Account
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
