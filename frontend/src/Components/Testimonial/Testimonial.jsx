import React from "react";
import Slider from "react-slick";
import "./testimonials.css";
import testimonial1 from "../../images/team-1.jpg";
import testimonial2 from "../../images/team-2.jpg";
import testimonial3 from "../../images/team-3.jpg";
import testimonial4 from "../../images/team-4.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      imageURL: testimonial1,
      name: "Aarav Sharma",
      title: "Satisfied Customer",
      description:
        "I ordered a custom photo cake for my daughter's birthday, and it was absolutely perfect.",
    },
    {
      imageURL: testimonial2,
      name: "Vikram Sharma",
      title: "Cake Lover",
      description:
        "I was worried about surprising my wife at midnight, but your service was flawless.",
    },
    {
      imageURL: testimonial3,
      name: "Neha Mehta",
      title: "Bride",
      description:
        "The wedding cake you created was nothing short of spectacular!",
    },
    {
      imageURL: testimonial4,
      name: "Arjun Desai",
      title: "Frequent Buyer",
      description:
        "I’ve been ordering from your bakery for over a year, and you never fail to impress.",
    },
    {
      imageURL: testimonial1,
      name: "Priya Patel",
      title: "Event Planner",
      description:
        "I ordered a batch of cupcakes for a corporate event, and they were a huge hit.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="testimonialsSection">
        <h1 className="text-center" style={{color:"var(--color-pink)" , fontFamily:"var(--font-family-design)"}}>Our Testimonial</h1>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={item.imageURL} alt={`${item.name}'s testimonial`} />
                </div>
                  <p className="m-0"><i class="bi bi-three-dots"></i></p>
                <div className="testimonial-content">
                  <h3 className="testimonial-name">{item.name}</h3>
                  <p className="testimonial-title">{item.title}</p>
                  <p className="testimonial-description">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;