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
      </Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};
