import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppTitle } from "app";
import { useAppSelector, Button as BackBtn, Icon } from "shared";

import { Container, HeaderTitle } from "./WorkingPlace.styled";

export const WorkingPlace: React.FC = () => {
  const { pathname } = useLocation();
  const appTitle = useAppSelector(state => state.app.appTitle);
  const { t } = useTranslation();
  const { resetAppTitle } = useAppTitle();

  return (
    <Container>
      <HeaderTitle>{appTitle}</HeaderTitle>
      {pathname === "/dashboard/treatment-room" && (
        <Link to=".." style={{ textDecoration: "none" }}>
          <BackBtn
            background="transparent"
            style={{
              height: "72px",
              paddingRight: "44px",
              paddingLeft: "44px",
              color: "#115FFD",
              marginLeft: "24px",
            }}
            data-testid="back-btn"
            onClick={resetAppTitle}
          >
            <Icon icon="caret-left-bold" size={24} color="blue" />
            <span>{t("shared.button.back")}</span>
          </BackBtn>
        </Link>
      )}
    </Container>
  );
};
