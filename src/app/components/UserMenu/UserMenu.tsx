import { useGetUserData } from "entities/User";
import { useLogOut } from "entities/Auth";
import { useAppSelector, TransparentBtn, IconGear } from "shared";

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

      <TransparentBtn type="button" width="72px" height="72px">
        <IconGear />
      </TransparentBtn>

      {isLoggedIn && (
        <TransparentBtn
          type="button"
          width="165px"
          height="72px"
          color="#EC312F"
          onClick={() => logout()}
        >
          Abmelden
        </TransparentBtn>
      )}
    </Container>
  );
};
