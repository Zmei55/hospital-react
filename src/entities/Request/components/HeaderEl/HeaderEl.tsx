import { useSaveNewRequest } from "entities/Request";
import { useClearPatient } from "entities/Patient";
import {
  useAppSelector,
  useAppNavigate,
  Button as SaveBtn,
  Button as CloseBtn,
  Icon,
  Spinner,
} from "shared";

import { Header, RequestNumber, HeaderTitle } from "./HeaderEl.styled";

export const HeaderEl: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { saveNewRequest, saveReqBtnDisabled, isLoading } = useSaveNewRequest();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    navigate("/desktop");
  };

  return (
    <Header>
      <HeaderTitle>
        Neuer Antrag <RequestNumber>№{requestNumber}</RequestNumber>
      </HeaderTitle>

      <SaveBtn
        id="saveNeuRequestBtn"
        background="blue"
        style={{
          width: "210px",
          height: "72px",
          marginRight: "24px",
        }}
        disabled={saveReqBtnDisabled}
        onClick={saveNewRequest}
      >
        {isLoading ? <Spinner /> : <span>Speichern</span>}
      </SaveBtn>

      <CloseBtn
        id="closeNeuRequestBtn"
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
