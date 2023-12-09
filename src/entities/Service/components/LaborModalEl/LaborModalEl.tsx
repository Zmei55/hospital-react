import { useTranslation } from "react-i18next";
import { useHandleLaborChange, isCheckedDetail } from "entities/Service";
import {
  useAppSelector,
  Modal,
  Button as CloseBtn,
  Button as SaveBtn,
  Icon,
} from "shared";

import {
  Header,
  HeaderTitle,
  Form,
  Table,
  THead,
  THService,
  THLabor,
  TBody,
  TRBody,
  ServiceBox,
  ServiceCode,
  ServiceName,
  Radio,
  Label,
} from "./LaborModalEl.styled";

interface ILaborModalEl {
  toggleLaborModal: () => void;
}

export const LaborModalEl: React.FC<ILaborModalEl> = ({ toggleLaborModal }) => {
  const { handleLaborChange, saveDetails, detailsState } =
    useHandleLaborChange();
  const { t } = useTranslation();
  const services = useAppSelector(state => state.services.services);
  const labors = useAppSelector(state => state.services.labors);

  return (
    <>
      {services && (
        <Modal onClose={() => toggleLaborModal()}>
          <Header className="modal-labors-header">
            <HeaderTitle className="modal-labors-header-title">
              {t("service.implementer")}
            </HeaderTitle>

            <CloseBtn
              id="closeModalSerBtn"
              background="red"
              style={{
                width: "72px",
                height: "72px",
              }}
              onClick={() => toggleLaborModal()}
            >
              <Icon icon="cross" size={48} color="white" />
            </CloseBtn>
          </Header>

          <Form
            className="modal-labors-form"
            onSubmit={saveDetails}
            id="labors"
          >
            <Table className="modal-labors-table">
              <THead className="modal-labors-table-head">
                <THService>{t("service.service")}</THService>
                {labors &&
                  labors.map(labor => (
                    <THLabor key={labor._id}>{labor.name}</THLabor>
                  ))}
              </THead>

              <TBody className="modal-labors-table-body">
                {services.map(service => (
                  <TRBody key={service._id}>
                    <ServiceBox>
                      <ServiceCode>{service.code}</ServiceCode>
                      <ServiceName>{service.name}</ServiceName>
                    </ServiceBox>
                    {labors &&
                      labors.map(labor => (
                        <Radio key={labor._id}>
                          <Label>
                            <input
                              type="radio"
                              name={service._id.toString()}
                              value={labor._id}
                              onChange={handleLaborChange}
                              checked={isCheckedDetail(
                                service._id,
                                labor._id,
                                detailsState
                              )}
                              required
                            />
                          </Label>
                        </Radio>
                      ))}
                  </TRBody>
                ))}
              </TBody>

              <SaveBtn
                id="saveSelectedSerBtn"
                type="submit"
                form="labors"
                background="blue"
                style={{
                  width: "318px",
                  height: "72px",
                  marginLeft: "auto",
                  marginRight: "24px",
                }}
              >
                {t("shared.button.saveAndCancel")}
              </SaveBtn>
            </Table>
          </Form>
        </Modal>
      )}
    </>
  );
};
