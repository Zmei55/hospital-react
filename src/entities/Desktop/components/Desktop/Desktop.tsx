import { useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRequestsCount } from "entities/Request";
import { useAppSelector, Icon } from "shared";

import {
  Container,
  LargeBtn,
  MediumBtn,
  SmallBtn,
  IconContainer,
  IconTitle,
} from "./Desktop.styled";

export const Desktop: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { getRequestsCount } = useRequestsCount();
  // const user = useAppSelector(state => state.auth.user);

  // getRequestsCount();

  return (
    <Container data-testid="desktop-page">
      {pathname === "/desktop" ? (
        <>
          {/* {user.roles && user.roles.includes("ADMIN") && <h1>ADMIN</h1>}
          {user.roles && user.roles.includes("USER") && (
            <>
              {user.workplaces &&
                user.workplaces.includes("TREATMENT_ROOM") && (
                  <h1>USER + TREATMENT_ROOM</h1>
                )}
            </>
          )} */}
          <LargeBtn
            to="request"
            data-testid="new-request-btn"
            onClick={getRequestsCount}
          >
            <IconContainer>
              <Icon icon="create-document" color="blue" size={140} />
              <IconTitle>{t("desktop.addRequest")}</IconTitle>
            </IconContainer>
          </LargeBtn>

          <MediumBtn to="find-request" data-testid="find-request-btn">
            <IconContainer>
              <Icon icon="find-document" color="blue" size={140} />
              <IconTitle>{t("desktop.findRequest")}</IconTitle>
            </IconContainer>
          </MediumBtn>

          <MediumBtn
            to="unknown-part"
            data-testid="find-containers-btn"
            // onClick={() => handleNavigate("/unknown-part")}
          >
            <IconContainer>
              <Icon icon="find-test-tube" color="blue" size={140} />
              <IconTitle>{t("desktop.findContainer")}</IconTitle>
            </IconContainer>
          </MediumBtn>

          <SmallBtn
            to="unknown-part"
            data-testid="documents-btn"
            // onClick={() => handleNavigate("/unknown-part")}
          >
            <IconContainer>
              <Icon icon="documents" color="blue" size={140} />
              <IconTitle>{t("desktop.documents")}</IconTitle>
            </IconContainer>
          </SmallBtn>
        </>
      ) : (
        <Outlet />
      )}
      {/* <LargeBtn data-testid="new-request-btn" onClick={handleNewRequest}> */}
      {/* <MediumBtn data-testid="find-request-btn" onClick={handleFindRequest}> */}
    </Container>
  );
};
