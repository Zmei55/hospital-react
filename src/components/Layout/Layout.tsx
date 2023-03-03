import { Outlet } from 'react-router-dom';
import { WorkingPlace } from 'components/WorkingPlace';
// import { UserMenu } from 'components/UserMenu';
import { Header, Body, Button, IconMainMenuBtn } from './Layout.styled';

export const Layout: React.FC = () => {
  return (
    <>
      <Header>
        <WorkingPlace />
        {/* <UserMenu /> */}
        <Button type="button">
          <IconMainMenuBtn />
        </Button>
      </Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};
