import { useTranslation } from "react-i18next";
import { ServiceModalEl, useToggleServicesModal } from "entities/Service";
import { useAppSelector, Icon } from "shared";

import { ModalBtn, ModalBtnTitle } from "./SearchEl.styled";

interface ISearch {}

export const SearchEl: React.FC<ISearch> = () => {
  const showModal = useAppSelector(state => state.services.modalService);
  const patient = useAppSelector(state => state.patients.patient);
  const { toggleServicesModal } = useToggleServicesModal();
  const { t } = useTranslation();

  return (
    <>
      <ModalBtn
        data-testid="add-services-btn"
        type="button"
        onClick={() => toggleServicesModal()}
        disabled={!patient}
      >
        <Icon icon="list-plus" size={48} />
        {!patient ? (
          <ModalBtnTitle>
            {t("service.service.service", { context: "BtnIsDisabled" })}
          </ModalBtnTitle>
        ) : (
          <ModalBtnTitle>
            {t("service.service.service", { context: "BtnIsActive" })}
          </ModalBtnTitle>
        )}
      </ModalBtn>

      {showModal && <ServiceModalEl />}
    </>
  );
};
