import { useContext } from "react";
import { ThemeMode } from "../../contexts/mode";
import "./ProjectionsAndActuals.css";
export default function ProjectionsAndActuals() {
  const { theme } = useContext(ThemeMode);
  return (
    <div className="bar-chart">
      <p className="bar-chart-title">Projections vs Actuals</p>
      <svg>
        <use href={`/icons/sprite.svg#${theme}-Chart`}></use>
      </svg>
    </div>
  );
}
