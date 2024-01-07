import { RouterProvider } from "react-router-dom";
import { router } from "../../../router";
import { Loading } from "shared";

import { Container } from "./App.styled";

export const App: React.FC = () => {
  return (
    <Container data-testid="app">
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Container>
  );
};
