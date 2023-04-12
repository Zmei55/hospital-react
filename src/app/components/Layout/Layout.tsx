import { Outlet } from "react-router-dom";
import { WorkingPlace } from "entities/User";
import { useAppSelector, TransparentBtn, IconGear } from "shared";
import { useLogOut } from "entities/Auth";
// import { UserMenu } from 'components/UserMenu';

import { Header, Container, Body } from "./Layout.styled";

export const Layout: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const { name, station } = useAppSelector(state => state.auth.user);
  const [logout] = useLogOut();

  return (
    <>
      <Header>
        <WorkingPlace />
        {/* <UserMenu /> */}
        <Container>
          {isLoggedIn && (
            <div>
              <div>{name}</div>
              <div>{station}</div>
              <div></div>
            </div>
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
      </Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};
