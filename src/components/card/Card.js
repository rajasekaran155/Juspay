import Icon from "../icon/Icon";
import "./Card.css";
export default function Card({ cardInfo }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: cardInfo.bgColor, color: cardInfo?.color }}
      onClick={() => cardInfo.clickHandler(cardInfo)}
    >
      <p className="card-name">{cardInfo.name}</p>
      <div className="card-description">
        <p className="card-value">{cardInfo.value}</p>
        <p className="card-percentage">
          {cardInfo.percentage > 0 && "+"}
          {cardInfo.percentage}%
          {cardInfo.percentage > 0 && (
            <Icon name="ArrowRise" color={cardInfo.color} />
          )}
          {cardInfo.percentage < 0 && (
            <Icon name="ArrowFall" color={cardInfo.color} />
          )}
        </p>
      </div>
    </div>
  );
}
