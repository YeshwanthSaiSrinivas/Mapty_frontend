import { useState, useEffect } from "react";
import styles from "../css/admin.module.css";
import axios from "axios";
import { showNotification } from "@mantine/notifications";

function AdminPortal() {
  const [condition, setCondition] = useState("1");
  const [Hobbies, setHobbies] = useState([]);
  const [deleteEventName, setDeleteEventName] = useState("");
  const [deleteUserName, setDeleteUserName] = useState("");
  const [searchUserName, setSearchUserName] = useState("");
  const [adminName, setAdminName] = useState("");

  const [table, setTable] = useState("");
  useEffect(() => {
    const getAllUsers = async () => {
      const options = {
        url: "http://localhost:3001/api/user/allUsers",
        method: "GET",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(options);
      const info = res.data;
      for (let i = 0; i < info.data.users.length; i++) {
        const Name = info.data.users[i].username;
        const Email = info.data.users[i].email;
        const status = info.data.users[i].status;
        setTable((table) => [
          ...table,
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{Name}</td>
            <td>{Email}</td>
            <td>{status}</td>
          </tr>,
        ]);
      }
    };
    getAllUsers();
  }, []);

  const deleteEventHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/api/event/deleteEvent/${deleteEventName}`,
      method: "DELETE",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios(options);
  };

  const searchUserHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/api/user/getUser/${searchUserName}`,
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios(options);
  };

  const deleteUserHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/api/user/deleteUser/${deleteUserName}`,
      method: "DELETE",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios(options);
    console.log(res);
    if (res.data.status === "success") {
      showNotification({
        title: "User deleted successfully",
        message: "User has been deleted successfully",
        color: "green",
      });
    }
  };

  const newAdminHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: `http://localhost:3001/api/user/add-admin/${adminName}`,
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios(options);
    if (res.data.status === "success") {
      showNotification({
        title: "Admin added successfully",
        message: "Admin has been added successfully",
        color: "green",
      });
    }
  };

  return (
    <div className={styles.mainbox}>
      <div className={styles.subbox1}>
        <button className={styles.buttons} onClick={() => setCondition(1)}>
          Active Users
        </button>
        <button className={styles.buttons} onClick={() => setCondition(2)}>
          Delete event
        </button>
        <button className={styles.buttons} onClick={() => setCondition(3)}>
          Search a user
        </button>
        <button className={styles.buttons} onClick={() => setCondition(4)}>
          Delete user
        </button>
        <button className={styles.buttons} onClick={() => setCondition(5)}>
          Add an admin
        </button>
      </div>
      <div className={styles.subbox2}>
        {condition === 1 ? (
          <div className={styles.card} id="card1">
            <p className={styles.heading}>List of all active users</p>
            <div className={styles.div_table}>
              <table className="table main_table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody id="tbody">{table}</tbody>
              </table>
            </div>
          </div>
        ) : null}

        {condition === 2 ? (
          <div className={styles.card} id="card2">
            <p className={styles.heading} style={{ paddingTop: "30px" }}>
              Delete event
            </p>
            <p className={styles.texts}>
              Give the details of an event to delete the event that you have
              searched for. Feel free to search via location if that information
              is available to you.
            </p>
            <form onSubmit={deleteEventHandler} className={styles.form}>
              <input
                className={styles.details}
                type="text"
                name="EventName"
                id="eventname"
                value={deleteEventName}
                onChange={(e) => setDeleteEventName(e.target.value)}
                placeholder="Delete via event name"
              />
              <button type="submit" className={styles.submit} id="delEventBtn">
                Delete
              </button>
            </form>
          </div>
        ) : null}
        {condition === 3 ? (
          <div className={styles.card} id="card3">
            <p className={styles.heading}>Search a user</p>
            <p className={styles.texts}>
              Provide username of any user to get details of that user. These
              details could be used to flag that user for potential account
              deletion.
            </p>
            <form
              onSubmit={searchUserHandler}
              className={styles.form}
              id="forms0"
            >
              <input
                className={styles.details}
                type="text"
                name="EventLocation"
                id="searchUsername"
                value={searchUserName}
                onChange={(e) => setSearchUserName(e.target.value)}
                placeholder="Search a user via username"
              />
              <button type="submit" className={styles.submit} id="searchUser">
                Search
              </button>
            </form>
            <div
              id="forms1"
              className={styles.form}
              style={{ display: "none" }}
            >
              <div
                id="details"
                style={{
                  fontSize: "larger",
                  textAlign: "justify",
                  marginLeft: "50px",
                }}
              ></div>
              <button className={styles.submit} id="back">
                Back
              </button>
            </div>
          </div>
        ) : null}

        {condition === 4 ? (
          <>
            <div className={styles.card} id="card4">
              <p className={styles.heading}>Delete user</p>
              <p className={styles.texts}>
                Give the username of the user you want to delete. Please verify
                that you are following the guidelines before deleting a user to
                avoid legal troubles.
              </p>
              <form onSubmit={deleteUserHandler} className={styles.form}>
                <input
                  className={styles.details}
                  type="text"
                  name="EventName"
                  id="userdeteleted"
                  value={deleteUserName}
                  onChange={(e) => setDeleteUserName(e.target.value)}
                  placeholder="Enter a username"
                />
                <button type="submit" className={styles.submit} id="deleteUser">
                  Delete
                </button>
              </form>
            </div>
          </>
        ) : null}

        {condition === 5 ? (
          <div className={styles.card} id="card5">
            <p className={styles.heading}>Add an admin</p>
            <p className={styles.texts}>
              Add an exsting user as an admin. Only admins get access to the
              admin protal. No normal user can access this page. provide an
              username to make that account an admin.
            </p>
            <form onSubmit={newAdminHandler} className={styles.form}>
              <input
                className={styles.details}
                type="text"
                name="EventName"
                id="adminName"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                placeholder="Enter a username"
              />
              <button type="submit" className={styles.submit} id="addAdminBtn">
                Add
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AdminPortal;
