import { InfoNameBlockEl, InfoBoxEl } from "entities/Patient";

import {} from "./Info.styled";

interface IInfo {}

export const InfoEl: React.FC<IInfo> = () => {
  return (
    <>
      <InfoNameBlockEl />

      <InfoBoxEl />
    </>
  );
};
