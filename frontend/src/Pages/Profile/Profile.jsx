import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import axios from 'axios'

const Profile = () => {
  const userid = sessionStorage.getItem("userId")

  const [user, setUser] = useState({})
  const getApiData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/" + userid)
      if (res.status === 200) {
        setUser(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApiData()
  }, [userid])

  const handleLogout = () => {
    // Clear user session or token and redirect to login page
    sessionStorage.clear("login");
    sessionStorage.clear("token");
    sessionStorage.clear("userId");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <>
      {/* ----breadCrumb----  */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Profile</h1>
          <Link to="/">Home /</Link> <Link to="">Profile</Link>
        </div>
      </section>
      {/* ----breadCrumb---- end  */}

      <div className="container profile">
        <h1>Our Profile</h1>
        <div className="d-flex justify-content-center">
          <div className="prifileContent">
            <p><b>Name</b>: {user.name}</p>
            <p><b>Email</b>: {user.email}</p>
          </div>
        </div>

        {/* ----Logout Button---- */}
        <div className="logout-btn-container">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
        {/* ----Logout Button end---- */}

        {/* ----Order History---- */}
        <div className="orderHistory">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>2024-11-20</td>
                <td>Wireless Mouse</td>
                <td>2</td>
                <td>$40</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>102</td>
                <td>2024-11-22</td>
                <td>Bluetooth Speaker</td>
                <td>1</td>
                <td>$60</td>
                <td>Shipped</td>
              </tr>
              <tr>
                <td>103</td>
                <td>2024-11-23</td>
                <td>Gaming Keyboard</td>
                <td>1</td>
                <td>$80</td>
                <td>Processing</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ----Order History---- end */}
      </div>
    </>
  );
};

export default Profile;
