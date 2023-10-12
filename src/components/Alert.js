import { useEffect } from "react";
import "../css/alert.css";

const Alert = ({ message, type, setShow }) => {
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [setShow]);
  return <div className={`alert alert--${type}`}>{message}</div>;
};

export default Alert;
