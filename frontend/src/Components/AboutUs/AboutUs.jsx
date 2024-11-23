import React from "react";
import "./AboutSection.css"; // Import the CSS file
import cake from "../../images/cake1.jpg";
import { Link } from "react-router-dom";

import team1 from "../../images/team-1.jpg";
import team2 from "../../images/team-2.jpg";
import team3 from "../../images/team-3.jpg";
import team4 from "../../images/team-4.jpg";
const AboutUs = () => {
    const teamMembers = [team1, team2, team3, team4];

  return (
    <>
      {/* ----breadCrumb----  */}
      <section className="breadCrumb">
        <div className="breadCrumbContent">
          <h1>About Us</h1>
          <Link to="/">Home /</Link> <Link to="">About Us</Link>
        </div>
      </section>
      {/* ----breadCrumb---- end  */}

      {/* ----about section ---- */}
      <section className="about-container container">
        <div className="about-image-container">
          <img 
            src={cake} // Replace with your croissant image URL
            alt="Croissant"
            className="about-image w-100"
          />
        </div>
        <div className="about-content">
        <p className="ourTeam_miniHeading">// About Us</p>
          <h3 className="about-title">
            We Bake Every Item From The Core Of Our Hearts
          </h3>
          <p className="about-text">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <p className="about-text">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>
          <ul className="about-features-list">
            <li className="about-feature-item">✔ Quality Products</li>
            <li className="about-feature-item">✔ Online Order</li>
            <li className="about-feature-item">✔ Custom Products</li>
            <li className="about-feature-item">✔ Home Delivery</li>
          </ul>
          {/* <button className="about-button">Read More</button> */}
        </div>
      </section>
      {/* ----about section ---- end */}

      {/* ----our Team Section ---- */}
      <section className="OurTeam">
      <div className="team-section container">
        <p className="ourTeam_miniHeading">// Our Team</p>
        <h2>We're Super Professional At Our Skills</h2>
        <div className="team-grid">
          {teamMembers.map((imgSrc, index) => (
            <div key={index} className="team-member">
              <div className="team-member-photo">
                <img src={imgSrc} alt={`Team Member ${index + 1}`} />
              </div>
              <h3 className="mt-3">Gourav Dada</h3>
              <p className="mb-0">Web Developer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* ----our Team Section end ---- */}
    </>
  );
};

export default AboutUs;
