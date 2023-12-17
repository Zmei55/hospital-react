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
          <Header data-testid="labors-modal-header">
            <HeaderTitle data-testid="labors-modal-header-title">
              {t("service.implementer")}
            </HeaderTitle>

            <CloseBtn
              data-testid="close-labor-modal-btn"
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
            data-testid="labors-modal-form"
            onSubmit={saveDetails}
            id="labors"
          >
            <Table data-testid="labors-modal-table">
              <THead data-testid="labors-modal-table-head">
                <THService>{t("service.service")}</THService>
                {labors &&
                  labors.map(labor => (
                    <THLabor
                      key={labor._id}
                      data-testid="labors-table-head-name"
                    >
                      {labor.name}
                    </THLabor>
                  ))}
              </THead>

              <TBody data-testid="labors-modal-table-body">
                {services.map(service => (
                  <TRBody data-testid="labors-table-body-row" key={service._id}>
                    <ServiceBox data-testid="labors-table-body-service-box">
                      <ServiceCode data-testid="labors-table-body-service-code">
                        {service.code}
                      </ServiceCode>
                      <ServiceName data-testid="labors-table-body-service-name">
                        {service.name}
                      </ServiceName>
                    </ServiceBox>
                    {labors &&
                      labors.map(labor => (
                        <Radio
                          key={labor._id}
                          data-testid="labors-table-body-radio-button"
                        >
                          <Label>
                            <input
                              type="radio"
                              data-testid="labors-table-body-radio-input"
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
                data-testid="save-selected-labors-btn"
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
