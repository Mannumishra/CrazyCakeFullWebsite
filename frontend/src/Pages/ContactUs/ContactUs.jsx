import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./contactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      // Simulating an API call (replace with actual API endpoint)
      const response = await fetch("http://localhost:8000/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Network error. Please check your connection.",
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* ----breadCrumb---- */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>Contact Us</h1>
          <Link to="/">Home /</Link> <Link to="">Contact Us</Link>
        </div>
      </section>
      {/* ----breadCrumb---- end */}

      {/* Contact Section */}
      <section>
        <div className="text-center contactHeading">
          <h5
            style={{
              color: "var(--color-brown)",
              fontFamily: "var(--font-family-design)",
            }}
          >
            Contact Us
          </h5>
          <h1 className="heroPinkHeading">Contact For Any Query</h1>
        </div>
        <div className="contactSection container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="contactSectionBox">
                <div>
                  <span className="Contactsicon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                </div>
                <div>
                  <p>Address</p>
                  <address>123 Street, NY, USA</address>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contactSectionBox">
                <div>
                  <span className="Contactsicon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                </div>
                <div>
                  <p>Call Us</p>
                  <a href="tel:+919319846114">+91 9319846114</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contactSectionBox">
                <div>
                  <span className="Contactsicon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                </div>
                <div>
                  <p>Email Us</p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contactSectionBox">
                <div>
                  <span className="Contactsicon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                </div>
                <div>
                  <p>Follow Us</p>
                  <div className="socialMediaLinks">
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      <section className="contactFormSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.188744390426!2d77.08410077429787!3d28.730771579614938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e1!3m2!1sen!2sin!4v1731649931595!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-input mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-input mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-input mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-input mb-3">
                    <textarea
                      rows={9}
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-input mb-3">
                    <input
                      className="form-control"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
