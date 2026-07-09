import { Link } from "react-router";
import "./card.css";

type cardProps = {
  cardImg: string;
  cardCategory: string;
  cardName: string;
  cardLinkTo: string;
};

export function Card(props: cardProps) {
  return (
    <>
      <div className="game-card">
        <img src={props.cardImg} alt="Jogo" />
        <div className="game-content">
          <span className="category">{props.cardCategory}</span>

          <h3>{props.cardName}</h3>
          <Link to={props.cardLinkTo} className="card-button">
            Jogar
          </Link>
        </div>
      </div>
    </>
  );
}
