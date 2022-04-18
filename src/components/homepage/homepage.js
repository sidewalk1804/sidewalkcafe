import Header from "../header/header";
import SpecialOffers from "../specialOffers/specialOffers";
import Gallery from "../gallery/gallery";
import LocateUs from "../locateUs/locateUs";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
import "./homepage.css";

function Homepage(props) {
  return (
    <div>
      <div>
        <Header />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <LocateUs />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
