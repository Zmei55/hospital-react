import { useTranslation } from "react-i18next";

export const useSexTranslation = () => {
  const { t } = useTranslation();

  const sexTranslation = (gender: string) => {
    if (gender === "MALE") return t("patient.MALE");
    if (gender === "FEMALE") return t("patient.FEMALE");
    if (gender === "DIVERSE") return t("patient.DIVERSE");
  };

  return { sexTranslation };
};
