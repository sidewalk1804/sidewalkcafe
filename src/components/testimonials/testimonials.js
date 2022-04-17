import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import "./testimonials.css";
import Manshi from "../../images/manshi.jpg";
// import Akshendra from "../../images/akshendra.jpg";
import Ananya from "../../images/ananya.jpg";
import Isha from "../../images/Isha.jpeg";
import Default from "../../images/defaultTestimonial.jpg";

function Testimonials(props) {
  const [testimonialIndex, updateTestimonialIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let testimonials = [
    {
      name: "Manshi Baranwal",
      img: Manshi,
      testimonial:
        "Nice place with amazing food. A very beautiful ambience. Good cozy vibes and a good choice to hangout with your friends.",
    },
    {
      name: "Jaanvi Gulati",
      img: null,
      testimonial:
        "Nice place with good staff and tasty food with reasonable prices. The fried ice cream was very nice and the place is also very comfortable for students to chill in.",
    },
    {
      name: "Isha Singh",
      img: Isha,
      testimonial:
        "It is one of the best cafes in patna with service up to the mark n is hygiene oriented..Provides really good food in terms of taste and the staff is well mannered n customer friendly..Must visit..Highly recommend..!!",
    },
    {
      name: "Ananya Kumar",
      img: Ananya,
      testimonial:
        "Best Cafe in Patna with wide varieties of food categories...Provides really good food in terms of taste and hygiene. Highly recommend.",
    },
    {
      name: "Vishnu Dayal",
      img: null,
      testimonial:
        "Every time i go there I try something new and i am amazed how everything they cook is just amazing and 😋tasty",
    },
    {
      name: "Kriti Dalmia",
      img: null,
      testimonial:
        "This place has to be in your list. This place serves great food and has great ambience. Loved the vibe and hospitality.",
    },
    {
      name: "Anjali",
      img: null,
      testimonial:
        "All you get here is great food and good vibes. Beautiful ambience..loved this place. Must go with your friends and family.",
    },
    {
      name: "Pratik K",
      img: null,
      testimonial:
        "Amazing food with good quality and quantity. All the staff are very polite. Ambience is so good❤️. Must try😍.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = testimonialIndex + 1;
      if (newIndex > testimonials.length - 1) {
        newIndex = 0;
      }
      updateTestimonialIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <div
      className="sectionContainer"
      style={{
        height: "fit-content",
        paddingBottom: "5rem",
        backgroundColor: "rgb(75, 75, 75)",
      }}
    >
      <div className="galleryHeader">
        <span className="galleryHeaderText">TESTIMONIALS</span>
        <span className="galleryHeaderTag">
          Because feedbacks are the best reward...
        </span>
      </div>
      <div className="testimonialsContainer">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          renderButtonGroupOutside={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="ease-in-out .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonials.map((data, index) => {
            return (
              <div key={index} className="testimonialContainer">
                <div className="testimonialImgContainer">
                  <img
                    src={data.img === null ? Default : data.img}
                    alt={data.name}
                    className="testimonialImg"
                  />
                </div>
                <div className="testimonialData">
                  <div className="testimonialName">{data.name}</div>
                  <div className="testimonial">{data.testimonial}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
