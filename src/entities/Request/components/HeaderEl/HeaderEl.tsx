import { useTranslation } from "react-i18next";
import { useSaveNewRequest, useHandleCloseButton } from "entities/Request";
import {
  useAppSelector,
  Button as SaveBtn,
  Button as CloseBtn,
  Icon,
  Spinner,
} from "shared";

import { Header, RequestNumber, HeaderTitle } from "./HeaderEl.styled";

export const HeaderEl: React.FC = () => {
  const { saveNewRequest, saveReqBtnDisabled, isLoading } = useSaveNewRequest();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const { handleCloseBtn } = useHandleCloseButton();
  const { t } = useTranslation();

  return (
    <Header data-testid="new-request-header">
      <HeaderTitle>
        {t("newRequest.title")} <RequestNumber>№{requestNumber}</RequestNumber>
      </HeaderTitle>

      <SaveBtn
        data-testid="save-new-request-btn"
        background="blue"
        style={{
          width: "210px",
          height: "72px",
          marginRight: "24px",
        }}
        disabled={saveReqBtnDisabled}
        onClick={saveNewRequest}
      >
        {isLoading ? <Spinner /> : <span>{t("shared.button.save")}</span>}
      </SaveBtn>

      <CloseBtn
        data-testid="close-new-request-btn"
        background="red"
        style={{
          width: "72px",
          height: "72px",
        }}
        onClick={handleCloseBtn}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </Header>
  );
};
