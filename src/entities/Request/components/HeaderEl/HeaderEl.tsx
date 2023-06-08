import { useSaveNewRequest } from "entities/Request";
import { useClearPatient } from "entities/Patient";
import {
  useAppSelector,
  useAppNavigate,
  Button as SaveBtn,
  Button as CloseBtn,
  Icon,
} from "shared";

import { Header, RequestNumber, HeaderTitle } from "./HeaderEl.styled";

export const HeaderEl: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { saveNewRequest, saveReqBtnDisabled } = useSaveNewRequest();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    navigate("/desktop");
  };

  return (
    <Header>
      <HeaderTitle>
        Neue Bestellung <RequestNumber>№{requestNumber}</RequestNumber>
      </HeaderTitle>

      <SaveBtn
        id="saveNeuRequestBtn"
        background="blue"
        height="72px"
        paddingRight="44px"
        paddingLeft="44px"
        marginRight="24px"
        disabled={saveReqBtnDisabled}
        onClick={saveNewRequest}
      >
        Speichern
      </SaveBtn>

      <CloseBtn
        id="closeNeuRequestBtn"
        width="72px"
        height="72px"
        background="red"
        onClick={handleCloseBtn}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </Header>
  );
};
