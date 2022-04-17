import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./header.css";
import HeaderImage from "../../images/headerImage.jpg";
import Logo from "../../images/sidewalk_logo.png";

import menuActions from "../../actions/menuActions";

function Header(props) {
  const history = useNavigate();

  const menuPage = () => {
    history("/menu");
  };
  let style = {
    backgroundImage: `linear-gradient(
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.15)), url(${HeaderImage})`,
  };

  return (
    <section className="headerContainer" style={style}>
      <div className="logoContainer">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="cafeNameSection">
        <span className="cafeName">SIDEWALK</span>
        <span className="cafeNameTag">Cafe and Restaurant</span>
      </div>
      <div className="headerButtonSection">
        <div className="ghostButtonMenu" onClick={menuPage}>
          Menu
        </div>
        <div className="ghostButtonOrder">Order Online</div>
      </div>
    </section>
  );
}

const mapActionsToProps = {
  setMenuPopupStatus: menuActions.setMenuPopupStatus,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
