import icons from "../../icons/svgSprite.svg";

interface IIcon {
  icon: string;
  color: "black" | "white" | "text" | "blue" | "grey" | "green" | "red";
  size: number;
}

export const Icon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <svg width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};
