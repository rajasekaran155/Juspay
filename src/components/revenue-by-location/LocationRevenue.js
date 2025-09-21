import { useContext } from "react";
import { ThemeMode } from "../../contexts/mode";
import ProgressBar from "../progress-bar/ProgressBar";
import "./LocationRevenue.css";
export default function LocationRevenue() {
  const { theme } = useContext(ThemeMode);
  const locationRevenue = [
    {
      name: "New York",
      revenue: "72K",
      progressBarValue: "70%",
    },
    {
      name: "San Francisco",
      revenue: "39K",
      progressBarValue: "40%",
    },
    {
      name: "Sydney",
      revenue: "25K",
      progressBarValue: "50%",
    },
    {
      name: "Singapore",
      revenue: "61K",
      progressBarValue: "60%",
    },
  ];
  return (
    <div className="location-revenue">
      <p className="location-revenue-title">Revenue By Location</p>
      <img src={`pngs/${theme}-world-map.png`} alt="world map" width="144px" />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {locationRevenue.map((location) => (
          <div>
            <div className="location-revenue-info">
              <p>{location.name}</p>
              <p>{location.revenue}</p>
            </div>
            <ProgressBar value={location.progressBarValue} />
          </div>
        ))}
      </div>
    </div>
  );
}
