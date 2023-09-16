import { useTranslation } from "react-i18next";

import { HeaderTitle } from "./WorkingPlace.styled";

export const WorkingPlace: React.FC = () => {
  const { t } = useTranslation();

  return <HeaderTitle>{t("layout.title")}</HeaderTitle>;
};
