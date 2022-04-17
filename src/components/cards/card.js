import "./card.css";

function Card(props) {
  return (
    <div className="cardComponent">
      <div className="cardTitle">{props.title}</div>
      <div className="menuContainer">
        {props.data.length > 0
          ? props.data.map((menu, index) => {
              return (
                <div className="menus" key={index}>
                  <div className="menuName">{menu.name}</div>
                  <div>&#8377;{menu.price}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Card;
