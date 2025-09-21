import { useContext } from "react";
import "./RevenueChart.css";
import { ThemeMode } from "../../contexts/mode";
export default function RevenueChart() {
  const { theme } = useContext(ThemeMode);
  return (
    <div className="revenue-chart">
      <div style={{ display: "flex", gap: "16px" }}>
        <p className="revenue-chart-title">Revenue</p>
        <div className="revenue-chart-divider"></div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p
            className="revenue-chart-bullet"
            style={{ backgroundColor: "var(--current-week-bg-color)" }}
          ></p>
          <p>
            Current Week <span style={{ fontWeight: "600" }}>$58,211</span>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p
            className="revenue-chart-bullet"
            style={{ backgroundColor: "var(--previous-week-bg-color)" }}
          ></p>
          <p>
            Previous Week <span style={{ fontWeight: "600" }}>$68,768</span>
          </p>
        </div>
      </div>
      {theme === "light" && (
        <img
          src="/svgs/light-parabolic.svg"
          alt="revenue chart"
          width="435px"
        />
      )}
      {theme === "dark" && (
        <img src="/pngs/dark-parabolic.png" alt="revenue chart" width="430px" />
      )}
    </div>
  );
}
