import { useGetUserData } from "entities/User";
import { useLogOut } from "entities/Auth";
import { useAppSelector, Button, Icon } from "shared";

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

      <Button width="72px" height="72px" background="transparent">
        <Icon icon="gear" size={48} color="blue" />
      </Button>
      {/* <TransparentBtn type="button" width="72px" height="72px">
        <IconGear />
      </TransparentBtn> */}

      {isLoggedIn && (
        <Button
          width="165px"
          height="72px"
          color="red"
          background="transparent"
          onClick={() => logout()}
        >
          Abmelden
        </Button>
        // <TransparentBtn
        //   type="button"
        //   width="165px"
        //   height="72px"
        //   background="red"
        //   onClick={() => logout()}
        // >
        //   Abmelden
        // </TransparentBtn>
      )}
    </Container>
  );
};
