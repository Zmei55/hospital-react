import { useTranslation } from "react-i18next";

import { HeaderTitle } from "./WorkingPlace.styled";

export const WorkingPlace: React.FC = () => {
  const { t } = useTranslation();

  // return <HeaderTitle>АРМ «Behandlungsraum»</HeaderTitle>;
  return <HeaderTitle>{t("title")}</HeaderTitle>;
};
