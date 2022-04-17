import "./card.css";

function Card(props) {
    // style=
  return (
    <div className="cardComponent">
      <div className="cardTitle">{props.data.title}</div>
    </div>
  );
}

export default Card;
