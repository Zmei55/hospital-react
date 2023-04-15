import { Outlet } from "react-router-dom";
import { WorkingPlace } from "entities/User";
import { UserMenu } from "app";

import { Header, Body } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <WorkingPlace />
        <UserMenu />
        {/* <Container>
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
        </Container> */}
      </Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};
