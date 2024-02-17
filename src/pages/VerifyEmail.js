import { useState } from "react";
import styles from "../css/login.module.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const options = {
        url: `http://localhost:3001/api/verifyEmail/${token}`,
        method: "GET",
        withCredentials: true,
      };
      const res = await axios(options);
      if (res.data.status === "success") {
        showNotification({
          title: "Success",
          message: "Email Verified",
          icon: <AiOutlineExclamationCircle />,
          color: "blue",
          autoClose: 5000,
        });
        navigate("/");
      }
      console.log(res);
    } catch (err) {
      showNotification({
        title: "Error",
        message: "Email Not Verified",
        icon: <AiOutlineExclamationCircle />,
        color: "red",
        autoClose: 5000,
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
              Verify Your Email
            </h1>

            <div className={styles.box1}>
              <form className={styles.form} onSubmit={submitHandler}>
                <input
                  className={styles.details}
                  type="text"
                  name="token"
                  value={token}
                  readOnly
                />
                <button type="submit" className={styles["login-btn"]}>
                  Verify Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default VerifyEmail;
