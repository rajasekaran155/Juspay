import "./ProgressBar.css";
export default function ProgressBar({ value }) {
  return (
    <div className="progress-bar-outer">
      <div className="progress-bar-inner" style={{ width: value }}></div>
    </div>
  );
}
