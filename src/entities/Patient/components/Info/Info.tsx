import { InfoNameBlock, InfoBox } from "entities/Patient";

import {} from "./Info.styled";

interface IInfo {}

export const Info: React.FC<IInfo> = () => {
  return (
    <>
      <InfoNameBlock />

      <InfoBox />
    </>
  );
};
