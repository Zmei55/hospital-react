import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { WorkingPlace, UserMenu } from "entities/User";

import { Header, Body } from "./Layout.styled";

export const Layout: React.FC = () => {
  return (
    <>
      <Header data-testid="header">
        <WorkingPlace />

        <UserMenu />
      </Header>

      <Body data-testid="main">
        <Outlet />
      </Body>

      <Toaster position="top-right" />
    </>
  );
};
