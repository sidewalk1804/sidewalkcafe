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
        We at Sidewalk are thrilled to welcome you in our Cafe, purely designed
        and curated to get your mind off from everything and enjoy your "Me
        Time". As mentioned by Danny Meyer in one of his quotes, "A great
        restaurant is one that just makes you feel like you're not sure whether
        you went out or you came home and confuses you. If it can do both of
        those things at the same time, you're hooked.", we provide you the best
        of both.
        <br />
        <br /> We've a range of food catergories, it's hard to tell which one is
        best, as we have one of the best chef's in Patna. So, do try everything
        from all our menu catergories, though we recommend you not to try
        everything at once.
        <br />
        <br />
        We're located in Mithapur, In front of Aryabhat knowledge University
        Gate No. 2.{" "}
        <a href="https://www.google.com/maps/place/Sidewalk+-+Cafe+and+Restaurant/@25.5917296,85.1273452,15z/data=!4m5!3m4!1s0x0:0x1d0cf7e0d1e94fb5!8m2!3d25.5917296!4d85.1360999">
          Google Maps Location
        </a>
      </div>
    </div>
  );
}

export default LocateUs;
