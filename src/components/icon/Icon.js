import "./Icon.css";
export default function Icon({
  size = 20,
  name,
  color = "var(--primary-text-color-100)",
}) {
  return (
    <svg height={size} width={size} role="img" aria-label={name} fill={color}>
      <use href={`/icons/sprite.svg#icon-${name}`}></use>
    </svg>
  );
}
