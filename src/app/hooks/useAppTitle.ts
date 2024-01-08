import { useTranslation } from "react-i18next";
import { addAppTitle } from "app/redux";
import { useAppDispatch } from "shared";

type TContext = (context: "ADMIN" | "TREATMENT_ROOM" | null) => void;

export const useAppTitle = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // let appTitle = null;

  const handleAppTitle: TContext = context => {
    dispatch(addAppTitle(t("layout.title.title", { context: context })));
  };

  const resetAppTitle = () => {
    dispatch(addAppTitle(t("layout.title.title")));
  };

  // if (appTitle) dispatch(addAppTitle(t("layout.title.title", { context: context })));
  // console.log("appTitle: ", appTitle);

  return { handleAppTitle, resetAppTitle };
};
