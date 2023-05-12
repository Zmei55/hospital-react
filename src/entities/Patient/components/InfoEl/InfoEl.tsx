import { InfoNameBlockEl, InfoBoxEl } from "entities/Patient";

import {} from "./InfoEl.styled";

interface IInfo {}

export const InfoEl: React.FC<IInfo> = () => {
  return (
    <>
      <InfoNameBlockEl />

      <InfoBoxEl />
    </>
  );
};
