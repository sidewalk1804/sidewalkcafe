import { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import Card from "../cards/card";

import "./menu.css";
import MenuBG from "../../images/menuBG.jpg";
// import menuActions from "../../actions/menuActions";

function Menu(props) {
  const [fetchMenu, fetchMenuStatus] = useState(false);
  // useEffect(() => {
  //   if (
  //     props.menuCategories &&
  //     Object.keys(props.menuCategories).length === 0 &&
  //     !fetchMenu
  //   ) {
  //     props.fetchMenuCategories();
  //     fetchMenuStatus(true);
  //   }
  // });

  let style = {
    backgroundImage: `url(${MenuBG})`,
  };

  let menu = props.menuCategories;

  return (
    // <LoadingOverlay active={true} spinner text="Loading your content...">
    <div className="menu" style={style}>
      <div className="menuHeader">
        <span className="menuText">Menu</span>
        <span className="menuTagLine">To keep your Tummy tingling ...</span>
        <div> </div>
      </div>
      <div className="menusContainer">
        {Object.keys(menu).length > 0
          ? Object.entries(menu).map((category, index) => {
              return <Card title={category[0]} data={category[1]} />;
            })
          : null}
      </div>
    </div>
    // </LoadingOverlay>
  );
}

const mapStateToProps = (state) => {
  return {
    menuCategories: state.menuReducers.menuCategories,
  };
};

// const mapActionsToProps = {
//   fetchMenuCategories: menuActions.fetchMenuCategories,
// };

export default connect(mapStateToProps)(Menu);
