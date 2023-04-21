import { IService } from "entities/Services";
import { Button as ResetBtn } from "shared";

import { TitleBox, Title } from "./ServicesTitleBox.styled";

interface IServicesTitleBox {
  savedServicesList: IService[];
  handleClearList: React.MouseEventHandler<HTMLButtonElement>;
}

export const ServicesTitleBox: React.FC<IServicesTitleBox> = ({
  savedServicesList,
  handleClearList,
}) => {
  return (
    <TitleBox>
      <Title>Services</Title>

      {savedServicesList.length > 0 && (
        <ResetBtn
          width="217px"
          height="48px"
          background="grey"
          onClick={handleClearList}
        >
          Stornieren
        </ResetBtn>
      )}
    </TitleBox>
  );
};
