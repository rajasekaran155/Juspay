export default function Image({ size = 24, name }) {
  return (
    <img
      src={`/images/${name}.png`}
      aria-label={name}
      height={size}
      width={size}
    ></img>
  );
}
