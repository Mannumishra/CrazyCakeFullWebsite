import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
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
          <p><b>Name</b>: Gourav Panchal</p>
          <p><b>Email</b>: Gouravpanchal80107@gmail.com</p>
        </div>

        </div>

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
