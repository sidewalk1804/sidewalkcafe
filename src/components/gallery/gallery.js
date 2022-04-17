import "./gallery.css";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";

function Gallery(props) {
  let images = [Img1, Img2, Img3, Img4, Img5, Img1];
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
            // <div className="imageCard" key={index}>
            //   <img src={image} alt={index} />
            // </div>
            <div className="imageCard" key={index}>
              <img src={image} alt={index} />
            </div>
          );
        })}
      </div>
      <div className="viewButtonContainer">
        <span className="viewMoreBtn"> View More ...</span>
      </div>
    </section>
  );
}

export default Gallery;
