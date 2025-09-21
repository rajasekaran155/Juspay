import Icon from "../icon/Icon";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar({ sectionName, listItems, level = 0 }) {
  const navIconStyle = "var(--navigation-icon)";
  return (
    <div className="nav-items">
      {sectionName && <h4 className="section-name">{sectionName}</h4>}
      {listItems.map((item, index) => {
        const style = { marginLeft: `${level * 50}px` };
        return (
          <>
            <NavLink to={item.routePath ? item.routePath : ""} key={index}>
              <div className="item-content" style={style}>
                {item.children &&
                  (item.children?.length > 0 ? (
                    <Icon name="ArrowLineDown" color={navIconStyle} />
                  ) : (
                    <Icon name="ArrowLineRight" color={navIconStyle} />
                  ))}
                {item.iconName && <Icon name={item.iconName} />}
                <span>{item.itemName}</span>
              </div>
            </NavLink>
            {item.children && (
              <Navbar listItems={item.children} level={level + 1} />
            )}
          </>
        );
      })}
    </div>
  );
}
