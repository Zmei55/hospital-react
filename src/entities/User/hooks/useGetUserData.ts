import { useTranslation } from "react-i18next";
import { useAppSelector } from "shared";

export const useGetUserData = () => {
  const { t } = useTranslation();
  const { name, workplace, position } = useAppSelector(
    state => state.auth.user
  );

  let station: string = "";
  let jobTitle: string = "";

  if (workplace) {
    switch (workplace.split("__")[0]) {
      case "SURGERY":
        station = t("user.station.surgery");
        break;

      default:
        break;
    }
  }

  if (position) {
    switch (position) {
      case "Krankenschwester" || "Nurse" || "Медицинская сестра":
        jobTitle = t("user.position.nurse");
        break;

      default:
        break;
    }
  }

  return { name, station, jobTitle };
};
