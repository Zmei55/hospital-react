import { useToggleMenuModal } from "entities/User";
import {
  useAppSelector,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
} from "shared";

import {
  Header,
  Title,
  Body,
  OptionalBlock,
  UserBlock,
  Key,
  Value,
} from "./MenuModal.styled";

export const MenuModal: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const user = useAppSelector(state => state.auth.user);
  const { toggleMenuModal } = useToggleMenuModal();

  return (
    <>
      <Header>
        <Title>Wählen Sie einen Patient aus</Title>

        {/* <FindBtn
          id="findSearchPatBtn"
          type="submit"
          form="findPatientList"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="blue"
        >
          Sparen
        </FindBtn> */}

        <CloseBtn
          id="closeSearchPatBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={toggleMenuModal}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

      <Body>
        <OptionalBlock>
          <h3>Sprache: " "</h3>
        </OptionalBlock>

        {isLoggedIn && (
          <UserBlock>
            <div>
              <Key>Vorname: </Key>
              <Value>{user.firstName}</Value>
            </div>

            <div>
              <Key>Nachname: </Key>
              <Value>{user.lastName}</Value>
            </div>

            <div>
              <Key>Station: </Key>
              <Value>{user.station}</Value>
            </div>
          </UserBlock>
        )}
      </Body>
    </>
  );
};
