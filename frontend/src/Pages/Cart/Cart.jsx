import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import cake1 from "../../images/cake1.jpg";
import cake2 from "../../images/cake2.jpg";
import cake3 from "../../images/cake3.jpg";

const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Delicious Chocolate Truffle Cake",
      price: 1300,
      weight: "1kg",
      quantity: 1,
      imageUrl: cake1,
      selectedDate: "November 20, 2024",
    },
    {
      id: 2,
      name: "Vanilla Sponge Cake",
      price: 500,
      weight: "0.5kg",
      quantity: 2,
      imageUrl: cake2,
      selectedDate: "November 21, 2024",
    },
    {
      id: 3,
      name: "Fruit Cake",
      price: 2500,
      weight: "2kg",
      quantity: 1,
      imageUrl: cake3,
      selectedDate: "November 22, 2024",
    },
  ];
  const [cartItems, setCartItems] = useState(items);

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ----breadCrumb----  */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Cart</h1>
          <Link to="/">Home /</Link> <Link to="">Cart</Link>
        </div>
      </section>
      {/* ----breadCrumb---- end  */}

      <section className="cartSection container">
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>
                    ₹{item.price}{" "}
                    <span className="item-weight">{item.weight}</span>
                  </p>
                  <p className="selected-date">
                    Selected Date: <span>{item.selectedDate}</span>
                  </p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Items: {cartItems.length}</p>
            <p>Total: ₹{total.toFixed(2)}</p>
            <button className="confirm-button">Confirm Booking</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
