import { useContext } from "react";
import "./TotalSales.css";
import { ThemeMode } from "../../contexts/mode";
import Icon from "../icon/Icon";
export default function TotalSales() {
  const salesData = [
    {
      title: "Direct",
      value: "$300.56",
      bgColor: "var(--direct-sales)",
    },
    {
      title: "Affilliate",
      value: "$135.18",
      bgColor: "var(--affilliate-sales)",
    },
    {
      title: "Sponsored",
      value: "$154.02",
      bgColor: "var(--sponsored-sales)",
    },
    {
      title: "E-mail",
      value: "$48.96",
      bgColor: "var(--email-sales)",
    },
  ];
  const { theme } = useContext(ThemeMode);
  return (
    <div className="total-sales">
      <p style={{ fontWeight: "600" }}>Total Sales</p>
      <div style={{ marginLeft: "25px" }}>
        <Icon name={`${theme}-total-sales`} size={"120px"} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {salesData.map((row, index) => (
          <div style={{ display: "flex", gap: "40px" }}>
            <div className="total-sales-info">
              <p
                className="total-sales-bullet"
                style={{ backgroundColor: row.bgColor }}
              ></p>
              <p>{row.title}</p>
            </div>
            <p>{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
