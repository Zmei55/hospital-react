import { useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppTitle } from "app";
import { useAppSelector, BigLinkButton, MediumLinkButton } from "shared";

import { Container } from "./Dashboard.styled";

export const Dashboard: React.FC = () => {
  const { pathname } = useLocation();
  const { roles, workplaces } = useAppSelector(state => state.auth.user);
  const { handleAppTitle } = useAppTitle();
  const { t } = useTranslation();

  return (
    <Container data-testid="dashboard-page">
      {pathname === "/dashboard" ? (
        <>
          {roles && roles.includes("ADMIN") && (
            <BigLinkButton
              type="button"
              text={t("dashboard.admin")}
              to="admin"
              icon="identification-badge"
              data-testid="dashboard-admin-btn"
            />
          )}
          {roles && (
            <>
              <MediumLinkButton
                type="button"
                text={t("dashboard.treatmentRoom")}
                to="treatment-room"
                icon="test-tube"
                disabled={
                  !roles.includes("ADMIN") &&
                  !workplaces?.includes("TREATMENT_ROOM")
                }
                data-testid="dashboard-treatment-room-btn"
                onClick={() => handleAppTitle("TREATMENT_ROOM")}
              />
              <MediumLinkButton
                type="button"
                text={t("dashboard.reception")}
                to="treatment-room"
                icon="clipboard-text"
                disabled={!roles.includes("ADMIN")}
                data-testid="dashboard-treatment-room-btn"
              />
            </>
          )}
        </>
      ) : (
        <Outlet />
      )}
    </Container>
  );
};
