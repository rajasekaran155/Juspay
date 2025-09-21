import Image from "../image/Image";
import Icon from "../icon/Icon";
import "./List.css";
export function List({ listName, listItems }) {
  return (
    <div className={`list ${listName}`}>
      <h4 className="list-name">{listName}</h4>
      {listItems.map((item) => (
        <div className="list-item">
          <div className="list-item-image-section">
            {item.isImage && <Image name={item.imageName} />}
            {item.isIcon && <Icon name={item.iconName} size={24} />}
            <div className="list-divider"></div>
          </div>
          <div className="list-item-content">
            <p className="list-item-content-title">{item.title}</p>
            {item.description && (
              <p className="list-item-content-description">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
