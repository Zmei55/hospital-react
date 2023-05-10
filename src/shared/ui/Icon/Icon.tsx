import icons from "../../icons/svgSprite.svg";

import {
  InheritSVG,
  WhiteSVG,
  BlueSVG,
  GreySVG,
  RedSVG,
  GreenSVG,
} from "./Icon.styled";

interface IIcon {
  icon: string;
  color?: "white" | "grey" | "blue" | "grey" | "green" | "red";
  size: number;
}

export const Icon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <>
      {color ? (
        <>
          {color === "white" && (
            <WhiteIcon icon={icon} size={size} color={color} />
          )}

          {color === "blue" && (
            <BlueIcon icon={icon} size={size} color={color} />
          )}

          {color === "grey" && (
            <GreyIcon icon={icon} size={size} color={color} />
          )}

          {color === "red" && <RedIcon icon={icon} size={size} color={color} />}

          {color === "green" && (
            <GreenIcon icon={icon} size={size} color={color} />
          )}
        </>
      ) : (
        <InheritIcon icon={icon} size={size} />
      )}
    </>
  );
};

const WhiteIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <WhiteSVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </WhiteSVG>
  );
};

const BlueIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <BlueSVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </BlueSVG>
  );
};

const GreyIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <GreySVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </GreySVG>
  );
};

const RedIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <RedSVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </RedSVG>
  );
};

const GreenIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <GreenSVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </GreenSVG>
  );
};

const InheritIcon: React.FC<IIcon> = ({ icon, color, size }) => {
  return (
    <InheritSVG width={size} height={size} fill={color}>
      <use href={`${icons}#${icon}`} />
    </InheritSVG>
  );
};
