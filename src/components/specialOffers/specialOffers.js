import "./specialOffers.css";
import { useState, useEffect } from "react";
import Offer1 from "../../images/offer1.jpg";
import Offer2 from "../../images/offer2.jpg";
import CardBack from "../../images/cardBackground.jpg";

function SpecialOffers(props) {
  const [offerIndex, updateOfferIndex] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     offerIndex === 1 ? updateOfferIndex(0) : updateOfferIndex(offerIndex + 1);
  //   }, 10000);
  // }, [offerIndex]);

  let style = {
    backgroundImage: `url(${CardBack})`,
  };

  let offers = [Offer1, Offer2];
  return (
    <div className="sectionContainer">
      <div className="specialOffers">
        <div style={style} className="specialOfferImg">
          <div className="specialOfferText1">RESERVATIONS AVAILABLE FOR:-</div>
          <ul>
            <li className="specialOfferText3">Birthday</li>
            <li className="specialOfferText3">Anniversary</li>
            <li className="specialOfferText3">Parties</li>
          </ul>
          <h4 className="specialOfferText2">Contact us on:- </h4>
          <div className="specialOfferText3">+91 9508509463</div>
        </div>
        {/* <img className="specialOfferImg" src={CardBack} alt="Offer" /> */}
        <img className="specialOfferImg" src={offers[offerIndex]} alt="Offer" />
        {/* <img className="specialOfferImg" src={CardBack} alt="Offer" /> */}

        <div style={style} className="specialOfferImg">
          <div className="specialOfferText1">OPENING HOURS:-</div>
          <ul>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Sun:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Mon:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Tue:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Wed:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Thu:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Fri:- 11:30 AM - 11:30 PM
            </li>
            <li className="specialOfferText3" style={{ fontSize: "1.1rem" }}>
              Sat:- 11:30 AM - 11:30 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
