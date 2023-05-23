import { useGetUserData } from "entities/User";
import { useLogOut } from "entities/Auth";
import {
  useAppSelector,
  Button as MenuBtn,
  Button as LogoutBtn,
  Icon,
} from "shared";

import { Container, UserBox, Name, Station } from "./UserMenu.styled";

export const UserMenu: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [logout] = useLogOut();
  const { name, stationToUpper } = useGetUserData();

  return (
    <Container>
      {isLoggedIn && (
        <UserBox>
          <Name>{name}</Name>
          <Station>{`${stationToUpper} Station, Krankenschwester`}</Station>
        </UserBox>
      )}

      <MenuBtn
        id="appMenuBtn"
        width="72px"
        height="72px"
        background="transparent"
        marginRight="24px"
      >
        <Icon icon="gear" size={48} color="blue" />
      </MenuBtn>

      {isLoggedIn && (
        <LogoutBtn
          id="logoutBtn"
          width="165px"
          height="72px"
          color="#EC312F"
          background="transparent"
          onClick={() => logout()}
        >
          Abmelden
        </LogoutBtn>
      )}
    </Container>
  );
};
