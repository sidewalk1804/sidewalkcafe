import Header from "../header/header";
import SpecialOffers from "../specialOffers/specialOffers";
import Gallery from "../gallery/gallery";
import LocateUs from "../locateUs/locateUs";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
// import Menu from "../menu/menu";
// import { connect } from "react-redux";
import "./homepage.css";

function Homepage(props) {
  return (
    <div>
      {/* {props.isMenuLayout ? (
        <div className="menuSection">
          <Menu />
        </div>
      ) : ( */}
      <div>
        <Header />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <LocateUs />
        <Footer />
      </div>
      {/* )} */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isMenuLayout: state.menuReducers.isMenuLayout,
//   };
// };

export default Homepage;
