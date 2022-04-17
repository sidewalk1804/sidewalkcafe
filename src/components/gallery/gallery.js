import "./gallery.css";
import Img1 from "../../images/anniversary.jpg";
import Img2 from "../../images/birthday.jpg";
import Img3 from "../../images/chickenTangdi.jpg";
import Img4 from "../../images/birthday1.jpg";
import Vid1 from "../../images/food.mp4";
import Img5 from "../../images/noodles.jpg";
import Img6 from "../../images/meTime.jpg";
import Img7 from "../../images/blueLagoon.jpeg";
import Img8 from "../../images/pasta.jpeg";
import Img9 from "../../images/malaiTandooriChicken.jpg";
import Img10 from "../../images/img4.jpg";
import Img11 from "../../images/getTogether.jpg";
import Vid2 from "../../images/utsavFest.mp4";
import Img12 from "../../images/getTogether1.jpg";
import Img13 from "../../images/img5.jpg";

function Gallery(props) {
  let images = [
    { content: Img1, type: "image" },
    { content: Img2, type: "image" },
    { content: Img3, type: "image" },
    { content: Img4, type: "image" },
    { content: Vid1, type: "video" },
    { content: Img5, type: "image" },
    { content: Img6, type: "image" },
    { content: Img7, type: "image" },
    { content: Vid2, type: "video" },
    { content: Img8, type: "image" },

    { content: Img9, type: "image" },
    { content: Img10, type: "image" },
    { content: Img11, type: "image" },
    { content: Img12, type: "image" },
    { content: Img13, type: "image" },
  ];
  return (
    <section
      className="sectionContainer"
      style={{ height: "fit-content", backgroundColor: "#C8C8C8" }}
    >
      <div className="galleryHeader">
        <span className="galleryHeaderText">OUR GALLERY</span>
        <span className="galleryHeaderTag">
          Where we keep your memories alive...
        </span>
      </div>
      <div className="gallerySection">
        {images.map((image, index) => {
          return (
            <div className="imageCard" key={index}>
              {image.type === "image" ? (
                <img src={image.content} alt={index} />
              ) : (
                <video
                  src={image.content}
                  controls="controls"
                  autoplay="true"
                  loop="true"
                  muted="true"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="viewButtonContainer">
        {/* <span className="viewMoreBtn"> View More ...</span> */}
      </div>
    </section>
  );
}

export default Gallery;
