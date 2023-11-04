import { useTranslation } from "react-i18next";
import { Spinner } from "shared";

import { LoadContainer, Title } from "./Loading.styled";

export const Loading: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LoadContainer>
        <Title>{t("shared.loader")}</Title>
        <Spinner />
      </LoadContainer>
    </>
  );
};
