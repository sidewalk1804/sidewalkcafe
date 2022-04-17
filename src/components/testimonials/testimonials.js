import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import "./testimonials.css";
import Manshi from "../../images/manshi.jpg";
import Akshendra from "../../images/akshendra.jpg";
import Ananya from "../../images/ananya.jpg";

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
        "Very nice cafe, best food in Patna, very friendly owner. We're open now. Come visit us.",
    },
    {
      name: "Akshendra Kumar",
      img: Akshendra,
      testimonial:
        "Bahut hi Rapchik cafe hai beedu. Khaana, bole to Food bhi bahut rapchik hai idhar kaa. Owner bhi cute si hai badi.",
    },
    {
      name: "Ananya Kumar",
      img: Ananya,
      testimonial:
        "Nice Cafe. Mai idhar aata hu sutta phukne. Uska bhi separate space hai. Good job. Bum Bum Bhole.",
    },
    {
      name: "Manshi Baranwal",
      img: Manshi,
      testimonial:
        "Very nice cafe, best food in Patna, very friendly owner. We're open now. Come visit us.",
    },
    {
      name: "Akshendra Kumar",
      img: Akshendra,
      testimonial:
        "Bahut hi Rapchik cafe hai beedu. Khaana, bole to Food bhi bahut rapchik hai idhar kaa. Owner bhi cute si hai badi.",
    },
    {
      name: "Ananya Kumar",
      img: Ananya,
      testimonial:
        "Nice Cafe. Mai idhar aata hu sutta phukne. Uska bhi separate space hai. Good job. Bum Bum Bhole.",
    },
    {
      name: "Manshi Baranwal",
      img: Manshi,
      testimonial:
        "Very nice cafe, best food in Patna, very friendly owner. We're open now. Come visit us.",
    },
    {
      name: "Akshendra Kumar",
      img: Akshendra,
      testimonial:
        "Bahut hi Rapchik cafe hai beedu. Khaana, bole to Food bhi bahut rapchik hai idhar kaa. Owner bhi cute si hai badi.",
    },
    {
      name: "Ananya Kumar",
      img: Ananya,
      testimonial:
        "Nice Cafe. Mai idhar aata hu sutta phukne. Uska bhi separate space hai. Good job. Bum Bum Bhole.",
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
          swipeable={false}
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
                    src={data.img}
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
