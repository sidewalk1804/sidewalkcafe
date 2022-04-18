import Instagram from "../../images/instagram.png";
import Zomato from "../../images/zomato.png";
import Swiggy from "../../images/swiggy.png";
import "./footer.css";

export default function Footer() {
  return (
    <div
      className="sectionContainer"
      style={{
        height: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "rgb(75, 75, 75)",
        textAlign: "center",
      }}
    >
      <div
        className="galleryHeaderText"
        style={{ paddingTop: "2rem", fontSize: "2rem" }}
      >
        We're Live on :
      </div>
      <div className="footerLinksContainer">
        <a href="https://www.instagram.com/sidewalkcafepatna/">
          <img className="footerLinkImg" src={Instagram} alt="" />
        </a>
        <a href="https://www.zomato.com/patna/sidewalk-cafe-restaurant-mithapur">
          <img className="footerLinkImg" src={Zomato} alt="" />
        </a>
        <a href="https://www.swiggy.com/restaurants/sidewalk-cafe-and-restaurant-fraser-road-patna-398777">
          <img className="footerLinkImg" src={Swiggy} alt="" />
        </a>
      </div>
    </div>
  );
}
