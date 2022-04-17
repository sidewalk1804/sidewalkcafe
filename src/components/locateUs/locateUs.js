import SidewalkImg from "../../images/locateUs.jpg";
import "./locateUs.css";

function LocateUs(props) {
  return (
    <div
      className="sectionContainer"
      style={{ display: "flex", backgroundColor: "#C8C8C8" }}
    >
      <img
        src={SidewalkImg}
        className="sidewalkFrontImg"
        alt="Sidewalk Front"
      />

      <div className="locateUsText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{" "}
        <a href="https://www.google.com/maps/place/Sidewalk+-+Cafe+and+Restaurant/@25.5917296,85.1273452,15z/data=!4m5!3m4!1s0x0:0x1d0cf7e0d1e94fb5!8m2!3d25.5917296!4d85.1360999">
          Google Maps Location
        </a>
      </div>
    </div>
  );
}

export default LocateUs;
