import React, { useEffect, useState } from "react";
import "./checkout.css";
import axios from "axios";

const CheckOut = () => {
    const [cartItems, setCartItems] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState("delivery");
    const [formData, setFormData] = useState({
        userId: '12345',  // Assume userId is hardcoded or fetched from session storage
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        city: '',
        pin: '',
        cartItems: [],
        totalPrice: 0,
        transactionId: '',
        orderStatus: 'Order Is Placed',
        paymentMode: 'online',
        paymentStatus: 'Pending'
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Fetch the cart data from sessionStorage
        const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        setCartItems(storedCart);
        setFormData(prevData => ({
            ...prevData,
            cartItems: storedCart,
            totalPrice: calculateTotal(storedCart),
        }));
    }, []);

    const handleMethodChange = (e) => {
        setDeliveryMethod(e.target.value);
    };

    // Calculate the total and shipping
    const calculateTotal = (cartItems) => {
        const subtotal = cartItems.reduce(
            (acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0
        );
        const shipping = subtotal < 500 ? 50 : 0;
        return subtotal + shipping;
    };

    // Handle placing the order
    const handlePlaceOrder = async () => {
        if (deliveryMethod === 'online') {
            initiateOnlinePayment();
        } else {
            submitOrder();
        }
    };

    const initiateOnlinePayment = () => {
        const options = {
            key: 'razorpay_key', // Your Razorpay Key ID
            amount: formData.totalPrice * 100, // Total amount in paise (1 INR = 100 paise)
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Order Payment',
            image: 'https://yourdomain.com/logo.png', // Company logo
            handler: function (response) {
                // On successful payment, submit order
                formData.transactionId = response.razorpay_payment_id;
                formData.paymentStatus = 'Success';
                submitOrder();
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const submitOrder = async () => {
        const orderData = {
            ...formData,
            cartItems: cartItems,
            totalPrice: formData.totalPrice,
            orderStatus: deliveryMethod === 'online' ? 'Payment Pending' : 'Order Confirmed',
            paymentMode: deliveryMethod,
            paymentStatus: deliveryMethod === 'online' ? 'Pending' : 'Success',
        };
        try {
            // Make a POST request to your backend API
            const response = await axios.post("http://localhost:8000/api/checkout", orderData);

            if (response.status === 201) {
                console.log("Order successfully placed:", response.data);
                sessionStorage.removeItem("cart");
                setCartItems([]);
                setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    state: '',
                    city: '',
                    pin: '',
                    cartItems: [],
                    totalPrice: 0,
                });

                alert("Order placed successfully!");
            } else {
                console.error("Failed to place order:", response.data);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("An error occurred while placing your order. Please try again later.");
        }
    };

    return (
        <section className="checkoutPage">
            <div className="checkout-container">
                <div className="checkout-form">
                    <h2>Checkout</h2>
                    <form>
                        <div className="form-group">
                            <label>Full name</label>
                            <input
                                type="text"
                                placeholder="Full name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input
                                type="tel"
                                placeholder="+91 123 456 7890"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>State</label>
                                <input
                                    type="text"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Pin Code</label>
                                <input
                                    type="text"
                                    placeholder="Pin Code"
                                    value={formData.pin}
                                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                placeholder="Address"
                            ></textarea>
                        </div>
                        <div className="terms">
                            <label>
                                <input type="checkbox" required /> I have read and agree to the Terms and Conditions.
                            </label>
                        </div>
                    </form>
                </div>
                <div className="cart-review">
                    <h2>Review your cart</h2>
                    {cartItems.length > 0 ? (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Weight</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={`${item.id}-${item.weight}`}>
                                        <td>
                                            <img
                                                src={`http://localhost:8000/${item.image}`}
                                                alt={item.name}
                                                style={{ height: 50 }}
                                            />
                                        </td>
                                        <td className="carttext">{item.name}</td>
                                        <td>{item.weight}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <div className="totals">
                        <p>Subtotal: ₹{formData.totalPrice.toFixed(2)}</p>
                        <p>Shipping: ₹{formData.totalPrice < 500 ? 50 : 0}</p>
                        <h3>Total: ₹{formData.totalPrice.toFixed(2)}</h3>
                    </div>
                    <h5>Choose Payment Method</h5>
                    <div className="form-group">
                        <select value={deliveryMethod} onChange={handleMethodChange}>
                            <option value="online">Online Payment</option>
                            <option value="cash">Cash on Delivery</option>
                        </select>
                    </div>
                    <button
                        className="checkout-btn"
                        type="button"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;
