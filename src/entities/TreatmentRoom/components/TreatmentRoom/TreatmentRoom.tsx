import { useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRequestsCount } from "entities/Request";
import { BigLinkButton, MediumLinkButton, SmallLinkButton } from "shared";

import { Container } from "./TreatmentRoom.styled";

export const TreatmentRoom: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { getRequestsCount } = useRequestsCount();
  return (
    <Container data-testid="treatment-room-page">
      {pathname === "/dashboard/treatment-room" ? (
        <>
          <BigLinkButton
            type="button"
            text={t("treatmentRoom.addRequest")}
            to="request"
            icon="create-document"
            data-testid="new-request-btn"
            onClick={getRequestsCount}
          />
          <MediumLinkButton
            type="button"
            text={t("treatmentRoom.findRequest")}
            to="find-request"
            icon="find-document"
            data-testid="find-request-btn"
          />
          <MediumLinkButton
            type="button"
            text={t("treatmentRoom.findContainer")}
            to="unknown-part"
            icon="find-test-tube"
            data-testid="find-containers-btn"
          />
          <SmallLinkButton
            type="button"
            text={t("treatmentRoom.documents")}
            to="unknown-part"
            icon="documents"
            data-testid="documents-btn"
          />
        </>
      ) : (
        <Outlet />
      )}
    </Container>
  );
};
